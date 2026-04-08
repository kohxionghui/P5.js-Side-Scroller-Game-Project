//© 2026 Koh Xiong Hui (https://github.com/kohxionghui)
//Particles Class Syntax
class Dusts {
	constructor(pos_x, pos_y, colour) {
		this.pos_x = pos_x + random(-10, 10);
		this.pos_y = pos_y;
		this.colour = colour;
		this.direction_x = random(-0.2, 0.2);
		this.direction_y = random(-1, -0.5);
		this.size = random(10, 20);
		this.alpha = 200;
	}
	draw() {
		fill(red(this.colour), green(this.colour), blue(this.colour), this.alpha);
		ellipse(this.pos_x, this.pos_y, this.size, this.size);
		this.pos_x += this.direction_x;
		this.pos_y += this.direction_y;
		this.alpha -= 10;
	}
}

class Emitter {
	constructor(pos_x, pos_y, colour) {
		this.pos_x = pos_x;
		this.pos_y = pos_y;
		this.colour = colour;
		this.particles = 0;
		this.dusts = [];
	}
	emit(particles, colour) {
		this.particles = particles;
		for (let i = 0; i < particles; i++) {
			this.dusts.push(new Dusts(this.pos_x, this.pos_y, colour));
		}
	}
	update() {
		for (let i = this.dusts.length - 1; i >= 0; i--) {
			this.dusts[i].draw();
			if (this.dusts[i].alpha <= 0) {
				this.dusts.splice(i, 1);
			}
		}
	}
}
