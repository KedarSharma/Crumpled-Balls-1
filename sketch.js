const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1x , b1y;
var state = 0;

function preload(){
  basketball = loadImage("basketball.png");
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	ball1 = new Paper(100,165);

	ground1 = new Ground(400,200,800,10);
	ground2 = new Ground(400,0,800,10);
	ground3 = new Ground(800,100,10,200);
	ground4 = new Ground(0,100,10,200);

	wall1 = new Wall(600,150,10,90);
	wall2 = new Wall(650,190,110,10);
	wall3 = new Wall(700,150,10,90);

	Engine.run(engine);
  
}


function draw() {

	background(0);

	if(state == 0){
		textSize(60);
		fill("blue");
		stroke("red");
		strokeWeight(2);
		text("CRUMPLED BALLS",100,60);

		line(97,70,655,70);

		textSize(30);
		fill("white");
		stroke("white");
		strokeWeight(1);
		text("Use the right and left arrow keys on the keyboard to direct \n                        the ball into the basket.",10,110);
		
		fill("magenta");
		stroke("magenta");
		text("Press the space bar to start.",180,250)

		if(keyCode == 32){
			state =1;
		}
	}

	if(state == 1){
		b1x = ball1.body.position.x;
		b1y = ball1.body.position.y;

		ball1.display();

		ground1.display();
		ground2.display();
		ground3.display();
		ground4.display();

		wall1.display();
		wall3.display();
		wall2.display();

		if(keyWentDown(LEFT_ARROW)){
			Matter.Body.applyForce(ball1.body,ball1.body.position,{x: -145,y:-70})
		}
		if(keyWentDown(RIGHT_ARROW)){
			Matter.Body.applyForce(ball1.body,ball1.body.position,{x:145,y:-70})
		}

		if(b1x > 600 && b1x < 700 && b1y - ball1.radius/2 > 105 && b1y < 195){
			state = 2;
		}
	}

	if(state == 2){
		textSize(50);
		fill("yellow");
		stroke("red");
		strokeWeight(5);
		text("YOU WIN!!!!!",200,185);
	}

	drawSprites();
}