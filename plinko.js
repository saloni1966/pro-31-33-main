class Plinko{
    constructor(x,y){
        var options={
            isStatic:true,
           
}
        this.x = x
        this.y = y
        this.r = 10
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
}
    display(){
        var pos = this.body.position;
        push();
        
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,10,10);
        pop();
}
}