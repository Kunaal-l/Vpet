//Create variables here
var food = 20;
var dog;
function preload()
{
  //load images here
 
}

function setup() {
	createCanvas(800, 700);
  dog = new Dog(200,200)
}


function draw() {  
  textSize(30)
 text("Food: "+ food, 600,50);
 

 dog.display();
 


 if(keyDown("space")) {
  food = food - 1
  }
  console.log(food);

  drawSprites();
  //add styles here


  if (food<1){
  end();
  }
}

//function eat(){
 // if(keyDown("space")) {
 // food = food - 1
 // }
//}
function end(){
  
  textSize(80);
    text("You are out of Food ", 50,200);
}


