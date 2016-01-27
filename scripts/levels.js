//Level 1

var mirrors_level1 = [];
var init_level1 = false;
var mirrorCount_level1 = 2;
var mirrorDrag_level1 = [];
var minutes_level1 = 0;
var seconds_level1 = 0;
var runtime_level1 = 0;
var mark_level1 = false;
var ex_level1;
var ey_level1 = 100;
var fx_level1;
var fy_level1 = 100;
var enemyDestroyed_level1 = false;
var a_level1 = [];
var gameOver_level1 = false;

function initialiseLevel1()
{
	mirrors_level1 = [];
	mirrorDrag_level1 = [];
	a_level1 = [];
	minutes_level1 = 0;
	seconds_level1 = 0;
	runtime_level1 = 0;
	enemyDestroyed_level1 = false;
	gameOver_level1 = false;
	ex_level1 = width-140;
	fx_level1 = midx-70;
	myMirror = {
		x: 200,
		width: 100,
		y: 150,
		height: 100
	};
	mirrors_level1.push(myMirror);
	mirrorDrag_level1.push(false);
	myMirror = {
		x: 600,
		width: 100,
		y: 400,
		height: -100
	};
	mirrors_level1.push(myMirror);
	mirrorDrag_level1.push(false);

	myAsteroid = {
		x: 1000,
		y: 100
	};
	a_level1.push(myAsteroid);
	myAsteroid = {
		x: 1000,
		y: 200
	};
	a_level1.push(myAsteroid);
	myAsteroid = {
		x: 1100,
		y: 240
	};
	a_level1.push(myAsteroid);

	init_level1 = true;
}

