let rite;
let line;
let letter;
let binary = [];
let binaryLines = [];
let whichLetter = 0;
let whichLine = 0;
let letterPos = 0;
let font;
let posx;
let posy;
let binaryBox = 500;
let textBoxHeight = 200;

function preload (){
  font = loadFont("Courier New.ttf");
  rite  = loadStrings('rite.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  posx = width/2 - 130;
  posy = height/2;
  textFont(font);
  textToBinary();
}

function draw() {
  randomSeed(0);
//select the line whichLine of the text
line = rite[whichLine];

//select a letter whichLetter of the line
letter = line.split('')[whichLetter];

background(255);
textSize(20);

// write binary code
strokeWeight(0.2);
stroke(51);
noFill();
rect(18, 20, binaryBox*2, 25);
//write first line in light grey
noStroke();
fill(220);
text(line, 25, 20, binaryBox*2, 25);

//write each letter of line in black
//as it is being typed
fill(0);
text(line.substring(0, whichLetter), 25, 20, windowWidth-20, binaryBox);

rect(20, 60, binaryBox*2, binaryBox);
for(let i = 0; i < binary.length; i++){
  textSize(20);
  fill(random(125,256)),
  text(binary[i], 20 + random(0,300), 70 + random(-5,100), binaryBox, binaryBox);
}

if (whichLetter == line.length){
  binary.push(binaryLines[whichLine]);
  whichLine++;
  whichLetter = 0;
  }
}

function keyTyped (){

  console.log(key);
  if (key === line[whichLetter]){
    //letterPos++;
    whichLetter++;
  }
}

function textToBinary(){
 for (let i = 0; i < rite.length; i++){
    let eachLine = rite[i];
    let eachLineBinary = "";
    for (let j = 0; j < eachLine.length; j++){
      eachLineBinary += eachLine[j].charCodeAt(0).toString(2) + " ";
    }
    binaryLines.push(eachLineBinary);
 }
}
