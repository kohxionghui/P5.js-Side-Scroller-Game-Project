////© 2026 Koh Xiong Hui (https://github.com/kohxionghui)
//Scene Class Syntax
class Mountains {
	constructor(pos_x, pos_y, height, width, variant) {
		this.pos_x = pos_x;
		this.pos_y = pos_y;
		this.height = height;
		this.width = width;
		this.variant = variant;
	}
	draw() {
		if (this.variant === 1) {
			fill(160, 160, 130);
		} else if (this.variant === 2) {
			fill(155, 155, 120);
		} else {
			fill(180, 180, 150);
		}
		//mountain
		let x1 = this.pos_x - this.width / 2;
		let y1 = this.pos_y;
		let x2 = this.pos_x;
		let y2 = this.pos_y - this.height;
		let x3 = this.pos_x + this.width / 2;
		let y3 = this.pos_y;
		triangle(x1, y1, x2, y2, x3, y3);
		//snowcap
		if (this.variant !== 2) {
			let x1 = this.pos_x - this.width / 10;
			let y1 = this.pos_y - (this.height - this.height / 5);
			let x2 = this.pos_x;
			let y2 = this.pos_y - (this.height - this.height / 5) - this.height / 5;
			let x3 = this.pos_x + this.width / 10;
			let y3 = this.pos_y - (this.height - this.height / 5);
			fill(255);
			triangle(x1, y1, x2, y2, x3, y3);
		}
		fill(0, 0, 0, 0); //mountain anchor point
		ellipse(this.pos_x, this.pos_y, 5, 5);
	}
}

class Clouds {
	constructor(pos_x, pos_y, size) {
		this.pos_x = pos_x;
		this.pos_y = pos_y;
		this.size = size;
		this.variant_x1 = random(0, 10);
		this.variant_x2 = random(25, 35);
		this.variant_x3 = random(5, 15);
		this.variant_x4 = random(55, 65);
		this.variant_x5 = random(20, 30);
		this.variant_x6 = random(25, 35);
		this.variant_y1 = random(5, 15);
		this.variant_y2 = random(0, 10);
		this.variant_y3 = random(20, 30);
		this.variant_y4 = random(0, 10);
		this.variant_y5 = random(15, 25);
		this.variant_y6 = random(30, 40);
	}
	draw() {
		//group 1
		fill(200, 200, 150, 200);
		ellipse(
			this.pos_x + this.variant_x1,
			this.pos_y + this.variant_y1,
			this.size,
			this.size,
		); //variant shadow 1
		ellipse(
			this.pos_x - this.variant_x2,
			this.pos_y + this.variant_y2,
			this.size,
			this.size,
		); //variant shadow 2
		fill(255, 255, 200);
		ellipse(
			this.pos_x + this.variant_x1 - 10,
			this.pos_y + this.variant_y1 - 10,
			this.size,
			this.size,
		); //variant 1
		ellipse(
			this.pos_x - this.variant_x2 - 10,
			this.pos_y + this.variant_y2 - 10,
			this.size,
			this.size,
		); //variant 2
		//group 2
		fill(200, 200, 150, 200);
		ellipse(
			this.pos_x - this.variant_x3,
			this.pos_y - this.variant_y3,
			this.size,
			this.size,
		); //variant shadow 3
		fill(255, 255, 200);
		ellipse(
			this.pos_x - this.variant_x3 - 10,
			this.pos_y - this.variant_y3 - 10,
			this.size,
			this.size,
		); //variant 3
		//group 3
		fill(200, 200, 150, 200);
		ellipse(
			this.pos_x + this.variant_x4,
			this.pos_y + this.variant_y4,
			this.size,
			this.size,
		); //variant shadow 4
		ellipse(
			this.pos_x + this.variant_x5,
			this.pos_y - this.variant_y5,
			this.size,
			this.size,
		); //variant shadow 5
		fill(255, 255, 200);
		ellipse(
			this.pos_x + this.variant_x4 - 10,
			this.pos_y + this.variant_y4 - 10,
			this.size,
			this.size,
		); //variant 4
		ellipse(
			this.pos_x + this.variant_x5 - 10,
			this.pos_y - this.variant_y5 - 10,
			this.size,
			this.size,
		); //variant 5
		//group 4
		fill(200, 200, 150, 200);
		ellipse(
			this.pos_x + this.variant_x6,
			this.pos_y - this.variant_y6,
			this.size,
			this.size,
		); //variant shadow 6
		fill(255, 255, 200);
		ellipse(
			this.pos_x + this.variant_x6 - 10,
			this.pos_y - this.variant_y6 - 10,
			this.size,
			this.size,
		); //variant 6
		//cloud anchor point
		fill(0, 0, 0, 0);
		ellipse(this.pos_x, this.pos_y, 5, 5);
		//cloud movement
		this.pos_x += direction;
		if (this.pos_x >= width * 6) {
			this.pos_x = -width / 1.5;
		}
	}
}

