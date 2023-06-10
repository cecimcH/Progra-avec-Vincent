	
let snowFlakeSpeed = 1;
let flocons = [];   							//tableau pour faire autant de flocons que possible        

function setup(){
 	createCanvas(windowWidth, windowHeight);   
 
	for(let cmpt = 0 ; cmpt < 100 ; cmpt ++){
		flocons.push(new Flake());				//new = invoque le constructor
	}											//for = fait une boucle
}


function draw() {
	background(223, 115, 255);
	
  	for(let cmpt = 0 ; cmpt < 100 ; cmpt ++){
		flocons[cmpt].display(); 
	}	
}
		
class Flake {
	constructor(){
        this.posX = random(width);
        this.posY = random(height);
	}
}
    
display(){
	 fill(255);
     noStroke();
     ellipse(this.posX, this.posY, 15, 15); 
     this.posY = this.posY + snowFlakeSpeed;
 }
     	 