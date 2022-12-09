function setup() {
  // put setup code here
	createCanvas (windowWidth, windowHeight);
	background (0);
	
}

function draw() {
  // put drawing code here
	background(0,255,255);
	rect(100,100,width - 2 * 100, height - 2 * 100);
	
	fill (0)
	textAlign(CENTER,CENTER);
	textSize(125);
	text("Hello Kitty",width/2,height/2);
	fill(255,0,255);
}

function windowResize(){
	resizeCanvas(windowWidth,windowHeight);
}