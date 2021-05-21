class Sand{
    constructor(x,y,radius){
        var options={
            restitution:1.3,
            friction:6,
            density:2
        }
        this.body = Matter.Bodies.circle(x,y,8,options);
        this.radius = 8;

        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
    
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill('red');
        stroke('red');
        ellipse(0, 0, this.radius);
        pop();
    }
}