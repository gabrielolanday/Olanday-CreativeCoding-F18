var fnstats;
var font;

var nameInp;

var statTitle = "YOUR STATS";
var wins = "N/A";
var matches = "N/A";
var kills = "N/A";
var winrate = "N/A";
var kd = "N/A";


var s4wins = "N/A";
var s4matches = "N/A";
var s4kills = "N/A";
var s4winrate = "N/A";
var s4kd = "N/A";
var s4dd = "N/A";
var s4dt = "N/A";
var s4kw = "N/A";

var s5wins = "N/A";
var s5matches = "N/A";
var s5kills = "N/A";
var s5winrate = "N/A";
var s5kd = "N/A";
var s5dd = "N/A";
var s5dt = "N/A";
var s5kw = "N/A";

var s6wins = "N/A";
var s6matches = "N/A";
var s6kills = "N/A";
var s6winrate = "N/A";
var s6kd = "N/A";
var s6dd = "N/A";
var s6dt = "N/A";
var s6kw = "N/A";



function preload(){
	font = loadFont("assets/fortnite.ttf");
}

function setup() {
	createCanvas(windowWidth,1200);
	
	
	console.log(fnstats);

	background(132,3,230);
	textFont(font);
	fill(255);

	textFont(font);
	textSize(120);
	textAlign(CENTER);
	text("FORTNITE",windowWidth/2,150);

	nameInp = createInput("Your Account Name");
	nameInp.position((windowWidth/2)-(nameInp.width/2),200);

	nameButton = createButton("Search");
	nameButton.position(nameInp.x + nameInp.width + 10, 200);
	nameButton.mousePressed(acccheck);
	
}
var nameVal;
function acccheck(){
	nameVal = nameInp.value();
	console.log(nameVal);
	if (nameVal == "KxngMars"){
		totalStats();
	}else if(nameVal == "Ninja"){
		ninjatStats();
	}else{
		var statTitle = "YOUR STATS";
		var wins = "N/A";
		var matches = "N/A";
		var kills = "N/A";
		var winrate = "N/A";
		var kd = "N/A";


		var s4wins = "N/A";
		var s4matches = "N/A";
		var s4kills = "N/A";
		var s4winrate = "N/A";
		var s4kd = "N/A";
		var s4dd = "N/A";
		var s4dt = "N/A";
		var s4kw = "N/A";

		var s5wins = "N/A";
		var s5matches = "N/A";
		var s5kills = "N/A";
		var s5winrate = "N/A";
		var s5kd = "N/A";
		var s5dd = "N/A";
		var s5dt = "N/A";
		var s5kw = "N/A";

		var s6wins = "N/A";
		var s6matches = "N/A";
		var s6kills = "N/A";
		var s6winrate = "N/A";
		var s6kd = "N/A";
		var s6dd = "N/A";
		var s6dt = "N/A";
		var s6kw = "N/A";
		stats();
	}
	
}

