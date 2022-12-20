
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  jogador 
var vida = 1
function preload()
{
audio0 = loadSound(audio0.mp4);
audio1 = loadSound(audio1.mp4);
audio2 = loadSound(audio2.mp4);
audio3 = loadSound(audio3.mp4);	
audio4 = loadSound(audio4.mp4);
audio5 = loadSound(audio5.mp4);
audio6 = loadSound(audio6.mp4);
audio7 = loadSound(audio7.mp4);
audio8 = loadSound(audio8.mp4);

//começo = loadAnimation()
//jogo = loadAnimation()
//1jogo = loadAnimation()
//final1 = loadAnimation()
//2jogo = loadAnimation()
//final2 = loadAnimation()
//correndo = loadAnimation()
// jumpscare = loadAnimation() 
}

function setup() {
	createCanvas(800, 700);

    
	engine = Engine.create();
	world = engine.world;

	//Crie os corpos aqui.
    jogador = createSprite();
	senhoritaRosa = createSprite();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  if(){
	
  }
}



