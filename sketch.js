var dog, sadDog, happyDog;
var feedPetButton, addFoodButton;
var foodObj;
var dogFoodStock, amountFoodStock;
var milkImg;
var database;


function preload() {
  sadDog = loadImage("Images/Dog.png");
  happyDog = loadImage("Images/happy dog.png");
  milkImg = loadImage("Milk.png");
}

function setup() {
  createCanvas(1000, 400);
  amountFoodStock = 0;

  dog = createSprite(800, 200, 150, 150);
  dog.addImage(sadDog);
  dog.scale = 0.15;

  foodObj = new Food();

  feedPetButton = createButton("Feed the doge");
  feedPetButton.position(700, 95);
  feedPetButton.mousePressed(feedDog);

  addFoodButton = createButton("Add food");
  addFoodButton.position(800, 95);
  addFoodButton.mousePressed(foodObj.updateFoodStock);

  database = firebase.database();
}

function draw() {
  background(46, 139, 87);
  foodObj.show();
  drawSprites();
  textSize(50)
  fill(0);
  text("Food:"+amountFoodStock, 50, 50)
}


function feedDog(){
  dog.addImage(happyDog);
  foodObj.deductFood();
}