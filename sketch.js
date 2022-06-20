const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height*0.99,width,height*0.02);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ground.show();
   
}



