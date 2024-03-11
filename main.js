noseX = 0
noseY = 0
function preload(){
    nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}
function setup(){
    canvas = createCanvas(750, 533)
    canvas.center()

    img = createCapture(VIDEO)
    img.hide()

    poseNose = ml5.poseNet(img, loading)
    poseNose.on("pose", posingNosing)
}
function draw(){
    image(img, 0, 0, 750, 533)
    image(nose, noseX + 135, noseY + 107, 40, 40)
    //fill(250, 0, 30)
    //stroke(255, 0, 0)
    //circle(noseX + 146, noseY + 120, 30)
}

function loading(){
    console.log("Throwing bananas on the floor and wasting time...")
}
function posingNosing(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
    }
}

function posetheNose(){
    save("iWasHiredAsAClown")
}