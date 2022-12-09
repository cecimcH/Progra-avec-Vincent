let myFav;

function preload(){
	myFav = loadImage("DSC_0572.JPG");
}

function setup() {
  createCanvas(windowWidth,windowHeight)
}

function draw() {
	background(255,0,0);
	image(myFav,0,0,900,600);
}