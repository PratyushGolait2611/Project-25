const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var DustBin, log1, log2;
var bin;


function setup() {
    createCanvas(1400, 700);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    ball = new Ball(100, 300, 70)

    ground = new Ground(700, height, 1400, 20);

    DustBin = new Log(1100, 590, 200, 200);

    log1 = new Log1(1000, 624, 20, 125);

    log2 = new Log1(1200, 624, 20, 125);

    Engine.run(engine);

}


function draw() {
    Engine.update(engine);
    background(255);

    rectMode(CENTER);

    ball.display();

    ground.display();

    log1.display();
    log2.display();
    DustBin.display();

    console.log(ball.x);

}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(ball.body, ball.body.position, { x: 1000, y: -1305 })
    }
}