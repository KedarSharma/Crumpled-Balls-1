class Wall{
    constructor(x,y,width,height){
        this.body = Matter.Bodies.rectangle(x,y,width,height,{'isStatic' : true});
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop();
    }
}