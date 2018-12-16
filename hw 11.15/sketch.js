function setup() {
	createCanvas(1400, 800);
	background(100);
	var inp = createSelect("City");
	inp.position(20,20)
	inp.option("London")
	inp.option("New York")
	inp.option("Taipei")
	inp.changed(myInputEvent)

}
var apikey = "c9584c24c89a42ec33cbeb7b0355f66d"
function myInputEvent(){
	console.log(this.value())
	var city = this.value()
	var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=" + apikey

	loadJSON(url,dataReceived)
}

function dataReceived(data,city){
	background(100)
	console.log(data.name)
	push()
		translate(width/2,100)
		textSize(32)
		textAlign(CENTER)
		text(data.name,0,0)
	pop()
	push()
		translate(100,200)
		textSize(24)
		text("Weather: " + data.weather[0].description,0,0)
		text("Temperature: " + (round(data.main.temp - 273.15)) + "C",0,25)
	pop()
	push()
		translate(900,200)
		textSize(24)
		text("LOCATION",0,0)
		text("LATITUDE: " + data.coord.lat,0,25)
		text("LONGTUDE: " + data.coord.lon,0,50)
	pop()
	
	/*
	for(var i=0;i<data.sys.length;i++){
		console.log(data.sys[i])
		text(data.sys[i],100,100*i)
	}
	*/
	
}

function draw() {

}


