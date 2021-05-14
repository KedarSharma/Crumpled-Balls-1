class Paper {
    constructor(x,y){
        var options = {
            'density' : 1.2,
            'friction':0.5,
            'isStatic': false,
            'restitution': 0.5,
            'rotationSpeed': 10
        }
        this.radius = 25;
        this.body = Matter.Bodies.circle(x,y,this.radius,options);
        this.image = loadImage("basketball.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();
    }
}

