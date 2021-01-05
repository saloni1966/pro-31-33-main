
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var div1,div2,div3,div4,div5,div6
var plinkos =[];
var particles=[];
var divisions =[];


var score=0,turn=0;
var particle;
var gameState="start";


function setup() {
  createCanvas(600,600);

  engine = Engine.create();
	world = engine.world;

  div1 = new Division(300,480,10,220)
  div2 = new Division(100,480,10,220)
  div3 = new Division(200,480,10,220)
  div4 = new Division(400,480,10,220)
  div5 = new Division(500,480,10,220)
  div7 = new Division(10,480,10,220)
  div8 = new Division(590,480,10,220)
  div6 = new Division(300,590,600,10)

  for(i=30 ; i<=width ; i=i+50){
    plinkos.push(new Plinko(i,70));
  }
  for(i=15 ; i<=width-10 ; i=i+50){
    plinkos.push(new Plinko(i,140));
  }
  for(i=30 ; i<=width ; i=i+50){
    plinkos.push(new Plinko(i,210));
  }
  for(i=10 ; i<=width ; i=i+50){
    plinkos.push(new Plinko(i,295));
  }
  
 
	Engine.run(engine);
}

function draw() {
  background(0);  
  
  fill("white")
  textSize(30);
  text("Score:"+score,20,30);

  text("500 ",30,400)
  text("500 ",120,400)
  text("400 ",220,400)
  text("400 ",320,400)
  text("200 ",420,400)
  text("200 ",520,400)
  
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div7.display();
  div8.display();
  div6.display();

  if(gameState == "end"){
    textSize(100);
    text("Game Over",100,200);
  }
  

  for(var i = 0;i< plinkos.length ; i++){
    plinkos[i].display();
  }
  
  if(particle!=null && gameState === "start")
    {
       particle.display();
        
        if (particle.body.position.y>560)
        {
              if (particle.body.position.x < 200) 
              {
                  score=score+500;      
                  particle=null;
                  
                  if ( turn>= 5){
                    gameState ="end";  
                  }                         
              }
       
        else if (particle.body.position.x < 400 && particle.body.position.x > 201 ) 
              {
                    score = score + 400;
                    particle=null;
                    if ( turn>= 5) {
                      gameState ="end";
                    }
              }

              else if (particle.body.position.x < 700 && particle.body.position.x > 401 ) 
              {
                    score = score + 200;
                    particle=null;

                    if ( turn>= 5) 
                    {
                      gameState ="end";
                    }
              }
  }
}
  // console.log(frameCount)
  

}

function mousePressed(){

  if(gameState!=="end"){
    turn++;
    particle=new Particle(mouseX,10,10,10);
  }
}
