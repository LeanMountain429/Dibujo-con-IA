var varnoseX
var varnoseY
function preload(){
    console.log("C ME ESCUCHA???? OLA???? ME OLLEN????? GUAU!! NO ME OLLEN!!!!! BYE!!!??")
    img= loadImage("CUADRADO PRO.png")
}
function setup(){
    camaweb= createCapture(VIDEO)
    caanvaas= createCanvas(500,400)
    camaweb.position(0,250)
    caanvaas.position(1420,250)
    neurored= ml5.poseNet(camaweb,chicargo)
    neurored.on("pose",pooseeNeet)
}
function chicargo(){
    console.log("CHI CARGO MENSO QUE NO VES???!!!")
}
function pooseeNeet(results){
    console.log(results)
    varnoseY= results[0].pose.nose.y
    varnoseX= results[0].pose.nose.x
    varleftwristX= results[0].pose.leftWrist.x
    varrightwristX= results[0].pose.rightWrist.x
    diferencia= varleftwristX-varrightwristX
}
function draw(){
    background("white")
    image(img,varnoseX,varnoseY,diferencia,diferencia)
}