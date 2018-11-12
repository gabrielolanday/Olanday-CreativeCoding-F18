class Rect{
	constructor(id, pos,sound,rgb){
		this.pos = pos
		this.sound = sound
		this.activeTime = 0
		this.active = false
		this.id = id
		
	}
	draw(){
		push()
			translate(this.pos.x,this.pos.y)
			if (this.active){
				fill(0)
			}else{
				fill(255)
			}
			rect(0,0,50,50)
		pop()
	}
	update(){
		this.activeTime++
	}
	play(){
		this.sound.play()
		this.activeTime=0
	}
	check(pos){
		if (pos.x>this.pos.x && pos.x<this.pos.x+50 &&  pos.y>this.pos.y && pos.y<this.pos.y+50){
			this.active =! this.active
		}
	}
	
}


var kick
var hihat
var snare
var kicks = []
var hihats = []
var snares = []
var scanCount = 0
function preload(){
	kick = loadSound("assets/kick.wav")
	hihat = loadSound("assets/hihat.wav")
	snare = loadSound("assets/snare.wav")
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	for(var i=0;i<16;i++){
		kicks.push(new Rect(i, createVector(60*i + 30,height/6),kick))
	}
	for(var i=0;i<16;i++){
		hihats.push(new Rect(i, createVector(60*i + 30,(3*height)/6),hihat))
	}
	for(var i=0;i<16;i++){
		snares.push(new Rect(i, createVector(60*i + 30,(5*height)/6),snare))
	}


}

function draw() {
	background(255)
	fill(0)
	push()
		textSize(20)
		text("'KICK'",480,height/12)
		text("'HI-HAT'",480,5*height/12)
		text("'SNARE'",480,9*height/12)
	pop()
	if (frameCount%10==0){
		scanCount++
		scanCount = scanCount % 16
		if (kicks[scanCount].active){
			kicks[scanCount].play()
		}
		if (hihats[scanCount].active){
			hihats[scanCount].play()
		}
		if (snares[scanCount].active){
			snares[scanCount].play()
		}
	}
	
	var x = 60 + (50*scanCount) + (10*(scanCount-1))
	push()
		stroke(0)
		line(x,0,x,height)
	pop()
	
	for(var i=0;i<16;i++){
		kicks[i].update()
		kicks[i].draw()
	}
	for(var i=0;i<16;i++){
		hihats[i].update()
		hihats[i].draw()
	}
	for(var i=0;i<16;i++){
		snares[i].update()
		snares[i].draw()
	}
}

function mousePressed(){
	for(var i=0;i<48;i++){
		kicks[i].check(createVector(mouseX,mouseY))
		hihats[i].check(createVector(mouseX,mouseY))
		snares[i].check(createVector(mouseX,mouseY))
	}
}