// DISCLAIMER: ONLY WORKS IN p5.js


var dotAmount = 150;
var dotPoses = [];
var dotSpeeds = [];
var dotColors = [];
var dotColorMode = "outline";


function setup() {
  createCanvas(1280, 693.33333333333333333);
  
  for (let i = 0; i < dotAmount; i++){
    dotPoses.push([random(0, width), random(0, height)]);
  }
  
  for (let i = 0; i < dotAmount; i++){
    dotSpeeds.push([random(-0.3, 0.3), random(-0.3, 0.3)]);
  }
  
  for (let i = 0; i < dotAmount; i++){
    dotColors.push([random(0, 255), random(0, 255), random(0, 255)])
  }
}

function draw() {
  background(0);
  
  // line stuff
  
  for (let i = 0; i < dotAmount; i++){
    for (let o = 0; o < dotAmount; o++){
      let d = dist(dotPoses[i][0], dotPoses[i][1], dotPoses[o][0], dotPoses[o][1]);
      
      if (d <= 50){
        let a = lerp(0, 50, 50 - d);
        stroke(255, 255, 255, a);
        line(dotPoses[i][0], dotPoses[i][1], dotPoses[o][0], dotPoses[o][1]);
      }
    }
  }
  
  // dot stuff
  
  for (let i = 0; i < dotAmount; i++){
    if (dotColorMode == "fill"){
      stroke(0,0,0,0);
      fill(dotColors[i][0], dotColors[i][1], dotColors[i][2]);
    }
    if (dotColorMode == "outline"){
      stroke(dotColors[i][0], dotColors[i][1], dotColors[i][2]);
      fill(255, 255, 255);
    }
    if (dotColorMode == "none"){
      stroke(255, 255, 255);
      fill(255, 255, 255);
    }
    
    circle(dotPoses[i][0], dotPoses[i][1], 15);
    
    dotPoses[i][0] += dotSpeeds[i][0];
    dotPoses[i][1] += dotSpeeds[i][1];

    if (dotPoses[i][0] > width - 15 / 2 || dotPoses[i][0] < 15 / 2){
      dotSpeeds[i][0] = -dotSpeeds[i][0];
    }
    if (dotPoses[i][1] > height - 15 / 2 || dotPoses[i][1] < 15 / 2){
      dotSpeeds[i][1] = -dotSpeeds[i][1];
    }
  }
}