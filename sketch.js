const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400, 400);
  
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic : true
  }

  ground= Bodies.rectangle(200,390,400,10,ground_options)
  World.add(world, ground);

  ball_options = {
    restitution: 1.8
  }
  
  ball= Bodies.circle(300,200,40,ball_options)
  World.add(world, ball);


}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 10);ellipseMode(RADIUS)
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,40,40)
}