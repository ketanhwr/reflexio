function mainMenu()
{
	gameArena.clearRect(0,0, width, height);
	drawMovingSpace();

	var hoverCheck = 0;
	var colorCheck;

	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";

	gameArena.font = "110px Zorque";
	gameArena.fillStyle = "#E6FFFF";

	gameArena.textAlign = "center";
	gameArena.fillText("REFLEXIO",midx,midy/2.2);

	if(mousex >= midx-200 && mousex <= midx+200 && mousey >= midy-130 && mousey <= midy-60)
		hoverCheck = 1;
	if(mousex >= midx-200 && mousex <= midx+200 && mousey >= midy-20 && mousey <= midy+50)
		hoverCheck = 2;
	if(mousex >= midx-200 && mousex <= midx+200 && mousey >= midy+90 && mousey <= midy+160)
		hoverCheck = 3;
	if(mousex >= midx-200 && mousex <= midx+200 && mousey >= midy+200 && mousey <= midy+270)
		hoverCheck = 4;
	
	if(hoverCheck != 0)
	{
		canvas.style.cursor = "pointer";
	}
	else
	{
		canvas.style.cursor = "auto";
	}


	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#E6FFFF";
	if(hoverCheck == 1) colorCheck = "#E6FFFF";
	else colorCheck = "#18CAE6";
	drawRoundedRectangle(midx-200, midy-130, 400, 70, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Complex";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("play",midx,midy-83);

	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#E6FFFF";
	if(hoverCheck == 2) colorCheck = "#E6FFFF";
	else colorCheck = "#18CAE6";
	drawRoundedRectangle(midx-200, midy-20, 400, 70, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Complex";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("settings",midx,midy+27);

	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#E6FFFF";
	if(hoverCheck == 3) colorCheck = "#E6FFFF";
	else colorCheck = "#18CAE6";
	drawRoundedRectangle(midx-200, midy+90, 400, 70, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Complex";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("instructions",midx,midy+138);

	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#E6FFFF";
	if(hoverCheck == 4) colorCheck = "#E6FFFF";
	else colorCheck = "#18CAE6";
	drawRoundedRectangle(midx-200, midy+200, 400, 70, colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Complex";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("about us",midx,midy+248);
}

function mainMenu_click()
{
	if(mousex >= midx-200 && mousex <= midx+200 && mousey >= midy-130 && mousey <= midy-60)
	{
		currentScore = 0;
		sceneNumber = 6;
		levelNumber = 1;
		if(gameMode) lives = 1;
		else lives = 3;
		clearInterval(gameTimer);
		update();
		lastClickCounter = 0;
		if(volume) menu_click.play();
	}
	if(mousex >= midx-200 && mousex <= midx+200 && mousey >= midy-20 && mousey <= midy+50)
	{
		sceneNumber = 3;
		clearInterval(gameTimer);
		update();
		lastClickCounter = 0;
		if(volume) menu_click.play();
	}
	if(mousex >= midx-200 && mousex <= midx+200 && mousey >= midy+90 && mousey <= midy+160)
	{
		sceneNumber = 4;
		clearInterval(gameTimer);
		update();
		lastClickCounter = 0;
		if(volume) menu_click.play();
	}
	if(mousex >= midx-200 && mousex <= midx+200 && mousey >= midy+200 && mousey <= midy+270)
	{
		sceneNumber = 5;
		clearInterval(gameTimer);
		update();
		lastClickCounter = 0;
		if(volume) menu_click.play();
	}
}
