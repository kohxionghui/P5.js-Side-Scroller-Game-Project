//© 2026 Koh Xiong Hui (https://github.com/kohxionghui)
//Character Class Syntax
class Character {
	constructor(x, y, alpha) {
		this.x = x;
		this.y = y;
		this.angle = 0;
		this.alpha = alpha;
	}
	drawIsLeftFalling() {
		push();
		translate(this.x, this.y - 41);
		rotate(this.angle + 35);
		fill(255, 204, 153, this.alpha); //Right Hand
		rect(-10, 13, 10, 26, 50);
		fill(100, 0, 0, this.alpha); //Right Sleeve
		rect(-10, 8, 10, 16, 50);
		pop();
		push();
		translate(this.x, this.y - 20);
		rotate(this.angle + 25);
		fill(0, 0, 100, this.alpha); //Right Leg
		rect(-5, 13, 10, 26, 50);
		pop();
		push();
		translate(this.x, this.y - 20);
		rotate(this.angle - 25);
		fill(0, 0, 100, this.alpha); //Left Leg
		rect(0, 13, 10, 26, 50);
		pop();
		fill(128, 0, 0, this.alpha); //Body
		rect(this.x - 3, this.y - 32, 20, 36, 50);
		push();
		translate(this.x, this.y - 41);
		rotate(this.angle - 35);
		fill(255, 204, 153, this.alpha); //Left Hand
		rect(5, 13, 10, 26, 50);
		fill(100, 0, 0, this.alpha); //Left Sleeve
		rect(5, 8, 10, 16, 50);
		pop();
		fill(255, 204, 153, this.alpha); //Head
		ellipse(this.x - 6, this.y - 55, 25, 25);
		fill(0, 0, 0, this.alpha); //Left Eye
		ellipse(this.x - 13, this.y - 52, 3, 3);
		fill(0, 0, 0, this.alpha); //Right Eye
		ellipse(this.x - 6, this.y - 52, 3, 3);
		fill(0, 0, 0, this.alpha); //Mouth
		rect(this.x - 8, this.y - 46, 6, 2);
		fill(0, 0, 0, 0); //character anchor point
		ellipse(this.x, this.y, 5, 5);
	}
	drawIsRightFalling() {
		push();
		translate(this.x, this.y - 41);
		rotate(this.angle - 35);
		fill(255, 204, 153, this.alpha); //Left Hand
		rect(10, 13, 10, 26, 50);
		fill(100, 0, 0, this.alpha); //Left Sleeve
		rect(10, 8, 10, 16, 50);
		pop();
		push();
		translate(this.x, this.y - 20);
		rotate(this.angle - 25);
		fill(0, 0, 100, this.alpha); //Left Leg
		rect(5, 13, 10, 26, 50);
		pop();
		push();
		translate(this.x, this.y - 20);
		rotate(this.angle + 25);
		fill(0, 0, 100, this.alpha); //Right Leg
		rect(0, 13, 10, 26, 50);
		pop();
		fill(128, 0, 0, this.alpha); //Body
		rect(this.x + 2, this.y - 32, 20, 36, 50);
		push();
		translate(this.x, this.y - 41);
		rotate(this.angle + 35);
		fill(255, 204, 153, this.alpha); //Right Hand
		rect(-5, 13, 10, 26, 50);
		fill(100, 0, 0, this.alpha); //Right Sleeve
		rect(-5, 8, 10, 16, 50);
		pop();
		fill(255, 204, 153, this.alpha); //Head
		ellipse(this.x + 6, this.y - 55, 25, 25);
		fill(0, 0, 0, this.alpha); //Left Eye
		ellipse(this.x + 6, this.y - 52, 3, 3);
		fill(0, 0, 0, this.alpha); //Right Eye
		ellipse(this.x + 13, this.y - 52, 3, 3);
		fill(0, 0, 0, this.alpha); //Mouth
		rect(this.x + 8, this.y - 46, 6, 2);
		fill(0, 0, 0, 0); //character anchor point
		ellipse(this.x, this.y, 5, 5);
	}
	drawIsLeft() {
		push();
		translate(this.x, this.y - 50);
		rotate(this.angle + sin(frameCount * 10) * 20);
		fill(255, 204, 153, this.alpha); //Right Hand
		rect(-10, 13, 10, 26, 50);
		fill(100, 0, 0, this.alpha); //Right Sleeve
		rect(-10, 8, 10, 16, 50);
		pop();
		push();
		translate(this.x, this.y - 20);
		rotate(this.angle - sin(frameCount * 10) * 20);
		fill(0, 0, 100, this.alpha); //Right Leg
		rect(-5, 13, 10, 26, 50);
		pop();
		push();
		translate(this.x, this.y - 20);
		rotate(this.angle + sin(frameCount * 10) * 20);
		fill(0, 0, 100, this.alpha); //Left Leg
		rect(0, 13, 10, 26, 50);
		pop();
		fill(128, 0, 0, this.alpha); //Body
		rect(this.x - 3, this.y - 35, 20, 40, 50);
		push();
		translate(this.x, this.y - 50);
		rotate(this.angle - sin(frameCount * 10) * 20);
		fill(255, 204, 153, this.alpha); //Left Hand
		rect(5, 13, 10, 26, 50);
		fill(100, 0, 0, this.alpha); //Left Sleeve
		rect(5, 8, 10, 16, 50);
		pop();
		fill(255, 204, 153, this.alpha); //Head
		ellipse(this.x - 6, this.y - 63, 25, 25);
		fill(0, 0, 0, this.alpha); //Left Eye
		ellipse(this.x - 13, this.y - 65, 3, 3);
		fill(0, 0, 0, this.alpha); //Right Eye
		ellipse(this.x - 6, this.y - 65, 3, 3);
		fill(0, 0, 0, this.alpha); //Mouth
		rect(this.x - 8, this.y - 56, 6, 2);
		fill(0, 0, 0, 0); //character anchor point
		ellipse(this.x, this.y, 5, 5);
	}
	drawIsRight() {
		push();
		translate(this.x, this.y - 50);
		rotate(this.angle - sin(frameCount * 10) * 20);
		fill(255, 204, 153, this.alpha); //Right Hand
		rect(10, 13, 10, 26, 50);
		fill(100, 0, 0, this.alpha); //Right Sleeve
		rect(10, 8, 10, 16, 50);
		pop();
		push();
		translate(this.x, this.y - 20);
		rotate(this.angle + sin(frameCount * 10) * 20);
		fill(0, 0, 100, this.alpha); //Right Leg
		rect(5, 13, 10, 26, 50);
		pop();
		push();
		translate(this.x, this.y - 20);
		rotate(this.angle - sin(frameCount * 10) * 20);
		fill(0, 0, 100, this.alpha); //Left Leg
		rect(0, 13, 10, 26, 50);
		pop();
		fill(128, 0, 0, this.alpha); //Body
		rect(this.x + 2, this.y - 35, 20, 40, 50);
		push();
		translate(this.x, this.y - 50);
		rotate(this.angle + sin(frameCount * 10) * 20);
		fill(255, 204, 153, this.alpha); //Left Hand
		rect(-5, 13, 10, 26, 50);
		fill(100, 0, 0, this.alpha); //Left Sleeve
		rect(-5, 8, 10, 16, 50);
		pop();
		fill(255, 204, 153, this.alpha); //Head
		ellipse(this.x + 6, this.y - 63, 25, 25);
		fill(0, 0, 0, this.alpha); //Left Eye
		ellipse(this.x + 6, this.y - 65, 3, 3);
		fill(0, 0, 0, this.alpha); //Right Eye
		ellipse(this.x + 13, this.y - 65, 3, 3);
		fill(0, 0, 0, this.alpha); //Mouth
		rect(this.x + 8, this.y - 56, 6, 2);
		fill(0, 0, 0, 0); //character anchor point
		ellipse(this.x, this.y, 5, 5);
	}
	drawIsFalling() {
		push();
		translate(this.x, this.y - 41);
		rotate(this.angle - 15);
		fill(255, 204, 153, this.alpha); //Left Hand
		rect(15, 13, 10, 26, 50);
		fill(100, 0, 0, this.alpha); //Left Sleeve
		rect(15, 8, 10, 16, 50);
		pop();
		push();
		translate(this.x, this.y - 41);
		rotate(this.angle + 15);
		fill(255, 204, 153, this.alpha); //Right Hand
		rect(-15, 13, 10, 26, 50);
		fill(100, 0, 0, this.alpha); //Right Sleeve
		rect(-15, 8, 10, 16, 50);
		pop();
		push();
		translate(this.x, this.y - 20);
		rotate(this.angle - 20);
		fill(0, 0, 100, this.alpha); //Left Leg
		rect(5, 13, 10, 26, 50);
		pop();
		push();
		translate(this.x, this.y - 20);
		rotate(this.angle + 20);
		fill(0, 0, 100, this.alpha); //Right Leg
		rect(-5, 13, 10, 26, 50);
		pop();
		fill(128, 0, 0, this.alpha); //Body
		rect(this.x, this.y - 32, 26, 36, 50);
		fill(255, 204, 153, this.alpha); //Head
		ellipse(this.x, this.y - 55, 25, 25);
		fill(0, 0, 0, this.alpha); //Left Eye
		ellipse(this.x - 5, this.y - 52, 3, 3);
		fill(0, 0, 0, this.alpha); //Right Eye
		ellipse(this.x + 5, this.y - 52, 3, 3);
		fill(0, 0, 0, this.alpha); //Mouth
		rect(this.x, this.y - 46, 6, 2);
		fill(0, 0, 0, 0); //character anchor point
		ellipse(this.x, this.y, 5, 5);
	}
	drawIsPlummeting() {
		push();
		translate(this.x, this.y - 50);
		rotate((spinAngle += 10));
		fill(255, 204, 153); //Left Hand
		rect(15, 13, 10, 26, 50);
		fill(100, 0, 0); //Left Sleeve
		rect(15, 8, 10, 16, 50);
		fill(255, 204, 153); //Right Hand
		rect(-15, 13, 10, 26, 50);
		fill(100, 0, 0); //Right Sleeve
		rect(-15, 8, 10, 16, 50);
		fill(0, 0, 100); //Left Leg
		rect(7, 48, 10, 26, 50);
		fill(0, 0, 100); //Right Leg
		rect(-7, 48, 10, 26, 50);
		fill(128, 0, 0); //Body
		rect(0, 20, 26, 40, 50);
		fill(255, 204, 153); //Head
		ellipse(0, -8, 25, 25);
		fill(0); //Left Eye
		ellipse(-5, -10, 3, 3);
		fill(0); //Right Eye
		ellipse(5, -10, 3, 3);
		fill(0); //Mouth
		rect(0, -1, 6, 2);
		pop();
		fill(0, 0, 0, 0); //character anchor point
		ellipse(this.x, this.y, 5, 5);
	}
	drawIsStanding() {
		push();
		translate(this.x, this.y - 50);
		rotate(this.angle - 10);
		fill(255, 204, 153, this.alpha); //Left Hand
		rect(15, 13, 10, 26, 50);
		fill(100, 0, 0, this.alpha); //Left Sleeve
		rect(15, 8, 10, 16, 50);
		pop();
		push();
		translate(this.x, this.y - 50);
		rotate(this.angle + 10);
		fill(255, 204, 153, this.alpha); //Right Hand
		rect(-15, 13, 10, 26, 50);
		fill(100, 0, 0, this.alpha); //Right Sleeve
		rect(-15, 8, 10, 16, 50);
		pop();
		fill(0, 0, 100, this.alpha); //Left Leg
		rect(this.x + 7, this.y - 7, 10, 26, 50);
		fill(0, 0, 100, this.alpha); //Right Leg
		rect(this.x - 7, this.y - 7, 10, 26, 50);
		fill(128, 0, 0, this.alpha); //Body
		rect(this.x, this.y - 35, 26, 40, 50);
		fill(255, 204, 153, this.alpha); //Head
		ellipse(this.x, this.y - 63, 25, 25);
		fill(0, 0, 0, this.alpha); //Left Eye
		ellipse(this.x - 5, this.y - 65, 3, 3);
		fill(0, 0, 0, this.alpha); //Right Eye
		ellipse(this.x + 5, this.y - 65, 3, 3);
		fill(0, 0, 0, this.alpha); //Mouth
		rect(this.x, this.y - 56, 6, 2);
		fill(0, 0, 0, 0); //character anchor point
		ellipse(this.x, this.y, 5, 5);
	}
}
