function levelSelector()
{
	gameArena.clearRect(0,0,width,height);
	drawMovingSpace();

	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";

	gameArena.font = "70px Zorque";
	gameArena.fillStyle = "#E6FFFF";

	gameArena.textAlign = "center";
	gameArena.fillText("Select Level",midx,midy/3);

	var colorCheck;
	var mark = false;
	var counter = 1;

	for(var i = 0;i < 7;i++)
	{
		gameArena.shadowBlur = 7;
		gameArena.shadowColor = "#E6FFFF";
		colorCheck = "#18CAE6";
		if(mousex >= (i+1)*140 && mousex <= (i+1)*140+100 && mousey >= midy-150 && mousey <= midy-50) {
			colorCheck = "#E6FFFF";
			mark = true;
		}
		drawRoundedRectangle((i+1)*140, midy-150, 100, 100, colorCheck, 4);
		gameArena.shadowBlur = 0;
		gameArena.font = "45px Zorque";
		gameArena.fillStyle = "#E6FFFF";
		gameArena.textAlign = "center";
		gameArena.fillText(counter++,(i+1)*140+48, midy-86);
	}

	for(var i = 0;i < 7;i++)
	{
		gameArena.shadowBlur = 7;
		gameArena.shadowColor = "#E6FFFF";
		colorCheck = "#18CAE6";
		if(mousex >= (i+1)*140 && mousex <= (i+1)*140+100 && mousey >= midy && mousey <= midy+100) {
			colorCheck = "#E6FFFF";
			mark = true;
		}
		drawRoundedRectangle((i+1)*140, midy, 100, 100, colorCheck, 4);
		gameArena.shadowBlur = 0;
		gameArena.font = "45px Zorque";
		gameArena.fillStyle = "#E6FFFF";
		gameArena.textAlign = "center";
		gameArena.fillText(counter++,(i+1)*140+48, midy+64);
	}

	for(var i = 0;i < 7;i++)
	{
		gameArena.shadowBlur = 7;
		gameArena.shadowColor = "#E6FFFF";
		colorCheck = "#18CAE6";
		if(mousex >= (i+1)*140 && mousex <= (i+1)*140+100 && mousey >= midy+150 && mousey <= midy+250) {
			colorCheck = "#E6FFFF";
			mark = true;
		}
		drawRoundedRectangle((i+1)*140, midy+150, 100, 100, colorCheck, 4);
		gameArena.shadowBlur = 0;
		gameArena.font = "45px Zorque";
		gameArena.fillStyle = "#E6FFFF";
		gameArena.textAlign = "center";
		gameArena.fillText(counter++,(i+1)*140+48, midy+150+64);
	}

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

function levelSelector_click()
{
	if(lastClickCounter <= 20)
		return;
	if(mousex >= 30 && mousex <= 30+90 && mousey >= midy-270 && mousey <= midy-195) {
		sceneNumber = 1;
		clearInterval(gameTimer);
		update();
		lastClickCounter = 0;
		menu_click.play();
	}
	for(var i = 0;i < 7;i++)
	{
		if(mousex >= (i+1)*140 && mousex <= (i+1)*140+100 && mousey >= midy-150 && mousey <= midy-50) {
			sceneNumber = 6;
			levelNumber = i+1;
			clearInterval(gameTimer);
			update();
			lastClickCounter = 0;
			menu_click.play();
		}
	}
}