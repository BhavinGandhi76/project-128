leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;

function setup(){

     canvas = createCanvas(500,500);
     canvas.position(710,200);
     video = createCapture(VIDEO);
     video.hide();

     poseNet = ml5.poseNet(video, modelloaded);
     poseNet.on("pose", gotPoses);
 }

 function modelloaded(){
     console.log("PoseNet is Initialised");
 }

 function gotPoses(results){
     console.log(results);

     leftwristx = results[0].pose.leftWrist.x;
     leftwristy = results[0].pose.leftWrist.y;
     rightwristx = results[0].pose.rightWrist.x;
     rightwristy = results[0].pose.rightWrist.y;

     console.log("Left wrist X = " + leftwristx + ", Left wrist Y = " + leftwristy + " and Right wrist x = " + rightwristx + "Right wrist Y = " + rightwristy);
 }

 function preload(){
    song = loadSound("music.mp3");
  }
 
  function draw(){
      image(video, 0, 0, 600, 500);
  }
 
  function Play(){
      song.play();
      song.rate(1);
      song.setVolume(1);
  }