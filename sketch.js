const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;

function setup(){

    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
        ground = new Ground(200,390,400,10)
        box1 = new Box(200,300,40,40)
        box2 = new Box(230,100,40,60)
}

function draw(){

    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
}