class Trees {
	constructor(pos_x, pos_y, height, width, leavesHeight) {
		this.pos_x = pos_x;
		this.pos_y = pos_y;
		this.height = height;
		this.width = width;
		this.leavesHeight = leavesHeight;
	}
	draw() {
		fill(139, 69, 19);
		rect(this.pos_x, this.pos_y - this.height / 2, this.width / 3, this.height);
		let x1_1 = this.pos_x - this.width / 1.5;
		let y1_1 = this.pos_y - this.height;
		let x2_1 = this.pos_x;
		let y2_1 = this.pos_y - this.height - this.leavesHeight * 40;
		let x3_1 = this.pos_x + this.width / 1.5;
		let y3_1 = this.pos_y - this.height;
		fill(134, 139, 34);
		triangle(x1_1, y1_1, x2_1, y2_1, x3_1, y3_1);
		let x1_2 = this.pos_x - this.width / 2;
		let y1_2 = this.pos_y - this.height - 25;
		let x2_2 = this.pos_x;
		let y2_2 = this.pos_y - this.height - 25 - this.leavesHeight * 40;
		let x3_2 = this.pos_x + this.width / 2;
		let y3_2 = this.pos_y - this.height - 25;
		triangle(x1_2, y1_2, x2_2, y2_2, x3_2, y3_2);
		let x1_3 = this.pos_x - this.width / 3;
		let y1_3 = this.pos_y - this.height - 50;
		let x2_3 = this.pos_x;
		let y2_3 = this.pos_y - this.height - 50 - this.leavesHeight * 40;
		let x3_3 = this.pos_x + this.width / 3;
		let y3_3 = this.pos_y - this.height - 50;
		triangle(x1_3, y1_3, x2_3, y2_3, x3_3, y3_3);
		fill(0, 0, 0, 0); //tree anchor point
		ellipse(this.pos_x, this.pos_y, 5, 5);
	}
}

class Canyons {
	constructor(pos_x, pos_y, width, depth) {
		this.pos_x = pos_x;
		this.pos_y = pos_y;
		this.width = width;
		this.depth = depth;
		this.variant_x1 = random(20, 45);
		this.variant_x2 = random(20, 45);
		this.variant_x3 = random(20, 45);
		this.variant_x4 = random(20, 45);
		this.variant_y1 = random(70, 80);
		this.variant_y2 = random(30, 55);
		this.variant_y3 = random(30, 55);
		this.variant_y4 = random(70, 80);
	}
	draw() {
		fill(80, 40, 0);
		beginShape();
		vertex(this.pos_x - 60, this.depth);
		vertex(this.pos_x - this.variant_x1, this.pos_y + this.variant_y1);
		vertex(this.pos_x - this.variant_x2, this.pos_y + this.variant_y2);
		vertex(this.pos_x, this.pos_y);
		vertex(this.pos_x + this.width, this.pos_y);
		vertex(
			this.pos_x + this.width + this.variant_x3,
			this.pos_y + this.variant_y3,
		);
		vertex(
			this.pos_x + this.width + this.variant_x4,
			this.pos_y + this.variant_y4,
		);
		vertex(this.pos_x + this.width + 60, this.depth);
		endShape(CLOSE);
		fill(0, 0, 0, 0); //canyon anchor point
		ellipse(this.pos_x, this.pos_y, 5, 5);
		//Character Falling into Canyon
		let cond1 = gameChar_y >= floorPos_y;
		let cond2 = gameChar_x - gameChar_width / 2 > this.pos_x;
		let cond3 = gameChar_x + gameChar_width / 2 < this.pos_x + this.width;
		let cond4 = gameChar_y >= floorPos_y + 100;
		if (cond1 && cond2 && cond3) {
			isPlummeting = true;
			isLeft = false;
			isRight = false;
			isJumping = true;
		} else if (cond4) {
			if (!dyingSoundPlayed) {
				dyingSound.play();
				dyingSoundPlayed = true;
			}
			isIntoCanyon = true;
			isLeft = false;
			isRight = false;
			isJumping = true;
		}
	}
}

