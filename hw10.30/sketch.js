var myball;
var myball2;
var myball3;

function setup() {

	createCanvas(500,500);

	var cRed = color(255,0,0);
	var cGreen = color(0,255,0);
	var cBlue = color(0,0,255);

	myball = new Ball(250,250,1,2,50,cRed);
	myball2 = new Ball(125,125,3,2,20,cBlue);
	myball3 = new Ball(375,375,4,1,30,cGreen);
    
}

function draw() {

	background(150);

	myball.animate();
	myball2.animate();
	myball3.animate();

	myball.displayBall();
	myball2.displayBall();
	myball3.displayBall();
}

function Ball(xval, yval, vxval, vyval, size, thiscolor){

	this.x = xval;
	this.y = yval;
	this.xv = vxval;
	this.yv = vyval;
	this.size = size;
	this.color = thiscolor;

	this.animate = function(){
		this.x += this.xv;
		this.y += this.yv;

		if(this.x <= 0 || this.x >= width){
			this.xv *= -1;
		}
		if(this.y <= 0 || this.y >= height){
			this.yv *= -1;
		}
	}
	

	this.displayBall = function(){
		fill(this.color);
		ellipse(this.x,this.y,this.size,this.size);
	}
};

