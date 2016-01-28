var initX1=midx-500;
var initY1=midy-130;
var initX2=midx+500;
var initY2=midy-130;

function aboutUs()
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
	gameArena.fillText("About Us!",midx,midy/3);

	//Content Start

	var str="This Game is being developed by Ketan Gupta and Harjot Singh";
	var str1="We are currently studying in IIT Roorkee";
	var str2="No Physics engine was used in the development of this Game";
	var str3="All Ray Physics has been implemented purely";
	var str4="using JavaScript";
	var str5="This game is under the MIT License , Feel free to Contribute!";
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	gameArena.font = "35px DJB";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText(str,midx,midy-120+60);
	gameArena.fillText(str1,midx,midy-72+60);
	gameArena.fillText(str2,midx,midy-24+60);
	gameArena.fillText(str3,midx,midy+24+60);
	gameArena.fillText(str4,midx,midy+72+60);
	gameArena.fillText(str5,midx,midy+120+60);

	//Content End

	drawRay(initX1,initY1,initX2,initY2);
	drawRay(initX1,initY1+360,initX2,initY2+360);

	gameArena.drawImage(abtUs2,midx-600,midy-160);
	gameArena.drawImage(abtUs2,midx-600,midy+200);
	gameArena.drawImage(abtUs1,midx+500,midy-160);
	gameArena.drawImage(abtUs1,midx+500,midy+200);


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

function aboutUs_click()
{
	if(mousex >= 30 && mousex <= 30+90 && mousey >= midy-270 && mousey <= midy-195) {
		sceneNumber = 1;
		clearInterval(gameTimer);
		update();
		menu_click.play();
	}
}