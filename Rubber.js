class Rubber{
    constructor(x,y,radius){
        var options={
            restituion:0.3,
            friction:5,
            density:3
        }
        
        this.body = Matter.Bodies.circle(x,y,radius,options);
        this.radius = this.radius;

        World.add(world, this.body);
    }
     
    display(){
        var pos =this.body.position;
    
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill('Blue');
        stroke('black');
        ellipse(0, 0, this.radius);
        pop();
    }
}