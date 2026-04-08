//© 2026 Koh Xiong Hui (https://github.com/kohxionghui)
//Global variables
let dusts;
let emitter;
let clouds;
let trees;
let mountains;
let canyons;
let collectables;
let flagpoles;
let windmills;
let platforms;
let enemies;
let floorPos_y = 420;
let direction = 1;
let opacity = 0;
let loadScreenOpacity = 255;
let bladeSpinAngle = 0;
let cameraPosX;
let soundcounter = 0;
let soundsLoaded = false;

//Character variables
let character;
let gameChar_x = 100;
let gameChar_y = floorPos_y;
let gameChar_alpha = 255;
let gameChar_width = 30;
let jumpStrength;
let gravity = 2;
let jumpCount = 0;
const maxJumps = 1;
let angle = 0;
let spinAngle = 0;
let score = 0;
let lives = 3;
let isLeft = false;
let isRight = false;
let isFalling = false;
let isPlummeting = false;
let isJumping = false;
let isIntoCanyon = false;
let isDying = false;
let winScreen = false;
let loadScreen = false;
let startScreen = true;
let respawnEffect = false;
let respawnEffectTimer = 0;

//Sound variables
let jumpSound;
let walkSound;
let collectSound;
let winSound;
let loseSound;
let dyingSound;
let backgroundMusic;
let winSoundPlayed = false;
let loseSoundPlayed = false;
let dyingSoundPlayed = false;
let movingSoundPlayed = false;

function preload() {
	soundFormats("mp3", "wav");

	jumpSound = loadSound(
		"assets/[Jump] mixkit-boing-hit-sound-2894.wav",
		soundFilesLoaded,
	);
	jumpSound.setVolume(0.01);

	walkSound = loadSound(
		"assets/[Walking] mixkit-footsteps-in-the-forest-ground-1230.mp3",
		soundFilesLoaded,
	);
	walkSound.setVolume(0.1);

	collectSound = loadSound(
		"assets/[Collectable] mixkit-melodic-bonus-collect-1938.wav",
		soundFilesLoaded,
	);
	collectSound.setVolume(0.03);

	winSound = loadSound(
		"assets/[Win] mixkit-game-level-completed-2059.wav",
		soundFilesLoaded,
	);
	winSound.setVolume(0.05);

	loseSound = loadSound(
		"assets/[Lose] mixkit-negative-answer-lose-2032.wav",
		soundFilesLoaded,
	);
	loseSound.setVolume(0.1);

	dyingSound = loadSound(
		"assets/[Dying] mixkit-negative-guitar-tone-2324.wav",
		soundFilesLoaded,
	);
	dyingSound.setVolume(0.1);

	backgroundMusic = loadSound(
		"assets/[Background music] Slow Piano Background Music No Copyrights - Millennials Melody Originals.mp3",
		soundFilesLoaded,
	);
	backgroundMusic.setVolume(0.1);
}

function soundFilesLoaded() {
	soundcounter++;
	if (soundcounter > 6) {
		soundsLoaded = true;
	}
	print("Sound files loaded: " + soundcounter);
}

function setup() {
	createCanvas(1024, 576);
	rectMode(CENTER);
	angleMode(DEGREES);

	character = new Character(gameChar_x, gameChar_y, gameChar_alpha);

	mountains = [];
	mountains.push(new Mountains(550, floorPos_y, 280, 300, 0));
	mountains.push(new Mountains(450, floorPos_y, 220, 250, 1));
	mountains.push(new Mountains(650, floorPos_y, 130, 300, 2));
	mountains.push(new Mountains(1350, floorPos_y, 270, 300, 0));
	mountains.push(new Mountains(1250, floorPos_y, 200, 250, 1));

	clouds = [];
	for (let i = 0; i < 30; i++) {
		clouds.push(
			new Clouds(random(0, width * 6), random(70, 200), random(55, 70)),
		);
	}

	trees = [];
	for (let i = 0; i < 30; i++) {
		trees.push(
			new Trees(
				random((i * width) / 10 - 800, (i * width) / 12 + 800),
				floorPos_y,
				random(20, 30),
				random(45, 55),
				random(1, 2),
			),
		);
	}

	canyons = [];
	canyons.push(new Canyons(random(300, 350), floorPos_y, 100, height));
	canyons.push(new Canyons(random(700, 850), floorPos_y, 100, height));
	canyons.push(new Canyons(random(1200, 1400), floorPos_y, 100, height));
	canyons.push(new Canyons(1800, floorPos_y, 600, height));

	windmills = [];
	windmills.push(new Windmills(170, floorPos_y, 100, 100));
	windmills.push(new Windmills(1000, floorPos_y, 100, 100));

	collectables = [];
	collectables.push(new Collectables(random(450, 550), floorPos_y, 35, false));
	collectables.push(new Collectables(random(950, 1100), floorPos_y, 35, false));
	collectables.push(
		new Collectables(random(1500, 1600), floorPos_y, 35, false),
	);

	platforms = [];
	platforms.push(new Platforms(350, floorPos_y - 100, 200));
	platforms.push(new Platforms(850, floorPos_y - 100, 200));
	platforms.push(new Platforms(1850, floorPos_y - 100, 300));
	platforms.push(new Platforms(2100, floorPos_y - 200, 200));

	enemies = [];
	enemies.push(new Enemies(450, floorPos_y - 11, 150));
	enemies.push(new Enemies(950, floorPos_y - 11, 150));
	enemies.push(new Enemies(1500, floorPos_y - 11, 150));

	flagpoles = [];
	flagpoles.push(
		new Flagpoles(2500, floorPos_y - 100, floorPos_y - 50, 200, 10),
	);

	emitter = new Emitter(gameChar_x, gameChar_y, color(240, 160, 90));
}