function drawGUI_level1()
{
	var colorCheck;
	gameArena.shadowBlur = 10;
	gameArena.shadowColor = "#18CAE6";
	gameArena.drawImage(mainShip, width-152, height-94, 150, 89);
	gameArena.drawImage(restartIcon, width-40, 8, 30, 30);

	gameArena.shadowBlur = 50*Math.abs(Math.sin(runtime_level1/20));
	gameArena.shadowColor = "#780000";
	gameArena.drawImage(enemyShip, ex_level1, ey_level1, 120, 114.43);

	gameArena.shadowBlur = 10;
	gameArena.shadowColor = "#0DA114";
	gameArena.drawImage(spaceStation, fx_level1, fy_level1);
	gameArena.lineWidth = 0.05;
	gameArena.beginPath();
	gameArena.strokeStyle = "#0DA114";
	gameArena.arc(fx_level1+76, fy_level1+83, 82, 0, 2*Math.PI);
	gameArena.stroke();

	gameArena.shadowBlur = 10;
	gameArena.shadowColor = "#B32D00";
	for(var i = 0;i < a_level1.length;i++)
	{
		gameArena.drawImage(asteroid, a_level1[i].x, a_level1[i].y);
	}

	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-80, midy-350, 160, 90, "#E6FFFF", 6);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	var displayMinutes = (minutes_level1<10)?("0"+minutes_level1):(minutes_level1);
	var displaySeconds = (seconds_level1<10)?("0"+seconds_level1):(seconds_level1);
	gameArena.fillText(displayMinutes + ":" + displaySeconds, midx, midy-275);

	gameArena.shadowBlur = 7;
	gameArena.shadowColor = "#E6FFFF";
	colorCheck = "#18CAE6";
	if(mousex >= -40 && mousex <= 50 && mousey >= midy-350 && mousey <= midy-260) {
		colorCheck = "#E6FFFF";
		mark_level1 = true;
	}
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(-40, midy-350, 90, 90, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<", 20, midy-270);

	gameArena.shadowBlur = 7;
	gameArena.shadowColor = "#E6FFFF";
	colorCheck = "#18CAE6";
	if(mousex >= width-52 && mousex <= width+38 && mousey >= midy-350 && mousey <= midy-260) {
		colorCheck = "#E6FFFF";
		mark_level1 = true;
	}
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(width-52, midy-350, 90, 90, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<", 20, midy-270);
}

function level1()
{
	if(!init_level1)
	{
		initialiseLevel1();
	}

	mark_level1 = false;
	runtime_level1++;

	gameArena.clearRect(0, 0, width, height);
	drawLevelSpace();

	traceRay_level1();


	if(runtime_level1%40 == 0)
	{
		seconds_level1++;
		if(seconds_level1 >= 60)
		{
			minutes_level1++;
			seconds_level1 -= 60;
		}
	}

	for(var i = 0;i < mirrorCount_level1;i++)
	{
		var flag;
		if(checkLine(mirrors_level1[i].x, mirrors_level1[i].y, mirrors_level1[i].x+mirrors_level1[i].width, mirrors_level1[i].y+mirrors_level1[i].height) == 1)
		{
			mark_level1 = true;
			flag = true;
		}
		else
		{
			flag = false;
		}
		drawMirror(mirrors_level1[i].x, mirrors_level1[i].y, mirrors_level1[i].x+mirrors_level1[i].width, mirrors_level1[i].y+mirrors_level1[i].height, flag);
	}
	
	drawGUI_level1();

	if(!mark_level1)
	{
		canvas.style.cursor = "auto";
	}
	else
	{
		canvas.style.cursor = "pointer";
	}

	if(enemyDestroyed_level1)
	{
		level1Finished();
	}

	if(gameOver_level1)
	{
		level1_gameOver();
	}
}

function level1_mousedown()
{
	for(var i = 0;i < mirrorCount_level1;i++)
	{
		var flag;
		if(checkLine(mirrors_level1[i].x, mirrors_level1[i].y, mirrors_level1[i].x+mirrors_level1[i].width, mirrors_level1[i].y+mirrors_level1[i].height) == 1)
		{
			flag = true;
		}
		else
		{
			flag = false;
		}
		if(flag)
		{
			mirrorDrag_level1[i] = true;
			canvas.addEventListener("mousemove", level1_mousemove);
		}
	}
}

function level1_mouseup()
{
	for(var i = 0;i < mirrorCount_level1;i++)
	{
		mirrorDrag_level1[i] = false;
		canvas.removeEventListener("mousemove", level1_mousemove);
	}
}

function level1_mousemove(evt)
{
	for(var i = 0;i < mirrorCount_level1;i++)
	{
		if(mirrorDrag_level1[i])
		{
			mirrors_level1[i].x = mousex;
			mirrors_level1[i].y = mousey;
			break;
		}
	}
}

function traceRay_level1()
{
	var rayX = width-150, rayY = height-50;
	var currentAngle = 180.0;
	var offset;
	while(true)
	{
		var wow = intersection_level1(rayX, rayY, currentAngle);
		drawRay(rayX, rayY, wow.x, wow.y);
		if(!wow.intersect)
		{
			break;
		}
		var x1 = mirrors_level1[wow.mirrorIndex].x;
		var x2 = mirrors_level1[wow.mirrorIndex].width+x1;
		var y1 = mirrors_level1[wow.mirrorIndex].y;
		var y2 = mirrors_level1[wow.mirrorIndex].height+y1;
		offset = 2*(90-calculateAngle(x1,y1,x2,y2,rayX,rayY,wow.x,wow.y));
		currentAngle = ((-1)*(180/Math.PI)*Math.atan2((rayY-wow.y),(rayX-wow.x))) + offset;
		rayX = wow.x;
		rayY = wow.y;
		wow = intersection_level1(rayX, rayY, currentAngle);
		if(distancePoint(rayX, rayY, wow.x, wow.y) <= 5.0)
		{
			currentAngle -= 4*offset;
			wow = intersection_level1(rayX, rayY, currentAngle);
		}
		drawRay(rayX, rayY, wow.x, wow.y);
	}
}

function intersection_level1(rayX, rayY, rayTheta)
{
	var returnValue = {
		intersect : false,
		x : 0,
		y : 0,
		mirrorIndex : 0
	};
	var currX, currY;
	var radians = (rayTheta*Math.PI)/180.0;
	for(var r = 12;;r++)
	{
		currX = rayX + r*Math.cos(radians);
		currY = rayY - r*Math.sin(radians);
		for(var i = 0;i < mirrorCount_level1;i++)
		{
			if(checkLinePoint(currX, currY, mirrors_level1[i].x, mirrors_level1[i].y, mirrors_level1[i].x+mirrors_level1[i].width, mirrors_level1[i].y+mirrors_level1[i].height))
			{
				if(distancePoint(currX, currY, mirrors_level1[i].x, mirrors_level1[i].y) <= 10.0)
					returnValue.intersect = false;
				else if(distancePoint(currX, currY, mirrors_level1[i].x+mirrors_level1[i].width, mirrors_level1[i].y+mirrors_level1[i].height) <= 10.0)
					returnValue.intersect = false;
				else returnValue.intersect = true;
				returnValue.x = currX;
				returnValue.y = currY;
				returnValue.mirrorIndex = i;
				return returnValue;
			}
		}
		if(checkLinePoint(currX, currY, ex_level1 + enemyTriangle.x1, ey_level1 + enemyTriangle.y1, ex_level1 + enemyTriangle.x2, ey_level1 + enemyTriangle.y2))
		{
			returnValue.x = currX;
			returnValue.y = currY;
			enemyDestroyed_level1 = true;
			return returnValue;
		}
		if(checkLinePoint(currX, currY, ex_level1 + enemyTriangle.x2, ey_level1 + enemyTriangle.y2, ex_level1 + enemyTriangle.x3, ey_level1 + enemyTriangle.y3))
		{
			returnValue.x = currX;
			returnValue.y = currY;
			enemyDestroyed_level1 = true;
			return returnValue;
		}
		if(checkLinePoint(currX, currY, ex_level1 + enemyTriangle.x3, ey_level1 + enemyTriangle.y3, ex_level1 + enemyTriangle.x1, ey_level1 + enemyTriangle.y1))
		{
			returnValue.x = currX;
			returnValue.y = currY;
			enemyDestroyed_level1 = true;
			return returnValue;
		}
		for(var i = 0;i < a_level1.length;i++)
		{
			if(checkLinePoint(currX, currY, a_level1[i].x+asteroidPoly.x1, a_level1[i].y+asteroidPoly.y1, a_level1[i].x+asteroidPoly.x2, a_level1[i].y+asteroidPoly.y2) || checkLinePoint(currX, currY, a_level1[i].x+asteroidPoly.x2, a_level1[i].y+asteroidPoly.y2, a_level1[i].x+asteroidPoly.x3, a_level1[i].y+asteroidPoly.y3) || checkLinePoint(currX, currY, a_level1[i].x+asteroidPoly.x3, a_level1[i].y+asteroidPoly.y3, a_level1[i].x+asteroidPoly.x4, a_level1[i].y+asteroidPoly.y4) || checkLinePoint(currX, currY, a_level1[i].x+asteroidPoly.x4, a_level1[i].y+asteroidPoly.y4, a_level1[i].x+asteroidPoly.x5, a_level1[i].y+asteroidPoly.y5) || checkLinePoint(currX, currY, a_level1[i].x+asteroidPoly.x5, a_level1[i].y+asteroidPoly.y5, a_level1[i].x+asteroidPoly.x1, a_level1[i].y+asteroidPoly.y1))
			{
				returnValue.x = currX;
				returnValue.y = currY;
				return returnValue;
			}
		}
		if(distancePoint(currX, currY, fx_level1+76, fy_level1+80) <= 82)
		{
			returnValue.x = currX;
			returnValue.y = currY;
			gameOver_level1 = true;
			return returnValue;
		}
		if(currY < 0 || currY > height || currX < 0 || currX > width)
		{
			returnValue.x = currX;
			returnValue.y = currY;
			return returnValue;
		}
	}
}

function level1_click()
{
	if(!enemyDestroyed_level1 && !gameOver_level1)
	{
		if(mousex >= -40 && mousex <= 50 && mousey >= midy-350 && mousey <= midy-260) {
			enemyDestroyed_level1 = false;
			gameOver_level1 = false;
			minutes_level1 = 0;
			seconds_level1 = 0;
			runtime_level1 = 0;
			init_level1 = false;
			mirrors_level1 = [];
			sceneNumber = 2;
			for(var i = 0;i < mirrorCount_level1;i++)
			{
				mirrorDrag_level1[i] = false;
				canvas.removeEventListener("mousemove", level1_mousemove);
			}
			clearInterval(gameTimer);
			update();
			menu_click.play();
		}
		if(mousex >= width-52 && mousex <= width+38 && mousey >= midy-350 && mousey <= midy-260) {
			enemyDestroyed_level1 = false;
			gameOver_level1 = false;
			minutes_level1 = 0;
			seconds_level1 = 0;
			runtime_level1 = 0;
			init_level1 = false;
			for(var i = 0;i < mirrorCount_level1;i++)
			{
				mirrorDrag_level1[i] = false;
				canvas.removeEventListener("mousemove", level1_mousemove);
			}
			clearInterval(gameTimer);
			update();
			menu_click.play();
		}
	}
	else if(enemyDestroyed_level1)
	{
		if(mousex > midx-190 && mousex < midx-90 && mousey > midy-45+45 && mousey < midy-45+100)
		{
			enemyDestroyed_level1 = false;
			gameOver_level1 = false;
			init_level1 = false;
			sceneNumber = 2;
			clearInterval(gameTimer);
			update();
			menu_click.play();
		}
		if(mousex > midx-50 && mousex < midx+50 && mousey > midy-45+45 && mousey < midy-45+100)
		{
			enemyDestroyed_level1 = false;
			gameOver_level1 = false;
			init_level1 = false;
			clearInterval(gameTimer);
			update();
			menu_click.play();
		}
		if(mousex > midx+90 && mousex < midx+190 && mousey > midy-45+45 && mousey < midy-45+100)
		{
			enemyDestroyed_level1 = false;
			gameOver_level1 = false;
			init_level1 = false;
			levelNumber++;
			clearInterval(gameTimer);
			update();
			menu_click.play();
		}
	}
	else
	{
		if(mousex > midx-190+70 && mousex < midx-90+70 && mousey > midy-45+45 && mousey < midy-45+100)
		{
			enemyDestroyed_level1 = false;
			gameOver_level1 = false;
			init_level1 = false;
			sceneNumber = 2;
			clearInterval(gameTimer);
			update();
			menu_click.play();
		}
		if(mousex > midx-50+70 && mousex < midx+50+70 && mousey > midy-45+45 && mousey < midy-45+100)
		{
			enemyDestroyed_level1 = false;
			gameOver_level1 = false;
			init_level1 = false;
			clearInterval(gameTimer);
			update();
			menu_click.play();
		}
	}
}

function level1Finished()
{
	canvas.style.cursor = "auto";
	minutes_level1 = 0;
	seconds_level1 = 0;
	runtime_level1 = 0;
	init_level1 = false;
	clearInterval(gameTimer);
	for(var i = 0;i < mirrorCount_level1;i++)
	{
		mirrorDrag_level1[i] = false;
		canvas.removeEventListener("mousemove", level1_mousemove);
	}
	gameArena.clearRect(midx-220+2, midy-45-45+2, 440-4, 180-4);
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-220, midy-45-45, 440, 180, "#E6FFFF", 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Level Completed!", midx, midy-45+15);
	gameTimer = setInterval(drawLevel1Final, gameSpeed);
}

function level1_gameOver()
{
	canvas.style.cursor = "auto";
	minutes_level1 = 0;
	seconds_level1 = 0;
	runtime_level1 = 0;
	init_level1 = false;
	clearInterval(gameTimer);
	for(var i = 0;i < mirrorCount_level1;i++)
	{
		mirrorDrag_level1[i] = false;
		canvas.removeEventListener("mousemove", level1_mousemove);
	}
	gameArena.clearRect(midx-220+2, midy-45-45+2, 440-4, 180-4);
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-220, midy-45-45, 440, 180, "#E6FFFF", 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Game Over!", midx, midy-45+15);
	gameTimer = setInterval(drawLevel1GO, gameSpeed);
}

function drawLevel1Final()
{
	gameArena.clearRect(midx-220+14, midy-45+25, 440-28, 100);
	mark_level1 = false;
	var colorCheck;
	var hoverCheck = 0;

	if(mousex > midx-190 && mousex < midx-90 && mousey > midy-45+45 && mousey < midy-45+100)
	{
		mark_level1 = true;
		hoverCheck = 1;
	}
	else
	{
		hoverCheck = 0;
	}
	gameArena.shadowBlur = 15;
	gameArena.shadowColor = "#E6FFFF";
	if(hoverCheck == 1) colorCheck = "#E6FFFF";
	else colorCheck = "#18CAE6";
	drawRoundedRectangle(midx-190, midy-45+45, 100, 60, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<",midx-143,midy-45+92);
	if(mousex > midx-50 && mousex < midx+50 && mousey > midy-45+45 && mousey < midy-45+100)
	{
		mark_level1 = true;
		hoverCheck = 1;
	}
	else
	{
		hoverCheck = 0;
	}
	gameArena.shadowBlur = 15;
	gameArena.shadowColor = "#E6FFFF";
	if(hoverCheck == 1) colorCheck = "#E6FFFF";
	else colorCheck = "#18CAE6";
	drawRoundedRectangle(midx-50, midy-45+45, 100, 60, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.shadowBlur = 0;
	gameArena.drawImage(restartIcon, midx-15, midy-45+60, 30, 30);
	if(mousex > midx+90 && mousex < midx+190 && mousey > midy-45+45 && mousey < midy-45+100)
	{
		mark_level1 = true;
		hoverCheck = 1;
	}
	else
	{
		hoverCheck = 0;
	}
	gameArena.shadowBlur = 15;
	gameArena.shadowColor = "#E6FFFF";
	if(hoverCheck == 1) colorCheck = "#E6FFFF";
	else colorCheck = "#18CAE6";
	drawRoundedRectangle(midx+90, midy-45+45, 100, 60, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText(">",midx+140,midy-45+92);

	if(mark_level1)
	{
		canvas.style.cursor = "pointer";
	}
	else
	{
		canvas.style.cursor = "auto";
	}
}

function drawLevel1GO()
{
	gameArena.clearRect(midx-220+14, midy-45+25, 440-28, 100);
	mark_level1 = false;
	var colorCheck;
	var hoverCheck = 0;

	if(mousex > midx-190+70 && mousex < midx-90+65 && mousey > midy-45+45 && mousey < midy-45+100)
	{
		mark_level1 = true;
		hoverCheck = 1;
	}
	else
	{
		hoverCheck = 0;
	}
	gameArena.shadowBlur = 15;
	gameArena.shadowColor = "#E6FFFF";
	if(hoverCheck == 1) colorCheck = "#E6FFFF";
	else colorCheck = "#18CAE6";
	drawRoundedRectangle(midx-190+70, midy-45+45, 100, 60, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<",midx-143+70,midy-45+92);

	if(mousex > midx-50+70 && mousex < midx+50+70 && mousey > midy-45+45 && mousey < midy-45+100)
	{
		mark_level1 = true;
		hoverCheck = 1;
	}
	else
	{
		hoverCheck = 0;
	}
	gameArena.shadowBlur = 15;
	gameArena.shadowColor = "#E6FFFF";
	if(hoverCheck == 1) colorCheck = "#E6FFFF";
	else colorCheck = "#18CAE6";
	drawRoundedRectangle(midx-50+70, midy-45+45, 100, 60, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.shadowBlur = 0;
	gameArena.drawImage(restartIcon, midx-15+70, midy-45+60, 30, 30);

	if(mark_level1)
	{
		canvas.style.cursor = "pointer";
	}
	else
	{
		canvas.style.cursor = "auto";
	}
}

//Level 2

var mirrors_level2 = [];
var init_level2 = false;
var mirrorCount_level2 = 4;
var mirrorDrag_level2 = [];
var minutes_level2 = 0;
var seconds_level2 = 0;
var runtime_level2 = 0;
var mark_level2 = false;
var ex_level2;
var ey_level2 = 80;
var enemyDestroyed_level2 = false;
var a_level2 = [];

function initialiseLevel2()
{
	mirrors_level2 = [];
	mirrorDrag_level2 = [];
	a_level2 = [];
	minutes_level2 = 0;
	seconds_level2 = 0;
	runtime_level2 = 0;
	enemyDestroyed_level2 = false;
	ex_level2 = 20;
	myMirror = {
		x: 200,
		width: 0,
		y: 150,
		height: 100
	};
	mirrors_level2.push(myMirror);
	mirrorDrag_level2.push(false);
	myMirror = {
		x: 600,
		width: 0,
		y: 400,
		height: 100
	};
	mirrors_level2.push(myMirror);
	mirrorDrag_level2.push(false);
	myMirror = {
		x: 600,
		width: 0,
		y: 150,
		height: 100
	};
	mirrors_level2.push(myMirror);
	mirrorDrag_level2.push(false);
	myMirror = {
		x: 100,
		width: 4,
		y: 250,
		height: 100
	};
	mirrors_level2.push(myMirror);
	mirrorDrag_level2.push(false);
	init_level2 = true;
}

function drawGUI_level2()
{
	var colorCheck;
	gameArena.shadowBlur = 0;
	gameArena.drawImage(mainShip, width-152, height-94, 150, 89);
	gameArena.drawImage(restartIcon, width-40, 8, 30, 30);

	gameArena.shadowBlur = 40*Math.abs(Math.sin(runtime_level2/20));
	gameArena.shadowColor = "#780000";
	gameArena.drawImage(enemyShip, ex_level2, ey_level2, 120, 114.43);

	gameArena.shadowBlur = 10;
	gameArena.shadowColor = "#B32D00";
	for(var i = 0;i < a_level2.length;i++)
	{
		gameArena.drawImage(asteroid, a_level2[i].x, a_level2[i].y);
	}

	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-80, midy-350, 160, 90, "#E6FFFF", 6);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	var displayMinutes = (minutes_level2<10)?("0"+minutes_level2):(minutes_level2);
	var displaySeconds = (seconds_level2<10)?("0"+seconds_level2):(seconds_level2);
	gameArena.fillText(displayMinutes + ":" + displaySeconds, midx, midy-275);

	gameArena.shadowBlur = 7;
	gameArena.shadowColor = "#E6FFFF";
	colorCheck = "#18CAE6";
	if(mousex >= -40 && mousex <= 50 && mousey >= midy-350 && mousey <= midy-260) {
		colorCheck = "#E6FFFF";
		mark_level2 = true;
	}
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(-40, midy-350, 90, 90, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<", 20, midy-270);

	gameArena.shadowBlur = 7;
	gameArena.shadowColor = "#E6FFFF";
	colorCheck = "#18CAE6";
	if(mousex >= width-52 && mousex <= width+38 && mousey >= midy-350 && mousey <= midy-260) {
		colorCheck = "#E6FFFF";
		mark_level2 = true;
	}
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(width-52, midy-350, 90, 90, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<", 20, midy-270);
}

function level2()
{
	if(!init_level2)
	{
		initialiseLevel2();
	}

	mark_level2 = false;
	runtime_level2++;

	gameArena.clearRect(0, 0, width, height);
	drawLevelSpace();

	traceRay_level2();


	if(runtime_level2%40 == 0)
	{
		seconds_level2++;
		if(seconds_level2 >= 60)
		{
			minutes_level2++;
			seconds_level2 -= 60;
		}
	}

	for(var i = 0;i < mirrorCount_level2;i++)
	{
		var flag;
		if(checkLine(mirrors_level2[i].x, mirrors_level2[i].y, mirrors_level2[i].x+mirrors_level2[i].width, mirrors_level2[i].y+mirrors_level2[i].height) == 1)
		{
			mark_level2 = true;
			flag = true;
		}
		else
		{
			flag = false;
		}
		drawMirror(mirrors_level2[i].x, mirrors_level2[i].y, mirrors_level2[i].x+mirrors_level2[i].width, mirrors_level2[i].y+mirrors_level2[i].height, flag);
	}
	
	drawGUI_level2();

	if(!mark_level2)
	{
		canvas.style.cursor = "auto";
	}
	else
	{
		canvas.style.cursor = "pointer";
	}

	if(enemyDestroyed_level2)
	{
		level2Finished();
	}
}

function level2_mousedown()
{
	for(var i = 0;i < mirrorCount_level2;i++)
	{
		var flag;
		if(checkLine(mirrors_level2[i].x, mirrors_level2[i].y, mirrors_level2[i].x+mirrors_level2[i].width, mirrors_level2[i].y+mirrors_level2[i].height) == 1)
		{
			flag = true;
		}
		else
		{
			flag = false;
		}
		if(flag)
		{
			mirrorDrag_level2[i] = true;
			canvas.addEventListener("mousemove", level2_mousemove);
		}
	}
}

function level2_mouseup()
{
	for(var i = 0;i < mirrorCount_level2;i++)
	{
		mirrorDrag_level2[i] = false;
		canvas.removeEventListener("mousemove", level2_mousemove);
	}
}

function level2_mousemove(evt)
{
	for(var i = 0;i < mirrorCount_level2;i++)
	{
		if(mirrorDrag_level2[i])
		{
			mirrors_level2[i].x = mousex;
			mirrors_level2[i].y = mousey;
			break;
		}
	}
}

function traceRay_level2()
{
	var rayX = width-150, rayY = height-50;
	var currentAngle = 180.0;
	var offset;
	while(true)
	{
		var wow = intersection_level2(rayX, rayY, currentAngle);
		drawRay(rayX, rayY, wow.x, wow.y);
		if(!wow.intersect)
		{
			break;
		}
		var x1 = mirrors_level2[wow.mirrorIndex].x;
		var x2 = mirrors_level2[wow.mirrorIndex].width+x1;
		var y1 = mirrors_level2[wow.mirrorIndex].y;
		var y2 = mirrors_level2[wow.mirrorIndex].height+y1;
		offset = 2*(90-calculateAngle(x1,y1,x2,y2,rayX,rayY,wow.x,wow.y));
		currentAngle = ((-1)*(180/Math.PI)*Math.atan2((rayY-wow.y),(rayX-wow.x))) + offset;
		rayX = wow.x;
		rayY = wow.y;
		wow = intersection_level2(rayX, rayY, currentAngle);
		if(distancePoint(rayX, rayY, wow.x, wow.y) <= 5.0)
		{
			currentAngle -= 4*offset;
			wow = intersection_level2(rayX, rayY, currentAngle);
		}
		drawRay(rayX, rayY, wow.x, wow.y);
	}
}

function intersection_level2(rayX, rayY, rayTheta)
{
	var returnValue = {
		intersect : false,
		x : 0,
		y : 0,
		mirrorIndex : 0
	};
	var currX, currY;
	var radians = (rayTheta*Math.PI)/180.0;
	for(var r = 12;;r++)
	{
		currX = rayX + r*Math.cos(radians);
		currY = rayY - r*Math.sin(radians);
		for(var i = 0;i < mirrorCount_level2;i++)
		{
			if(checkLinePoint(currX, currY, mirrors_level2[i].x, mirrors_level2[i].y, mirrors_level2[i].x+mirrors_level2[i].width, mirrors_level2[i].y+mirrors_level2[i].height))
			{
				if(distancePoint(currX, currY, mirrors_level2[i].x, mirrors_level2[i].y) <= 10.0)
					returnValue.intersect = false;
				else if(distancePoint(currX, currY, mirrors_level2[i].x+mirrors_level2[i].width, mirrors_level2[i].y+mirrors_level2[i].height) <= 10.0)
					returnValue.intersect = false;
				else returnValue.intersect = true;
				returnValue.x = currX;
				returnValue.y = currY;
				returnValue.mirrorIndex = i;
				return returnValue;
			}
		}
		if(checkLinePoint(currX, currY, ex_level2 + enemyTriangle.x1, ey_level2 + enemyTriangle.y1, ex_level2 + enemyTriangle.x2, ey_level2 + enemyTriangle.y2))
		{
			returnValue.x = currX;
			returnValue.y = currY;
			enemyDestroyed_level2 = true;
			return returnValue;
		}
		if(checkLinePoint(currX, currY, ex_level2 + enemyTriangle.x2, ey_level2 + enemyTriangle.y2, ex_level2 + enemyTriangle.x3, ey_level2 + enemyTriangle.y3))
		{
			returnValue.x = currX;
			returnValue.y = currY;
			enemyDestroyed_level2 = true;
			return returnValue;
		}
		if(checkLinePoint(currX, currY, ex_level2 + enemyTriangle.x3, ey_level2 + enemyTriangle.y3, ex_level2 + enemyTriangle.x1, ey_level2 + enemyTriangle.y1))
		{
			returnValue.x = currX;
			returnValue.y = currY;
			enemyDestroyed_level2 = true;
			return returnValue;
		}
		for(var i = 0;i < a_level2.length;i++)
		{
			if(checkLinePoint(currX, currY, a_level2[i].x+asteroidPoly.x1, a_level2[i].y+asteroidPoly.y1, a_level2[i].x+asteroidPoly.x2, a_level2[i].y+asteroidPoly.y2) || checkLinePoint(currX, currY, a_level2[i].x+asteroidPoly.x2, a_level2[i].y+asteroidPoly.y2, a_level2[i].x+asteroidPoly.x3, a_level2[i].y+asteroidPoly.y3) || checkLinePoint(currX, currY, a_level2[i].x+asteroidPoly.x3, a_level2[i].y+asteroidPoly.y3, a_level2[i].x+asteroidPoly.x4, a_level2[i].y+asteroidPoly.y4) || checkLinePoint(currX, currY, a_level2[i].x+asteroidPoly.x4, a_level2[i].y+asteroidPoly.y4, a_level2[i].x+asteroidPoly.x5, a_level2[i].y+asteroidPoly.y5) || checkLinePoint(currX, currY, a_level2[i].x+asteroidPoly.x5, a_level2[i].y+asteroidPoly.y5, a_level2[i].x+asteroidPoly.x1, a_level2[i].y+asteroidPoly.y1))
			{
				returnValue.x = currX;
				returnValue.y = currY;
				return returnValue;
			}
		}
		if(currY < 0 || currY > height || currX < 0 || currX > width)
		{
			returnValue.x = currX;
			returnValue.y = currY;
			return returnValue;
		}
	}
}

function level2_click()
{
	if(!enemyDestroyed_level2)
	{
		if(mousex >= -40 && mousex <= 50 && mousey >= midy-350 && mousey <= midy-260) {
			enemyDestroyed_level2 = false;
			minutes_level2 = 0;
			seconds_level2 = 0;
			runtime_level2 = 0;
			init_level2 = false;
			mirrors_level2 = [];
			sceneNumber = 2;
			for(var i = 0;i < mirrorCount_level2;i++)
			{
				mirrorDrag_level2[i] = false;
				canvas.removeEventListener("mousemove", level2_mousemove);
			}
			clearInterval(gameTimer);
			update();
			menu_click.play();
		}
		if(mousex >= width-52 && mousex <= width+38 && mousey >= midy-350 && mousey <= midy-260) {
			enemyDestroyed_level2 = false;
			minutes_level2 = 0;
			seconds_level2 = 0;
			runtime_level2 = 0;
			init_level2 = false;
			for(var i = 0;i < mirrorCount_level2;i++)
			{
				mirrorDrag_level2[i] = false;
				canvas.removeEventListener("mousemove", level2_mousemove);
			}
			clearInterval(gameTimer);
			update();
			menu_click.play();
		}
	}
	else
	{
		if(mousex > midx-190 && mousex < midx-90 && mousey > midy-45+45 && mousey < midy-45+100)
		{
			enemyDestroyed_level2 = false;
			init_level2 = false;
			sceneNumber = 2;
			clearInterval(gameTimer);
			update();
			menu_click.play();
		}
		if(mousex > midx-50 && mousex < midx+50 && mousey > midy-45+45 && mousey < midy-45+100)
		{
			enemyDestroyed_level2 = false;
			init_level2 = false;
			clearInterval(gameTimer);
			update();
			menu_click.play();
		}
		if(mousex > midx+90 && mousex < midx+190 && mousey > midy-45+45 && mousey < midy-45+100)
		{
			enemyDestroyed_level2 = false;
			init_level2 = false;
			levelNumber++;
			clearInterval(gameTimer);
			update();
			menu_click.play();
		}
	}
}

function level2Finished()
{
	canvas.style.cursor = "auto";
	minutes_level2 = 0;
	seconds_level2 = 0;
	runtime_level2 = 0;
	init_level2 = false;
	clearInterval(gameTimer);
	for(var i = 0;i < mirrorCount_level2;i++)
	{
		mirrorDrag_level2[i] = false;
		canvas.removeEventListener("mousemove", level2_mousemove);
	}
	gameArena.clearRect(midx-220+2, midy-45-45+2, 440-4, 180-4);
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-220, midy-45-45, 440, 180, "#E6FFFF", 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Level Completed!", midx, midy-45+15);
	gameTimer = setInterval(drawLevel2Final, gameSpeed);
}

function drawLevel2Final()
{
	gameArena.clearRect(midx-220+14, midy-45+25, 440-28, 100);
	mark_level2 = false;
	var colorCheck;
	var hoverCheck = 0;

	if(mousex > midx-190 && mousex < midx-90 && mousey > midy-45+45 && mousey < midy-45+100)
	{
		mark_level2 = true;
		hoverCheck = 1;
	}
	else
	{
		hoverCheck = 0;
	}
	gameArena.shadowBlur = 15;
	gameArena.shadowColor = "#E6FFFF";
	if(hoverCheck == 1) colorCheck = "#E6FFFF";
	else colorCheck = "#18CAE6";
	drawRoundedRectangle(midx-190, midy-45+45, 100, 60, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<",midx-143,midy-45+92);
	if(mousex > midx-50 && mousex < midx+50 && mousey > midy-45+45 && mousey < midy-45+100)
	{
		mark_level2 = true;
		hoverCheck = 1;
	}
	else
	{
		hoverCheck = 0;
	}
	gameArena.shadowBlur = 15;
	gameArena.shadowColor = "#E6FFFF";
	if(hoverCheck == 1) colorCheck = "#E6FFFF";
	else colorCheck = "#18CAE6";
	drawRoundedRectangle(midx-50, midy-45+45, 100, 60, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.shadowBlur = 0;
	gameArena.drawImage(restartIcon, midx-15, midy-45+60, 30, 30);
	if(mousex > midx+90 && mousex < midx+190 && mousey > midy-45+45 && mousey < midy-45+100)
	{
		mark_level2 = true;
		hoverCheck = 1;
	}
	else
	{
		hoverCheck = 0;
	}
	gameArena.shadowBlur = 15;
	gameArena.shadowColor = "#E6FFFF";
	if(hoverCheck == 1) colorCheck = "#E6FFFF";
	else colorCheck = "#18CAE6";
	drawRoundedRectangle(midx+90, midy-45+45, 100, 60, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText(">",midx+140,midy-45+92);

	if(mark_level2)
	{
		canvas.style.cursor = "pointer";
	}
	else
	{
		canvas.style.cursor = "auto";
	}
}

//Level 3

var mirrors_level3 = [];
var init_level3 = false;
var mirrorCount_level3 = 4;
var mirrorDrag_level3 = [];
var minutes_level3 = 0;
var seconds_level3 = 0;
var runtime_level3 = 0;
var mark_level3 = false;
var ex_level3;
var ey_level3 = 60;
var enemyDestroyed_level3 = false;
var a_level3 = [];

function initialiseLevel3()
{
	mirrors_level3 = [];
	mirrorDrag_level3 = [];
	a_level3 = [];
	minutes_level3 = 0;
	seconds_level3 = 0;
	runtime_level3 = 0;
	enemyDestroyed_level3 = false;
	ex_level3 = midx-60;
	myMirror = {
		x: 200,
		width: 0,
		y: 150,
		height: 100
	};
	mirrors_level3.push(myMirror);
	mirrorDrag_level3.push(false);
	myMirror = {
		x: 600,
		width: 0,
		y: 400,
		height: 100
	};
	mirrors_level3.push(myMirror);
	mirrorDrag_level3.push(false);
	myMirror = {
		x: 700,
		width: 0,
		y: 150,
		height: 100
	};
	mirrors_level3.push(myMirror);
	mirrorDrag_level3.push(false);
	myMirror = {
		x: 100,
		width: 4,
		y: 250,
		height: 100
	};
	mirrors_level3.push(myMirror);
	mirrorDrag_level3.push(false);

	myAsteroid = {
		x: 1100,
		y: 250
	};
	a_level3.push(myAsteroid);
	myAsteroid = {
		x: 300,
		y: 300
	};
	a_level3.push(myAsteroid);
	myAsteroid = {
		x: 1100,
		y: 150
	};
	a_level3.push(myAsteroid);
	myAsteroid = {
		x: 400,
		y: 350
	};
	a_level3.push(myAsteroid);
	myAsteroid = {
		x: 400,
		y: 250
	};
	a_level3.push(myAsteroid);
	myAsteroid = {
		x: 500,
		y: 300
	};
	a_level3.push(myAsteroid);

	init_level3 = true;
}

function drawGUI_level3()
{
	var colorCheck;
	gameArena.shadowBlur = 0;
	gameArena.drawImage(mainShip, width-152, height-94, 150, 89);
	gameArena.drawImage(restartIcon, width-40, 8, 30, 30);

	gameArena.shadowBlur = 40*Math.abs(Math.sin(runtime_level3/20));
	gameArena.shadowColor = "#780000";
	gameArena.drawImage(enemyShip, ex_level3, ey_level3, 120, 114.43);

	gameArena.shadowBlur = 10;
	gameArena.shadowColor = "#B32D00";
	for(var i = 0;i < a_level3.length;i++)
	{
		gameArena.drawImage(asteroid, a_level3[i].x, a_level3[i].y);
	}

	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-80, midy-350, 160, 90, "#E6FFFF", 6);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	var displayMinutes = (minutes_level3<10)?("0"+minutes_level3):(minutes_level3);
	var displaySeconds = (seconds_level3<10)?("0"+seconds_level3):(seconds_level3);
	gameArena.fillText(displayMinutes + ":" + displaySeconds, midx, midy-275);

	gameArena.shadowBlur = 7;
	gameArena.shadowColor = "#E6FFFF";
	colorCheck = "#18CAE6";
	if(mousex >= -40 && mousex <= 50 && mousey >= midy-350 && mousey <= midy-260) {
		colorCheck = "#E6FFFF";
		mark_level3 = true;
	}
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(-40, midy-350, 90, 90, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<", 20, midy-270);

	gameArena.shadowBlur = 7;
	gameArena.shadowColor = "#E6FFFF";
	colorCheck = "#18CAE6";
	if(mousex >= width-52 && mousex <= width+38 && mousey >= midy-350 && mousey <= midy-260) {
		colorCheck = "#E6FFFF";
		mark_level3 = true;
	}
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(width-52, midy-350, 90, 90, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<", 20, midy-270);
}

function level3()
{
	if(!init_level3)
	{
		initialiseLevel3();
	}

	mark_level3 = false;
	runtime_level3++;

	gameArena.clearRect(0, 0, width, height);
	drawLevelSpace();

	traceRay_level3();


	if(runtime_level3%40 == 0)
	{
		seconds_level3++;
		if(seconds_level3 >= 60)
		{
			minutes_level3++;
			seconds_level3 -= 60;
		}
	}

	for(var i = 0;i < mirrorCount_level3;i++)
	{
		var flag;
		if(checkLine(mirrors_level3[i].x, mirrors_level3[i].y, mirrors_level3[i].x+mirrors_level3[i].width, mirrors_level3[i].y+mirrors_level3[i].height) == 1)
		{
			mark_level3 = true;
			flag = true;
		}
		else
		{
			flag = false;
		}
		drawMirror(mirrors_level3[i].x, mirrors_level3[i].y, mirrors_level3[i].x+mirrors_level3[i].width, mirrors_level3[i].y+mirrors_level3[i].height, flag);
	}
	
	drawGUI_level3();

	if(!mark_level3)
	{
		canvas.style.cursor = "auto";
	}
	else
	{
		canvas.style.cursor = "pointer";
	}

	if(enemyDestroyed_level3)
	{
		level3Finished();
	}
}

function level3_mousedown()
{
	for(var i = 0;i < mirrorCount_level3;i++)
	{
		var flag;
		if(checkLine(mirrors_level3[i].x, mirrors_level3[i].y, mirrors_level3[i].x+mirrors_level3[i].width, mirrors_level3[i].y+mirrors_level3[i].height) == 1)
		{
			flag = true;
		}
		else
		{
			flag = false;
		}
		if(flag)
		{
			mirrorDrag_level3[i] = true;
			canvas.addEventListener("mousemove", level3_mousemove);
		}
	}
}

function level3_mouseup()
{
	for(var i = 0;i < mirrorCount_level3;i++)
	{
		mirrorDrag_level3[i] = false;
		canvas.removeEventListener("mousemove", level3_mousemove);
	}
}

function level3_mousemove(evt)
{
	for(var i = 0;i < mirrorCount_level3;i++)
	{
		if(mirrorDrag_level3[i])
		{
			mirrors_level3[i].x = mousex;
			mirrors_level3[i].y = mousey;
			break;
		}
	}
}

function traceRay_level3()
{
	var rayX = width-150, rayY = height-50;
	var currentAngle = 180.0;
	var offset;
	while(true)
	{
		var wow = intersection_level3(rayX, rayY, currentAngle);
		drawRay(rayX, rayY, wow.x, wow.y);
		if(!wow.intersect)
		{
			break;
		}
		var x1 = mirrors_level3[wow.mirrorIndex].x;
		var x2 = mirrors_level3[wow.mirrorIndex].width+x1;
		var y1 = mirrors_level3[wow.mirrorIndex].y;
		var y2 = mirrors_level3[wow.mirrorIndex].height+y1;
		offset = 2*(90-calculateAngle(x1,y1,x2,y2,rayX,rayY,wow.x,wow.y));
		currentAngle = ((-1)*(180/Math.PI)*Math.atan2((rayY-wow.y),(rayX-wow.x))) + offset;
		rayX = wow.x;
		rayY = wow.y;
		wow = intersection_level3(rayX, rayY, currentAngle);
		if(distancePoint(rayX, rayY, wow.x, wow.y) <= 5.0)
		{
			currentAngle -= 4*offset;
			wow = intersection_level3(rayX, rayY, currentAngle);
		}
		drawRay(rayX, rayY, wow.x, wow.y);
	}
}

function intersection_level3(rayX, rayY, rayTheta)
{
	var returnValue = {
		intersect : false,
		x : 0,
		y : 0,
		mirrorIndex : 0
	};
	var currX, currY;
	var radians = (rayTheta*Math.PI)/180.0;
	for(var r = 12;;r++)
	{
		currX = rayX + r*Math.cos(radians);
		currY = rayY - r*Math.sin(radians);
		for(var i = 0;i < mirrorCount_level3;i++)
		{
			if(checkLinePoint(currX, currY, mirrors_level3[i].x, mirrors_level3[i].y, mirrors_level3[i].x+mirrors_level3[i].width, mirrors_level3[i].y+mirrors_level3[i].height))
			{
				if(distancePoint(currX, currY, mirrors_level3[i].x, mirrors_level3[i].y) <= 10.0)
					returnValue.intersect = false;
				else if(distancePoint(currX, currY, mirrors_level3[i].x+mirrors_level3[i].width, mirrors_level3[i].y+mirrors_level3[i].height) <= 10.0)
					returnValue.intersect = false;
				else returnValue.intersect = true;
				returnValue.x = currX;
				returnValue.y = currY;
				returnValue.mirrorIndex = i;
				return returnValue;
			}
		}
		if(checkLinePoint(currX, currY, ex_level3 + enemyTriangle.x1, ey_level3 + enemyTriangle.y1, ex_level3 + enemyTriangle.x2, ey_level3 + enemyTriangle.y2))
		{
			returnValue.x = currX;
			returnValue.y = currY;
			enemyDestroyed_level3 = true;
			return returnValue;
		}
		if(checkLinePoint(currX, currY, ex_level3 + enemyTriangle.x2, ey_level3 + enemyTriangle.y2, ex_level3 + enemyTriangle.x3, ey_level3 + enemyTriangle.y3))
		{
			returnValue.x = currX;
			returnValue.y = currY;
			enemyDestroyed_level3 = true;
			return returnValue;
		}
		if(checkLinePoint(currX, currY, ex_level3 + enemyTriangle.x3, ey_level3 + enemyTriangle.y3, ex_level3 + enemyTriangle.x1, ey_level3 + enemyTriangle.y1))
		{
			returnValue.x = currX;
			returnValue.y = currY;
			enemyDestroyed_level3 = true;
			return returnValue;
		}
		for(var i = 0;i < a_level3.length;i++)
		{
			if(checkLinePoint(currX, currY, a_level3[i].x+asteroidPoly.x1, a_level3[i].y+asteroidPoly.y1, a_level3[i].x+asteroidPoly.x2, a_level3[i].y+asteroidPoly.y2) || checkLinePoint(currX, currY, a_level3[i].x+asteroidPoly.x2, a_level3[i].y+asteroidPoly.y2, a_level3[i].x+asteroidPoly.x3, a_level3[i].y+asteroidPoly.y3) || checkLinePoint(currX, currY, a_level3[i].x+asteroidPoly.x3, a_level3[i].y+asteroidPoly.y3, a_level3[i].x+asteroidPoly.x4, a_level3[i].y+asteroidPoly.y4) || checkLinePoint(currX, currY, a_level3[i].x+asteroidPoly.x4, a_level3[i].y+asteroidPoly.y4, a_level3[i].x+asteroidPoly.x5, a_level3[i].y+asteroidPoly.y5) || checkLinePoint(currX, currY, a_level3[i].x+asteroidPoly.x5, a_level3[i].y+asteroidPoly.y5, a_level3[i].x+asteroidPoly.x1, a_level3[i].y+asteroidPoly.y1))
			{
				returnValue.x = currX;
				returnValue.y = currY;
				return returnValue;
			}
		}
		if(currY < 0 || currY > height || currX < 0 || currX > width)
		{
			returnValue.x = currX;
			returnValue.y = currY;
			return returnValue;
		}
	}
}

function level3_click()
{
	if(lastClickCounter <= 20)
		return;
	if(!enemyDestroyed_level3)
	{
		if(mousex >= -40 && mousex <= 50 && mousey >= midy-350 && mousey <= midy-260) {
			enemyDestroyed_level3 = false;
			minutes_level3 = 0;
			seconds_level3 = 0;
			runtime_level3 = 0;
			init_level3 = false;
			mirrors_level3 = [];
			sceneNumber = 2;
			for(var i = 0;i < mirrorCount_level3;i++)
			{
				mirrorDrag_level3[i] = false;
				canvas.removeEventListener("mousemove", level3_mousemove);
			}
			clearInterval(gameTimer);
			update();
			lastClickCounter = 0;
			menu_click.play();
		}
		if(mousex >= width-52 && mousex <= width+38 && mousey >= midy-350 && mousey <= midy-260) {
			enemyDestroyed_level3 = false;
			minutes_level3 = 0;
			seconds_level3 = 0;
			runtime_level3 = 0;
			init_level3 = false;
			for(var i = 0;i < mirrorCount_level3;i++)
			{
				mirrorDrag_level3[i] = false;
				canvas.removeEventListener("mousemove", level3_mousemove);
			}
			clearInterval(gameTimer);
			update();
			lastClickCounter = 0;
			menu_click.play();
		}
	}
	else
	{
		if(mousex > midx-190 && mousex < midx-90 && mousey > midy-45+45 && mousey < midy-45+100)
		{
			enemyDestroyed_level3 = false;
			init_level3 = false;
			sceneNumber = 2;
			clearInterval(gameTimer);
			update();
			lastClickCounter = 0;
			menu_click.play();
		}
		if(mousex > midx-50 && mousex < midx+50 && mousey > midy-45+45 && mousey < midy-45+100)
		{
			enemyDestroyed_level3 = false;
			init_level3 = false;
			clearInterval(gameTimer);
			update();
			lastClickCounter = 0;
			menu_click.play();
		}
		if(mousex > midx+90 && mousex < midx+190 && mousey > midy-45+45 && mousey < midy-45+100)
		{
			enemyDestroyed_level3 = false;
			init_level3 = false;
			levelNumber++;
			clearInterval(gameTimer);
			update();
			lastClickCounter = 0;
			menu_click.play();
		}
	}
}

function level3Finished()
{
	canvas.style.cursor = "auto";
	minutes_level3 = 0;
	seconds_level3 = 0;
	runtime_level3 = 0;
	init_level3 = false;
	clearInterval(gameTimer);
	for(var i = 0;i < mirrorCount_level3;i++)
	{
		mirrorDrag_level3[i] = false;
		canvas.removeEventListener("mousemove", level3_mousemove);
	}
	gameArena.clearRect(midx-220+2, midy-45-45+2, 440-4, 180-4);
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-220, midy-45-45, 440, 180, "#E6FFFF", 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Level Completed!", midx, midy-45+15);
	gameTimer = setInterval(drawLevel3Final, gameSpeed);
}

function drawLevel3Final()
{
	gameArena.clearRect(midx-220+14, midy-45+25, 440-28, 100);
	mark_level3 = false;
	var colorCheck;
	var hoverCheck = 0;

	if(mousex > midx-190 && mousex < midx-90 && mousey > midy-45+45 && mousey < midy-45+100)
	{
		mark_level3 = true;
		hoverCheck = 1;
	}
	else
	{
		hoverCheck = 0;
	}
	gameArena.shadowBlur = 15;
	gameArena.shadowColor = "#E6FFFF";
	if(hoverCheck == 1) colorCheck = "#E6FFFF";
	else colorCheck = "#18CAE6";
	drawRoundedRectangle(midx-190, midy-45+45, 100, 60, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<",midx-143,midy-45+92);
	if(mousex > midx-50 && mousex < midx+50 && mousey > midy-45+45 && mousey < midy-45+100)
	{
		mark_level3 = true;
		hoverCheck = 1;
	}
	else
	{
		hoverCheck = 0;
	}
	gameArena.shadowBlur = 15;
	gameArena.shadowColor = "#E6FFFF";
	if(hoverCheck == 1) colorCheck = "#E6FFFF";
	else colorCheck = "#18CAE6";
	drawRoundedRectangle(midx-50, midy-45+45, 100, 60, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.shadowBlur = 0;
	gameArena.drawImage(restartIcon, midx-15, midy-45+60, 30, 30);
	if(mousex > midx+90 && mousex < midx+190 && mousey > midy-45+45 && mousey < midy-45+100)
	{
		mark_level3 = true;
		hoverCheck = 1;
	}
	else
	{
		hoverCheck = 0;
	}
	gameArena.shadowBlur = 15;
	gameArena.shadowColor = "#E6FFFF";
	if(hoverCheck == 1) colorCheck = "#E6FFFF";
	else colorCheck = "#18CAE6";
	drawRoundedRectangle(midx+90, midy-45+45, 100, 60, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText(">",midx+140,midy-45+92);

	if(mark_level3)
	{
		canvas.style.cursor = "pointer";
	}
	else
	{
		canvas.style.cursor = "auto";
	}
}

//Level 4

var mirrors_level4 = [];
var init_level4 = false;
var mirrorCount_level4 = 3;
var mirrorDrag_level4 = [];
var minutes_level4 = 0;
var seconds_level4 = 0;
var runtime_level4 = 0;
var mark_level4 = false;
var ex_level4;
var ey_level4 = 2;
var enemyDestroyed_level4 = false;
var a_level4 = [];

function initialiseLevel4()
{
	mirrors_level4 = [];
	mirrorDrag_level4 = [];
	a_level4 = [];
	minutes_level4 = 0;
	seconds_level4 = 0;
	runtime_level4 = 0;
	enemyDestroyed_level4 = false;
	ex_level4 = width-175;
	myMirror = {
		x: 200,
		width: 0,
		y: 150,
		height: 100
	};
	mirrors_level4.push(myMirror);
	mirrorDrag_level4.push(false);
	myMirror = {
		x: 600,
		width: 0,
		y: 400,
		height: 100
	};
	mirrors_level4.push(myMirror);
	mirrorDrag_level4.push(false);
	myMirror = {
		x: 100,
		width: 4,
		y: 250,
		height: 100
	};
	mirrors_level4.push(myMirror);
	mirrorDrag_level4.push(false);



	init_level4 = true;
}

function drawGUI_level4()
{
	var colorCheck;
	gameArena.shadowBlur = 0;
	gameArena.drawImage(mainShip, width-152, height-94, 150, 89);
	gameArena.drawImage(restartIcon, width-40, 8, 30, 30);

	gameArena.shadowBlur = 40*Math.abs(Math.sin(runtime_level4/20));
	gameArena.shadowColor = "#780000";
	gameArena.drawImage(enemyShip, ex_level4, ey_level4, 120, 114.43);

	gameArena.shadowBlur = 10;
	gameArena.shadowColor = "#B32D00";
	for(var i = 0;i < a_level4.length;i++)
	{
		gameArena.drawImage(asteroid, a_level4[i].x, a_level4[i].y);
	}

	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-80, midy-350, 160, 90, "#E6FFFF", 6);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	var displayMinutes = (minutes_level4<10)?("0"+minutes_level4):(minutes_level4);
	var displaySeconds = (seconds_level4<10)?("0"+seconds_level4):(seconds_level4);
	gameArena.fillText(displayMinutes + ":" + displaySeconds, midx, midy-275);

	gameArena.shadowBlur = 7;
	gameArena.shadowColor = "#E6FFFF";
	colorCheck = "#18CAE6";
	if(mousex >= -40 && mousex <= 50 && mousey >= midy-350 && mousey <= midy-260) {
		colorCheck = "#E6FFFF";
		mark_level4 = true;
	}
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(-40, midy-350, 90, 90, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<", 20, midy-270);

	gameArena.shadowBlur = 7;
	gameArena.shadowColor = "#E6FFFF";
	colorCheck = "#18CAE6";
	if(mousex >= width-52 && mousex <= width+38 && mousey >= midy-350 && mousey <= midy-260) {
		colorCheck = "#E6FFFF";
		mark_level4 = true;
	}
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(width-52, midy-350, 90, 90, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<", 20, midy-270);
}

function level4()
{
	if(!init_level4)
	{
		initialiseLevel4();
	}

	mark_level4 = false;
	runtime_level4++;

	gameArena.clearRect(0, 0, width, height);
	drawLevelSpace();

	traceRay_level4();


	if(runtime_level4%40 == 0)
	{
		seconds_level4++;
		if(seconds_level4 >= 60)
		{
			minutes_level4++;
			seconds_level4 -= 60;
		}
	}

	for(var i = 0;i < mirrorCount_level4;i++)
	{
		var flag;
		if(checkLine(mirrors_level4[i].x, mirrors_level4[i].y, mirrors_level4[i].x+mirrors_level4[i].width, mirrors_level4[i].y+mirrors_level4[i].height) == 1)
		{
			mark_level4 = true;
			flag = true;
		}
		else
		{
			flag = false;
		}
		drawMirror(mirrors_level4[i].x, mirrors_level4[i].y, mirrors_level4[i].x+mirrors_level4[i].width, mirrors_level4[i].y+mirrors_level4[i].height, flag);
	}
	
	drawGUI_level4();

	if(!mark_level4)
	{
		canvas.style.cursor = "auto";
	}
	else
	{
		canvas.style.cursor = "pointer";
	}

	if(enemyDestroyed_level4)
	{
		level4Finished();
	}
}

function level4_mousedown()
{
	for(var i = 0;i < mirrorCount_level4;i++)
	{
		var flag;
		if(checkLine(mirrors_level4[i].x, mirrors_level4[i].y, mirrors_level4[i].x+mirrors_level4[i].width, mirrors_level4[i].y+mirrors_level4[i].height) == 1)
		{
			flag = true;
		}
		else
		{
			flag = false;
		}
		if(flag)
		{
			mirrorDrag_level4[i] = true;
			canvas.addEventListener("mousemove", level4_mousemove);
		}
	}
}

function level4_mouseup()
{
	for(var i = 0;i < mirrorCount_level4;i++)
	{
		mirrorDrag_level4[i] = false;
		canvas.removeEventListener("mousemove", level4_mousemove);
	}
}

function level4_mousemove(evt)
{
	for(var i = 0;i < mirrorCount_level4;i++)
	{
		if(mirrorDrag_level4[i])
		{
			mirrors_level4[i].x = mousex;
			mirrors_level4[i].y = mousey;
			break;
		}
	}
}

function traceRay_level4()
{
	var rayX = width-150, rayY = height-50;
	var currentAngle = 180.0;
	var offset;
	while(true)
	{
		var wow = intersection_level4(rayX, rayY, currentAngle);
		drawRay(rayX, rayY, wow.x, wow.y);
		if(!wow.intersect)
		{
			break;
		}
		var x1 = mirrors_level4[wow.mirrorIndex].x;
		var x2 = mirrors_level4[wow.mirrorIndex].width+x1;
		var y1 = mirrors_level4[wow.mirrorIndex].y;
		var y2 = mirrors_level4[wow.mirrorIndex].height+y1;
		offset = 2*(90-calculateAngle(x1,y1,x2,y2,rayX,rayY,wow.x,wow.y));
		currentAngle = ((-1)*(180/Math.PI)*Math.atan2((rayY-wow.y),(rayX-wow.x))) + offset;
		rayX = wow.x;
		rayY = wow.y;
		wow = intersection_level4(rayX, rayY, currentAngle);
		if(distancePoint(rayX, rayY, wow.x, wow.y) <= 5.0)
		{
			currentAngle -= 4*offset;
			wow = intersection_level4(rayX, rayY, currentAngle);
		}
		drawRay(rayX, rayY, wow.x, wow.y);
	}
}

function intersection_level4(rayX, rayY, rayTheta)
{
	var returnValue = {
		intersect : false,
		x : 0,
		y : 0,
		mirrorIndex : 0
	};
	var currX, currY;
	var radians = (rayTheta*Math.PI)/180.0;
	for(var r = 12;;r++)
	{
		currX = rayX + r*Math.cos(radians);
		currY = rayY - r*Math.sin(radians);
		for(var i = 0;i < mirrorCount_level4;i++)
		{
			if(checkLinePoint(currX, currY, mirrors_level4[i].x, mirrors_level4[i].y, mirrors_level4[i].x+mirrors_level4[i].width, mirrors_level4[i].y+mirrors_level4[i].height))
			{
				if(distancePoint(currX, currY, mirrors_level4[i].x, mirrors_level4[i].y) <= 10.0)
					returnValue.intersect = false;
				else if(distancePoint(currX, currY, mirrors_level4[i].x+mirrors_level4[i].width, mirrors_level4[i].y+mirrors_level4[i].height) <= 10.0)
					returnValue.intersect = false;
				else returnValue.intersect = true;
				returnValue.x = currX;
				returnValue.y = currY;
				returnValue.mirrorIndex = i;
				return returnValue;
			}
		}
		if(checkLinePoint(currX, currY, ex_level4 + enemyTriangle.x1, ey_level4 + enemyTriangle.y1, ex_level4 + enemyTriangle.x2, ey_level4 + enemyTriangle.y2))
		{
			returnValue.x = currX;
			returnValue.y = currY;
			enemyDestroyed_level4 = true;
			return returnValue;
		}
		if(checkLinePoint(currX, currY, ex_level4 + enemyTriangle.x2, ey_level4 + enemyTriangle.y2, ex_level4 + enemyTriangle.x3, ey_level4 + enemyTriangle.y3))
		{
			returnValue.x = currX;
			returnValue.y = currY;
			enemyDestroyed_level4 = true;
			return returnValue;
		}
		if(checkLinePoint(currX, currY, ex_level4 + enemyTriangle.x3, ey_level4 + enemyTriangle.y3, ex_level4 + enemyTriangle.x1, ey_level4 + enemyTriangle.y1))
		{
			returnValue.x = currX;
			returnValue.y = currY;
			enemyDestroyed_level4 = true;
			return returnValue;
		}
		for(var i = 0;i < a_level4.length;i++)
		{
			if(checkLinePoint(currX, currY, a_level4[i].x+asteroidPoly.x1, a_level4[i].y+asteroidPoly.y1, a_level4[i].x+asteroidPoly.x2, a_level4[i].y+asteroidPoly.y2) || checkLinePoint(currX, currY, a_level4[i].x+asteroidPoly.x2, a_level4[i].y+asteroidPoly.y2, a_level4[i].x+asteroidPoly.x3, a_level4[i].y+asteroidPoly.y3) || checkLinePoint(currX, currY, a_level4[i].x+asteroidPoly.x3, a_level4[i].y+asteroidPoly.y3, a_level4[i].x+asteroidPoly.x4, a_level4[i].y+asteroidPoly.y4) || checkLinePoint(currX, currY, a_level4[i].x+asteroidPoly.x4, a_level4[i].y+asteroidPoly.y4, a_level4[i].x+asteroidPoly.x5, a_level4[i].y+asteroidPoly.y5) || checkLinePoint(currX, currY, a_level4[i].x+asteroidPoly.x5, a_level4[i].y+asteroidPoly.y5, a_level4[i].x+asteroidPoly.x1, a_level4[i].y+asteroidPoly.y1))
			{
				returnValue.x = currX;
				returnValue.y = currY;
				return returnValue;
			}
		}
		if(currY < 0 || currY > height || currX < 0 || currX > width)
		{
			returnValue.x = currX;
			returnValue.y = currY;
			return returnValue;
		}
	}
}

function level4_click()
{
	if(lastClickCounter <= 20)
		return;
	if(!enemyDestroyed_level4)
	{
		if(mousex >= -40 && mousex <= 50 && mousey >= midy-350 && mousey <= midy-260) {
			enemyDestroyed_level4 = false;
			minutes_level4 = 0;
			seconds_level4 = 0;
			runtime_level4 = 0;
			init_level4 = false;
			mirrors_level4 = [];
			sceneNumber = 2;
			for(var i = 0;i < mirrorCount_level4;i++)
			{
				mirrorDrag_level4[i] = false;
				canvas.removeEventListener("mousemove", level4_mousemove);
			}
			clearInterval(gameTimer);
			update();
			lastClickCounter = 0;
			menu_click.play();
		}
		if(mousex >= width-52 && mousex <= width+38 && mousey >= midy-350 && mousey <= midy-260) {
			enemyDestroyed_level4 = false;
			minutes_level4 = 0;
			seconds_level4 = 0;
			runtime_level4 = 0;
			init_level4 = false;
			for(var i = 0;i < mirrorCount_level4;i++)
			{
				mirrorDrag_level4[i] = false;
				canvas.removeEventListener("mousemove", level4_mousemove);
			}
			clearInterval(gameTimer);
			update();
			lastClickCounter = 0;
			menu_click.play();
		}
	}
	else
	{
		if(mousex > midx-190 && mousex < midx-90 && mousey > midy-45+45 && mousey < midy-45+100)
		{
			enemyDestroyed_level4 = false;
			init_level4 = false;
			sceneNumber = 2;
			clearInterval(gameTimer);
			update();
			lastClickCounter = 0;
			menu_click.play();
		}
		if(mousex > midx-50 && mousex < midx+50 && mousey > midy-45+45 && mousey < midy-45+100)
		{
			enemyDestroyed_level4 = false;
			init_level4 = false;
			clearInterval(gameTimer);
			update();
			lastClickCounter = 0;
			menu_click.play();
		}
		if(mousex > midx+90 && mousex < midx+190 && mousey > midy-45+45 && mousey < midy-45+100)
		{
			enemyDestroyed_level4 = false;
			init_level4 = false;
			levelNumber++;
			clearInterval(gameTimer);
			update();
			lastClickCounter = 0;
			menu_click.play();
		}
	}
}

function level4Finished()
{
	canvas.style.cursor = "auto";
	minutes_level4 = 0;
	seconds_level4 = 0;
	runtime_level4 = 0;
	init_level4 = false;
	clearInterval(gameTimer);
	for(var i = 0;i < mirrorCount_level4;i++)
	{
		mirrorDrag_level4[i] = false;
		canvas.removeEventListener("mousemove", level4_mousemove);
	}
	gameArena.clearRect(midx-220+2, midy-45-45+2, 440-4, 180-4);
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-220, midy-45-45, 440, 180, "#E6FFFF", 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Level Completed!", midx, midy-45+15);
	gameTimer = setInterval(drawLevel4Final, gameSpeed);
}

function drawLevel4Final()
{
	gameArena.clearRect(midx-220+14, midy-45+25, 440-28, 100);
	mark_level4 = false;
	var colorCheck;
	var hoverCheck = 0;

	if(mousex > midx-190 && mousex < midx-90 && mousey > midy-45+45 && mousey < midy-45+100)
	{
		mark_level4 = true;
		hoverCheck = 1;
	}
	else
	{
		hoverCheck = 0;
	}
	gameArena.shadowBlur = 15;
	gameArena.shadowColor = "#E6FFFF";
	if(hoverCheck == 1) colorCheck = "#E6FFFF";
	else colorCheck = "#18CAE6";
	drawRoundedRectangle(midx-190, midy-45+45, 100, 60, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<",midx-143,midy-45+92);
	if(mousex > midx-50 && mousex < midx+50 && mousey > midy-45+45 && mousey < midy-45+100)
	{
		mark_level4 = true;
		hoverCheck = 1;
	}
	else
	{
		hoverCheck = 0;
	}
	gameArena.shadowBlur = 15;
	gameArena.shadowColor = "#E6FFFF";
	if(hoverCheck == 1) colorCheck = "#E6FFFF";
	else colorCheck = "#18CAE6";
	drawRoundedRectangle(midx-50, midy-45+45, 100, 60, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.shadowBlur = 0;
	gameArena.drawImage(restartIcon, midx-15, midy-45+60, 30, 30);
	if(mousex > midx+90 && mousex < midx+190 && mousey > midy-45+45 && mousey < midy-45+100)
	{
		mark_level4 = true;
		hoverCheck = 1;
	}
	else
	{
		hoverCheck = 0;
	}
	gameArena.shadowBlur = 15;
	gameArena.shadowColor = "#E6FFFF";
	if(hoverCheck == 1) colorCheck = "#E6FFFF";
	else colorCheck = "#18CAE6";
	drawRoundedRectangle(midx+90, midy-45+45, 100, 60, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText(">",midx+140,midy-45+92);

	if(mark_level4)
	{
		canvas.style.cursor = "pointer";
	}
	else
	{
		canvas.style.cursor = "auto";
	}
}
