var wall1,wall2,wall3,wall4,wall5,wall,wall7,wall8,wall9,wall10,wall11,wall12,walll13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;
var friendlycar,enemycar1,enemycar2,enemycar3,enemycar4;
var WallGroups;
var GameState = "play";
var carImage,tornadoImage,fireImage,CoronaImage,volcanoeImage,illlluImage,BGImage;
var Iwall1,Iwall2,Iwall3,Iwall4;

function preload() 
{

  carImage = loadImage("Car.png");
  tornadoImage = loadImage("tornado.png");
  fireImage = loadImage("fire.png");
  CoronaImage = loadImage("corona.png");
  volcanoeImage = loadImage("volcanoe.png");
  illlluImage = loadImage("illlllu.png");
  BGImage = loadImage("background.jpg");

}
function setup() {
  createCanvas(1300,650);

  WallGroups = createGroup();

  // cars(friendly and enemy both)
  friendlycar = createSprite(225,100,10,10);
  friendlycar.shapeColor = "black";
  friendlycar.addImage(carImage)
  friendlycar.scale = 0.05;

  enemycar1 = createSprite(125,175,10,10);
  enemycar1.addImage(tornadoImage)
  enemycar1.scale = 0.05;

  enemycar2 = createSprite(175,175,10,10);
  enemycar2.addImage(fireImage)
  enemycar2.scale = 0.05;

  enemycar3 = createSprite(275,175,10,10);
  enemycar3.addImage(volcanoeImage)
  enemycar3.scale = 0.005;

  enemycar4 = createSprite(325,175,10,10);
  enemycar4.addImage(CoronaImage)
  enemycar4.scale = 0.05;

  //right line
  wall1 = createSprite(1300,330,5,650);
  //top line
  wall2 = createSprite(700,5,1200,5);
  //left line
  wall3 = createSprite(100,330,5,650);
  //bottom line
  wall4 = createSprite(700,635,1200,5);
  //maze walls now onwards
  wall5 = createSprite(150,50,5,85);
  wall6 = createSprite(200,50,5,85);
  wall7 = createSprite(250,50,5,85);
  wall8 = createSprite(300,50,5,85);
  wall9 = createSprite(350,50,5,85);
  wall10 = createSprite(300,125,100,5);
  wall11 = createSprite(150,125,100,5);
  wall12 = createSprite(225,165,160,5);
  wall13 = createSprite(400,125,5,85);
  wall14 = createSprite(350,205,5,85);
  wall15 = createSprite(150,205,100,5);
  wall16 = createSprite(275,250,5,85);
  wall17 = createSprite(200,280,5,85);
  wall18 = createSprite(370,280,100,5);
  wall19 = createSprite(450,200,100,5);
  wall20 = createSprite(450,290,5,100);
  wall21 = createSprite(150,300,5,85);
  wall22 = createSprite(300,330,100,5);
  wall23 = createSprite(200,400,100,5);
  wall24 = createSprite(400,400,5,100);
  wall25 = createSprite(320,430,5,100);
  wall26 = createSprite(200,450,5,100);
  wall27 = createSprite(200,530,100,5);
  wall28 = createSprite(250,530,5,100);
  wall29 = createSprite(450,50,100,5);
  wall30 = createSprite(550,100,5,100);
  wall31 = createSprite(470,120,50,5);
  wall32 = createSprite(620,100,50,5);
  wall33 = createSprite(550,300,5,100);
  wall34 = createSprite(600,200,100,5);
  wall35 = createSprite(400,500,100,5);
  wall36 = createSprite(500,300,100,5);
  wall37 = createSprite(500,400,100,5);
  wall38 = createSprite(190,590,5,50);
  wall39 = createSprite(330,600,100,5);
  wall40 = createSprite(360,550,100,5);
  wall41 = createSprite(450,570,5,70);
  wall42 = createSprite(430,450,100,5);
  wall43 = createSprite(550,500,5,70);
  wall44 = createSprite(500,520,5,70);
  wall45 = createSprite(600,450,5,70);
  wall46 = createSprite(400,550,100,5);
  wall47 = createSprite(550,600,100,5);
  wall48 = createSprite(600,570,100,5);
  wall49 = createSprite(650,520,100,5);
  wall50 = createSprite(700,580,5,50);
  wall51 = createSprite(680,450,100,5);
  wall52 = createSprite(680,450,5,50);
  wall53 = createSprite(500,320,5,50);
  wall54 = createSprite(680,450,5,50);
  wall55 = createSprite(600,300,50,5);
  wall56 = createSprite(650,300,5,100);
  wall57 = createSprite(700,300,5,100);
  wall58 = createSprite(680,400,100,5);
  wall59 = createSprite(700,100,5,100);
  wall60 = createSprite(620,150,70,5);
  wall61 = createSprite(720,200,70,5);
  wall62 = createSprite(820,200,5,100);
  wall63 = createSprite(760,250,50,5);
  wall64 = createSprite(760,300,50,5);
  wall65 = createSprite(760,350,50,5);
  wall66 = createSprite(800,400,50,5);
  wall67 = createSprite(800,450,50,5);
  wall68 = createSprite(760,500,50,5);
  wall68 = createSprite(760,550,50,5);
  wall69 = createSprite(760,600,50,5);
  wall70 = createSprite(760,650,50,5);
  wall71 = createSprite(760,150,50,5);
  wall72 = createSprite(820,550,5,100);
  wall73 = createSprite(870,450,5,100);
  wall74 = createSprite(820,320,5,80);
  wall75 = createSprite(750,70,5,80);
  wall76 = createSprite(900,70,200,5);
  wall77 = createSprite(950,120,200,5);
  wall78 = createSprite(1000,170,200,5);
  wall79 = createSprite(1050,220,200,5);
  wall80 = createSprite(1100,270,200,5);
  wall81 = createSprite(1100,270,200,5);
  wall82 = createSprite(900,320,5,150);
  wall83 = createSprite(860,320,20,5);
  wall84 = createSprite(1250,150,5,150);
  wall85 = createSprite(1200,130,5,150);
  wall86 = createSprite(1150,110,5,150);
  wall87 = createSprite(1100,90,5,100);
  wall88 = createSprite(900,550,100,5);
  wall89 = createSprite(1050,550,100,5);
  wall90 = createSprite(1200,550,100,5);
  wall91 = createSprite(1200,400,5,200);
  wall92 = createSprite(1000,400,5,200);
  wall93 = createSprite(1100,400,100,5);
  wall94 = createSprite(1100,330,5,50);
  wall95 = createSprite(1100,470,5,50);

  endpoint = createSprite(1270,600,15,15);
  endpoint.addImage(illlluImage);
  endpoint.scale = 0.1;

  Iwall1 = createSprite(125,60,50,5);
  Iwall1.visible = false;
  Iwall2 = createSprite(170,60,50,5);
  Iwall2.visible = false;
  Iwall3 = createSprite(275,60,50,5);
  Iwall3.visible = false;
  Iwall4 = createSprite(325,60,50,5);
  Iwall4.visible = false;

  
  enemycar1.velocityX = 7;
  enemycar1.velocityY = 5;

  enemycar2.velocityX = 5;
  enemycar2.velocityY = 8;

  enemycar3.velocityX = 4;
  enemycar3.velocityY = 5;

  enemycar4.velocityX = 7;
  enemycar4.velocityY = 5;


  WallGroups.add(wall1);
  WallGroups.add(wall2);
  WallGroups.add(wall3);
  WallGroups.add(wall4);
  WallGroups.add(wall5);
  WallGroups.add(wall6);
  WallGroups.add(wall7);
  WallGroups.add(wall8);
  WallGroups.add(wall9);
  WallGroups.add(wall10);
  WallGroups.add(wall11);
  WallGroups.add(wall12);
  WallGroups.add(wall13);
  WallGroups.add(wall14);
  WallGroups.add(wall15);
  WallGroups.add(wall16);
  WallGroups.add(wall17);
  WallGroups.add(wall18);
  WallGroups.add(wall19);
  WallGroups.add(wall20);
  WallGroups.add(wall21);
  WallGroups.add(wall22);
  WallGroups.add(wall23);
  WallGroups.add(wall24);
  WallGroups.add(wall25);
  WallGroups.add(wall26);
  WallGroups.add(wall27);
  WallGroups.add(wall28);
  WallGroups.add(wall29);
  WallGroups.add(wall30);
  WallGroups.add(wall31);
  WallGroups.add(wall32);
  WallGroups.add(wall33);
  WallGroups.add(wall34);
  WallGroups.add(wall35);
  WallGroups.add(wall36);
  WallGroups.add(wall37);
  WallGroups.add(wall38);
  WallGroups.add(wall39);
  WallGroups.add(wall40);
  WallGroups.add(wall41);
  WallGroups.add(wall42);
  WallGroups.add(wall43);
  WallGroups.add(wall44);
  WallGroups.add(wall45);
  WallGroups.add(wall46);
  WallGroups.add(wall47);
  WallGroups.add(wall48);
  WallGroups.add(wall49);
  WallGroups.add(wall50);
  WallGroups.add(wall51);
  WallGroups.add(wall52);
  WallGroups.add(wall53);
  WallGroups.add(wall54);
  WallGroups.add(wall55);
  WallGroups.add(wall56);
  WallGroups.add(wall57);
  WallGroups.add(wall58);
  WallGroups.add(wall59);
  WallGroups.add(wall60);
  WallGroups.add(wall61);
  WallGroups.add(wall62);
  WallGroups.add(wall63);
  WallGroups.add(wall64);
  WallGroups.add(wall65);
  WallGroups.add(wall66);
  WallGroups.add(wall67);
  WallGroups.add(wall68);
  WallGroups.add(wall69);
  WallGroups.add(wall70);
  WallGroups.add(wall71);
  WallGroups.add(wall72);
  WallGroups.add(wall73);
  WallGroups.add(wall74);
  WallGroups.add(wall75);
  WallGroups.add(wall76);
  WallGroups.add(wall77);
  WallGroups.add(wall78);
  WallGroups.add(wall79);
  WallGroups.add(wall80);
  WallGroups.add(wall81);
  WallGroups.add(wall82);
  WallGroups.add(wall83);
  WallGroups.add(wall84);
  WallGroups.add(wall85);
  WallGroups.add(wall86);
  WallGroups.add(wall87);
  WallGroups.add(wall88);
  WallGroups.add(wall89);
  WallGroups.add(wall90);
  WallGroups.add(wall91);
  WallGroups.add(wall92);
  WallGroups.add(wall93);
  WallGroups.add(wall94);
  WallGroups.add(wall95);

}

