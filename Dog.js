class Dog{
    constructor(x,y){
    
      this.image = loadImage("images/dog_image.png");
      
    
    }
  
    
      
        display(){
           
            push();
           
           
            imageMode(CENTER);
            image(this.image,400,350);
            pop();
          }
  

  
}