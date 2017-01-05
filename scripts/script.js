var canvas = document.getElementById("arena");
canvas.width = (0.9377402)*window.innerWidth;
canvas.height = (0.508196721)*canvas.width;

var gameArena = canvas.getContext("2d");
var rect = canvas.getBoundingClientRect();         // which rect area it gives
var loading = 0;
var currentScore = 0;
var lives = 3;
var iterations = 0;
var gameMode = 0;	//0 -> Arcade		1 -> Survival
var volume = 1;
var particles = 1;
var runtime1 = 0;


var menu_click = new Audio();                     // why loading ??
menu_click.onload = function() {          
	loading++;
}
menu_click.src = "sounds/sound1.wav";

var mainShip = new Image();
mainShip.onload = function() {
	loading++;
}
mainShip.src = "sprites/turret1.png";


var enemyShip = new Image();
enemyShip.onload = function() {
	loading++;
}
enemyShip.src = "sprites/spacestation2.png";

var secondShip = new Image();
secondShip.onload = function() {
	loading++;
}
secondShip.src = "sprites/turret_angle.png"; 

var secondShip2 = new Image();
secondShip2.onload = function() {
	loading++;
}
secondShip2.src = "sprites/turret_angle2.png";  

var asteroid = new Image();
asteroid.onload = function() {
	loading++;
}
asteroid.src = "sprites/asteroid.png";

var asteroid1 = new Image();
asteroid1.onload = function() {
	loading++;
}
asteroid1.src = "sprites/asteroid1.png";

var spaceStation = new Image();
spaceStation.onload = function() {
	loading++;
}
spaceStation.src = "sprites/spacestation.png";

var life = new Image();
life.onload = function() {
	loading++;
}
life.src = "sprites/life.png";

var life1 = new Image();
life1.onload = function() {
	loading++;
}
life1.src = "sprites/life1.png";

var abtUs1 = new Image();
abtUs1.onload = function() {
	loading++;
}
abtUs1.src = "sprites/turret2.png";

var abtUs2 = new Image();
abtUs2.onload = function() {
	loading++;
}
abtUs2.src = "sprites/turret1rot.png";

var asteroidPoly = {                 //??
	x1: 20,
	y1: 0,
	x2: 72,
	y2: 25,
	x3: 72,
	y3: 45,
	x4: 36,
	y4: 85,
	x5: 0,
	y5: 60,
};

var enemyTriangle = {                 //??
	x1: 0,
	y1: 0,
	x2: 120,
	y2: 25,
	x3: 45,
	y3: 114.43
};

var width = canvas.width;
var height = canvas.height;
var cornerRadius = 20*(width/1220);            // any specific reason for choosing this radius 
var midx = width/2;
var midy = height/2;

var mousex,mousey;                            // ??

//Most important Variables
var sceneNumber = 0;
var levelNumber = 1;
//End

canvas.addEventListener('mousemove', function(evt) {          // ??
	mousex = evt.clientX - rect.left;
	mousey = evt.clientY - rect.top;
}, false)

canvas.addEventListener('click', function(evt) {              
	if(sceneNumber == 1)
	{
		mainMenu_click();
	}
	if(sceneNumber == 3)
	{
		settings_click();
	}
	if(sceneNumber == 4)
	{
		instructions_click();
	}
	if(sceneNumber == 5)
	{
		aboutUs_click();
	}
	if(sceneNumber == 6)
	{
		Level_click();      // ??
	}
})

canvas.addEventListener('mousedown', function(evt) {
	if(sceneNumber == 6)
	{
		Level_mousedown();     //??
	}
})

canvas.addEventListener('mouseup', function(evt) {
	if(sceneNumber == 6)
	{
		Level_mouseup();       //??
	}
})

var gameTimer;
var gameSpeed = 25;

//Adding initial offset to drawMovingSpace() functioj
for(var spaceOffset = 0;spaceOffset < 300;spaceOffset++)
{
	drawMovingSpace();          // ??
}
//End offset
drawParticleFlag = true;

update();

function update()
{
	if(sceneNumber == 0)
	{
		gameTimer = setInterval(loadingScreen, gameSpeed);
	}
	if(sceneNumber == 1)
	{
		gameTimer = setInterval(mainMenu, gameSpeed);
	}
	//Scene Number 2 has been deleted
	if(sceneNumber == 3)
	{
		gameTimer = setInterval(settings, gameSpeed);
	}
	if(sceneNumber == 4)
	{
		gameTimer = setInterval(instructions, gameSpeed);
	}
	if(sceneNumber == 5)
	{
		gameTimer = setInterval(aboutUs, gameSpeed);
	}
	if(sceneNumber == 6)
	{
		gameTimer = setInterval(Level, gameSpeed);    //
	}
}