class Windmills {
	constructor(pos_x, pos_y, width, height) {
		this.pos_x = pos_x;
		this.pos_y = pos_y;
		this.width = width;
		this.height = height;
	}
	draw() {
		fill(155, 50, 0); //windmill base
		rect(
			this.pos_x + this.width / 2,
			this.pos_y - this.height / 6,
			this.width,
			this.height / 3,
		);
		fill(180, 100, 50); //windmill door
		rect(
			this.pos_x + this.width / 2,
			this.pos_y - this.height / 8,
			this.width / 6,
			this.height / 4,
		);
		fill(155, 100, 0); //windmill roof
		beginShape();
		vertex(this.pos_x - 10, this.pos_y + 1 - this.height / 3);
		vertex(this.pos_x + 20, this.pos_y - this.height / 2);
		vertex(this.pos_x + 35, this.pos_y - this.height);
		vertex(this.pos_x + this.width - 35, this.pos_y - this.height);
		vertex(this.pos_x + this.width - 20, this.pos_y - this.height / 2);
		vertex(this.pos_x + this.width + 10, this.pos_y + 1 - this.height / 3);
		endShape(CLOSE);
		fill(220, 200, 120); //windmill window
		rect(
			this.pos_x + this.width / 2,
			this.pos_y - this.height / 1.7,
			this.width / 6,
			this.height / 6,
		);
		fill(150); //windmill blade center
		ellipse(this.pos_x + this.width / 2, this.pos_y - this.height + 10, 15, 15);
		//windmill blades
		push();
		translate(this.pos_x + this.width / 2, this.pos_y - this.height + 10);
		rotate((bladeSpinAngle += 0.5)); //windmill blade rotation
		fill(220, 180, 120, 240); //blade
		rect(-10, -38, 20, 44);
		rect(-38, 10, 44, 20);
		rect(10, 38, 20, 44);
		rect(38, -10, 44, 20);
		fill(165, 120, 120); //blade support
		rect(0, -30, 5, 60, 10);
		rect(-30, 0, 60, 5, 10);
		rect(0, 30, 5, 60, 10);
		rect(30, 0, 60, 5, 10);
		pop();
		fill(0, 0, 0, 0); //windmill anchor point
		ellipse(this.pos_x, this.pos_y, 5, 5);
	}
}

class Collectables {
	constructor(pos_x, pos_y, size, isFound) {
		this.pos_x = pos_x;
		this.pos_y = pos_y;
		this.size = size;
		this.isFound = isFound;
	}
	draw() {
		if (!this.isFound) {
			fill(235, 200, 0);
			ellipse(this.pos_x, this.pos_y - this.size / 1.5, this.size, this.size);
			fill(255, 215, 0);
			ellipse(
				this.pos_x,
				this.pos_y - this.size / 1.5,
				this.size - 10,
				this.size - 10,
			);
			fill(235, 200, 0);
			rect(
				this.pos_x,
				this.pos_y - this.size / 1.5,
				this.size / 10,
				this.size / 2,
				5,
			);
			fill(0, 0, 0, 0); //collectable anchor point
			ellipse(this.pos_x, this.pos_y, 5, 5);
		}

		//Character in Collectable Range
		let d = dist(gameChar_x, gameChar_y, this.pos_x, this.pos_y);
		if (d < 40 && !this.isFound) {
			collectSound.play();
			this.isFound = true;
			score++;
		}
	}
}