function stats(){
	background(132,3,230);
	textFont(font);
	textSize(120);
	textAlign(CENTER);
	text("FORTNITE",windowWidth/2,150);
	textAlign(LEFT);
	textSize(64);
	text(nameVal,(windowWidth/2)-600,280);
	//lifetime
	push();
		rectMode(CENTER);
		fill(43,43,43);
		rect(windowWidth/2,400,1200,200);
	pop();
	push();
		translate((windowWidth/2)-475,330);
		push();
			textSize(32);
			text(statTitle,-120,0);
		pop();
		//titles
		push();
			textSize(24);
			text("WINS",5,45);
			text("MATCHES PLAYED",205,45);
			text("KILLS",510,45);
			text("WIN%",740,45);
			textAlign(CENTER);
			text("K/D",390,125);
		pop();
		//numerical
		push();
			textSize(64);
			fill(3,159,250);
			text(wins,60,60);
			text(matches,355,60);
			text(kills,570,60);
			text(winrate,795,60);
			fill(3,219,82);
			textSize(84);
			text(kd,430,145);
		pop();
	pop();

	duoB = createButton("DUOS");
	duoB.position((windowWidth/2)-duoB.width,310);
	duoB.mousePressed(statCheckd);

	soloB = createButton("SOLO");
	soloB.position(duoB.x-soloB.width,310);
	soloB.mousePressed(statChecks);

	squadB = createButton("SQUADS");
	squadB.position((windowWidth/2),310);
	squadB.mousePressed(statChecksq);

	totalB = createButton("TOTALS");
	totalB.position(squadB.x+squadB.width,310);
	totalB.mousePressed(statCheckt);

	push();
		translate((windowWidth/2)-600,515);
		fill(43,43,43);
		rect(0,0,390,500);
		rect(405,0,390,500);
		rect(810,0,390,500);
	pop();
	//s4 box
	push();
		translate((windowWidth/2)-595,545);
		push();
			textSize(32);
			textAlign(CENTER);
			text("SEASON 4",195,0);
		pop();
		push();
			textSize(24);
			text("WINS",15,60);
			text("MATCHES",170,50);
			text("PLAYED",180,70);
			text("WIN%",15,150);
			text("KILLS",210,150);
			text("DAMAGE DEALT",15,240);
			text("DAMAGE TAKEN",175,240);
			text("K/D",15,360);
			text("KILLS/WIN",175,360);
			
		pop();
		push();
			textSize(50);
			fill(3,159,250);
			text(s4wins,75,70);
			text(s4matches,270,70);
			text(s4winrate,75,160);
			text(s4kills,270,160);

			fill(3,219,82);
			text(s4dd,15,300);
			text(s4dt,175,300);
			textSize(64);
			text(s4kd,50,430);
			text(s4kw,210,430);
		pop();
	pop();
	//s5 box
	push();
		translate((windowWidth/2)-190,545);
		push();
			textSize(32);
			textAlign(CENTER);
			text("SEASON 5",195,0);
		pop();
		push();
			textSize(24);
			text("WINS",15,60);
			text("MATCHES",170,50);
			text("PLAYED",180,70);
			text("WIN%",15,150);
			text("KILLS",210,150);
			text("DAMAGE DEALT",15,240);
			text("DAMAGE TAKEN",175,240);
			text("K/D",15,360);
			text("KILLS/WIN",175,360);
			
		pop();
		push();
			textSize(50);
			fill(3,159,250);
			text(s5wins,75,70);
			text(s5matches,270,70);
			text(s5winrate,75,160);
			text(s5kills,270,160);
			fill(3,219,82);
			text(s5dd,10,300);
			text(s5dt,200,300);
			textSize(64);
			text(s5kd,50,430);
			text(s5kw,210,430);
		pop();
	pop();
	//s6 box
	push();
		translate((windowWidth/2)+215,545);
		push();
			textSize(32);
			textAlign(CENTER);
			text("SEASON 6",195,0);
		pop();
		push();
			textSize(24);
			text("WINS",15,60);
			text("MATCHES",170,50);
			text("PLAYED",180,70);
			text("WIN%",15,150);
			text("KILLS",210,150);
			text("DAMAGE DEALT",15,240);
			text("DAMAGE TAKEN",175,240);
			text("K/D",15,360);
			text("KILLS/WIN",175,360);
			
		pop();
		push();
			textSize(50);
			fill(3,159,250);
			text(s6wins,75,70);
			text(s6matches,270,70);
			text(s6winrate,75,160);
			text(s4kills,270,160);
			fill(3,219,82);
			text(s6dd,15,300);
			text(s6dt,190,300);
			textSize(64);
			text(s6kd,50,430);
			text(s6kw,210,430);
		pop();
	pop();
}

