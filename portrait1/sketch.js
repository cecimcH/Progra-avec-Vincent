function setup() {
        
		createCanvas(600,600);
        background(0);
	
		fill(255);
        rect(150,200,300,400);
    
        fill(0);
        rect(175,250,50,75);
    
        fill(255);
        rect(200,295,20,30);
    
        fill(0);
        rect(375,250,50,75);
    
        fill(255);
        rect(380,295,20,30);   
	
		let c = color ('magenta');
		fill(c);
		noStroke();
		rect(100,150,50,450);
		rect(150,150,300,50);
		rect(450,150,50,450);
	
		fill(0);
		circle(300,340,25);
	
		rect(175,230,50,10);
	
		rect(375,230,50,10);
	
		fill(255);
		rect(125,295,25,75);
		rect(450,295,25,75);
	
		fill(0);
		triangle(340,400,340,370,365,385);
		triangle(340,425,340,395,365,410);
	
}

function draw() {
  // put drawing code here
}