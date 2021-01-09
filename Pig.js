class Pig{
    constructor(x,y){
        var options
        options = { restitution: 0.8, friction: 1, density: 2}
         this.pigBody = Bodies.rectangle(x,y,50,50,options)
         this.width = 50
         this.height = 50
         World.add(world,this.pigBody)
    }    

    display(){
       var pos = this.pigBody.position;
       var angle = this.pigBody.angle;
       push()
       translate(pos.x, pos.y)
       rotate(angle)
       rectMode(CENTER)
       stroke("black");
       strokeWeight(5)
       fill("green");
       rect(0,0,this.width,this.height);
       pop()
    }
}