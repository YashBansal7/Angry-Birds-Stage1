const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1250,520,50,50);
    box2 = new Box(1400,520,50,50);
    ground = new Ground(800,height,1600,20)
    pig1 = new pig(1325,530);
    log1 = new log(1324,420,200,PI/2);
    box3 = new Box(1250,400,50,50);
    box4 = new Box(1400,400,50,50);
    pig2 = new pig(1325,400);
    log2 = new log(1324,350,200,PI/2);
    log3 = new log(1330,225,125,PI/8);
    log4 = new log(1340,225,125,-PI/9);
    box5 = new Box(1320,300,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    box5.display();
}
