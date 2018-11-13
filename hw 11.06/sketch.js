class Rect{
	constructor(id,pos,godname,namelength){
		this.pos = pos
		this.id = id
		this.godname = godname
		this.namelength = namelength
	}
	draw(dist){
		push()
			translate(200+this.pos.x,this.pos.y)
			fill(255)
			push()
				noFill()
				stroke(255)
				rect(0,0,50,(this.namelength*100))
			pop()
			text(this.namelength,0,0)
			
			text(this.godname,-dist,550)
		pop()
	}
}

var gods
var god = []
function preload(){
	gods = loadJSON("assets/greek_gods.json")
}

function setup() {

	createCanvas(windowWidth,windowHeight)
	console.log(gods)
	rectMode(CENTER)

	for(var i=0; i<gods.greek_gods.length;i++){
		god.push(new Rect(i,createVector(i*60 + 80,height/2),gods.greek_gods[i],gods.greek_gods[i].length))
	}


}

function draw() {
	background(0)
	for(var i=0; i<gods.greek_gods.length;i++){
		god[i].draw(25)
	}
}