function statCheckd(){
	if (nameVal == "KxngMars"){
		duoStats();
	}else if(nameVal == "Ninja"){
		ninjadStats();
	}
}
function statChecks(){
	if (nameVal == "KxngMars"){
		soloStats();
	}else if(nameVal == "Ninja"){
		ninjasStats();
	}
}
function statChecksq(){
	if (nameVal == "KxngMars"){
		squadStats();
	}else if(nameVal == "Ninja"){
		ninjasqStats();
	}
}
function statCheckt(){
	if (nameVal == "KxngMars"){
		totalStats();
	}else if (nameVal == "Ninja"){
		ninjatStats();
	}
}

function soloStats(){
	statTitle = "LIFETIME SOLO STATS";
	wins = "61";
	matches = "1,224";
	kills = "2,694";
	winrate = "5.00%";
	kd = "2.32";

	s4wins = "13";
	s4matches = "425";
	s4winrate = "3.05%";
	s4kills = "785";
	s4dd = "136,257";
	s4dt = "102,982";
	s4kd = "1.91";
	s4kw = "5.21";

	s5wins = "23";
	s5matches = "419";
	s5winrate = "5.50%";
	s5kills = "999";
	s5dd = "152,120";
	s5dt = "97,128";
	s5kd = "2.52";
	s5kw = "7.04";

	s6wins = "25";
	s6matches = "306";
	s6winrate = "8.20%";
	s6kills = "830";
	s6dd = "141,250";
	s6dt = "98,341";
	s6kd = "2.95";
	s6kw = "9.35";
	stats();
}

function duoStats(){
	statTitle = "LIFETIME DUO STATS";
	wins = "166";
	matches = "1,267";
	kills = "2,898";
	winrate = "13.10%";
	kd = "2.63";

	s4wins = "34";
	s4matches = "330";
	s4winrate = "10.30%";
	s4kills = "674";
	s4dd = "143,789";
	s4dt = "100,835";
	s4kd = "2.28";
	s4kw = "6.32";

	s5wins = "91";
	s5matches = "644";
	s5winrate = "14.10%";
	s5kills = "1,547";
	s5dd = "268,560";
	s5dt = "148,871";
	s5kd = "2.80";
	s5kw = "8.22";

	s6wins = "33";
	s6matches = "231";
	s6winrate = "14.30%";
	s6kills = "561";
	s6dd = "139,091";
	s6dt = "93,949";
	s6kd = "2.83";
	s6kw = "7.84";
	stats();
}

function squadStats(){
	statTitle = "LIFETIME SQUAD STATS";
	wins = "134";
	matches = "822";
	kills = "1,770";
	winrate = "16.30%";
	kd = "2.57";

	s4wins = "28";
	s4matches = "221";
	s4winrate = "12.67%";
	s4kills = "421";
	s4dd = "126,311";
	s4dt = "84,900";
	s4kd = "2.18";
	s4kw = "3.91";

	s5wins = "63";
	s5matches = "331";
	s5winrate = "19.00%";
	s5kills = "736";
	s5dd = "148,194";
	s5dt = "103,619";
	s5kd = "2.75";
	s5kw = "5.89";

	s6wins = "35";
	s6matches = "196";
	s6winrate = "17.90%";
	s6kills = "504";
	s6dd = "144,524";
	s6dt = "95,194";
	s6kd = "3.13";
	s6kw = "6.33";
	stats();
}

function totalStats(){
	statTitle = "LIFETIME STATS";
	wins = "361";
	matches = "3,313";
	kills = "7,362";
	winrate = "10.90%";
	kd = "2.49";

	s4wins = "75";
	s4matches = "976";
	s4winrate = "7.68%";
	s4kills = "1,880";
	s4dd = "376,357";
	s4dt = "228,717";
	s4kd = "2.09";
	s4kw = "5.15";

	s5wins = "177";
	s5matches = "1394";
	s5winrate = "12.70%";
	s5kills = "3282";
	s5dd = "444,120";
	s5dt = "309,947";
	s5kd = "2.70";
	s5kw = "7.05";

	s6wins = "93";
	s6matches = "733";
	s6winrate = "12.69%";
	s6kills = "1895";
	s6dd = "380,129";
	s6dt = "219,254";
	s6kd = "2.96";
	s6kw = "7.84";
	stats();
}

