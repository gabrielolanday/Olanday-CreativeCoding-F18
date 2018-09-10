//line(x1,y1,x2,y2)
//rectangle(x,y,width,height)
//ellipse(centerX,centerY,width,height)
//triangle(x1,y1,x2,y2,x3,y3)
//point(x,y)

//line(2,2,80,40);
//rect(10,30,50,20);
//ellipse(15,70,30,30);
//triangle(60,60,75,75,45,75);
//point(80,80);

//variables: name and type ("datatype")

//integer: int - whole numbers (positive or negative)
//float: float - decimals
//boolean: boolean - true or false binary value (1 or 0)
//string: String - sequence of characters (capitalize)
//char: char - character

//int line_x1 = 20;
//int line_y1 = 30;
//float line_x2 = 60.6;
//float line_y2 = 80.4;

//line(line_x1,line_y1,line_x2,line_y2);

//String text = "hello";
//char mychar = 'a';

//print(100);
//println(text);
//println(mychar);

//size(x,y) - change window size
//size(1280,760);

//int R = 208;
//int G = 100;
//int B = 118;

//noFill(); //no color
//fill(R,G,B); //set color
//triangle(800,550,700,700,900,700);

//noStroke(); //no border on shape
//rect(300,300,500,200);

//stroke(0,150,0); //set border color
//strokeWeight(8); //border thickness
//ellipse(200,100,100,100);

//start complex shape
//draw shape vertex points
//beginShape();
//vertex(40,20);
//vertex(100,100);
//vertex(458,200);
//vertex(644,555);
//vertex(300,555);
//vertex(40,20);
//endShape(); //end complex shape

//processing runs in static mode by default. in active mode, the program runs in a loop
//SETUP - functions you may only want to run once
//  - window size
//  - background color
//  - declare variables
  
//DRAW - loops at 30fps
//int rectx1;
//int recty1;
//int rectw;
//int recth;

//void setup(){
//  size(1280,760);
//  background(0,0,0);
//  rectx1 = 50;
//  recty1 = 50;
//  rectw = 200;
//  recth = 200;
//}

//void draw(){
// rect(rectx1,recty1,rectw,recth); 
// rectx1 += 5;
// recty1 += 10;
//}
