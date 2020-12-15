var helicopterIMG, helicopterSprite, packageSprite,packageIMG,package,ground;
var packageBody,ground,side1,side2,side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundSprite=createSprite(width/2, height-35,width,10);
	groundSprite.shapeColor=color(255)

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	var package_options = {
		'isStatic': true,
		"restitution": 0
	}
	package = Bodies.circle(width/2 , 200 , 5 , package_options);
	World.add(world,package);

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world,ground);

	side1 = new Container(width/2,645,200,20,{isStatic:true});
	side2 = new Container(300,600,20,100);
	side3 = new Container(500,600,20,100);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= package.position.x; 
  packageSprite.y= package.position.y;
  
  keyPressed();

  side1.display();
  side2.display();
  side3.display();
  drawSprites();
}

function keyPressed() {
  if(keyCode === DOWN_ARROW){
	Matter.Body.setStatic(package,false);
  }
}


