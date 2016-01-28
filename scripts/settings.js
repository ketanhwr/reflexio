function settings()
{
	var color1 = "#E6FFFF";
	var color2 = "#18CAE6";
	var color3 = "#E6FFFF";
	var color4 = "#18CAE6";
	var color5 = "#E6FFFF";
	var color6 = "#18CAE6";
	var hoverCheck = 0;
	var colorCheck;
	var mark = false;
	gameArena.clearRect(0,0,width,height);
	drawMovingSpace();

	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";

	gameArena.font = "70px Zorque";
	gameArena.fillStyle = "#E6FFFF";

	gameArena.textAlign = "center";
	gameArena.fillText("Settings",midx,midy/3);

	/*Main Setting Area*/

	if(mousex >= midx && mousex <= midx+140 && mousey >= midy-92 && mousey <= midy - 92 + 36)
		hoverCheck = 1;
	if(mousex >= midx + 143 && mousex <= midx+140 + 143 && mousey >= midy-92 && mousey <= midy - 92 + 36)
		hoverCheck = 2;
	if(mousex >= midx && mousex <= midx+70 && mousey >= midy - 45 + 50 && mousey <= midy- 45 + 36 + 50)
		hoverCheck = 3;
	if(mousex >= midx + 73 && mousex <= midx+143 && mousey >= midy - 45 + 50 && mousey <= midy-45 + 36 + 50)
		hoverCheck = 4;
	if(mousex >= midx && mousex <= midx+70 && mousey >= midy + 2 + 100&& mousey <= midy+2 + 36 + 100)
		hoverCheck = 5;
	if(mousex >= midx + 73 && mousex <= midx+143 && mousey >= midy+ 2 + 100 && mousey <= midy+ 2 + 36 + 100)
		hoverCheck = 6;

	var str1 = "Game Type : ";
	var str2 = "Volume : ";
	var str3 = "Particles : ";

	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	gameArena.font = "35px DJB";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText(str1,midx + 100 - 217,midy-120+60);
	gameArena.fillText(str2,midx + 100 - 183,midy-72+60 + 50);
	gameArena.fillText(str3,midx + 100 - 196,midy-24+60 + 100);

	gameArena.shadowBlur = 0;

	if(!gameMode)
	{
		color1 = "#E6FFFF";
		color2 = "#18CAE6";
	}
	else
	{
		color1 = "#18CAE6";
		color2 = "#E6FFFF";
	}

	if(volume)
	{
		color3 = "#E6FFFF";
		color4 = "#18CAE6";
	}
	else
	{
		color3 = "#18CAE6";
		color4 = "#E6FFFF";
	}

	if(particles)
	{
		color5 = "#E6FFFF";
		color6 = "#18CAE6";
	}
	else
	{
		color5 = "#18CAE6";
		color6 = "#E6FFFF";
	}


	if(hoverCheck == 1 && gameMode == 1)
	{
		gameArena.shadowBlur = 10;
		gameArena.shadowColor = "#E6FFFF";
		mark = true;
	}
	drawLeftRoundedRectangle(midx + 100 - 100, midy-92, 140, 36, color1, 3);
	gameArena.shadowBlur = 0;
	if(hoverCheck == 2 && gameMode == 0)
	{
		gameArena.shadowBlur = 10;
		gameArena.shadowColor = "#E6FFFF";
		mark = true;
	}
	drawRightRoundedRectangle(midx + 100 + 43, midy-92, 140, 36, color2, 3);
	gameArena.shadowBlur = 0;
	gameArena.font = "20px Complex";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("arcade",midx + 100 - 25,midy-126+60);
	gameArena.shadowBlur = 0;
	gameArena.font = "20px Complex";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("survival",midx + 100 + 115,midy-126+60);


	if(hoverCheck == 3 && volume == 0)
	{
		gameArena.shadowBlur = 10;
		gameArena.shadowColor = "#E6FFFF";
		mark = true;
	}
	drawLeftRoundedRectangle(midx + 100 - 100, midy-45 + 50, 70, 36, color3, 3);
	gameArena.shadowBlur = 0;
	if(hoverCheck == 4 && volume == 1)
	{
		gameArena.shadowBlur = 10;
		gameArena.shadowColor = "#E6FFFF";
		mark = true;
	}
	drawRightRoundedRectangle(midx + 100 - 27, midy-45 + 50, 70, 36, color4, 3);
	gameArena.shadowBlur = 0;
	gameArena.font = "20px Complex";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("on",midx + 100 - 60,midy-80+60 + 50);
	gameArena.shadowBlur = 0;
	gameArena.font = "20px Complex";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("off",midx + 100 + 6,midy-80+60 + 50);


	if(hoverCheck == 5 && particles == 0)
	{
		gameArena.shadowBlur = 10;
		gameArena.shadowColor = "#E6FFFF";
		mark = true;
	}
	drawLeftRoundedRectangle(midx + 100 - 100, midy + 2 + 100, 70, 36, color5, 3);
	gameArena.shadowBlur = 0;
	if(hoverCheck == 6 && particles == 1)
	{
		gameArena.shadowBlur = 10;
		gameArena.shadowColor = "#E6FFFF";
		mark = true;
	}
	drawRightRoundedRectangle(midx + 100  - 27, midy + 2 + 100, 70, 36, color6, 3);
	gameArena.shadowBlur = 0;
	gameArena.font = "20px Complex";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("on",midx + 100 - 60,midy-34+60 + 100);
	gameArena.shadowBlur = 0;
	gameArena.font = "20px Complex";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("off",midx + 100 + 6,midy-34+60 + 100);
	/*End*/

	gameArena.shadowBlur = 7;
	gameArena.shadowColor = "#E6FFFF";
	colorCheck = "#18CAE6";
	if(mousex >= 30 && mousex <= 30+90 && mousey >= midy-270 && mousey <= midy-195) {
		colorCheck = "#E6FFFF";
		mark = true;
	}
	drawRoundedRectangle(30, midy-270, 90, 75, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "60px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.textAlign = "center";
	gameArena.fillText("<",73, midy-212);

	if(!mark)
	{
		canvas.style.cursor = "auto";
	}
	else
	{
		canvas.style.cursor = "pointer";
	}

}

function settings_click()
{
	if(mousex >= 30 && mousex <= 30+90 && mousey >= midy-270 && mousey <= midy-195) {
		sceneNumber = 1;
		clearInterval(gameTimer);
		update();
		if(volume) menu_click.play();
	}
	if(mousex >= midx && mousex <= midx+140 && mousey >= midy-92 && mousey <= midy - 92 + 36)
	{
		if(volume) menu_click.play();
		gameMode = 0;
	}
	if(mousex >= midx + 143 && mousex <= midx+140 + 143 && mousey >= midy-92 && mousey <= midy - 92 + 36)
	{
		if(volume) menu_click.play();
		gameMode = 1;
	}
	if(mousex >= midx && mousex <= midx+70 && mousey >= midy - 45 + 50&& mousey <= midy- 45 + 36  + 50)
	{
		if(volume) menu_click.play();
		volume = 1;
	}
	if(mousex >= midx + 73 && mousex <= midx+143 && mousey >= midy - 45 + 50 && mousey <= midy-45 + 36 + 50)
	{
		if(volume) menu_click.play();
		volume = 0;
	}
	if(mousex >= midx && mousex <= midx+70 && mousey >= midy + 2 + 100 && mousey <= midy+2 + 36 + 100)
	{
		if(volume) menu_click.play();
		particles = 1;
	}
	if(mousex >= midx + 73 && mousex <= midx+143 && mousey >= midy+ 2 + 100 && mousey <= midy+ 2 + 36 + 100)
	{
		if(volume) menu_click.play();
		particles = 0;
	}
}