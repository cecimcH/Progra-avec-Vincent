function setup() { 								// put setup code here
	createCanvas(windowWidth,windowHeight); 	//création d'un fond qui prend tout l'écran	
	rectMode(CENTER);							//rectangle au centre de l'écran
}

function draw() { 					// put drawing code here
	
	background(125,25,175);				//fond mauve
	
	translate(width/2, height/2); 		//rect rose violet
	push();
	rotate(millis()/300); 			
	fill(255,40,225);			 		
	rect(50,25,200,250); 			
	pop();
	
	translate(450 ,0);					//rect bleu	
	push();
	rotate(millis()/600);			
	fill(0,128,227);
	rect(30,0,100,100);
	pop();
	
	translate(-950,0);					//rect orange
	push();
	rotate(millis()/400);
	fill(255,140,25);
	rect(15,55,450,200);
	pop(0);
	
	translate(250,200);					//rect vert foncé
	push();
	rotate(millis()/350);
	fill(25,180,94);
	rect(25,0,150,150);	
	pop();
	
	translate(525,-360); 				//rect vert clair
	push();
	rotate(millis()/250);
	fill(120,150,32);
	rect(26,50,75,700);
	pop();
	
		
	
	
	
	
	
}