function draw() {
  background(BGImage);

  if(GameState === "play")
  {
   
  

  friendlycar.bounceOff(WallGroups);

  if(keyDown("SPACE"))
  {
    if(keyWentDown("up"))
    {
      friendlycar.velocityY = -3;
    }

    if(keyWentUp("up"))
    {
      friendlycar.velocityY = 0;
    }

    if(keyWentDown("right"))
    {
      friendlycar.velocityX = 3;
    }

    if(keyWentUp("right"))
    {
      friendlycar.velocityX = 0;
    }

    if(keyWentDown("left"))
    {
      friendlycar.velocityX = -3;
    }

    if(keyWentUp("left"))
    {
      friendlycar.velocityX = 0;
    }

    if(keyWentDown("down"))
    {
      friendlycar.velocityY = 3;
    }

    if(keyWentUp("down"))
    {
      friendlycar.velocityY = 0;
    }

  }

  
  enemycar1.bounceOff(WallGroups);

  enemycar2.bounceOff(WallGroups);
  
  enemycar3.bounceOff(WallGroups);
  
  enemycar4.bounceOff(WallGroups);

  enemycar1.bounceOff(Iwall1);

  enemycar2.bounceOff(Iwall2);
  
  enemycar3.bounceOff(Iwall3);
  
  enemycar4.bounceOff(Iwall4);
  

if(enemycar1.isTouching(friendlycar))
{
  reset();
}

if(enemycar2.isTouching(friendlycar))
{
  reset();
}

if(enemycar3.isTouching(friendlycar))
{
  reset();
}

if(enemycar4.isTouching(friendlycar))
{
  reset();
}

  
  drawSprites();

  if(friendlycar.isTouching(endpoint))
  {

    GameState = "end";

  }

 }

 if(GameState === "end")
 {

  friendlycar.velocityX = 0;
  friendlycar.velocityY = 0;

  enemycar1.velocityX = 0;
  enemycar1.velocityY= 0;

  enemycar2.velocityX = 0;
  enemycar2.velocityY= 0;

  enemycar3.velocityX = 0;
  enemycar3.velocityY= 0;

  enemycar4.velocityX = 0;
  enemycar4.velocityY= 0;
  textSize(35);
  fill("pink");
  text(" you have reached your destination safely, dodging the four disastors",100,200);
  


 }

}

function reset()
{
  friendlycar.x = 225;
  friendlycar.y = 70;

  enemycar1.x = 125;
  enemycar1.y = 175;

  enemycar2.x = 175;
  enemycar2.y = 175;

  enemycar3.x = 275;
  enemycar3.y = 175;

  enemycar4.x = 325;
  enemycar4.y = 175;

}