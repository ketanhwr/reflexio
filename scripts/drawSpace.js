var initialOffset = 50;
var initialisationFlag = true;
var drawParticleFlag = false;
var spaceParticles = [];
var particleCount = 150;

function initSpace()                       // ??
{
	for (var i = 0; i < particleCount; i++)
	{
		myCircle = {
			x : midx + (50*Math.random() - 25),
			y : midy + (50*Math.random() - 25),
			particleRadius : Math.ceil((Math.random()*1) + 0.5)/2,
			vY : 4*((Math.random()) - 0.51),
			vX : 4*((Math.random()) - 0.51)
		};
		spaceParticles.push(myCircle);
	};
}

function drawParticles()
{
	if(drawParticleFlag && particles)
	{
		for (var i = 0; i < particleCount; i++)
		{
			gameArena.beginPath();
			gameArena.shadowBlur = 0;
			gameArena.arc(spaceParticles[i].x, spaceParticles[i].y, spaceParticles[i].particleRadius, 0, 2*Math.PI, true);
			gameArena.fillStyle = "#FFFFFF";
			gameArena.fill();
		}
		gameArena.arc(midx, midy, 90, 0, 2*Math.PI, true);
		gameArena.shadowBlur = 200;
		gameArena.shadowColor = "BLAcK";
		gameArena.fillStyle = "#000000";
		gameArena.fill();
	}
}

function drawParticlesLevel()
{
	if(drawParticleFlag && particles)
	{
		for (var i = 0; i < 50; i++)
		{
			gameArena.beginPath();
			gameArena.shadowBlur = 0;
			gameArena.arc(spaceParticles[i].x, spaceParticles[i].y, spaceParticles[i].particleRadius, 0, 2*Math.PI, true);
			gameArena.fillStyle = "#FFFFFF";
			gameArena.fill();
		}
		gameArena.arc(midx, midy, 90, 0, 2*Math.PI, true);
		gameArena.shadowBlur = 200;
		gameArena.shadowColor = "BLACK";
		gameArena.fillStyle = "#000000";
		gameArena.fill();
	}
}

function drawMovingSpace()
{
	if(initialisationFlag)
	{
		initSpace();
		initialisationFlag=0;
	}
	
	for (var i = 0; i < particleCount; i++)
	{
		var new_x = spaceParticles[i].x + initialOffset*spaceParticles[i].vX;
		var new_y = spaceParticles[i].y + initialOffset*spaceParticles[i].vY;
		if(new_x < (width+5) && new_y < (height+5) && new_x > (-5) && new_y > (-5))
		{
			spaceParticles[i].x = new_x;
			spaceParticles[i].y = new_y;
		}
		else{
			if(new_x > (width+5))
			{
				myCircle = {
					x : midx + (50*Math.random() - 25),
					y : midy + (50*Math.random() - 25),
					particleRadius : Math.ceil((Math.random()*1) + 0.5)/2,
					vY : 4*((Math.random()) - 0.51),
					vX : 4*((Math.random()) - 0.51)
				};
				spaceParticles[i] = myCircle;
			}
			else if(new_y > height+5)
			{
				myCircle = {
					x : midx + (50*Math.random() - 25),
					y : midy + (50*Math.random() - 25),
					particleRadius : Math.ceil((Math.random()*1) + 0.5)/2,
					vY : 4*((Math.random()) - 0.51),
					vX : 4*((Math.random()) - 0.51)
				};
				spaceParticles[i] = myCircle;
			}
			else if(new_x < (-5))
			{
				myCircle = {
					x : midx + (50*Math.random() - 25),
					y : midy + (50*Math.random() - 25),
					particleRadius : Math.ceil((Math.random()*1) + 0.5)/2,
					vY : 4*((Math.random()) - 0.51),
					vX : 4*((Math.random()) - 0.51)
				};
				spaceParticles[i] = myCircle;
			}
			else if(new_y < (-5))
			{
				myCircle = {
					x : midx + (50*Math.random() - 25),
					y : midy + (50*Math.random() - 25),
					particleRadius : Math.ceil((Math.random()*1) + 0.5)/2,
					vY : 4*((Math.random()) - 0.51),
					vX : 4*((Math.random()) - 0.51)
				};
				spaceParticles[i] = myCircle;
			}
		}
	}
	initialOffset = 1;
	drawParticles();
}

function drawLevelSpace()
{
	if(initialisationFlag)
	{
		initSpace();
		initialisationFlag=0;
	}
	
	for (var i = 0; i < 50; i++)
	{
		var new_x = spaceParticles[i].x + initialOffset*spaceParticles[i].vX;
		var new_y = spaceParticles[i].y + initialOffset*spaceParticles[i].vY;
		if(new_x < (width+5) && new_y < (height+5) && new_x > (-5) && new_y > (-5))
		{
			spaceParticles[i].x = new_x;
			spaceParticles[i].y = new_y;
		}
		else{
			if(new_x > (width+5))
			{
				myCircle = {
					x : midx + (50*Math.random() - 25),
					y : midy + (50*Math.random() - 25),
					particleRadius : Math.ceil((Math.random()*1) + 0.5)/2,
					vY : 4*((Math.random()) - 0.51),
					vX : 4*((Math.random()) - 0.51)
				};
				spaceParticles[i] = myCircle;
			}
			else if(new_y > height+5)
			{
				myCircle = {
					x : midx + (50*Math.random() - 25),
					y : midy + (50*Math.random() - 25),
					particleRadius : Math.ceil((Math.random()*1) + 0.5)/2,
					vY : 4*((Math.random()) - 0.51),
					vX : 4*((Math.random()) - 0.51)
				};
				spaceParticles[i] = myCircle;
			}
			else if(new_x < (-5))
			{
				myCircle = {
					x : midx + (50*Math.random() - 25),
					y : midy + (50*Math.random() - 25),
					particleRadius : Math.ceil((Math.random()*1) + 0.5)/2,
					vY : 4*((Math.random()) - 0.51),
					vX : 4*((Math.random()) - 0.51)
				};
				spaceParticles[i] = myCircle;
			}
			else if(new_y < (-5))
			{
				myCircle = {
					x : midx + (50*Math.random() - 25),
					y : midy + (50*Math.random() - 25),
					particleRadius : Math.ceil((Math.random()*1) + 0.5)/2,
					vY : 4*((Math.random()) - 0.51),
					vX : 4*((Math.random()) - 0.51)
				};
				spaceParticles[i] = myCircle;
			}
		}
	}
	initialOffset = 1;
	drawParticlesLevel();
}