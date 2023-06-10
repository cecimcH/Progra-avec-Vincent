//let chrismastimeY = 0;
//let chrismastimeX;


//function setup() {
  //createCanvas(windowWidth, windowHeight);
  //chrismastimeX = random(width)
//}

    //fill(255);
    //noStroke();
    //ellipse(chrismastimeX, chrismastimeY, 15, 15);
    //chrismastimeY = chrismastimeY + chrismastimeSPEED;      //FACON NUMERO 1

let chrismastimeSPEED = 1;
let Sings = [];   

function draw() {
  background(128, 208, 208);
  for(let cmpt = 0 ; cmpt < 100 ; cmpt ++)
  {
  Sings[cmpt].display();
  }                                                     	
 }

function setup(){
 createCanvas(windowWidth, windowHeight);   
 for(let cmpt = 0 ; cmpt < 100 ; cmpt ++){
 Sings.push(new MariaCarré());
}
}

class MariaCarré {
	constructor(){
        this.posX = random(width);
        this.posY = 0;
	}  
}
	
	
display(){
	 fill(255);
     noStroke();
     ellipse(this.posX, this.posY, 150, 150); 
     this.posY = this.posY + chrismastimeSPEED;
 }
     