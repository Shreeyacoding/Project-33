const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

  function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

    Engine.run(engine);
  }


  function draw() {

    background(230);
    
    image(boy,200,340,200,300);
    

  }
  function keyPressed() {
	if (keyCode === 32){
        boy.velocityX=10;
        boy.velocityY=9;
    }
  }
