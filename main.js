

function setup(){
  canvas1 =  createCanvas(700,600);
  canvas1.parent("canvas_div");
  video = createCapture(VIDEO);
  video.size("700,600");
  video.hide();
poseNet = ml5.poseNet('video',modelLoaded);
}
function modelLoaded(){
  console.log("Model loaded");
}

function draw(){
image(video,0,0,700,600);
}