function drawRoundedRectangle(x, y, width, height, color, lineWidth)
{
	gameArena.lineWidth = lineWidth;
	gameArena.beginPath();
	gameArena.strokeStyle = color;
	gameArena.moveTo(x+cornerRadius, y);
	gameArena.lineTo(x+width-cornerRadius, y);
	gameArena.arcTo(x+width, y, x+width, y+cornerRadius, cornerRadius);
	gameArena.lineTo(x+width, y+height-cornerRadius);
	gameArena.arcTo(x+width, y+height, x+width-cornerRadius, y+height, cornerRadius);
	gameArena.lineTo(x+cornerRadius, y+height);
	gameArena.arcTo(x, y+height, x, y+height-cornerRadius, cornerRadius);
	gameArena.lineTo(x, y+cornerRadius);
	gameArena.arcTo(x,y, x+cornerRadius, y, cornerRadius);
	gameArena.stroke();
}

function drawRay(x1, y1, x2, y2)
{
	gameArena.lineWidth = 4;
	gameArena.beginPath();
	gameArena.strokeStyle = "#E6FFFF";
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	gameArena.moveTo(x1, y1);
	gameArena.lineTo(x2, y2);
	gameArena.stroke();
	gameArena.beginPath();
	gameArena.arc(x1, y1, 7, 0, 2*Math.PI,true, true);
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fill();
	gameArena.beginPath();
	gameArena.arc(x2, y2, 7, 0, 2*Math.PI, true);
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fill();
}


function drawMirror(x1, y1, x2, y2, flag, drag)
{
	gameArena.lineWidth = 4;
	gameArena.beginPath();
	gameArena.strokeStyle = "#D0D0D0";
	if(flag)
	{
		gameArena.shadowBlur = 10;
		gameArena.shadowColor = "#E0E0E0";
	}
	else
	{
		gameArena.shadowBlur = 0;
	}
	gameArena.moveTo(x1, y1);
	gameArena.lineTo(x2, y2);
	gameArena.stroke();
	gameArena.beginPath();
	gameArena.arc(x1, y1, 7*(width/1220), 0, 2*Math.PI, true);
	if(drag) gameArena.fillStyle = "#303030";
	else gameArena.fillStyle = "#FF2727";                 //??   
	gameArena.fill();
	gameArena.beginPath();
	gameArena.arc(x2, y2, 7*(width/1220), 0, 2*Math.PI, true);
	if(drag) gameArena.fillStyle = "#303030";
	else gameArena.fillStyle = "#FF2727";
	gameArena.fill();
}

function drawMirrorCircular(x1, y1, flag, drag) 
{
	gameArena.lineWidth = 4;
	gameArena.beginPath();
	gameArena.strokeStyle = "#D0D0D0";
	if(flag)
	{
		gameArena.shadowBlur = 10;
		gameArena.shadowColor = "#E0E0E0";
	}
	else
	{
		gameArena.shadowBlur = 0;
	}
	gameArena.moveTo(x1, y1);
	gameArena.arcTo(x1-50, y1, x1-50, y1+50, 50);
	gameArena.arcTo(x1-50, y1+100, x1, y1+100, 50);
	gameArena.stroke();
	gameArena.beginPath();
	gameArena.arc(x1, y1, 7*(width/1220), 0, 2*Math.PI, true);
	if(drag) gameArena.fillStyle = "#303030";
	else gameArena.fillStyle = "#FF2727";                 //??   
	gameArena.fill();
	gameArena.beginPath();
	gameArena.arc(x1, y1+100, 7*(width/1220), 0, 2*Math.PI, true);
	if(drag) gameArena.fillStyle = "#303030";
	else gameArena.fillStyle = "#FF2727";
	gameArena.fill();
}

function calculateAngle(x1, y1, x2, y2, x3, y3, x4, y4)          // for angle calculation 
{
	return (180.0/Math.PI)*(Math.atan2((((y2-y1)*(x3-x4))-((x2-x1)*(y3-y4))) ,(((x2-x1)*(x3-x4))+((y2-y1)*(y3-y4))) ));
}

function distancePoint(x1, y1, x2, y2)                          // for distance
{
	return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}

function checkLine(x, y, x2, y2)               // use                  // check if mousepointer is in between x,y  and  x2,y2
{
	if(mousex < Math.min(x,x2)-5.0 || mousex > Math.max(x,x2)+5.0 || mousey < Math.min(y,y2)-5.0 || mousey > Math.max(y,y2)+5.0)
		return false;
	var a = y2-y;                        // ax + by + c = 0 eq. of line 
	var b = x-x2;
	var c = y*(x2-x)-x*(y2-y);
	var distance = Math.abs((mousex*a+mousey*b+c)/Math.sqrt(a*a+b*b));
	if(distance <= 20.0)
		return true;
	else
		return false;
}

