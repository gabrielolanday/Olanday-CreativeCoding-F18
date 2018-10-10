// By Gabriel Olanday, Jason Wang, Alex Fife

var gridX;
var gridY;
var r;
var g;
var b = 0;
var color;
function setup() {
	createCanvas(600,600);
	rectMode(CENTER);
	color = true;
}

function draw() {
	r = map(mouseX,0,600,255,150);
	g = map(mouseY,0,600,255,150);

	background(r,0,g);
	
	noFill();
	stroke(r,g,0);
	strokeWeight(5);

	for(i=0;i<4;i++){
		gridY = map(i,0,3,75,525);
		for(j=0;j<4;j++){
			gridX = map(j,0,3,75,525);
			push();
				translate(gridX,gridY);
				grid();			
			pop();
		}
	}
	push();
	translate(50,0);
	manyhorizontalleaves();
	pop();
	push();
	translate(0, 50);
	manyverticalleaves();
	pop();
}

function grid() {
	rect(-37.5,-37.5,50,50,0,25,0,25);
	rect( 37.5,-37.5,50,50,25,0,25,0);
	rect(-37.5, 37.5,50,50,25,0,25,0);
	rect( 37.5, 37.5,50,50,0,25,0,25);
	rect(0,0,50,50);
	rect(0,0,25,50);
	rect(0,0,50,25);	
}

function leaf(x, y, w, h){
	rect(x, y, w, h, 0, 25, 0, 25);
}

function leafhorizontal(){
	rotate((PI*3)/4);
  	leaf(0,0,50,50);
}

function leaveshorizontal(){
	push();
	leafhorizontal();
	pop();
	push();
	translate(50,0);
	leafhorizontal();
	pop();
}

function horizontalleaves(){
	var xt = 0;
	for (var i = 0; i < 6; i++){
		push();
		translate(xt, 0);
		leaveshorizontal();
		pop();
		xt += 150;

	}

}

function manyhorizontalleaves(){
	var yt = 0;
	for (var j = 0; j < 6; j++){
		push();
		translate(0, yt);
		horizontalleaves();
		pop();
		yt += 150;
	}
}

function leafvertical(){
	rotate(PI/4);
	leaf(0,0,50,50);
}

function leavesvertical(){
	push();
	leafvertical();
	pop();
	push();
	translate(0,50);
	leafvertical();
	pop();

}

function verticalleaves(){
	var yt = 0;
	for (var k = 0; k < 6; k++){
		push();
		translate(0, yt);
		leavesvertical();
		pop();
		yt += 150;

	}

}

function manyverticalleaves(){
	var xt = 0;
	for (var l = 0; l < 6; l++){
		push();
		translate(xt, 0);
		verticalleaves();
		pop();
		xt += 150;
	}
}