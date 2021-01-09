class Ground{
    constructor(x,y,width,height){
        var options
        options = {isStatic: true}
         this.groundBody = Bodies.rectangle(x,y,width,height,options)
         this.width = width
         this.height = height
         World.add(world,this.groundBody)
    }    

    display(){
       var pos = this.groundBody.position;
       rectMode(CENTER)
       fill("grey");
       rect(pos.x,pos.y,this.width,this.height);
    }
}