function checkLinePoint(x, y, x1, y1, x2, y2)            // it gives the true if distance between x,y and line x1,y1 and x2,y2 is less then 5 
{
	if(x <= Math.min(x1,x2)-5.0 || x >= Math.max(x1,x2)+5.0 || y <= Math.min(y1,y2)-5.0 || y >= Math.max(y1,y2)+5.0)
		return false;
	var a = y2-y1;
	var b = x1-x2;
	var c = y1*(x2-x1)-x1*(y2-y1);
	var distance = Math.abs((x*a+y*b+c)/Math.sqrt(a*a+b*b));
	if(distance <= 5.0)
		return true;
	else
		return false;
}

function checkCirclePoint(xc, yc, x1, y1, x2, y2, r)            // it gives the true if distance between x,y and line x1,y1 and x2,y2 is less then 5 
{
	if(x1 == x2)  
	    return false; 
    else 
        var m = (y2-y1)/(x2-x1);

	var c = y1 - m*x1;
	var b = m*(c-yc)-xc;
	var a = m*m+1 ;
	var D = 2*m*xc*(yc-c)-(c-yc)*(c-yc)-m*m*xc*xc+a*r*r;
	if(D>0)
		var d = Math.sqrt(D);
    else
    	return false;

    var x_int1 = (-b+d)/a; 
    var x_int2 = (-b-d)/a;
    var y_int1 = m*x_int1 + c;
    var y_int2 = m*x_int2 + c;
    if(x_int1 < xc){
    	var distance1 = distancePoint(x_int1, y_int1, x2, y2);
    	if(distance1 <= 5)
    		return true;
    	else 
    		return false;
    }
    else {
    	var distance2 = distancePoint(x_int2, y_int2, x2, y2);
    	if(distance2 <= 5)
    		return true;
    	else 
    		return false;
    }
}
function calculateCircleAngle(x1, y1, x2, y2, x3, y3)          // if not working then use mod
{
	return (180.0/Math.PI)*(Math.atan2((y1-y2)*(x3-x2)-(y3-y2)*(x1-x2), (y1-y2)*(y3-y2)+(x1-x2)*(x3-x2)));
}

function loadingScreen()
{
	iterations++;

	gameArena.clearRect(0, 0, width, height);
	gameArena.font = "37px Times New Roman";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.textAlign = "center";
	gameArena.fillText("Loading...", midx, midy-30*(width/1220));

	//Reduntant Data                // why ??
	gameArena.font = "37px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.textAlign = "center";
	gameArena.fillText("Loading...", width+100*(width/1220), midy-30*(width/1220));
	gameArena.font = "37px Complex";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.textAlign = "center";
	gameArena.fillText("Loading...", width+100*(width/1220), midy-30*(width/1220));
	gameArena.font = "37px DJB";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.textAlign = "center";
	gameArena.fillText("Loading...", width+100*(width/1220), midy-30*(width/1220));
	//End

	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	gameArena.beginPath();
	gameArena.lineWidth = 5;
	gameArena.strokeStyle = "#E6FFFF";
	gameArena.rect(midx-100*(width/1220), midy-20*(width/1220), 200*(width/1220), 40*(width/1220));
	gameArena.stroke();
	gameArena.beginPath();
	gameArena.fillStyle = "#18CAE6";
	gameArena.rect(midx-95*(width/1220), midy-15*(width/1220), (200-10)*((loading/11)*(width/1220)), 30*(width/1220));
	gameArena.fill();
	if(loading == 11 && iterations >= 80)       // why loading is 7 here ?? not much clear 
	{
		clearInterval(gameTimer);
		sceneNumber++;
		update();
	}
}

function drawLeftRoundedRectangle(x, y, width, height, color, lineWidth)     // for which it is used
{
	gameArena.lineWidth = lineWidth;
	gameArena.beginPath();
	gameArena.strokeStyle = color;
	gameArena.moveTo(x+cornerRadius, y);
	gameArena.lineTo(x+width, y);
	gameArena.lineTo(x+width, y+height);
	gameArena.lineTo(x+cornerRadius, y+height);
	gameArena.arcTo(x, y+height, x, y+height-cornerRadius, cornerRadius);
	gameArena.lineTo(x, y+cornerRadius);
	gameArena.arcTo(x,y, x+cornerRadius, y, cornerRadius);
	gameArena.stroke();
}   

function drawRightRoundedRectangle(x, y, width, height, color, lineWidth)
{
	gameArena.lineWidth = lineWidth;
	gameArena.beginPath();
	gameArena.strokeStyle = color;
	gameArena.moveTo(x, y);
	gameArena.lineTo(x+width-cornerRadius, y);
	gameArena.arcTo(x+width, y, x+width, y+cornerRadius, cornerRadius);
	gameArena.lineTo(x+width, y+height-cornerRadius);
	gameArena.arcTo(x+width, y+height, x+width-cornerRadius, y+height, cornerRadius);
	gameArena.lineTo(x, y+height);
	gameArena.lineTo(x, y);
	gameArena.stroke();
}