class Flagpoles {
	constructor(pos_x, pos_y, flagPos_y, height, width) {
		this.pos_x = pos_x;
		this.pos_y = pos_y;
		this.flagPos_y = flagPos_y;
		this.height = height;
		this.width = width;
	}
	draw() {
		fill(200);
		rect(this.pos_x, this.pos_y, this.width, this.height);
		fill(0, 0, 0, 0); //flagpole anchor point
		ellipse(this.pos_x, this.pos_y, 5, 5);
		//Character in Flagpole Range Animation
		if (winScreen && this.flagPos_y > floorPos_y - 200) {
			fill(200, 0, 0);
			this.flagPos_y -= 1;
		} else if (this.flagPos_y <= floorPos_y - 200) {
			fill(200, 0, 0);
			this.flagPos_y = floorPos_y - 200;
		} else {
			fill(255);
		}
		let x1 = this.pos_x;
		let y1 = this.flagPos_y + this.height / 5;
		let x2 = this.pos_x;
		let y2 = this.flagPos_y;
		let x3 = this.pos_x + 50 + sin(frameCount * 2) * 20;
		let y3 = this.flagPos_y + this.height / 5;
		triangle(x1, y1, x2, y2, x3, y3);
		//Character in Flagpole Range
		let cond1 = gameChar_y <= this.pos_y + this.height / 2;
		let cond2 = gameChar_x >= this.pos_x;
		if (cond1 && cond2) {
			winScreen = true;
		}
	}
}

class Platforms {
	constructor(pos_x, pos_y, range) {
		this.pos_x = pos_x;
		this.pos_y = pos_y;
		this.width = 100;
		this.range = range;
		this.startX = pos_x;
		this.speed = 0.5;
	}

	draw() {
		this.pos_x += this.speed;
		if (this.pos_x > this.startX + this.range || this.pos_x < this.startX) {
			this.speed *= -1;
		}
		fill(150, 75, 0);
		rect(this.pos_x, this.pos_y, this.width, 10);
		fill(0, 0, 0, 0); //platform anchor point
		ellipse(this.pos_x, this.pos_y, 5, 5);

		//Character on Platform
		let cond1 = gameChar_y >= this.pos_y - 10 && gameChar_y <= this.pos_y + 10;
		let cond2 = gameChar_x + gameChar_width / 4 >= this.pos_x - this.width / 2;
		let cond3 = gameChar_x - gameChar_width / 4 <= this.pos_x + this.width / 2;
		if (cond1 && cond2 && cond3 && jumpStrength <= 0) {
			isFalling = false;
			jumpCount = 0;
			jumpStrength = 0;
			gameChar_x += this.speed;
			gameChar_y = this.pos_y - 10;
		}
	}
	drawRailing() {
		fill(170, 95, 20);
		rect(this.pos_x, this.pos_y - 3, this.width, 5);
		fill(255, 170, 20); //platform rope
		beginShape();
		vertex(this.pos_x - this.width / 2 + 10, this.pos_y - 20);
		vertex(
			this.pos_x - this.width / 4 + 10,
			this.pos_y - 16 + sin(frameCount * 2) * 2,
		);
		vertex(this.pos_x, this.pos_y - 15 + sin(frameCount * 2) * 2);
		vertex(
			this.pos_x + this.width / 4 - 10,
			this.pos_y - 16 + sin(frameCount * 2) * 2,
		);
		vertex(this.pos_x + this.width / 2 - 10, this.pos_y - 20);
		vertex(this.pos_x + this.width / 2 - 10, this.pos_y - 22);
		vertex(
			this.pos_x + this.width / 4 - 10,
			this.pos_y - 18 + sin(frameCount * 2) * 2,
		);
		vertex(this.pos_x, this.pos_y - 17 + sin(frameCount * 2) * 2);
		vertex(
			this.pos_x - this.width / 4 + 10,
			this.pos_y - 18 + sin(frameCount * 2) * 2,
		);
		vertex(this.pos_x - this.width / 2 + 10, this.pos_y - 22);
		endShape(CLOSE);
		fill(120, 60, 0);
		rect(this.pos_x - this.width / 2 + 10, this.pos_y - 15, 10, 20); //platform support
		rect(this.pos_x + this.width / 2 - 10, this.pos_y - 15, 10, 20); //platform support
	}
}