function ninjatStats(){
	statTitle = "LIFETIME STATS";
	wins = "4,829";
	matches = "13,135";
	kills = "92,305";
	winrate = "36.80%";
	kd = "11.11";

	s4wins = "N/A";
	s4matches = "N/A";
	s4winrate = "N/A";
	s4kills = "N/A";
	s4dd = "N/A";
	s4dt = "N/A";
	s4kd = "N/A";
	s4kw = "N/A";

	s5wins = "806";
	s5matches = "2,055";
	s5winrate = "39.22%";
	s5kills = "13,402";
	s5dd = "2,020,382";
	s5dt = "1,467,289";
	s5kd = "10.73";
	s5kw = "10.45";

	s6wins = "617";
	s6matches = "1,744";
	s6winrate = "35.38%";
	s6kills = "10,828";
	s6dd = "1,798,278";
	s6dt = "1,547,876";
	s6kd = "9.61";
	s6kw = "10.38";
	stats();
}

function ninjasqStats(){
	statTitle = "LIFETIME SQUAD STATS";
	wins = "1,350";
	matches = "3,875";
	kills = "25,584";
	winrate = "34.80%";
	kd = "10.13";

	s4wins = "N/A";
	s4matches = "N/A";
	s4winrate = "N/A";
	s4kills = "N/A";
	s4dd = "N/A";
	s4dt = "N/A";
	s4kd = "N/A";
	s4kw = "N/A";

	s5wins = "362";
	s5matches = "844";
	s5winrate = "42.90%";
	s5kills = "5,471";
	s5dd = "801,480";
	s5dt = "509,127";
	s5kd = "11.35";
	s5kw = "11.32";

	s6wins = "251";
	s6matches = "579";
	s6winrate = "43.40%";
	s6kills = "3,738";
	s6dd = "457,397";
	s6dt = "391,519";
	s6kd = "11.40";
	s6kw = "10.98";
	stats();
}

function ninjadStats(){
	statTitle = "LIFETIME DUO STATS";
	wins = "1,676";
	matches = "4,073";
	kills = "28,438";
	winrate = "41.10%";
	kd = "11.86";

	s4wins = "N/A";
	s4matches = "N/A";
	s4winrate = "N/A";
	s4kills = "N/A";
	s4dd = "N/A";
	s4dt = "N/A";
	s4kd = "N/A";
	s4kw = "N/A";

	s5wins = "210";
	s5matches = "603";
	s5winrate = "34.80%";
	s5kills = "3,625";
	s5dd = "453,125";
	s5dt = "298,017";
	s5kd = "9.22";
	s5kw = "10.65";

	s6wins = "150";
	s6matches = "429";
	s6winrate = "35.00%";
	s6kills = "2,686";
	s6dd = "343,194";
	s6dt = "239,766";
	s6kd = "9.63";
	s6kw = "10.78";
	stats();
}

function ninjasStats(){
	statTitle = "LIFETIME SOLO STATS";
	wins = "1,803";
	matches = "5,189";
	kills = "38,292";
	winrate = "34.70%";
	kd = "11.31";

	s4wins = "N/A";
	s4matches = "N/A";
	s4winrate = "N/A";
	s4kills = "N/A";
	s4dd = "N/A";
	s4dt = "N/A";
	s4kd = "N/A";
	s4kw = "N/A";

	s5wins = "234";
	s5matches = "608";
	s5winrate = "38.50%";
	s5kills = "4,306";
	s5dd = "557,444";
	s5dt = "402,140";
	s5kd = "11.51";
	s5kw = "15.12";

	s6wins = "216";
	s6matches = "736";
	s6winrate = "29.30%";
	s6kills = "4,404";
	s6dd = "551,128";
	s6dt = "387,519";
	s6kd = "8.47";
	s6kw = "11.06";
	stats();
}
