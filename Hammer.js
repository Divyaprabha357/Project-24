class Hammer{
    constructor(x,y, width, height){
      var options={
          restituion:0.5,
          friction:1.0,
          density:4
      }
       this.body = Bodies.rectangle(x, y, width, height, options);
       this.width = width;
       this.height = height;
        
       World.add(world, this.body);
    }

    display(){

        this.body.position.x = mouseX;
        this.body.position.y = mouseY;

        var pos =this.body.position;
    
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(rgb(225, 125, 0));
        stroke('white');
        rect(0, 0, this.width, this.height);
        pop();
    }
}