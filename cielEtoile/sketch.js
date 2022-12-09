
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(13,5,45);
								//etoile
	stroke(random (255), random (255), random (255));				//coloriée en blanc
	let counter = 0;
	while(counter<300){
		mouliStar(
			noise(1,millis()*0.00002, counter)*width, noise(2,millis()*0.00002, counter)*height, 10, 10);
		counter++;
		  }					
}

function mouliStar(x,y,w,h){	//fonction qui va dessiner des étoiles
	push();						//pour que mes étoiles se créent par rapport à l'écran et non l'une par rapport à l'autre
	translate(x,y);
	if(frameCount%5==0){		//est ce que ce truc la est égal a ce truc la, "if" pose une question, condition
		line(-w/2,0,w/2,0); 	//x point 1, y pt 1, x pt 2, y pt 2
	}else{
		line(0,-h/2,0,h/2);
	}
	pop();
}	