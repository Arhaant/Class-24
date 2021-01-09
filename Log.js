class Log{
    constructor(x,y,height,angle){
        var options
        options = { restitution: 0.8, friction: 1, density: 2}
         this.logBody = Bodies.rectangle(x,y,20,height,options)
         this.width = 20
         this.height = height
         Matter.Body.setAngle(this.logBody,angle)
         World.add(world,this.logBody)
    }    

    display(){
       var pos = this.logBody.position;
       var angle = this.logBody.angle;
       push()
       translate(pos.x, pos.y)
       rotate(angle)
       rectMode(CENTER)
       stroke("brown");
       strokeWeight(5)
       fill(0,0,0,0)
       rect(0,0,this.width,this.height);
       pop()
    }
}