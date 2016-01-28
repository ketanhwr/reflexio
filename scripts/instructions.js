function instructions()
{
	var colorCheck;
	runtime1++;
	var mark = false;
	gameArena.clearRect(0,0,width,height);
	drawMovingSpace();
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	gameArena.font = "70px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.textAlign = "center";
	gameArena.fillText("Instructions",midx,midy/3);
	drawMirror(midx-580*(width/1220),midy-150*(width/1220),midx-550*(width/1220),midy-100*(width/1220),0,1);
	drawMirror(midx+580*(width/1220),midy-150*(width/1220),midx+550*(width/1220),midy-100*(width/1220),0,0);
	var str1="Draggable Mirror";
	var str2="Fixed Mirror";
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	gameArena.font = "20px DJB";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText(str1,midx-460*(width/1220),midy-130*(width/1220));
	gameArena.fillText(str2,midx+480*(width/1220),midy-130*(width/1220));
	gameArena.shadowBlur = 50*Math.abs(Math.sin(runtime1/20));
	gameArena.shadowColor = "#780000";
	gameArena.drawImage(enemyShip, midx-600*(width/1220), midy-50*(width/1220), 120*(width/1220), 114.43*(width/1220));
	gameArena.shadowBlur = 10;
	gameArena.shadowColor = "#0DA114";
	gameArena.drawImage(spaceStation, midx+430*(width/1220), midy-55*(width/1220));
	var str3="Enemy Ship";
	var str31=" Kill It! ";
	var str4="Mother Ship";
	var str41=" Protect It! ";
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	gameArena.font = "20px DJB";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText(str3,midx-420*(width/1220),midy);
	gameArena.fillText(str31,midx-425*(width/1220),midy+30*(width/1220));
	gameArena.fillText(str4,midx+350*(width/1220),midy+40*(width/1220));
	gameArena.fillText(str41,midx+350*(width/1220),midy+70*(width/1220));
	var str5="The Objective of the Game is to";
	var str6="destroy the Enemy ship by Reflecting";
	var str7="the laser from your Ship and avoiding";
	var str8="damage to the MotherShip";
	var str9="Use Mouse to drag Reflectors";
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	gameArena.font = "25px DJB";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText(str5,midx,midy-(150*(width/1220)));
	gameArena.fillText(str6,midx,midy-(110*(width/1220)));
	gameArena.fillText(str7,midx,midy-(70*(width/1220)));
	gameArena.fillText(str8,midx,midy-(30*(width/1220)));
	gameArena.fillText(str9,midx,midy+(10*(width/1220)));
	gameArena.shadowBlur = 10;
	gameArena.shadowColor = "#780000";
	gameArena.drawImage(asteroid, midx+(50*(width/1220)), midy+(40*(width/1220)));
	gameArena.shadowBlur = 50;
	gameArena.shadowColor = "#21E821";
	gameArena.beginPath();
	gameArena.lineWidth = 4;
	gameArena.strokeStyle = "#21E821";
	gameArena.moveTo(midx-(250*(width/1220)),midy+(70*(width/1220)));
	gameArena.lineTo(midx-(150*(width/1220)), midy+(70*(width/1220)));
	gameArena.stroke();
	gameArena.beginPath();
	gameArena.fillStyle = "#21E821";
	gameArena.arc(midx-(250*(width/1220)),midy+(70*(width/1220)), 2, 0, 2*Math.PI);
	gameArena.fill();
	gameArena.beginPath();
	gameArena.fillStyle = "#21E821";
	gameArena.arc(midx-(150*(width/1220)),midy+(70*(width/1220)), 2, 0, 2*Math.PI);
	gameArena.fill();
	var str8="Asteroid";
	var str9="Health Bar";
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	gameArena.font = "25px DJB";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText(str8,midx+90*(width/1220),midy+160*(width/1220));
	gameArena.fillText(str9,midx-200*(width/1220),midy+130*(width/1220));
	drawRay(width-150*(width/1220),height-50*(width/1220),0*(width/1220),height-50*(width/1220));
	var str10="Our Ship";
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	gameArena.font = "25px DJB";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText(str10,width-150,height-90);
	gameArena.shadowBlur = 10;
	gameArena.shadowColor = "#18CAE6";
	gameArena.drawImage(mainShip, width-152*(width/1220), height-94*(width/1220), 150*(width/1220), 89*(width/1220));
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
function instructions_click()
{
	if(mousex >= 30*(width/1220) && mousex <= 120*(width/1220) && mousey >= midy-270*(width/1220) && mousey <= midy-195*(width/1220)) {
		sceneNumber = 1;
		clearInterval(gameTimer);
		update();
		if(volume) menu_click.play();
	}
}