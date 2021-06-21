var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];

var divisionHeight=300;

var gamestate="PLAY";
var score =0;
var particle;
var count=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
Engine.run(engine);
    
}
 


function draw() {
  background("black");
  textSize(40)
  fill("blue")
  stroke(1000000)
  //text(mouseX,200,200)
 text("Score : "+score,20,30);
 fill("yellow")
 text("Count :"+count,620,30)

 fill("red")
 text("500",5,550)
 text("500",85,550)
 text("500",165,550)
 text("500",245,550)
 text("100",325,550)
 text("100",405,550)
 text("100",485,550);
 text("200",565,550);
 text("200",645,550);
 text("200",725,550);

 
 
 

  if ( gamestate =="END") {
    background("black");
    fill("red");
    textSize(100);
    text("Game Over", 200, 400);
   
  } 
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
   }

   if(particle!=null){
    particle.display();
    if(particle.body.position.y>600){
     if(particle.body.position.x<320){
       score=score+500;
       particle=null;
       if(count>=5){
        gamestate="END";
        text("GAME OVER",400,400)
      }
     }
   }} 
   if(particle!=null){
    particle.display();
    if(particle.body.position.y>600){
     if(particle.body.position.x<560){
       score=score+100;
       particle=null;
       if(count>=5){
         gamestate="END";
         text("GAME OVER",400,400)
       }
     }
   }} 

if(particle!=null){
    particle.display();
    if(particle.body.position.y>600){
     if(particle.body.position.x<800){
       score=score+200;
       count=count+1
       particle=null;
       if(count>=5){
        gamestate="END";
        text("GAME OVER",400,400)
      }
     
     }
   }}
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    
   }
 

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

  
 
     }
     


function mousePressed(){
  if(gamestate!=="END"){
    count++
    particle=new Particle(mouseX,10,10,10)
  }
}