function setup() {
  var iss, spacecraft;
  var hasDocked;
  var hasDocked = false;
  
  
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);



}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function setup() {
  iss = createSprite(330,130);
  iss.addImage(iss.png);
  iss.scale = 0.25;

  spacecraft = createSprite(285,240);
  spacecraft.addImage(spacecraft1.png);
  spacecraft.scale = 0.15;


   if(!hasDocked){
     spacecraft.x = spacecraft.x + random,1(-1);

     if (keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -2 ;
     }

     if (keyDown("LEFT_ARROW")){
       spacecraft.addImage(scimg3);
     }


      if (keyDown("DOWN_ARROW")){
        spacecraft.addImage(scimg2);
      }
      if (keyDown("DOWN_ARROW")){
        spacecraft.addImage(scimg1);
      
      
      
      if (keyDown("UP_ARROW")){
       
      }