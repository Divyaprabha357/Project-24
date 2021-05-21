
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  

 
  stone= new Stone(300, 670, 100, 100,PI/3);   
  rubber= new Rubber(470,670,12);
  iron=new Iron(400, 670,100, 70);
 
  sandP1=new Sand(550, 680, 2)
  sandP2=new Sand(555, 680, 2)
  sandP3=new Sand(560, 680, 2)
  sandP4=new Sand(565, 680, 2)
  sandP5=new Sand(200, 680, 2)
  sandP6=new Sand(205, 680, 2)
  sandP7=new Sand(210, 680, 2)
  hammer=new Hammer(20, 615, 150, 50);
  ground= new Plane(400, 690, 800, 20);


    
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightblue');
  
  

  
  stone.display();
  rubber.display();
  iron.display();
  sandP1.display();
  sandP2.display();
  sandP3.display();
  sandP4.display();
  sandP5.display();
  sandP6.display();
  sandP7.display();

  hammer.display();


  ground.display();




  
  drawSprites();
 
}



