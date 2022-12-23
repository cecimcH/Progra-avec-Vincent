let degwade;

var x, y;

function setup() {
 	createCanvas(windowWidth,windowHeight);	
	
	degwade = linearGradiant(width, height, 240, 40, 50, 50, 255, 255);
	
	x = -2000; 		//position en largeur
    y = height / 8; //position en hauteur
}

function draw() {
  	background(255);
	
	image(degwade,0,0,width,height);
	
	translate(width/2, height/2); //coin supérieur gauche du rectangle au milieu de l'écran
	
	push();				//visage
	translate(-90,-20);
	fill(250,225,200);
	rect(0,0,180,120);
	pop();
	
	push();				//barbe
	translate(-90,75);
	fill(255);
	rect(0,0,180,120);
	pop();
	
	push();				//blanc g
	translate(-70,0);
	fill(255);
	rect(0,0,50,80);
	pop();
	
	push();				//blanc d
	translate(20,0);
	fill(255);
	rect(0,0,50,80);
	pop();
	
    push();				//pupille g
	translate(-60,60);
	fill(0);
	rect(0,0,30,20);
	pop();
    
	push();				//bb blanc g
	translate(-50,70);
	fill(255);
	rect(0,0,10,10);
	pop();
	
	push();				//pupille d
    translate(30,60);
	fill(0);
	rect(0,0,30,20);
	pop();
    
	push();				//bb blanc d
	translate(40,70);
	fill(255);
	rect(0,0,10,10);
	pop();
	
	push();				//nez
	translate(-20,75);
	fill(250,225,200);
	rect(0,0,40,30);
	pop();
	
	push();				//chapeau
	translate(0,-190);
	fill(255,0,0);
	triangle(0,0,100,20,20,90);
	pop();
	
	push();				//chapeau r
	translate(0,0);
	fill(255,0,0);
	triangle(-90,-40,0,-190,90,-40);
	pop()
	
	push();				//chapeau b
	translate(-100,-40);
	fill(255);
	rect(0,0,200,30);
	pop();
	
	push();				//boule chapeau
	fill(255);
	circle(100,-160,50);
	pop();
					
	//textAlign(CENTER, CENTER);
	
	push();
	fill(255);
  	textSize(150);
  	textStyle(ITALIC);	text("Joyeuses fêtes !", x, y);
	pop();
  
  x = x - 6 ; 		// Moving up at a constant speed
  
  if (x < -2000) { 	// Reset to the left
    x = width;
  }
}

function linearGradiant(w, h, b1, v1, r1, b2, v2, r2){
	
	let graphic = createGraphics(w, h);
	
	for(let compteur = 0; compteur < height; compteur++){ 
		let blue = map(compteur, 0, h, b1, b2);
		let green = map(compteur, 0, h, v1, v2);
		let red = map(compteur, 0, h, r1, r2);
		graphic.stroke(blue, green, red); 
		graphic.line(0, compteur, w, compteur);
	}
	
	return graphic;
}
