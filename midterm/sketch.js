var travHead;
var eye;
var coaster;
var car;
var rocketship;

var lookX;
var lookY;

var backR;
var backG;
var backB;

var floorR;
var floorG;
var floorB;

function preload(){

	travHead = loadImage("assets/face-cc.png");
	eye = loadImage("assets/eye.png");
	coaster = loadImage("assets/coaster.png");
	car = loadImage("assets/car.png");
	rocketship = loadImage("assets/rocketship.png")
}

function setup() {
	createCanvas(800,800);
	imageMode(CENTER);
	frameRate(30);
}

function draw() {
	background(backR,backG,backB);
	if (frameCount < 300){
		backR = 24;
		backG = 18;
		backB = 53;
		floorR = 51;
		floorG = 26;
		floorB = 178;
		stars();
	} else if (frameCount >= 300){
		backR += 1;
		backG += 1;
		backB -= 1;
		floorR += 1;
		floorG += 1;
		floorB -= 1;
		if (backR >= 201){
			backR = 201;
		}
		if (backG >= 127){
			backG = 127;
		}
		if (backB <= 30){
			backB = 30;
		}
		if (floorR >= 110){
			floorR = 110;
		}
		if (floorG >= 65){
			floorG = 65;
		}
		if (floorB <= 7){
			floorB = 7;
		}
	}

	
	backdrop();

	lookX = map(mouseX,0,width,315,335);
	lookY = map(mouseY,0,height,281,291);
	push();
		translate(lookX,lookY);
		rotate(radians(frameCount)*4);
		image(eye,0,0);
	pop();
	push();
		translate(lookX+175,lookY);
		rotate(-radians(frameCount)*4);
		image(eye,0,0);
	pop();
}

function backdrop(){

	push();
		scale(0.28);
		image(coaster,1400,1000);
	pop();
	
	image(travHead,400,350);
	
	push();
		fill(floorR,floorG,floorB);
		rect(0,575,800,225);
	pop();
	
	push();
		scale(0.5);
		image(rocketship,200,1200);
	pop();

	push();
		scale(0.3);
		image(car,2000,2100);
	pop();
}

function star(myScale) {
	push();
	scale(myScale)
	beginShape();
	vertex(-14.7,-20);
	vertex(0,-65.2);
	vertex(14.7,-20);
	vertex(62.3,-20);
	vertex(23.8,8);
	vertex(38.5,53.3);
	vertex(0,25);
	vertex(-38.5,53.3);
	vertex(-23.8,8);
	vertex(-62.3,-20);
	vertex(-14.7,-20);
	endShape();
	pop();
}

function stars(){
	var starUpX;
	var starUpY
	push();
	
	for (i = 0; i <= 10; i++) {
		starUpX = random(0,800);
		starUpY = random(0,800);
		translate(starUpX,starUpY);
		star(0.1);		
	}
	pop();

}




