class Plane{
  constructor(x,y,width,height) {
    var options = {
      isStatic: true,
      friction:10,

}
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
}
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill('yellow');
    stroke("yellow");
    rect(pos.x, pos.y, this.width, this.height);
}
}
