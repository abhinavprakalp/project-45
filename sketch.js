var rama,arjuna,bheeema;
var f;

function preload(){
  rama=loadImage("images/rama.png");
  arjuna=loadImage("images/arjuna.png");
  bheeema=loadImage("images/bheema.png");
}

function setup() {
  createCanvas(600,600);

  f= new form();
  
}

function draw() {
  background(255,255,255);
  f.display();
}