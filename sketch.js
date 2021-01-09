const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

function setup() {
  createCanvas(1200,400);
  
  engine = Engine.create()
  world = engine.world

  box1 = new Box(800,350,50,50)

  box2 = new Box(600,350,50,50)

  ground = new Ground(600,370,1200,40)

  pig1 = new Pig(700,350);

  log1 = new Log(700,300,250,PI/2)

  box3 = new Box(800,280,50,50)

  box4 = new Box(600,280,50,50)

  pig2 = new Pig(700,280,50,50);

  bird = new Bird(200,300);

  log2 = new Log(700,250,250,PI/2)

  box5 = new Box(700,230,50,50);

  log3 = new Log(620,180,130,PI/4)

  log4 = new Log(780,180,130,-PI/4);
 
}

function draw() {
  background("white");
  
  Engine.update(engine)

  
  mouseCoordinates();
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
  bird.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
}





//<script src="./p5.play.js"></script>


  

 







