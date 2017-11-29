var initX1=midx-500*(width/1220);
var initY1=midy-130*(width/1220);
var initX2=midx+500*(width/1220);
var initY2=midy-130*(width/1220);
function aboutUs() //Removed a blank space
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
	var str6="Thanks to MillionthVector for sprites!"
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	gameArena.font = "35px DJB";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText(str,midx,midy-((120-60))*(width/1220));
	gameArena.fillText(str1,midx,midy-((72-60))*(width/1220));
	gameArena.fillText(str2,midx,midy-((24-60))*(width/1220));
	gameArena.fillText(str3,midx,midy+((24+60))*(width/1220));
	gameArena.fillText(str4,midx,midy+((72+60))*(width/1220));
	gameArena.fillText(str5,midx,midy+((120+60))*(width/1220));
	gameArena.fillText(str6,midx,midy+((168+60))*(width/1220));

	//Content End

	drawRay(initX1,initY1,initX2,initY2);
	drawRay(initX1,initY1+400,initX2,initY2+400);

	gameArena.drawImage(abtUs2,midx-600*(width/1220),midy-160*(width/1220));
	gameArena.drawImage(abtUs2,midx-600*(width/1220),midy+240*(width/1220));
	gameArena.drawImage(abtUs1,midx+500*(width/1220),midy-160*(width/1220));
	gameArena.drawImage(abtUs1,midx+500*(width/1220),midy+240*(width/1220));


	gameArena.shadowBlur = 7;
	gameArena.shadowColor = "#E6FFFF";
	colorCheck = "#18CAE6";
	if(mousex >= 30*(width/1220) && mousex <= 120*(width/1220) && mousey >= midy-270*(width/1220) && mousey <= midy-195*(width/1220)) {
		colorCheck = "#E6FFFF";
		mark = true;
	}
	drawRoundedRectangle(30*(width/1220), midy-270*(width/1220), 90*(width/1220), 75*(width/1220), colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "60px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.textAlign = "center";
	gameArena.fillText("<",73*(width/1220), midy-212*(width/1220));

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
	if(mousex >= 30*(width/1220) && mousex <= 120*(width/1220) && mousey >= midy-270*(width/1220) && mousey <= midy-195*(width/1220)) {
		sceneNumber = 1;
		clearInterval(gameTimer);
		update();
		if(volume) menu_click.play();
	}
}
