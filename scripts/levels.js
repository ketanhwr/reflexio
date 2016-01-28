var mirrors = [];
var init = false;
var mirrorCount;
var mirrorDrag = [];
var minutes = 0;
var seconds = 0;
var runtime = 0;
var mark = false;
var ex;
var ey = 100;
var fx;
var fy = 100;
var enemyDestroyed = false;
var a = [];
var gameOver = false;
var eh = 100;
var fh = 100;
var GC = false;
var scoreToShow;

function initialiseLevel()
{
	if(levelNumber == 1)
	{
		mirrors = [];
		mirrorDrag = [];
		a = [];
		minutes = 0;
		seconds = 0;
		runtime = 0;
		enemyDestroyed = false;
		gameOver = false;
		ex = width-140;
		ey = 100;
		fx = midx-70;
		fy = 100;
		eh = 100;
		fh = 100;
		myMirror = {
			x: 200,
			width: 100,
			y: 150,
			height: 100,
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 600,
			width: 100,
			y: 400,
			height: -100,
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);

		myAsteroid = {
			x: 1000,
			y: 100
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 1000,
			y: 200
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 1100,
			y: 240
		};
		a.push(myAsteroid);
		mirrorCount = mirrors.length;
		init = true;
	}
	else if(levelNumber == 2)
	{
		mirrors = [];
		mirrorDrag = [];
		a = [];
		minutes = 0;
		seconds = 0;
		runtime = 0;
		enemyDestroyed = false;
		ex = 20;
		ey = 80;
		fx = midx+100;
		fy = 60;
		eh = 100;
		fh = 100;
		myMirror = {
			x: 200,
			width: 0,
			y: 150,
			height: 100,
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 600,
			width: 0,
			y: 400,
			height: 100,
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 600,
			width: 0,
			y: 150,
			height: 100,
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 100,
			width: 4,
			y: 250,
			height: 100,
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		mirrorCount = mirrors.length;
		init = true;
	}
	else if(levelNumber == 4)
	{
		mirrors = [];
		mirrorDrag = [];
		a = [];
		minutes = 0;
		seconds = 0;
		runtime = 0;
		enemyDestroyed = false;
		ex = midx-60;
		ey = 60;
		fx = midx-20;
		fy = midy-40;
		eh = 100;
		fh = 100;
		myMirror = {
			x: 200,
			width: 0,
			y: 150,
			height: 100,
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 600,
			width: 0,
			y: 420,
			height: 100,
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 700,
			width: 0,
			y: 150,
			height: 100,
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 100,
			width: 4,
			y: 250,
			height: 100,
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);

		myAsteroid = {
			x: 1100,
			y: 250
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 300,
			y: 300
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 1100,
			y: 150
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 400,
			y: 350
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 400,
			y: 250
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 500,
			y: 300
		};
		a.push(myAsteroid);
		mirrorCount = mirrors.length;
		init = true;
	}
	else if(levelNumber == 3)
	{
		mirrors = [];
		mirrorDrag = [];
		a = [];
		minutes = 0;
		seconds = 0;
		runtime = 0;
		enemyDestroyed = false;
		ex = width-300;
		ey = 20;
		fx = midx*(3/2);
		fy = 200;
		eh = 100;
		fh = 100;
		myMirror = {
			x: 200,
			width: 0,
			y: 150,
			height: 100,
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 600,
			width: 0,
			y: 400,
			height: 100,
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 100,
			width: 4,
			y: 250,
			height: 100,
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		mirrorCount = mirrors.length;
		init = true;
	}
	else
	{
		mirrors = [];
		mirrorDrag = [];
		a = [];
		minutes = 0;
		seconds = 0;
		runtime = 0;
		enemyDestroyed = false;
		mirrorCount = mirrors.length;
		GC = true;
	}
}

function drawGUI()
{
	var colorCheck;
	gameArena.shadowBlur = 10;
	gameArena.shadowColor = "#18CAE6";
	gameArena.drawImage(mainShip, width-152, height-94, 150, 89);

	gameArena.shadowBlur = 50*Math.abs(Math.sin(runtime/20));
	gameArena.shadowColor = "#780000";
	gameArena.drawImage(enemyShip, ex, ey, 120, 114.43);

	gameArena.shadowBlur = 10;
	gameArena.shadowColor = "#0DA114";
	gameArena.drawImage(spaceStation, fx, fy);
	gameArena.lineWidth = 0.05;
	gameArena.beginPath();
	gameArena.strokeStyle = "#0DA114";
	gameArena.arc(fx+76, fy+83, 82, 0, 2*Math.PI);
	gameArena.stroke();

	gameArena.shadowBlur = 10;
	gameArena.shadowColor = "#B32D00";
	for(var i = 0;i < a.length;i++)
	{
		gameArena.drawImage(asteroid, a[i].x, a[i].y);
	}

	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-80, midy-350, 160, 90, "#E6FFFF", 6);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	var displayMinutes = (minutes<10)?("0"+minutes):(minutes);
	var displaySeconds = (seconds<10)?("0"+seconds):(seconds);
	gameArena.fillText(displayMinutes + ":" + displaySeconds, midx, midy-275);

	gameArena.shadowBlur = 7;
	gameArena.shadowColor = "#E6FFFF";
	colorCheck = "#18CAE6";
	if(mousex >= -40 && mousex <= 50 && mousey >= midy-350 && mousey <= midy-260) {
		colorCheck = "#E6FFFF";
		mark = true;
	}
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(-40, midy-350, 90, 90, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<", 20, midy-270);

	colorCheck = "#E6FFFF";
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(width-182, midy-350, 220, 90, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Level " + levelNumber, width-90, midy-273);

	colorCheck = "#E6FFFF";
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-182-250-10, midy-350, 250+20, 90, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Score: " + currentScore, midx-55-250, midy-273);

	colorCheck = "#E6FFFF";
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx+180, midy-350, 150, 90, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	if(lives >= 1) gameArena.drawImage(life, midx+190-2, midy-305);
	if(lives >= 2) gameArena.drawImage(life, midx+235-2, midy-305);
	if(lives >= 3) gameArena.drawImage(life, midx+280-2, midy-305);

	if(eh >= 2.0) {
		gameArena.shadowBlur = 50;
		gameArena.shadowColor = "#21E821";
		gameArena.beginPath();
		gameArena.lineWidth = 4;
		gameArena.strokeStyle = "#21E821";
		gameArena.moveTo(ex+30, ey-5);
		gameArena.lineTo(ex+30+50*(eh/100.0), ey-5);
		gameArena.stroke();
		gameArena.beginPath();
		gameArena.fillStyle = "#21E821";
		gameArena.arc(ex+30, ey-5, 2, 0, 2*Math.PI);
		gameArena.fill();
		gameArena.beginPath();
		gameArena.fillStyle = "#21E821";
		gameArena.arc(ex+30+50*(eh/100.0), ey-5, 2, 0, 2*Math.PI);
		gameArena.fill();
	}
	if(fh >= 2.0) {
		gameArena.shadowBlur = 50;
		gameArena.shadowColor = "#21E821";
		gameArena.beginPath();
		gameArena.lineWidth = 4;
		gameArena.strokeStyle = "#21E821";
		gameArena.moveTo(fx+30+20, fy-15);
		gameArena.lineTo(fx+30+20+50*(fh/100.0), fy-15);
		gameArena.stroke();
		gameArena.beginPath();
		gameArena.fillStyle = "#21E821";
		gameArena.arc(fx+30+20, fy-15, 2, 0, 2*Math.PI);
		gameArena.fill();
		gameArena.beginPath();
		gameArena.fillStyle = "#21E821";
		gameArena.arc(fx+30+20+50*(fh/100.0), fy-15, 2, 0, 2*Math.PI);
		gameArena.fill();
	}
}

function Level()
{
	if(!init)
	{
		initialiseLevel();
	}

	mark = false;
	runtime++;

	gameArena.clearRect(0, 0, width, height);
	drawLevelSpace();

	traceRay();

	if(fh <= 0)
	{
		lives--;
		if(lives != 0)
		{
			enemyDestroyed = false;
			gameOver = false;
			minutes = 0;
			seconds = 0;
			runtime = 0;
			init = false;
			for(var i = 0;i < mirrorCount;i++)
			{
				mirrorDrag[i] = false;
				canvas.removeEventListener("mousemove", Level_mousemove);
			}
			clearInterval(gameTimer);
			update();
		}
	}
	if(eh <= 0)
		enemyDestroyed = true;

	if(runtime%40 == 0)
	{
		seconds++;
		if(seconds >= 60)
		{
			minutes++;
			seconds -= 60;
		}
	}

	for(var i = 0;i < mirrorCount;i++)
	{
		var flag;
		if(checkLine(mirrors[i].x, mirrors[i].y, mirrors[i].x+mirrors[i].width, mirrors[i].y+mirrors[i].height) == 1 && mirrors[i].drag == 1)
		{
			mark = true;
			flag = true;
		}
		else
		{
			flag = false;
		}
		drawMirror(mirrors[i].x, mirrors[i].y, mirrors[i].x+mirrors[i].width, mirrors[i].y+mirrors[i].height, flag, mirrors[i].drag);
	}
	
	drawGUI();

	if(!mark)
	{
		canvas.style.cursor = "auto";
	}
	else
	{
		canvas.style.cursor = "pointer";
	}

	if(enemyDestroyed)
	{
		LevelFinished();
	}

	if(lives == 0)
	{
		gameOver = true;
		Level_gameOver();
	}

	if(GC)
	{
		Level_GC();
	}
}

function Level_mousedown()
{
	for(var i = 0;i < mirrorCount;i++)
	{
		var flag;
		if(checkLine(mirrors[i].x, mirrors[i].y, mirrors[i].x+mirrors[i].width, mirrors[i].y+mirrors[i].height) == 1 && mirrors[i].drag == 1)
		{
			flag = true;
		}
		else
		{
			flag = false;
		}
		if(flag)
		{
			mirrorDrag[i] = true;
			canvas.addEventListener("mousemove", Level_mousemove);
		}
	}
}

function Level_mouseup()
{
	for(var i = 0;i < mirrorCount;i++)
	{
		mirrorDrag[i] = false;
		canvas.removeEventListener("mousemove", Level_mousemove);
	}
}

function Level_mousemove(evt)
{
	for(var i = 0;i < mirrorCount;i++)
	{
		if(mirrorDrag[i])
		{
			mirrors[i].x = mousex;
			mirrors[i].y = mousey;
			break;
		}
	}
}

function traceRay()
{
	var rayX = width-150, rayY = height-50;
	var currentAngle = 180.0;
	var offset;
	while(true)
	{
		var wow = intersection(rayX, rayY, currentAngle);
		drawRay(rayX, rayY, wow.x, wow.y);
		if(!wow.intersect)
		{
			break;
		}
		var x1 = mirrors[wow.mirrorIndex].x;
		var x2 = mirrors[wow.mirrorIndex].width+x1;
		var y1 = mirrors[wow.mirrorIndex].y;
		var y2 = mirrors[wow.mirrorIndex].height+y1;
		offset = 2*(90-calculateAngle(x1,y1,x2,y2,rayX,rayY,wow.x,wow.y));
		currentAngle = ((-1)*(180/Math.PI)*Math.atan2((rayY-wow.y),(rayX-wow.x))) + offset;
		rayX = wow.x;
		rayY = wow.y;
		wow = intersection(rayX, rayY, currentAngle);
		if(distancePoint(rayX, rayY, wow.x, wow.y) <= 5.0)
		{
			currentAngle -= 4*offset;
			wow = intersection(rayX, rayY, currentAngle);
		}
		drawRay(rayX, rayY, wow.x, wow.y);
	}
}

function intersection(rayX, rayY, rayTheta)
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
		for(var i = 0;i < mirrorCount;i++)
		{
			if(checkLinePoint(currX, currY, mirrors[i].x, mirrors[i].y, mirrors[i].x+mirrors[i].width, mirrors[i].y+mirrors[i].height))
			{
				if(distancePoint(currX, currY, mirrors[i].x, mirrors[i].y) <= 10.0)
					returnValue.intersect = false;
				else if(distancePoint(currX, currY, mirrors[i].x+mirrors[i].width, mirrors[i].y+mirrors[i].height) <= 10.0)
					returnValue.intersect = false;
				else returnValue.intersect = true;
				returnValue.x = currX;
				returnValue.y = currY;
				returnValue.mirrorIndex = i;
				return returnValue;
			}
		}
		if(checkLinePoint(currX, currY, ex + enemyTriangle.x1, ey + enemyTriangle.y1, ex + enemyTriangle.x2, ey + enemyTriangle.y2))
		{
			returnValue.x = currX;
			returnValue.y = currY;
			eh -= 0.3;
			return returnValue;
		}
		if(checkLinePoint(currX, currY, ex + enemyTriangle.x2, ey + enemyTriangle.y2, ex + enemyTriangle.x3, ey + enemyTriangle.y3))
		{
			returnValue.x = currX;
			returnValue.y = currY;
			eh -= 0.3;
			return returnValue;
		}
		if(checkLinePoint(currX, currY, ex + enemyTriangle.x3, ey + enemyTriangle.y3, ex + enemyTriangle.x1, ey + enemyTriangle.y1))
		{
			returnValue.x = currX;
			returnValue.y = currY;
			eh -= 0.3;
			return returnValue;
		}
		for(var i = 0;i < a.length;i++)
		{
			if(checkLinePoint(currX, currY, a[i].x+asteroidPoly.x1, a[i].y+asteroidPoly.y1, a[i].x+asteroidPoly.x2, a[i].y+asteroidPoly.y2) || checkLinePoint(currX, currY, a[i].x+asteroidPoly.x2, a[i].y+asteroidPoly.y2, a[i].x+asteroidPoly.x3, a[i].y+asteroidPoly.y3) || checkLinePoint(currX, currY, a[i].x+asteroidPoly.x3, a[i].y+asteroidPoly.y3, a[i].x+asteroidPoly.x4, a[i].y+asteroidPoly.y4) || checkLinePoint(currX, currY, a[i].x+asteroidPoly.x4, a[i].y+asteroidPoly.y4, a[i].x+asteroidPoly.x5, a[i].y+asteroidPoly.y5) || checkLinePoint(currX, currY, a[i].x+asteroidPoly.x5, a[i].y+asteroidPoly.y5, a[i].x+asteroidPoly.x1, a[i].y+asteroidPoly.y1))
			{
				returnValue.x = currX;
				returnValue.y = currY;
				return returnValue;
			}
		}
		if(distancePoint(currX, currY, fx+76, fy+80) <= 82)
		{
			returnValue.x = currX;
			returnValue.y = currY;
			fh -= 0.6;
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

function Level_click()
{
	if(!enemyDestroyed && !gameOver && !GC)
	{
		if(mousex >= -40 && mousex <= 50 && mousey >= midy-350 && mousey <= midy-260) {
			enemyDestroyed = false;
			gameOver = false;
			minutes = 0;
			seconds = 0;
			runtime = 0;
			init = false;
			mirrors = [];
			sceneNumber = 1;
			for(var i = 0;i < mirrorCount;i++)
			{
				mirrorDrag[i] = false;
				canvas.removeEventListener("mousemove", Level_mousemove);
			}
			clearInterval(gameTimer);
			update();
			menu_click.play();
		}
	}
	else if(enemyDestroyed)
	{
		if(mousex > midx-190+70 && mousex < midx-90+65 && mousey > midy-45+45 && mousey < midy-45+100)
		{
			enemyDestroyed = false;
			gameOver = false;
			init = false;
			sceneNumber = 1;
			clearInterval(gameTimer);
			update();
			menu_click.play();
		}
		if(mousex > midx-50+70 && mousex < midx+50+70 && mousey > midy-45+45 && mousey < midy-45+100)
		{
			enemyDestroyed = false;
			gameOver = false;
			init = false;
			levelNumber++;
			clearInterval(gameTimer);
			update();
			menu_click.play();
		}
	}
	else if(gameOver)
	{
		if(mousex > midx-50 && mousex < midx+50 && mousey > midy-45+45 && mousey < midy-45+100)
		{
			enemyDestroyed = false;
			gameOver = false;
			init = false;
			sceneNumber = 1;
			clearInterval(gameTimer);
			update();
			menu_click.play();
		}
	}
	else
	{
		if(mousex > midx-50 && mousex < midx+50 && mousey > midy-45+45 && mousey < midy-45+100)
		{
			GC = false;
			enemyDestroyed = false;
			gameOver = false;
			init = false;
			sceneNumber = 1;
			clearInterval(gameTimer);
			update();
			menu_click.play();
		}
	}
}

function LevelFinished()
{
	canvas.style.cursor = "auto";
	var score = (Math.floor(fh+100*Math.pow(Math.E, -(minutes*60+seconds)/20)));
	scoreToShow = currentScore;
	currentScore += score;
	minutes = 0;
	seconds = 0;
	runtime = 0;
	init = false;
	clearInterval(gameTimer);
	for(var i = 0;i < mirrorCount;i++)
	{
		mirrorDrag[i] = false;
		canvas.removeEventListener("mousemove", Level_mousemove);
	}
	gameArena.clearRect(midx-220+2, midy-45-45+2, 440-4, 180-4);
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-220, midy-45-45, 440, 180, "#E6FFFF", 4);

	gameTimer = setInterval(drawLevelFinal, gameSpeed);
}

function Level_gameOver()
{
	canvas.style.cursor = "auto";
	minutes = 0;
	seconds = 0;
	runtime = 0;
	init = false;
	clearInterval(gameTimer);
	for(var i = 0;i < mirrorCount;i++)
	{
		mirrorDrag[i] = false;
		canvas.removeEventListener("mousemove", Level_mousemove);
	}
	gameArena.clearRect(midx-220+2, midy-45-45+2, 440-4, 180-4);
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-220, midy-45-45, 440, 180, "#E6FFFF", 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Game Over!", midx, midy-45+15);
	gameTimer = setInterval(drawLevelGO, gameSpeed);
}

function Level_GC()
{
	canvas.style.cursor = "auto";
	minutes = 0;
	seconds = 0;
	runtime = 0;
	init = false;
	enemyDestroyed = false;
	gameOver = false;
	clearInterval(gameTimer);
	for(var i = 0;i < mirrorCount;i++)
	{
		mirrorDrag[i] = false;
		canvas.removeEventListener("mousemove", Level_mousemove);
	}
	gameArena.clearRect(0, 0, width, height);
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-220, midy-45-45, 440, 180, "#E6FFFF", 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Final Score: " + currentScore, midx, midy-45+15);
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	gameArena.font = "100px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Game Completed!", midx, midy-170);
	gameTimer = setInterval(drawGC, gameSpeed);
}

function drawLevelFinal()
{
	gameArena.clearRect(midx-220+20, midy-45-25, 440-40, 150);
	mark = false;
	var colorCheck;
	var hoverCheck = 0;

	if(scoreToShow == currentScore-1)
	{
		scoreToShow++;
	}
	else if(scoreToShow == currentScore-2)
	{
		scoreToShow+=2;
	}
	else if(scoreToShow != currentScore)
	{
		scoreToShow+=3;
	}

	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Score: " + scoreToShow, midx, midy-45+15);

	if(mousex > midx-190+70 && mousex < midx-90+65 && mousey > midy-45+45 && mousey < midy-45+100)
	{
		mark = true;
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
		mark = true;
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
	gameArena.fillText(">",midx+140-70,midy-45+92);

	if(mark)
	{
		canvas.style.cursor = "pointer";
	}
	else
	{
		canvas.style.cursor = "auto";
	}
}

function drawLevelGO()
{
	gameArena.clearRect(midx-220+20, midy-45+20, 440-40, 100);
	mark = false;
	var colorCheck;
	var hoverCheck = 0;

	if(mousex > midx-50 && mousex < midx+50 && mousey > midy-45+45 && mousey < midy-45+100)
	{
		mark = true;
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
	gameArena.fillText("<",midx,midy-45+92);

	if(mark)
	{
		canvas.style.cursor = "pointer";
	}
	else
	{
		canvas.style.cursor = "auto";
	}
}

function drawGC()
{
	gameArena.clearRect(0, 0, width, height);
	drawLevelSpace();
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-220, midy-45-45, 440, 180, "#E6FFFF", 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Final Score: " + currentScore, midx, midy-45+15);
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	gameArena.font = "100px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Game Completed!", midx, midy-170);
	mark = false;
	var colorCheck;
	var hoverCheck = 0;

	if(mousex > midx-50 && mousex < midx+50 && mousey > midy-45+45 && mousey < midy-45+100)
	{
		mark = true;
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
	gameArena.fillText("<",midx,midy-45+92);

	if(mark)
	{
		canvas.style.cursor = "pointer";
	}
	else
	{
		canvas.style.cursor = "auto";
	}
}