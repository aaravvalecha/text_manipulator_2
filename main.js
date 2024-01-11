function setup(){

    video=createCapture(VIDEO);
    video.size(500,500);

    canvas=createCanvas(550,450);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,model_loaded);
    poseNet.on('pose',got_poses);
}
function model_loaded(){
    console.log("model loaded");
}