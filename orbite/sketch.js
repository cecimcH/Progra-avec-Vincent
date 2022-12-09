function setup() { 								// put setup code here
	createCanvas(windowWidth,windowHeight); 	//création d'un fond qui prend tout l'écran	
	rectMode(CENTER);							//rectangle au centre de l'écran
}

function draw() { 					// put drawing code here
	
	background(0,255,255);			//bleu clair
	
	translate(width/2, height/2); 	//coin supérieur gauche du rectangle au milieu de l'écran
	push();
	rotate(millis()/750); 			//rotation du rectangle (un tour complet = 2PI), PI/4 = rectangle sur sa pointe
	fill(255,0,255);			 	//rose sympa
	rect(0,0,400,400); 				//dimension du rectangle
	pop();
	
	translate(300,0);
	push();
	rotate(millis()/500);			//millis tout seul = rotation super rapide
	fill(0,128,255);
	rect(0,0,100,100);
	pop();
	
	translate(-800,0);
	push();
	rotate(millis()/1000);
	fill(255,255,0);
	rect(0,0,300,300);
	pop(0);
}