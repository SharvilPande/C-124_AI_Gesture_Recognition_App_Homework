function preload() {
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.position(870, 250);
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.position(200, 200)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResults);
}

function modelLoaded() {
    console.log("Model has been initialized");
}

function gotResults(results, error) {
    if (results.length > 0) {
       console.log(results);
    } else {
        console.error(error);
    }
}

function draw() {
    background('#eb8810');
}