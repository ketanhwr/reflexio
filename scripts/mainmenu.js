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

	if(mousex >= midx-200*(width/1220) && mousex <= midx+200*(width/1220) && mousey >= midy-130*(width/1220) && mousey <= midy-60*(width/1220))
		hoverCheck = 1;
	if(mousex >= midx-200*(width/1220) && mousex <= midx+200*(width/1220) && mousey >= midy-20*(width/1220) && mousey <= midy+50*(width/1220))
		hoverCheck = 2;
	if(mousex >= midx-200*(width/1220) && mousex <= midx+200*(width/1220) && mousey >= midy+90*(width/1220) && mousey <= midy+160*(width/1220))
		hoverCheck = 3;
	if(mousex >= midx-200*(width/1220) && mousex <= midx+200*(width/1220) && mousey >= midy+200*(width/1220) && mousey <= midy+270*(width/1220))
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
	drawRoundedRectangle(midx-200*(width/1220), midy-130*(width/1220), 400*(width/1220), 70*(width/1220), colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Complex";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("play",midx,midy-83*(width/1220));

	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#E6FFFF";
	if(hoverCheck == 2) colorCheck = "#E6FFFF";
	else colorCheck = "#18CAE6";
	drawRoundedRectangle(midx-200*(width/1220), midy-20*(width/1220), 400*(width/1220), 70*(width/1220), colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Complex";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("settings",midx,midy+27*(width/1220));

	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#E6FFFF";
	if(hoverCheck == 3) colorCheck = "#E6FFFF";
	else colorCheck = "#18CAE6";
	drawRoundedRectangle(midx-200*(width/1220), midy+90*(width/1220), 400*(width/1220), 70*(width/1220), colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Complex";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("instructions",midx,midy+138*(width/1220));

	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#E6FFFF";
	if(hoverCheck == 4) colorCheck = "#E6FFFF";
	else colorCheck = "#18CAE6";
	drawRoundedRectangle(midx-200*(width/1220), midy+200*(width/1220), 400*(width/1220), 70*(width/1220), colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Complex";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("about us",midx,midy+248*(width/1220));
}

function mainMenu_click()
{
	if(mousex >= midx-200*(width/1220) && mousex <= midx+200*(width/1220) && mousey >= midy-130*(width/1220) && mousey <= midy-60*(width/1220))
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
	if(mousex >= midx-200*(width/1220) && mousex <= midx+200*(width/1220) && mousey >= midy-20*(width/1220) && mousey <= midy+50*(width/1220))
	{
		sceneNumber = 3;
		clearInterval(gameTimer);
		update();
		lastClickCounter = 0;
		if(volume) menu_click.play();
	}
	if(mousex >= midx-200*(width/1220) && mousex <= midx+200*(width/1220) && mousey >= midy+90*(width/1220) && mousey <= midy+160*(width/1220))
	{
		sceneNumber = 4;
		clearInterval(gameTimer);
		update();
		lastClickCounter = 0;
		if(volume) menu_click.play();
	}
	if(mousex >= midx-200*(width/1220) && mousex <= midx+200*(width/1220) && mousey >= midy+200*(width/1220) && mousey <= midy+270*(width/1220))
	{
		sceneNumber = 5;
		clearInterval(gameTimer);
		update();
		lastClickCounter = 0;
		if(volume) menu_click.play();
	}
}
