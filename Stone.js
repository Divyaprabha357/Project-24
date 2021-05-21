class Stone{
    constructor(x,y,width, height, angle){
        var options={
          'restitution':0.7,
          'friction':4,
          'density':1.0
        }  
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.angle = angle;
        
        World.add(world, this.body);
      }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill('black');
        stroke('white');
        rect(0, 0, this.width, this.height);
        pop();
      }
}