class Enemies {
	constructor(pos_x, pos_y, range) {
		this.pos_x = pos_x;
		this.pos_y = pos_y;
		this.range = range;
		this.startX = pos_x;
		this.angle = 0;
		this.speed = 1;
		this.emitter = new Emitter(this.pos_x, this.pos_y, color(255, 150, 80));
	}
	draw() {
		//Dust particles when moving
		this.emitter.pos_x = this.pos_x;
		this.emitter.pos_y = this.pos_y + 15;
		if (frameCount % 10 === 0) {
			this.emitter.emit(2, color(255, 130, 60));
		}
		this.emitter.update();
		if (this.speed > 0) {
			push();
			translate(this.pos_x, this.pos_y - 10);
			rotate(this.angle - sin(frameCount * 10) * 20);
			fill(100, 0, 0); //Right Leg
			rect(-3, 13, 10, 20, 50);
			pop();
			push();
			translate(this.pos_x, this.pos_y - 10);
			rotate(this.angle + sin(frameCount * 10) * 20);
			fill(100, 0, 0); //Left Leg
			rect(2, 13, 10, 20, 50);
			pop();
			fill(200, 0, 0);
			let x1_1 = this.pos_x - 15;
			let y1_1 = this.pos_y;
			let x2_1 = this.pos_x;
			let y2_1 = this.pos_y - 30;
			let x3_1 = this.pos_x + 15;
			let y3_1 = this.pos_y;
			triangle(x1_1, y1_1, x2_1, y2_1, x3_1, y3_1);
			let x1_2 = this.pos_x - 15;
			let y1_2 = this.pos_y - 5;
			let x2_2 = this.pos_x;
			let y2_2 = this.pos_y - 45;
			let x3_2 = this.pos_x + 15;
			let y3_2 = this.pos_y - 5;
			triangle(x1_2, y1_2, x2_2, y2_2, x3_2, y3_2);
			fill(0);
			ellipse(this.pos_x - 1, this.pos_y - 5, 5, 5);
			ellipse(this.pos_x + 7, this.pos_y - 5, 5, 5);
			fill(0, 0, 0, 0); //enemy anchor point
			ellipse(this.pos_x, this.pos_y, 5, 5);
		} else if (this.speed < 0) {
			push();
			translate(this.pos_x, this.pos_y - 10);
			rotate(this.angle + sin(frameCount * 10) * 20);
			fill(100, 0, 0); //Right Leg
			rect(3, 13, 10, 20, 50);
			pop();
			push();
			translate(this.pos_x, this.pos_y - 10);
			rotate(this.angle - sin(frameCount * 10) * 20);
			fill(100, 0, 0); //Left Leg
			rect(-2, 13, 10, 20, 50);
			pop();
			fill(200, 0, 0);
			let x1_1 = this.pos_x - 15;
			let y1_1 = this.pos_y;
			let x2_1 = this.pos_x;
			let y2_1 = this.pos_y - 30;
			let x3_1 = this.pos_x + 15;
			let y3_1 = this.pos_y;
			triangle(x1_1, y1_1, x2_1, y2_1, x3_1, y3_1);
			let x1_2 = this.pos_x - 15;
			let y1_2 = this.pos_y - 5;
			let x2_2 = this.pos_x;
			let y2_2 = this.pos_y - 45;
			let x3_2 = this.pos_x + 15;
			let y3_2 = this.pos_y - 5;
			triangle(x1_2, y1_2, x2_2, y2_2, x3_2, y3_2);
			fill(0);
			ellipse(this.pos_x - 7, this.pos_y - 5, 5, 5);
			ellipse(this.pos_x + 1, this.pos_y - 5, 5, 5);
			fill(0, 0, 0, 0); //enemy anchor point
			ellipse(this.pos_x, this.pos_y, 5, 5);
		}
		this.pos_x += this.speed;
		if (this.pos_x > this.startX + this.range || this.pos_x < this.startX) {
			this.speed *= -1;
		}
		//Character in Enemy Range
		let d = dist(gameChar_x, gameChar_y, this.pos_x, this.pos_y);
		if (d < 40 && lives > 1 && !isDying) {
			if (!dyingSoundPlayed) {
				dyingSound.play();
				dyingSoundPlayed = true;
			}
			isDying = true;
			lives--;
		} else if (d < 40 && lives <= 1 && !isDying) {
			isDying = true;
			lives = 0;
		}
	}
}
