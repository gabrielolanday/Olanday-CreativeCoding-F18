var abc

function setup() {
	createCanvas(800,800);

	abc = createDiv("hello");
	abc.position(width/2,height/2);
	abc.style('font-size',32);
	
	
}

function draw(){
	background(255);
	var rot = map(mouseX,0,height,0,360);
	var red = map(mouseY,0,width,0,255);
	var col = color(red,0,0);
	
	abc.style('rotate',rot);

	abc.style('color',col);
	
	
}