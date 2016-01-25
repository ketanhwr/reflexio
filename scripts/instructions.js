
function instructions()
{
	var colorCheck;
	var mark = false;

	gameArena.clearRect(0,0,width,height);
	drawMovingSpace();

	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";

	gameArena.font = "70px Zorque";
	gameArena.fillStyle = "#E6FFFF";

	gameArena.textAlign = "center";
	gameArena.fillText("Instructions",midx,midy/3);

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

function instructions_click()
{
	if(mousex >= 30 && mousex <= 30+90 && mousey >= midy-270 && mousey <= midy-195) {
		sceneNumber = 1;
		clearInterval(gameTimer);
		update();
		menu_click.play();
	}
}