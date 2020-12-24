const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    stand = new Ground(390,240,120,20);
    
    
    
}

function draw(){
    background("black");
    Engine.update(engine);
    
    //stand.display(); 
}
