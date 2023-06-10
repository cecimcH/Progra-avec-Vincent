function setup() {
    
	createCanvas(windowWidth,windowHeight); 	//prend tout l'écran

}

function draw() {
  
	background(0);						//noir
	translate(width/2, height/2); 		//centre = milieu de l'écran
	
	fill(255);							//blanc
  	circle(0,0,80);						//x, y, taille
	
	push();								//push et pop permettent 										d'isoler un élément pour que          							 la rotation n'applique qu'à 									 lui 
	rotate(millis()/600); 				//rotation à telle vitesse
	fill(255,255,0);					//jaune
	rect(100,-100,80,250); 				//x, y, largeur, hauteur
	pop();
	
	
	translate(-150,-50);				//permet de déplacer 											l'élément
	let c = color ('magenta');			//magenta
	fill(c);
	noStroke();							//enlever contour noir
	triangle(150,300,300,150,450,300); 	//x1, y1, x2, y2, x3, y3

}