function draw() {
	if (!soundsLoaded) {
		return;
	}
	if (!backgroundMusic.isLooping()) {
		backgroundMusic.loop();
	}
	walkSound.rate(2);

	cameraPosX = width / 2 - gameChar_x; //Side Scrolling

	background(255, 220, 120); //Sky colour

	noStroke();
	fill(220, 140, 70); //Ground
	rect(width / 2, floorPos_y + floorPos_y / 2, width, floorPos_y);
	fill(200, 120, 50); //Underground
	rect(width / 2, floorPos_y + floorPos_y / 2 + 30, width, floorPos_y + 30);

	//Mountains parallax
	push();
	translate(cameraPosX * 0.7, 0);
	//Mountains
	for (let i = 0; i < mountains.length; i++) {
		mountains[i].draw();
	}
	pop();

	//Clouds parallax
	push();
	translate(cameraPosX * 0.8, 0);
	//Clouds
	for (let i = 0; i < clouds.length; i++) {
		clouds[i].draw();
	}
	pop();

	//Trees parallax
	push();
	translate(cameraPosX * 0.9, 0);
	//Trees
	for (let i = 0; i < trees.length; i++) {
		trees[i].draw();
	}
	pop();

	push();
	translate(cameraPosX, 0);

	//Canyons
	for (let i = 0; i < canyons.length; i++) {
		canyons[i].draw();
	}

	//Windmills
	for (let i = 0; i < windmills.length; i++) {
		windmills[i].draw();
	}

	//Collectables
	for (let i = 0; i < collectables.length; i++) {
		collectables[i].draw();
	}

	//Platforms
	for (let i = 0; i < platforms.length; i++) {
		platforms[i].draw();
	}

	//Enemies
	for (let i = 0; i < enemies.length; i++) {
		enemies[i].draw();
	}

	//Flagpoles
	for (let i = 0; i < flagpoles.length; i++) {
		flagpoles[i].draw();
	}

	//Game character
	character.x = gameChar_x;
	character.y = gameChar_y;
	character.alpha = gameChar_alpha;
	emitter.pos_x = gameChar_x;
	emitter.pos_y = gameChar_y;
	//Dust particles when walking
	if (frameCount % 10 === 0 && (isLeft || isRight) && !isFalling) {
		emitter.emit(2, color(240, 160, 90));
	}
	emitter.update();

	if (isLeft && isFalling && !isDying) {
		character.drawIsLeftFalling();
	} else if (isRight && isFalling && !isDying) {
		character.drawIsRightFalling();
	} else if (isLeft && !isDying) {
		character.drawIsLeft();
	} else if (isRight && !isDying) {
		character.drawIsRight();
	} else if (isFalling || (isPlummeting && !isIntoCanyon)) {
		character.drawIsFalling();
	} else if (isPlummeting && isIntoCanyon) {
		character.drawIsPlummeting();
	} else {
		character.drawIsStanding();
	}

	//Platforms
	for (let i = 0; i < platforms.length; i++) {
		platforms[i].drawRailing();
	}

	pop();

	//Scoreboard
	push();
	fill(255);
	stroke(0);
	textSize(32);

	text(" Score: " + score, 0, 40);

	//Liveboard
	push();
	fill(255);
	stroke(0);
	textSize(32);

	text(" Lives: " + lives, 0, 80);

	//Win Screen and Lost Screen
	if (winScreen || lives <= 0) {
		if (!winSoundPlayed && winScreen) {
			winSound.play();
			winSoundPlayed = true;
		} else if (!loseSoundPlayed && lives <= 0) {
			loseSound.play();
			loseSoundPlayed = true;
		}
		if (opacity < 200) {
			opacity += 2;
		}
		fill(255, 255, 255, opacity);
		rect(width / 2, height / 2, width, height);
		fill(0);
		textAlign(CENTER);
		text(winScreen ? "You Win" : "Game Over", width / 2, height / 2);
		textSize(32);
		text(" Score: " + score, width / 2, height / 2 + 40);
	}

	//Start Screen
	if (loadScreen) {
		if (loadScreenOpacity > 0) {
			loadScreenOpacity -= 5;
		}
		if (loadScreenOpacity <= 0) {
			loadScreenOpacity = 0;
			loadScreen = false;
		}
		fill(255, 255, 255, loadScreenOpacity);
		rect(width / 2, height / 2, width, height);
		fill(0, 0, 0, loadScreenOpacity);
		textAlign(CENTER);
		textSize(32);
		noStroke();
		text("Loading...", width / 2, height / 2);
		textSize(16);
		text(
			"Press A and D Key to move Left and Right",
			width / 2,
			height / 2 + 20,
		);
		text("Press SPACEBAR Key to Jump", width / 2, height / 2 + 40);
	}
	if (startScreen) {
		fill(255, 255, 255);
		rect(width / 2, height / 2, width, height);
		fill(0);
		textAlign(CENTER);
		textSize(32);
		text("Press ENTER Key to Start", width / 2, height / 2);
		textSize(16);
		text(
			"Press A and D Key to move Left and Right",
			width / 2,
			height / 2 + 20,
		);
		text("Press SPACEBAR Key to Jump", width / 2, height / 2 + 40);
	}
	pop();

	//Character Movement Sound
	if (
		((isLeft && gameChar_x > 0) || (isRight && gameChar_x < 2520)) &&
		!isFalling &&
		!isDying &&
		!isPlummeting &&
		!isIntoCanyon
	) {
		if (!movingSoundPlayed) {
			walkSound.loop();
			movingSoundPlayed = true;
		}
	} else {
		if (movingSoundPlayed) {
			walkSound.stop();
			movingSoundPlayed = false;
		}
	}

	//Dying to enemy
	if (isDying) {
		isLeft = false;
		isRight = false;
		isJumping = true;
		gameChar_alpha -= 10;
	}
	//Respawn after dying
	if (gameChar_alpha <= 0 && lives > 0) {
		dyingSoundPlayed = false;
		gameChar_alpha = 255;
		gameChar_x = 100;
		gameChar_y = floorPos_y;
		isJumping = false;
		isDying = false;
		respawnEffect = true;
		respawnEffectTimer = 35;
	}
	//Respawn after falling into canyon
	if (isPlummeting && gameChar_y > height * 1.5) {
		if (lives > 1) {
			dyingSoundPlayed = false;
			isPlummeting = false;
			isIntoCanyon = false;
			isJumping = false;
			gameChar_y = floorPos_y;
			gameChar_x = 100;
			spinAngle = 0;
			respawnEffect = true;
			respawnEffectTimer = 35;
			lives--;
		} else {
			lives = 0;
		}
	}
	if (respawnEffect) {
		gameChar_alpha = 127.5 + 127.5 * sin(frameCount * 10);
		respawnEffectTimer--;
		if (respawnEffectTimer <= 0) {
			respawnEffect = false;
			gameChar_alpha = 255;
		}
	}
	//Plummeting into canyon
	if (isPlummeting) {
		gameChar_y += 10;
		isFalling = false;
		return;
	}
	// Smooth Jumping
	else if (gameChar_y < floorPos_y) {
		gameChar_y -= jumpStrength;
		jumpStrength -= gravity; //Gravity effect
		isFalling = true;
	} else if (gameChar_y >= floorPos_y) {
		isFalling = false;
		jumpCount = 0;
		jumpStrength = 20;
		gameChar_y = floorPos_y;
	}
	//Character Movement Left and Right and boundary
	if (isLeft && gameChar_x > 0) {
		gameChar_x -= 5;
	} else if (isRight && gameChar_x < 2520) {
		gameChar_x += 5;
	}
}

function keyPressed() {
	//Key pressed Character Move
	if (keyCode == 13 && startScreen) {
		startScreen = false;
		loadScreen = true;
		collectSound.play();
	}
	if (lives > 0 && !winScreen && !startScreen && !loadScreen) {
		if (keyCode == 68) {
			isRight = true;
		} else if (keyCode == 65) {
			isLeft = true;
		}
		//Jumping
		else if (keyCode == 32 && jumpCount < maxJumps && !isJumping) {
			jumpSound.play();
			emitter.emit(5, color(255, 240, 200));
			gameChar_y -= jumpStrength;
			isFalling = true;
			jumpCount++;
			jumpStrength = 20;
		}
	}
}

function keyReleased() {
	//Key released Character Move Back to Standing Position
	if (keyCode == 68) {
		isRight = false;
	} else if (keyCode == 65) {
		isLeft = false;
	}
	if (!isLeft && !isRight) {
		walkSound.stop();
		movingSoundPlayed = false;
	}
}
