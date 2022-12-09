function setup() { 								// put setup code here
	createCanvas(windowWidth,windowHeight); 	//création d'un fond qui prend tout l'écran	
	rectMode(CENTER);							//rectangle au centre de l'écran
	
}

function draw() { 					// put drawing code here
	
	background(0,0,0);				//fond noir
	
	translate(width/2, height/2); 	//coin supérieur gauche du rectangle au milieu de l'écran
	push();							//push et pop pour que chaque forme tourne independemment des autres
	rotate(millis()/60); 			//rotation du rectangle (un tour complet = 2PI), PI/4 = rectangle sur sa pointe
	fill(255,220,0);			 	//rayons du soleil
	rect(0,0,22,22);				//dimension du rectangle
	pop();
	
	translate(0,0);
	fill(255,220,0);				//jaune SOLEIL
	circle(0,0,25);
	
	translate(0,0);
	push();
	rotate(millis()/6500);			//millis tout seul = rotation super rapide
	let a = color ('tan');
	fill(a);						//tan MERCURE
	circle(30,30,7);
	pop();
	
	translate(0,0);
	push();
	rotate(millis()/6650);			//orange VENUS
	fill(255,125,0);				
	circle(50,50,9);
	pop(0);
	
	translate(0,0);
	push();
	rotate(millis()/6900);			//bleu TERRE
	fill(20,130,140);				
	circle(70,70,11);
	pop(0);
	
	translate(0,0);
	push();
	rotate(millis()/7250);			//rouge MARS
	fill(220,50,5);				
	circle(95,95,9);
	pop(0);
	
	translate(0,0);
	push();
	rotate(millis()/7750);			//sandybrown JUPITER		
	let b = color ('sandybrown');
	fill(b);
	circle(135,135,18);
	pop(0);
	
	translate(0,0);
	push();
	rotate(millis()/8200);			//auréole de Saturne
	let c = color ('wheat');
	fill(c);				
	rect(165,165,2,22);
	pop(0);
	
	translate(0,0);
	push();
	rotate(millis()/8200);			//wheat SATURNE
	fill(c);				
	circle(165,165,15);
	pop(0);
	
	translate(0,0);
	push();
	rotate(millis()/8900);			//auréole d'Uranus
	fill(80,155,160);				
	rect(195,195,2,19);
	pop(0);
	
	
	translate(0,0);
	push();
	rotate(millis()/8900);			//bleu clair URANUS
	fill(80,155,160);				
	circle(195,195,13);
	pop(0);
	
	translate(0,0);
	push();
	rotate(millis()/9600);			//bleu foncé NEPTUNE
	fill(50,70,180);				
	circle(220,220,13);
	pop(0);
	
	translate(0,0);
	push();
	rotate(millis()/10500);			//blanc PLUTON
	fill(255);				
	circle(270,270,8);
	pop(0);
	
}