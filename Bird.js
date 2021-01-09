class Bird{
    constructor(x,y){
        var options
        options = { restitution: 0.8, friction: 1, density: 2}
         this.birdBody = Bodies.rectangle(x,y,30,30,options)
         this.width = 30
         this.height = 30
         World.add(world,this.birdBody)
    }    

    display(){
       var pos = this.birdBody.position;
       //pos.x = mouseX
       //pos.y = mouseY
       var angle = this.birdBody.angle;
       push()
       translate(pos.x, pos.y)
       rotate(angle)
       rectMode(CENTER)
       stroke("black");
       strokeWeight(5)
       fill("red");
       rect(0,0,this.width,this.height);
       pop()
    }
}