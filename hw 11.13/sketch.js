var exchange
var exrates = []
function preload(){
	exchange = loadJSON("https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01&base=USD&symbols=GBP")
}
function setup() {
	createCanvas(windowWidth,windowHeight)
	console.log(exchange.rates)
	
	var keys=  Object.keys(exchange.rates)
	for(var i=0;i<keys.length;i++){
		//console.log(exchange.rates[keys[i]].GBP)
		var obj = {
			date: keys[i],
			GBP: exchange.rates[keys[i]].GBP
		}
		exrates.push(obj)
	}

	
	exrates.sort(function(a,b){
		if (a.date>b.date){
			return 1
		}else{
			return -1
		}
	})
	console.log(exrates)
}
var xscale = 20

function draw() {

	background(255)
	viewArray = exrates.slice(parseInt(mouseX/9.85))
	line(100,0,100,500)
	line(100,500,windowWidth,500)
	text(viewArray[0].GBP,10,height-(viewArray[0].GBP)*1000)
	push()
		translate(80,250)
		rotate(-PI/2)
		text("1USD IN GBP",0,0)
	pop()
	text("DATE",50,525)
	beginShape()
		translate(100,0)
		for(i=0;i<viewArray.length;i++){
			push()
				translate(i*xscale,510)
				rotate(PI/2)
				text(viewArray[i].date.slice(5),0,0)
			pop()
			push()
				fill(0)
				ellipse(i*xscale,height-(viewArray[i].GBP)*1000,5,5)
			pop()
			vertex(i*xscale,height-(viewArray[i].GBP)*1000)
		}
	endShape()
}