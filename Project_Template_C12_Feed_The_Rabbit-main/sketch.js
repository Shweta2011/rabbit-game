var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg;
var apple,leaf;
var leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_sprites = Math.round(random(1,2));

    if(frameCount % 80 == 0){
     
    
    if(select_sprites == 1){
       createApples();
    }
    else{
      createLeaves();
    }
  }
  
  
  drawSprites();
}

function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  //add image to apple sprite
  apple.addImage(appleImg);
  //scale the sprite
  apple.scale  = 0.05;
  //give the velocity so the apples fall down
  apple.velocityY = 10;
  //give lifetime to the apple sprite
  apple.lifetime = 40;

  //rabbit.depth = rabbit.depth+ 1;
  //apple.depth = rabbit.depth; NOT WORKING
}

function createLeaves(){
  leaf = createSprite(random(50,350),40,10,10);
  //add image to leaf sprite
  leaf.addImage(leafImg);
  //scale the sprite
  leaf.scale  = 0.05;
  //give the velocity so the leaves fall down
  leaf.velocityY = 6;
  //give lifetime to the leaves sprite
  leaf.lifetime = 50;
}




