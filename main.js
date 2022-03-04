function preload(){

}
function setup(){
    video= createCapture(VIDEO)
    video.size(800, 800)
    video.position(100, 140)
    canvas= createCanvas(800, 600)
    canvas.position(1070, 240)
    posenet= ml5.poseNet(video, modelLoaded)
    posenet.on("pose", gotResult)
}
function modelLoaded(){
    console.log("Model Loaded Successfully!")
}
function gotResult(result){
    if(result.length>0){
        console.log(result)
        leftWristX= result[0].pose.leftWrist.x
        leftWristY= result[0].pose.leftWrist.y
        rightWristX= result[0].pose.rightWrist.x
        rightWristY= result[0].pose.rightWrist.y
        noseX= result[0].pose.nose.x
        noseY= result[0].pose.nose.y
        diff= Math.floor(leftWristX-rightWristX)
        console.log(diff)
    }
}
function draw(){

}