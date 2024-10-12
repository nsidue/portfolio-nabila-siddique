let enterButton, player, walls, potato1, potato2, potato3, collect, noCollect, water, water1, water2, water3;
let eyeWidth = 50;
let eyeHeight = 40;
let pupilWidth = 22;
let pupilHeight = 25;
let screen = 0;
let score = 0;

function preload() {
  
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  background('beige');
  noStroke();
  textSize(25);
  textFont('Georgia')
  text('Welcome, Brave Warrior!', width/2, height/2 - 180);
  textSize(20);
  text('The village is going through a drought. \n You are the only hope by going into THE cavemaze! \n Inside, collect all of the potatoes \n and exit out of THE cavemaze. But be careful, \n not all choices will lead to saving the village... ', width/2, height/2-125);
  
//buttons entter
  enterButton = new Sprite(width/2, height/2 + 60);
  enterButton.width = 150;
  enterButton.height = 50; 
  enterButton.collider = 'k';
  enterButton.color = 'orange';
  enterButton.text = 'Enter the Cave';
  //player create
  player = new Sprite(-200, 5, 30);
  player.rotationLock = true;
  player.color = 'white';
  
  
  player.text = 'P';

  //first potato field
  potato1 = new Sprite(-200, -200);
  potato1.width = 150;
  potato1.height = 150;
  potato1.color = 'yellow';
  potato1.collider = 's';
  potato1.text = "PotatoField1"

  //second potato field
  potato2 = new Sprite(-210, -210);
  potato2.width = 150;
  potato2.height = 150;
  potato2.color = 'yellow';
  potato2.collider = 's';
  potato2.text = 'PotatoField2';

  //third potato field
  potato3 = new Sprite(-215, -215);
  potato3.width = 150;
  potato3.height = 150;
  potato3.color = 'yellow';
  potato3.collider = 's';
  potato3.text = 'PotatoField3';

  //collecting water button
  collect = new Sprite(-300, -300);
  collect.width = 150;
  collect.height = 50;
  collect.collider = 'k';
  collect.color = 'black';
  collect.textColor = 'lavender';
  collect.textSize = '15'
  collect.text = 'Collect water'
  

  //not collecting water button
  noCollect = new Sprite(-310, -310);
  noCollect.width = 150;
  noCollect.height = 50; 
  noCollect.color = 'black';
  noCollect.textColor = 'lavender';
  noCollect.textSize = '15'
  noCollect.text = "Don't collect water";

  //waters
  water = new Sprite(-200, -200);
  water.d = 15;
  water.color = 'blue';
  
  water1 = new Sprite(-200, -200);
  water1.d = 15;
  water1.color = 'blue';
  
  water2 = new Sprite(-200, -200);
  water2.d = 15;
  water2.color = 'blue';
  
  water3 = new Sprite(-200, -200);
  water3.d = 15;
  water3.color = 'blue';
  

  
  

  //wall create
  walls = new Group();
  walls.collider = 's';
  walls.color = 'black';

  

  
}


