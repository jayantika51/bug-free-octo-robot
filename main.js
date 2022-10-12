noseX = "";
noseY = "";
GameStatus = "";

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	
	instializeInSetup(mario);


video= createCapture(VIDEO);
video.size(450,335);
video.parent('game_console');

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw() {
	game();
}

function modelLoaded(){
	console.log('Model Loaded!');
}

function gotPoses(results)
{
	if(results.length >0)
	{
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
		console.log("noseX = " + noseX +", noseY = " + nose Y);

	}
}

function game()
{
	instializeInDraw();
	moveEnvironment(mario);
	drawSprites();

}

function startGame()
{
	GameSatus= "start";
	DocumentFragment.getElementById("status").innerHTML = "Game Is Loading";
}