function draw() {  
  
  
  if (enterButton.mouse.presses()) {
   
    maze1();
    screen = 1;
    //borders
    new walls.Sprite(width/2, 0, width, 5);
    new walls.Sprite(0, height, width/4, 5);
    new walls.Sprite(300, height, width/3, 5);
    new walls.Sprite(400, height, 400, 5);
    new walls.Sprite(0, height/2, 5, height);
    new walls.Sprite(600, height/2, 5, height);
    //inside
    new walls.Sprite(50, 65, width/2, 2);
    new walls.Sprite(width - 150, 65, width/2, 2);
    new walls.Sprite(50, 265, width/2, 2);
    new walls.Sprite(width - 100, 230, width/2, 2);
    new walls.Sprite(width/2, 525 , 2, 150);
    new walls.Sprite(width/2 + 100, 450, 200, 2);
    new walls.Sprite(50, 440, width/2, 2);

    // show the potatoes
    potato1.pos = {x: 100, y: 150};
    potato2.pos = {x: width - 100, y:150};
    potato3.pos = {x: 100, y: 350};
    
     // Draw start and end text
    fill(0);
    textSize(20);
    text('Exit 1', 120, 595);
    

    
    
    //player appear and movement
    print("Entered Cave");
    player.pos = {x: width/2, y: 25};

  
  }
      if (kb.pressing("left")) {
    player.vel.x = -3;
  } else if (kb.pressing("right")) {
    player.vel.x = 3;
  } else if (kb.pressing("up")) {
    player.vel.y = -3; 
  } else if (kb.pressing("down")) {
    player.vel.y = 3;
  } else {
    player.vel.x = 0;
    player.vel.y = 0;
  }
//player collects potato
  if (player.collides(potato1)) {
    
    potato1.color = 'white';
    potato1.text = 'Barren Land';
  }

  if (player.collides(potato2)) {
    
    potato2.color = 'white';
    potato2.text = 'Barren Land';
  }

  if (player.collides(potato3)) {
    
    potato3.color = 'white';
    potato3.text = 'Barren Land';

  }

  if(player.y > 595){
      background(209,237,242);
      player.pos = {x: -200,y: -200};
      potato1.pos = {x: -150,y: -150};
      potato2.pos = {x: -152,y: -152};
      potato3.pos = {x: -151,y: -151};
      walls.remove();
      screenExit1();
      print('entered screen 2');
      screen = 1;      
      
    
    }
    if (screen == 1) {
      if (noCollect.mouse.presses()){
        screenChoiceNoFeed();
        noCollect.pos = {x:-200, y: -200};
        collect.pos = {x:-210, y:-210};
        screen = 2;
        
      } else if (collect.mouse.presses()) {
        screenChoiceFeed();
        noCollect.pos = {x:-200, y: -200};
        collect.pos = {x:-210, y:-210};

        
        screen = 3;

        
        
        
      }
    }
  
  
  
 
}

function maze1() {
  background('darkgrey');
  enterButton.pos = {x: -200, y: -200};
  //maze walls
}

function screenExit1() {
  background('lavender'); 
  fill('black');
  textSize(25);
  text('Hurrah! The villagers worship you \n for the food but… you still have some work to \n do if you don’t want them to die from thirst. \n Collect 20 gallons of water \n for the villagers! But in the end, \n it is up to you to do so.', width/2, height/2 - 150);
  collect.pos = {x: width/2 - 100, y: height/2 + 60 };
  noCollect.pos = {x:width/2 + 100, y: height/2 +60};
  
}



function screenChoiceFeed() {
  background('teal');
  fill('brown');
  textSize(25);
  text('Congratulations! \n You have saved the village. \n Your name will now go down in history!!!', width/2, height/2 - 200);
  //Face
  fill('brown')
  ellipse(width/2, height/2, 175, 200);

  //hair

  fill(0);
  arc(135+100, 145+100, 50, 50, 110, 290);//right side
  arc(265+100, 145+100, 50, 50, 250, 70);//left side

  //moustache
  arc(185+100, 225 +100, 30, 30, 180, 0);//left moustache
  arc(215+100, 225 +100, 30, 30, 180, 0);//right moustache
  
  fill('white');
  ellipse(170 +100, 170+100, eyeWidth,eyeHeight);//right
  ellipse(230+100, 170+100,eyeWidth, eyeHeight);//left 
  //Pupils
  fill('brown');
  ellipse(170+100, 170+100, pupilWidth, pupilHeight);//right
  ellipse(230+100, 170+100, pupilWidth, pupilHeight);//left
  //mouth
  fill('white');
  arc(200+100, 230+100, 50, 50, 0, 180);

  text('"Thank you" - \n villager', 300, 450)
}

function screenChoiceNoFeed() {
  background('black');
  fill('white');
  textSize(25);
  text('Oh No! The villager’s have died from \n dehydration. But do not fret Warrior, \n you can always refresh the page and try \n to save the villagers again!!!', width/2, height/2 - 150);
  
}