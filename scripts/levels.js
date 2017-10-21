var mirrors = [];                         
var CircMirrors = [];        //n
var init = false;              
var mirrorCount;                          
var CircMirrorCount = 0;        //n
var mirrorDrag = [];                      
var CircMirrorDrag = [];     //n
var minutes = 0;
var seconds = 0;
var runtime = 0;
var mark = false;
var ex;
var ey = 100;
var enemyDestroyed = false;
var a = []; 
var a1 = [];              
var gameOver = false;
var eh = 100;
var fh;
var GC = false;
var scoreToShow;
var v = 0.73;
var v1 = -1;
var v2 = 1.5;
var v3 = -1.7;
var v4 = 1.29;
var v5 = 0.73;
var v6 = 0.73;
var v7 = 0.73;
var v8 = 0.73;
var v10= 1.26;var v11= 0.3937;var v12= 0.3937;var v13= 1.26; 
var v21= 1.2; var v22= 1.2;  
var ss = [];

//Minor QoL upgrade and highlights use of magic numbers. What is 1220? the target resolution?
function magicWidth() {
	return width/1220;
}

//MAJOR QoL upgrade
function BuildMirror(x, y, width, height, drag) {
	mirrors.push({
		x: x*magicWidth(),
		y: y*magicWidth(),
		width: width*magicWidth(),
		height: height*magicWidth(),	// increase the mirror by adding this
		drag,	// drag is only for fixing the mirror.
	});
	mirrorDrag.push(false);
}
function BuildNonStandardMirror(mirror) {
	mirrors.push(mirror);
	mirrorDrag.push(false);
}

//Minor QoL upgrade
function BuildAsteroid(x, y)
{
	a.push({
		x: x*magicWidth();
		y: y*magicWidth();
	});
}
function BuildMovingAsteroid(x,y) {
	a1.push({
		x: x*magicWidth();
		y: y*magicWidth();
	});
}
//This might be a little extra, but is good for establishing a convention
function BuildNonStandardAsteroid(asteroid) {
	a.push(asteroid);
}
function BuildNonStandardMovingAsteroid(asteroid) {
	a1.push(asteroid);
}

function StandardLevelInit()
{
	mirrors = [];
	mirrorDrag = [];
	CircMirrors = []; 
	a1 = [];    
	CircMirrorDrag = [];
	a = [];
	ss =[];
	minutes = 0;
	seconds = 0;
	runtime = 0;
	enemyDestroyed = false;
}

function initialiseLevel()
{ 
    if(levelNumber == 1)
	{
		mirrors = [];
		mirrorDrag = [];
		CircMirrors = []; 
		a1 = [];    
		CircMirrorDrag = [];
		a = [];
		ss =[];
		minutes = 0;
		seconds = 0;
		runtime = 0;
		enemyDestroyed = false;
		//gameOver = false;
		ex = width-140*(magicWidth());       
		ey = 100*(magicWidth());
		eh = 100; 

		mySpacestation = {
        	x: midx-70*(magicWidth()),
        	y: 100*(magicWidth()),
        	fh: 100
        };
        ss.push(mySpacestation);

		BuildMirror(200, 150, 100, 100, 1);
		BuildMirror(600, 400, 100, -100, 1);

		BuildAsteroid(1000, 100);
		BuildAsteroid(1000, 200);
		BuildAsteroid(1100, 240);

		mirrorCount = mirrors.length;
		CircMirrorCount = CircMirrors.length;
		init = true;
	}
	else if(levelNumber == 2)
	{
		mirrors = [];
		mirrorDrag = [];
		CircMirrors = [];     
		CircMirrorDrag = [];
		a = [];
		a1 =[];
		ss = [];
		minutes = 0;
		seconds = 0;
		runtime = 0;
		enemyDestroyed = false;
		ex = 20*(magicWidth());
		ey = 80*(magicWidth());
		eh = 100*(magicWidth());
		mySpacestation = {
        	x: midx+100*(magicWidth()),
        	y: 60*(magicWidth()),
        	fh: 100
        };
        ss.push(mySpacestation); 
		
		BuildMirror(200, 150, 0, 100, 1);
		BuildMirror(600, 400, 0, 100, 1);
		BuildMirror(600, 150, 0, 100, 1);
		BuildMirror(100, 250, 4, 100, 1);

		mirrorCount = mirrors.length;
		CircMirrorCount = CircMirrors.length;
		init = true;
	}
	else if(levelNumber == 3)
	{
		mirrors = [];
		mirrorDrag = [];
		CircMirrors = [];     
		CircMirrorDrag = [];
		a = [];
		a1 =[];
		ss =[];
		minutes = 0;
		seconds = 0;
		runtime = 0;
		enemyDestroyed = false;
		ex = width-300*(magicWidth());
		ey = 20*(magicWidth());
		eh = 100;
		mySpacestation = {
        	x: midx*(3/2)*(magicWidth()),
        	y: 200*(magicWidth()),
        	fh: 100
        };
        ss.push(mySpacestation); 
		
		BuildMirror(200, 150, 0, 100, 1);
		BuildMirror(600, 400, 0, 100, 1);
		BuildMirror(100, 250, 4, 100, 1);

		mirrorCount = mirrors.length;
		CircMirrorCount = CircMirrors.length;
		init = true;
	}
	else if(levelNumber == 4)
	{
		mirrors = [];
		mirrorDrag = [];
		CircMirrors = [];     
		CircMirrorDrag = [];
		a = [];
		a1 =[];
		ss =[];
		minutes = 0;
		seconds = 0;
		runtime = 0;
		enemyDestroyed = false;
		ex = midx-60*(magicWidth());
		ey = 60*(magicWidth());
		eh = 100;
		mySpacestation = {
        	x: midx-20*(magicWidth()),
        	y: midy-40*(magicWidth()),
        	fh: 100
        };
        ss.push(mySpacestation);
		
		BuildMirror(200, 150, 0, 100, 1);
		BuildMirror(600, 420, 0, 100, 1);
		BuildMirror(700, 150, 0, 100, 1);
		BuildMirror(100, 250, 4, 100, 1);

		BuildAsteroid(1100, 250);
		BuildAsteroid(300, 300);
		BuildAsteroid(1100, 150);
		BuildAsteroid(400, 350);
		BuildAsteroid(400, 250);
		BuildAsteroid(500, 300);

		mirrorCount = mirrors.length;
		CircMirrorCount = CircMirrors.length;
		init = true;
	}
	else if(levelNumber == 5)
	{
		mirrors = [];
		mirrorDrag = [];
		CircMirrors = [];     
		CircMirrorDrag = [];
		a = [];
		a1 =[];
		ss= [];
		minutes = 0;
		seconds = 0;
		runtime = 0;
		enemyDestroyed = false;
		ex = 10*(magicWidth());
		ey = 90*(magicWidth());
		eh = 100;
		mySpacestation = {
        	x: 180*(magicWidth()),
        	y: midy-40*(magicWidth()),
        	fh: 100
        };
        ss.push(mySpacestation);
		BuildNonStandardMirror({
			x: 150*(magicWidth()),
			width: 100*(magicWidth()),
			y: midy+200*(magicWidth()),
			height: 100*(magicWidth()),
			drag: 1
		});

		BuildNonStandardMirror({
			x: 800*(magicWidth()),
			width: 100*(magicWidth()),
			y: midy-100*(magicWidth()),
			height: -150*(magicWidth()),
			drag: 1
		});
		BuildNonStandardMirror({
			x: 700*(magicWidth()),
			width: 0*(magicWidth()),
			y: 400*(magicWidth()),
			height: 100*(magicWidth()),
			drag: 1
		});
		BuildNonStandardMirror({
			x: 900*(magicWidth()),
			width: 100*(magicWidth()),
			y: 500*(magicWidth()),
			height: 0*(magicWidth()),
			drag: 1
		});

		BuildAsteroid(5, 220);
		BuildAsteroid(78, 190);
		BuildAsteroid(130, 120);
		
		mirrorCount = mirrors.length;
		CircMirrorCount = CircMirrors.length;
		init = true;
	}
	else if(levelNumber == 6)
	{
		mirrors = [];
		mirrorDrag = [];
		CircMirrors = [];     
		CircMirrorDrag = [];
		a = [];
		a1 =[];
		ss = [];
		minutes = 0;
		seconds = 0;
		runtime = 0;
		enemyDestroyed = false;
		ex = 10*(magicWidth());
		ey = 90*(magicWidth());
		eh = 100;
		mySpacestation = {
        	x: midx,
        	y: midy-230*(magicWidth()),
        	fh: 100
        };
        ss.push(mySpacestation);

		BuildNonStandardMirror({
			x: 250*(magicWidth()),
			width: 100*(magicWidth()),
			y: midy,
			height: 100*(magicWidth()),
			drag: 1
		});
		BuildNonStandardMirror({
			x: 1000*(magicWidth()),
			width: 100*(magicWidth()),
			y: midy-100*(magicWidth()),
			height: 70*(magicWidth()),
			drag: 1
		});
		BuildNonStandardMirror({
			x: 10*(magicWidth()),
			width: 16*(magicWidth()),
			y: midy+200*(magicWidth()),
			height: 90*(magicWidth()),
			drag: 0
		});
		BuildNonStandardMirror({
			x: 500*(magicWidth()),
			width: 100*(magicWidth()),
			y: midy+290*(magicWidth()),
			height: -100*(magicWidth()),
			drag: 0
		});
		BuildNonStandardMirror({
			x: 450*(magicWidth()),
			width: 100*(magicWidth()),
			y: midy-250*(magicWidth()),
			height: 100*(magicWidth()),
			drag: 1
		});

		BuildAsteroid(5, 220);
		BuildAsteroid(85, 210);
		BuildAsteroid(110, 130)''
		BuildNonStandardAsteroid({
			x: midx+100*(magicWidth()),
			y: 270*(magicWidth())
		});
		BuildNonStandardAsteroid({
			x: midx-200*(magicWidth()),
			y: 270*(magicWidth())
		});
		
		mirrorCount = mirrors.length;
		CircMirrorCount = CircMirrors.length;
		init = true;
	}
	else if(levelNumber == 7)
	{

		mirrors = [];
		mirrorDrag = [];
		CircMirrors = [];     //n
		CircMirrorDrag = [];
		a = [];
		a1 =[];
		ss = [];
		minutes = 0;
		seconds = 0;
		runtime = 0;
		enemyDestroyed = false;
		ex = (magicWidth());       // ex,ey is the position of enemytriangle
		ey = 250*(magicWidth());
		eh = 100;
		mySpacestation = {
        	x: midx-400*(magicWidth()),
        	y: 55*(magicWidth()),
        	fh: 100
        };
        ss.push(mySpacestation);                      

		BuildMirror(700, 360, -15, 100, 1);
		BuildMirror(30, 500, 13, 100, 1);
		BuildMirror(900, 200, 100, 1, 1);
		BuildMirror(500, 157, 35, 1, 0);

        
		BuildAsteroid(80, 180);
		BuildAsteroid(115, 250);
		BuildAsteroid(110, 335);
		BuildAsteroid(50, 385);


		mirrorCount = mirrors.length;
		CircMirrorCount = CircMirrors.length;
		init = true;	
	}
	else if(levelNumber == 8)
	{

		mirrors = [];
		mirrorDrag = [];
		CircMirrors = [];     
		CircMirrorDrag = [];
		a = [];
		a1 =[];
		ss = [];
		minutes = 0;
		seconds = 0;
		runtime = 0;
		enemyDestroyed = false;
		ex = (magicWidth());       
		ey = 525*(magicWidth());
		eh = 100;
        mySpacestation = {
        	x: midx-70*(magicWidth()),
        	y: 250*(magicWidth()),
        	fh: 100
        };
        ss.push(mySpacestation);
		
		BuildMirror(200, 510, -18, 100, 1);
		BuildMirror(270, 620, 100, 0, 1);
		BuildMirror(1100, 530, 95, -100, 1);
		BuildMirror(1200, 150, -95, -100, 1);
		BuildMirror(20, 130, 50, -90, 1);
		BuildMirror(450, 420, 50, 0, 0);
		
		BuildAsteroid(1, 430);
		BuildAsteroid(70, 440);
		BuildAsteroid(110, 570);

		mirrorCount = mirrors.length;
		CircMirrorCount = CircMirrors.length;
		init = true;
	}
	else if(levelNumber == 9)
	{
        mirrors = [];
		mirrorDrag = [];
		CircMirrors = []; 
		a1 = [];    
		CircMirrorDrag = [];
		a = [];
		ss =[];
		minutes = 0;
		seconds = 0;
		runtime = 0;
		enemyDestroyed = false;
		ex = -15*(magicWidth());       
		ey = 520*(magicWidth());
		eh = 100; 

        mySpacestation = {
        	x: 13*(magicWidth()),
        	y: 90*(magicWidth()),
        	fh: 100
        };
        ss.push(mySpacestation);  
        mySpacestation = {
        	x: 1067*(magicWidth()),
        	y: 90*(magicWidth()),
        	fh: 100
        };
        ss.push(mySpacestation);         

		BuildMirror(350, 520, 17, 80, 1);
		BuildMirror(1040, 320, -100, -80, 1);
		BuildMirror(910, 480, 100, -50, 1);
		BuildMirror(250, 170, 47.8, -100, 1);

		BuildAsteroid(95, 545);
		BuildAsteroid(105, 465);
		BuildAsteroid(37, 430);

		mirrorCount = mirrors.length;
		CircMirrorCount = CircMirrors.length;
		init = true;
	}
    else if(levelNumber == 10)
	{
		mirrors = [];
		mirrorDrag = [];
		CircMirrors = [];   
		CircMirrorDrag = [];
		a = [];
		a1 = [];
		ss = [];
		minutes = 0;
		seconds = 0;
		runtime = 0;
		enemyDestroyed = false;
		ex = width-90*(magicWidth());  
		ey = 250*(magicWidth());
		eh = 100; 
		mySpacestation = {
        	x: midx+370*(magicWidth()),
        	y: 200*(magicWidth()),
        	fh: 100
        };

        ss.push(mySpacestation);
        mySpacestation = {
        	x: 370*(magicWidth()),
        	y: 100*(magicWidth()),
        	fh: 100
        };
        ss.push(mySpacestation);           

		BuildMirror(380, 520, 100, 100, 1);
		BuildMirror(600, 400, 100, 0, 1);

		myCircMirror ={
			x: 200*(magicWidth()),
			//width: 100*(magicWidth()),
			y: 300*(magicWidth()),
			//height: -100*(magicWidth()),
			drag: 1
		};
		CircMirrors.push(myCircMirror);
		CircMirrorDrag.push(false);

		BuildAsteroid(900, 150);
		BuildAsteroid(900, 250);
		BuildAsteroid(900, 350);
		BuildAsteroid(900, 50);
		BuildAsteroid(900, 1);
		BuildAsteroid(1090, 170);
		BuildAsteroid(1095, 350);
		BuildAsteroid(1150, 390);

		mirrorCount = mirrors.length;
		CircMirrorCount = CircMirrors.length;
		init = true;

	}
	else if(levelNumber == 11)
	{
		mirrors = [];
		mirrorDrag = [];
		CircMirrors = [];     
		CircMirrorDrag = [];
		a = [];
		a1 = [];        
		ss =[];
		minutes = 0;
		seconds = 0;
		runtime = 0;
		enemyDestroyed = false;
		ex = width-110*(magicWidth());       
		ey = 515*(magicWidth());
		eh = 100; 

		mySpacestation = {
        	x: 1*(magicWidth()),
        	y: 270*(magicWidth()),
        	fh: 100
        };
        ss.push(mySpacestation);                      
        mySpacestation = {
        	x: 210*(magicWidth()),
        	y: 30*(magicWidth()),
        	fh: 100
        };
        ss.push(mySpacestation)
        mySpacestation = {
        	x: (1080)*(magicWidth()),    
        	y: 240*(magicWidth()),     
        	fh: 100
        };
        ss.push(mySpacestation);

		BuildMirror(1135, 360, 70, 0, 0);
		BuildMirror(1135, 390, 50, 50, 1);
		BuildMirror(700, 550, 50, 50, 1);
		BuildMirror(750, 380, -50, 50, 1);

		BuildAsteroid(1152, 425);
		BuildAsteroid(1082, 535);
		BuildAsteroid(1007, 480);
		BuildAsteroid(1005, 580);

		BuildMovingAsteroid(230, 283);
		BuildMovingAsteroid(300, 283);
		BuildMovingAsteroid(370, 283);
		BuildMovingAsteroid(440, 283);
		BuildMovingAsteroid(510, 283);
		BuildMovingAsteroid(580, 283);
		BuildMovingAsteroid(650, 283);
		BuildMovingAsteroid(720, 285);
		BuildMovingAsteroid(790, 285);
		BuildMovingAsteroid(860, 285);
		BuildMovingAsteroid(930, 287);

		mirrorCount = mirrors.length;
		CircMirrorCount = CircMirrors.length;
		init = true;
	}
	else if(levelNumber == 12)
	{
		mirrors = [];
		mirrorDrag = [];
		CircMirrors = []; 
		a1 = [];    
		CircMirrorDrag = [];
		a = [];
		ss =[];
		minutes = 0;
		seconds = 0;
		runtime = 0;
		enemyDestroyed = false;
		ex = 450*(magicWidth());       
		ey = 250*(magicWidth());
		eh = 100; 

		mySpacestation = {
        	x: 630*(magicWidth()),
        	y: 335*(magicWidth()),
        	fh: 100
        };
        ss.push(mySpacestation);          

		BuildMirror(800, 530, 11,  70, 0);
		BuildMirror(830, 395, 0, 50, 1);
		BuildMirror(900, 370, 0, 100, 1);
		BuildMirror(90, 60, 100, 0, 0);
		BuildMirror(200, 260, -4, -60, 1);

		BuildMovingAsteroid(380, 190);

		BuildAsteroid(450, 170);
		BuildAsteroid(520, 185);
		BuildAsteroid(580, 215);
		BuildAsteroid(565, 450);
		BuildAsteroid(475, 370);
		BuildAsteroid(410, 345);
		BuildAsteroid(380, 270);

		mirrorCount = mirrors.length;
		CircMirrorCount = CircMirrors.length;
		init = true;
	}
	else
	{
		mirrors = [];
		mirrorDrag = [];
		a = [];
		a1 =[];
		ss = [];
		minutes = 0;
		seconds = 0;
		runtime = 0;
		enemyDestroyed = false;
		mirrorCount = mirrors.length;
		CircMirrorCount = CircMirrors.length;
		GC = true;
	}
}

// From here sab set ho raha hai

function drawGUI()
{
	var colorCheck;  

	if(levelNumber != 11) 
	{                              
	gameArena.shadowBlur = 10;
	gameArena.shadowColor = "#18CAE6";
	gameArena.drawImage(mainShip, width-152*(magicWidth()), height-94*(magicWidth()), 150*(magicWidth()), 89*(magicWidth())); 
    }

	if(levelNumber == 7)
	{	
	gameArena.shadowBlur = 10;
	gameArena.shadowColor = "#18CAE6";
	gameArena.drawImage(secondShip, width-(165+700)*(magicWidth()), -105*(magicWidth()), 330*(magicWidth()), 330*(magicWidth()));
	}

	if(levelNumber == 8)
	{	
	gameArena.shadowBlur = 10;
	gameArena.shadowColor = "#18CAE6";
	gameArena.drawImage(secondShip2, width-983*(magicWidth()), 113*(magicWidth()), 300*(magicWidth()), 300*(magicWidth()));
	}

	gameArena.shadowBlur = 50*Math.abs(Math.sin(runtime/20));            // for enemyship 
	gameArena.shadowColor = "#780000";
	gameArena.drawImage(enemyShip, ex, ey, 120*(magicWidth()), 114.43*(magicWidth()));

	gameArena.shadowBlur = 10;                   // for asteroids
	gameArena.shadowColor = "#B32D00";
	for(var i = 0;i < a.length;i++)
	{
		gameArena.drawImage(asteroid, a[i].x, a[i].y);
	}

	gameArena.shadowBlur = 1;                   // for asteroids_location_change
	gameArena.shadowColor = "#ff0707";

	if(levelNumber != 12) {
	for(var i = 0;i < a1.length;i++)
	{
		var condition=((0<=seconds)&&(seconds<3))||((6<=seconds)&&(seconds<9))||((12<=seconds)&&(seconds<15))||((18<=seconds)&&(seconds<21))||((24<=seconds)&&(seconds<27))||
		((30<=seconds)&&(seconds<33))||((36<=seconds)&&(seconds<39))||((42<=seconds)&&(seconds<45))||((48<=seconds)&&(seconds<51))||((54<=seconds)&&(seconds<57));
		if(condition)     
		    gameArena.drawImage(asteroid1, a1[i].x1, a1[i].y1);   
	    else
	    	gameArena.drawImage(asteroid1, 1600, 1000);
	}
}
	if(levelNumber == 12)
	{
		for(var i = 0;i < a1.length;i++) {
		var condition= ((0<=seconds)&&(seconds<5))||((8<=seconds)&&(seconds<15))||((20<=seconds)&&(seconds<25))||((30<=seconds)&&(seconds<35))
	    ||((38<=seconds)&&(seconds<45))||((50<=seconds)&&(seconds<55));  
		if(condition)     
		    gameArena.drawImage(asteroid1, a1[i].x1, a1[i].y1);   
	    else
	    	gameArena.drawImage(asteroid1, 1600, 1000);
	}
	}

	if(levelNumber == 11)   
    {
    gameArena.shadowBlur = 10;
    gameArena.shadowColor = "#18CAE6";
    gameArena.drawImage(mainShip, width-250*(magicWidth()), height-94*(magicWidth()), 150*(magicWidth()), 89*(magicWidth()))	
    }


    if(levelNumber == 10)
	{
	    a[0].y += v1;
		if(a[0].y>488*(magicWidth()) || a[0].y<(magicWidth())) {
        v1 = v1*(-1);
		}
        
		a[1].y += v2;
		if(a[1].y>488*(magicWidth()) || a[1].y<(magicWidth())) {
        v2 = v2*(-1);
		}
        
		a[2].y += v3;
		if(a[2].y>488*(magicWidth()) || a[2].y<(magicWidth())) {
        v3 = v3*(-1);
		}

		a[3].y += v4*1.7;
		if(a[3].y>488*(magicWidth()) || a[3].y<(magicWidth())) {
        v4 = v4*(-1);
		}
        
        a[4].y += v*1.7;
		if(a[4].y>488*(magicWidth()) || a[4].y<(magicWidth())) {
        v = v*(-1);
		}
	}
    
    for(var i = 0;i < ss.length;i++) {
	gameArena.shadowBlur = 10;                   // for spacestation 
	gameArena.shadowColor = "#0DA114";
	gameArena.drawImage(spaceStation, ss[i].x, ss[i].y);
	gameArena.lineWidth = 0.05;
	gameArena.beginPath();
	gameArena.strokeStyle = "#0DA114";
	gameArena.arc(ss[i].x+76*(magicWidth()), ss[i].y+83*(magicWidth()), 82*(magicWidth()), 0, 2*Math.PI);
	gameArena.stroke();
    }    

	if(levelNumber == 10)
	{
		ss[0].y += v5;
		if(ss[0].y>315*(magicWidth()) || ss[0].y<150*(magicWidth())){
			v5 = v5*(-1);
		}
	}

	if(levelNumber == 11) 
	{
		ss[0].y += v6;
		ss[0].x += v6;
		if(ss[0].y<270*(magicWidth()) || ss[0].y>480*(magicWidth() ) || ss[0].x>240*(magicWidth() ) || ss[0].x<1*(magicWidth())){
			v6 = v6*(-1);
		}
		ss[1].y += v7;
		ss[1].x -= v7;
		if(ss[1].y<30*(magicWidth()) || ss[1].y>240*(magicWidth() ) || ss[1].x>240*(magicWidth() ) || ss[1].x<1*(magicWidth())){
			v7 = v7*(-1);
		}
		ss[2].y -= v8;
		ss[2].x -= v8;
		if(ss[2].y<30*(magicWidth()) || ss[2].y>240*(magicWidth() ) || ss[2].x<870*(magicWidth() ) || ss[2].x>1080*(magicWidth())){
			v8 = v8*(-1);
		}
	}

	if(levelNumber == 9)
	{
		ss[0].y += v21;
		if(ss[0].y>270*(magicWidth()) || ss[0].y<90*(magicWidth())){
			v21 = v21*(-1);
		}
		ss[1].y += v22;
		if(ss[1].y>270*(magicWidth()) || ss[1].y<90*(magicWidth())){
			v22 = v22*(-1);
		}
	}

	gameArena.shadowBlur = 20;                   // for the middle rectangle which one is for time
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-80*(magicWidth()), midy-350*(magicWidth()), 160*(magicWidth()), 90*(magicWidth()), "#E6FFFF", 4);  //change
	gameArena.shadowBlur = 0;
	gameArena.font = "42px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	var displayMinutes = (minutes<10)?("0"+minutes):(minutes);
	var displaySeconds = (seconds<10)?("0"+seconds):(seconds);
	gameArena.fillText(displayMinutes + ":" + displaySeconds, midx, midy-305);     // move time inside the rectangle   //change

	gameArena.shadowBlur = 7;                            // at top left corner on hovring the mouse on < then color changes 
	gameArena.shadowColor = "#E6FFFF";         
	colorCheck = "#18CAE6";
	if(mousex >= -40*(magicWidth()) && mousex <= 50*(magicWidth()) && mousey >= midy-350*(magicWidth()) && mousey <= midy-260*(magicWidth())) {
		colorCheck = "#E6FFFF";
		mark = true;
	}

	gameArena.shadowBlur = 20;              // at left corner < 
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(-40*(magicWidth()), midy-350*(magicWidth()), 90*(magicWidth()), 90*(magicWidth()), colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<", 20*(magicWidth()), midy-270*(magicWidth()));

	colorCheck = "#E6FFFF";                // for the level at corner
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(width-182*(magicWidth()), midy-350*(magicWidth()), 220*(magicWidth()), 90*(magicWidth()), colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Level " + levelNumber, width-90*(magicWidth()), midy-273*(magicWidth()));

	colorCheck = "#E6FFFF";                // for the scoreboard 
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-(182+250+10)*(magicWidth()), midy-350*(magicWidth()), (250+20)*(magicWidth()), 90*(magicWidth()), colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Score: " + currentScore, midx-(55+250)*(magicWidth()), midy-273*(magicWidth()));

	if(!gameMode) {                     //  gamemode is 1 for survival and 0 for arcard     // lives only in arcard mode
		colorCheck = "#E6FFFF";
		gameArena.shadowBlur = 20;
		gameArena.shadowColor = "#18CAE6";
		drawRoundedRectangle(midx+180*(magicWidth()), midy-350*(magicWidth()), 150*(magicWidth()), 90*(magicWidth()), colorCheck, 4);
		gameArena.shadowBlur = 0;
		gameArena.font = "40px Zorque";
		gameArena.fillStyle = "#E6FFFF";
		if(lives >= 1) gameArena.drawImage(life, midx+(190-2)*(magicWidth()), midy-305*(magicWidth()));
		else gameArena.drawImage(life1, midx+(190-2)*(magicWidth()), midy-305*(magicWidth()));
		if(lives >= 2) gameArena.drawImage(life, midx+(235-2)*(magicWidth()), midy-305*(magicWidth()));
		else gameArena.drawImage(life1, midx+(235-2)*(magicWidth()), midy-305*(magicWidth()));
		if(lives >= 3) gameArena.drawImage(life, midx+(280-2)*(magicWidth()), midy-305*(magicWidth()));
		else gameArena.drawImage(life1, midx+(280-2)*(magicWidth()), midy-305*(magicWidth()));
	}

	if(eh >= 2.0) {                              // for making the yellow color life line of enemytriangle
		gameArena.shadowBlur = 50;
		gameArena.shadowColor = "#21E821";
		gameArena.beginPath();
		gameArena.lineWidth = 4;
		gameArena.strokeStyle = "#21E821";
		gameArena.moveTo(ex+30*(magicWidth()), ey-5*(magicWidth()));
		gameArena.lineTo(ex+(30+50*(eh/100.0))*(magicWidth()), ey-5*(magicWidth()));
		gameArena.stroke();
		gameArena.beginPath();
		gameArena.fillStyle = "#21E821";
		gameArena.arc(ex+30*(magicWidth()), ey-5*(magicWidth()), 2*(magicWidth()), 0, 2*Math.PI);
		gameArena.fill();
		gameArena.beginPath();
		gameArena.fillStyle = "#21E821";
		gameArena.arc(ex+(30+50*(eh/100.0))*(magicWidth()), ey-5*(magicWidth()), 2*(magicWidth()), 0, 2*Math.PI);
		gameArena.fill();
	}
	for(var i = 0;i < ss.length;i++) {
	if(ss[i].fh >= 2.0) {
		gameArena.shadowBlur = 50;               
		gameArena.shadowColor = "#21E821";
		gameArena.beginPath();
		gameArena.lineWidth = 4;
		gameArena.strokeStyle = "#21E821";
		gameArena.arc(ss[i].x+(30+20+20)*(magicWidth()),ss[i].y-15*(magicWidth())+100,90,0,2*Math.PI*(ss[i].fh/100));
		gameArena.stroke();
		if(ss[i].fh<99) {
		gameArena.beginPath();
		gameArena.fillStyle = "#21E821";
		gameArena.arc(ss[i].x+(30+20+20)*(magicWidth())+90, ss[i].y-15*(magicWidth())+100, 2*(magicWidth()), 0, 2*Math.PI);
		gameArena.fill();
	    }
	}
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
	drawLevelSpace();                                   // it is only for background stars;

	traceRay();                        //for tracing the ray 

	if(levelNumber == 7)   //new add
	{
		traceRay0();
	}     

	if(levelNumber == 8)  //new add
	{
		traceRay1();
	}  

    for(var i = 0;i<ss.length;i++){
	if(ss[i].fh <= 0)
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

	if(levelNumber == 7 )     
	{
		mirrors[3].x += v;
		if(mirrors[3].x>600*(magicWidth()) || mirrors[3].x<390*(magicWidth())) {
        v = v*(-1);
		}
	}

	if(levelNumber == 8)     
	{
		mirrors[5].x += v;
		if(mirrors[5].x>600*(magicWidth()) || mirrors[5].x<400*(magicWidth())) {
        v = v*(-1);
		}
	}

	if(levelNumber == 12)     
	{
		mirrors[0].x += v10;
		if(mirrors[0].x>800*(magicWidth()) || mirrors[0].x<120*(magicWidth())) {
        v10 = v10*(-1);
		}
		mirrors[1].y +=  v11;
		if(mirrors[1].y>395*(magicWidth()) || mirrors[1].y<182*(magicWidth())) {
			v11 = v11*(-1);
		}
		mirrors[2].y +=  v12;
		if(mirrors[2].y>370*(magicWidth()) || mirrors[2].y<157*(magicWidth())) {
			v12 = v12*(-1);
		}
		mirrors[3].x +=  v13;
		if(mirrors[3].x>765*(magicWidth()) || mirrors[3].x<90*(magicWidth())) {
			v13 = v13*(-1);
		}
	}

	for(var i = 0;i < CircMirrorCount ;i++)
	{
		var flag;
		if(checkLine( CircMirrors[i].x, CircMirrors[i].y, CircMirrors[i].x, CircMirrors[i].y+100 ) == 1 && mirrors[i].drag == 1 ) 
		{
			mark = true;
			flag = true;
		}
		else
		{
			flag = false;
		}
		drawMirrorCircular(CircMirrors[i].x, CircMirrors[i].y, flag, mirrors[i].drag);
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

	for(var i = 0;i < CircMirrorCount ;i++)
	{
		var flag;
		if(checkLine(CircMirrors[i].x, CircMirrors[i].y, CircMirrors[i].x, CircMirrors[i].y+100 ) == 1 && mirrors[i].drag == 1)
		{
			flag = true;
		}
		else
		{
			flag = false;
		}
		if(flag)
		{
			CircMirrorDrag[i] = true;
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

	for(var i = 0;i < CircMirrorCount ;i++)
	{
		CircMirrorDrag[i] = false;
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

	for(var i = 0;i < CircMirrorCount ;i++)
	{
		if(CircMirrorDrag[i])
		{
			CircMirrors[i].x = mousex;
			CircMirrors[i].y = mousey;
			break;
		}
	}
}

function traceRay()                
{
    if( levelNumber != 11)
	var rayX = width-150*(magicWidth()), rayY = height-50*(magicWidth()); 
    
    if(levelNumber == 11)
    var rayX = width-248*(magicWidth()), rayY = height-50*(magicWidth());

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

		if(wow.isCircular) {
		var xc = CircMirrors[wow.mirrorIndex].x;
		var yc = CircMirrors[wow.mirrorIndex].y+50;
		offset = calculateCircleAngle(rayX, rayY, wow.x, wow.y, xc, yc);                         
		currentAngle = ((-1)*(180/Math.PI)*Math.atan2((rayY-wow.y),(rayX-wow.x))) + offset ;
		rayX = wow.x;
		rayY = wow.y;
	    
	}
	    else{
	    var x1 = mirrors[wow.mirrorIndex].x;
		var x2 = mirrors[wow.mirrorIndex].width+x1;
		var y1 = mirrors[wow.mirrorIndex].y;
		var y2 = mirrors[wow.mirrorIndex].height+y1;
		offset = 2*(90-calculateAngle(x1,y1,x2,y2,rayX,rayY,wow.x,wow.y));
		currentAngle = ((-1)*(180/Math.PI)*Math.atan2((rayY-wow.y),(rayX-wow.x))) + offset;
		rayX = wow.x;
		rayY = wow.y;
		
	    }
	    wow = intersection(rayX, rayY, currentAngle);
		if(distancePoint(rayX, rayY, wow.x, wow.y) <= 5.0)
		{
			currentAngle -= 4*offset;
			wow = intersection(rayX, rayY, currentAngle);
		}
		drawRay(rayX, rayY, wow.x, wow.y);
	}
} 

function traceRay0()                // for tracing the ray path
{
	var rayX = width-750*(magicWidth()), rayY = 110*(magicWidth());         // position of starting point of ray
	var currentAngle = 225.0;
	var offset;
	while(true)
	{
		var wow = intersection0(rayX, rayY, currentAngle);          // checking the intersection

		drawRay(rayX, rayY, wow.x, wow.y);                        // draw main ray first 
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
		wow = intersection0(rayX, rayY, currentAngle);
		if(distancePoint(rayX, rayY, wow.x, wow.y) <= 5.0)
		{
			currentAngle -= 4*offset;
			wow = intersection0(rayX, rayY, currentAngle);
		}
		drawRay(rayX, rayY, wow.x, wow.y);
	}
} 

function traceRay1()                // for tracing the ray path
{
	var rayX = width-800*(magicWidth()), rayY = height-300*(magicWidth());         // position of starting point of ray
	var currentAngle = 300.0;
	var offset;
	while(true)
	{
		var wow = intersection1(rayX, rayY, currentAngle);          // checking the intersection

		drawRay(rayX, rayY, wow.x, wow.y);                        // draw main ray first 
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
		wow = intersection1(rayX, rayY, currentAngle);
		if(distancePoint(rayX, rayY, wow.x, wow.y) <= 5.0)
		{
			currentAngle -= 4*offset;
			wow = intersection1(rayX, rayY, currentAngle);
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
		mirrorIndex : 0,         // jis mirror me intersect ho rahi hai 
		isCircular : 0
	};
	var currX, currY;
	var radians = (rayTheta*Math.PI)/180.0;
	for(var r = 12*(magicWidth());;r++)
	{
		currX = rayX + r*Math.cos(radians);      //point by point position of laser (x,y)
		currY = rayY - r*Math.sin(radians);
		
		for(var i = 0;i < mirrorCount;i++)
		{
			if(checkLinePoint(currX, currY, mirrors[i].x, mirrors[i].y, mirrors[i].x+mirrors[i].width, mirrors[i].y+mirrors[i].height)) // it gives true when ray touches the mirror
			{
				if(distancePoint(currX, currY, mirrors[i].x, mirrors[i].y) <= 10.0)   // jo mirror ke ends par gole hai unse rokne ke liye
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

		for(var i = 0;i < CircMirrorCount ;i++)   
		{
			if(checkCirclePoint(CircMirrors[i].x, CircMirrors[i].y+50, rayX, rayY, currX, currY, 50)) // it gives true when ray touches the mirror
			{   
				//window.alert(rayX + " "+ rayY + " " + currX + " "+ currY+ " "+ (CircMirrors[i].y+50)+ " "+ (CircMirrors[i].y+100) );
				if(distancePoint(currX, currY, CircMirrors[i].x, CircMirrors[i].y) <= 10.0)   // jo mirror ke ends par gole hai unse rokne ke liye
					returnValue.intersect = false;

				else if(distancePoint(currX, currY, CircMirrors[i].x, CircMirrors[i].y+100) <= 10.0)
					returnValue.intersect = false;
				else returnValue.intersect = true;
				returnValue.x = currX;
				returnValue.y = currY;
				returnValue.mirrorIndex = i;
				returnValue.isCircular = 1;
				return returnValue;
			}
		}


          // ASK THIS three******************************************************************  for the enemy triangle ray takarayegi 

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
		if(levelNumber != 12){
		var condition=((0<=seconds)&&(seconds<3))||((6<=seconds)&&(seconds<9))||((12<=seconds)&&(seconds<15))||((18<=seconds)&&(seconds<21))||((24<=seconds)&&(seconds<27))||
		((30<=seconds)&&(seconds<33))||((36<=seconds)&&(seconds<39))||((42<=seconds)&&(seconds<45))||((48<=seconds)&&(seconds<51))||((54<=seconds)&&(seconds<57));
		for(var i = 0;i < a1.length;i++) 
		{
			if(condition){
			if(checkLinePoint(currX, currY, a1[i].x1+asteroidPoly.x1, a1[i].y1+asteroidPoly.y1, a1[i].x1+asteroidPoly.x2, a1[i].y1+asteroidPoly.y2) || checkLinePoint(currX, currY, a1[i].x1+asteroidPoly.x2, a1[i].y1+asteroidPoly.y2, a1[i].x1+asteroidPoly.x3, a1[i].y1+asteroidPoly.y3) || checkLinePoint(currX, currY, a1[i].x1+asteroidPoly.x3, a1[i].y1+asteroidPoly.y3, a1[i].x1+asteroidPoly.x4, a1[i].y1+asteroidPoly.y4) || checkLinePoint(currX, currY, a1[i].x1+asteroidPoly.x4, a1[i].y1+asteroidPoly.y4, a1[i].x1+asteroidPoly.x5, a1[i].y1+asteroidPoly.y5) || checkLinePoint(currX, currY, a1[i].x1+asteroidPoly.x5, a1[i].y1+asteroidPoly.y5, a1[i].x1+asteroidPoly.x1, a1[i].y1+asteroidPoly.y1))
			{
				returnValue.x = currX;
				returnValue.y = currY;
				return returnValue;
			}
		    }
		    else 
		    	continue;
		}
	}
	    if(levelNumber == 12)
	    {
	    var condition=((0<=seconds)&&(seconds<5))||((8<=seconds)&&(seconds<15))||((20<=seconds)&&(seconds<25))||((30<=seconds)&&(seconds<35))
	    ||((38<=seconds)&&(seconds<45))||((50<=seconds)&&(seconds<55));     
		for(var i = 0;i < a1.length;i++) 
		{
			if(condition){
			if(checkLinePoint(currX, currY, a1[i].x1+asteroidPoly.x1, a1[i].y1+asteroidPoly.y1, a1[i].x1+asteroidPoly.x2, a1[i].y1+asteroidPoly.y2) || checkLinePoint(currX, currY, a1[i].x1+asteroidPoly.x2, a1[i].y1+asteroidPoly.y2, a1[i].x1+asteroidPoly.x3, a1[i].y1+asteroidPoly.y3) || checkLinePoint(currX, currY, a1[i].x1+asteroidPoly.x3, a1[i].y1+asteroidPoly.y3, a1[i].x1+asteroidPoly.x4, a1[i].y1+asteroidPoly.y4) || checkLinePoint(currX, currY, a1[i].x1+asteroidPoly.x4, a1[i].y1+asteroidPoly.y4, a1[i].x1+asteroidPoly.x5, a1[i].y1+asteroidPoly.y5) || checkLinePoint(currX, currY, a1[i].x1+asteroidPoly.x5, a1[i].y1+asteroidPoly.y5, a1[i].x1+asteroidPoly.x1, a1[i].y1+asteroidPoly.y1))
			{
				returnValue.x = currX;
				returnValue.y = currY;
				return returnValue;
			}
		    }
		    else 
		    	continue;
		}
	    }
		for(var i = 0;i < ss.length;i++) 
		{
			if(distancePoint(currX, currY, ss[i].x+76*(magicWidth()), ss[i].y+80*(magicWidth())) <= 82*(magicWidth()))
		    {
		    	returnValue.x = currX;
			    returnValue.y = currY;
			    ss[i].fh -= 0.6;
			    return returnValue;
		    }
	    }
		if(currY < 0 || currY > height || currX < 0 || currX > width)
		{
			returnValue.x = currX;
			returnValue.y = currY;
			return returnValue;
		}
	}
}

function intersection0(rayX, rayY, rayTheta)
{
	var returnValue = {
		intersect : false,
		x : 0,
		y : 0,
		mirrorIndex : 0         // jis mirror me intersect ho rahi hai 
	};
	var currX, currY;
	var radians = (rayTheta*Math.PI)/180.0;
	for(var r = 12*(magicWidth());;r++)
	{
		currX = rayX + r*Math.cos(radians);      //point by point position of laser (x,y)
		currY = rayY - r*Math.sin(radians);
		
		for(var i = 0;i < mirrorCount;i++)
		{
			if(checkLinePoint(currX, currY, mirrors[i].x, mirrors[i].y, mirrors[i].x+mirrors[i].width, mirrors[i].y+mirrors[i].height)) // it gives true when ray touches the mirror
			{
				if(distancePoint(currX, currY, mirrors[i].x, mirrors[i].y) <= 10.0)   // jo mirror ke ends par gole hai unse rokne ke liye
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

          // ASK THIS three******************************************************************  for the enemy triangle ray takarayegi 

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
		var condition=((0<=seconds)&&(seconds<3))||((6<=seconds)&&(seconds<9))||((12<=seconds)&&(seconds<15))||((18<=seconds)&&(seconds<21))||((24<=seconds)&&(seconds<27))||
		((30<=seconds)&&(seconds<33))||((36<=seconds)&&(seconds<39))||((42<=seconds)&&(seconds<45))||((48<=seconds)&&(seconds<51))||((54<=seconds)&&(seconds<57));
		for(var i = 0;i < a1.length;i++) 
		{
			if(condition){
			if(checkLinePoint(currX, currY, a1[i].x1+asteroidPoly.x1, a1[i].y1+asteroidPoly.y1, a1[i].x1+asteroidPoly.x2, a1[i].y1+asteroidPoly.y2) || checkLinePoint(currX, currY, a1[i].x1+asteroidPoly.x2, a1[i].y1+asteroidPoly.y2, a1[i].x1+asteroidPoly.x3, a1[i].y1+asteroidPoly.y3) || checkLinePoint(currX, currY, a1[i].x1+asteroidPoly.x3, a1[i].y1+asteroidPoly.y3, a1[i].x1+asteroidPoly.x4, a1[i].y1+asteroidPoly.y4) || checkLinePoint(currX, currY, a1[i].x1+asteroidPoly.x4, a1[i].y1+asteroidPoly.y4, a1[i].x1+asteroidPoly.x5, a1[i].y1+asteroidPoly.y5) || checkLinePoint(currX, currY, a1[i].x1+asteroidPoly.x5, a1[i].y1+asteroidPoly.y5, a1[i].x1+asteroidPoly.x1, a1[i].y1+asteroidPoly.y1))
			{
				returnValue.x = currX;
				returnValue.y = currY;
				return returnValue;
			}
		    }
		    else 
		    	continue;
		}
		for(var i = 0;i < ss.length;i++) 
		{
			if(distancePoint(currX, currY, ss[i].x+76*(magicWidth()), ss[i].y+80*(magicWidth())) <= 82*(magicWidth()))
		    {
		    	returnValue.x = currX;
			    returnValue.y = currY;
			    ss[i].fh -= 0.6;
			    return returnValue;
		    }
	    }
		if(currY < 0 || currY > height-500 || currX < 0 || currX > width)
		{
			returnValue.x = currX;
			returnValue.y = currY;
			return returnValue;
		}
	}
}

function intersection1(rayX, rayY, rayTheta)
{
	var returnValue = {
		intersect : false,
		x : 0,
		y : 0,
		mirrorIndex : 0         // jis mirror me intersect ho rahi hai 
	};
	var currX, currY;
	var radians = (rayTheta*Math.PI)/180.0;
	for(var r = 12*(magicWidth());;r++)
	{
		currX = rayX + r*Math.cos(radians);      //point by point position of laser (x,y)
		currY = rayY - r*Math.sin(radians);
		
		for(var i = 0;i < mirrorCount;i++)
		{
			if(checkLinePoint(currX, currY, mirrors[i].x, mirrors[i].y, mirrors[i].x+mirrors[i].width, mirrors[i].y+mirrors[i].height)) // it gives true when ray touches the mirror
			{
				if(distancePoint(currX, currY, mirrors[i].x, mirrors[i].y) <= 10.0)   // jo mirror ke ends par gole hai unse rokne ke liye
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

          // ASK THIS three******************************************************************  for the enemy triangle ray takarayegi 

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
		var condition=((0<=seconds)&&(seconds<3))||((6<=seconds)&&(seconds<9))||((12<=seconds)&&(seconds<15))||((18<=seconds)&&(seconds<21))||((24<=seconds)&&(seconds<27))||
		((30<=seconds)&&(seconds<33))||((36<=seconds)&&(seconds<39))||((42<=seconds)&&(seconds<45))||((48<=seconds)&&(seconds<51))||((54<=seconds)&&(seconds<57));
		for(var i = 0;i < a1.length;i++) 
		{
			if(condition){
			if(checkLinePoint(currX, currY, a1[i].x1+asteroidPoly.x1, a1[i].y1+asteroidPoly.y1, a1[i].x1+asteroidPoly.x2, a1[i].y1+asteroidPoly.y2) || checkLinePoint(currX, currY, a1[i].x1+asteroidPoly.x2, a1[i].y1+asteroidPoly.y2, a1[i].x1+asteroidPoly.x3, a1[i].y1+asteroidPoly.y3) || checkLinePoint(currX, currY, a1[i].x1+asteroidPoly.x3, a1[i].y1+asteroidPoly.y3, a1[i].x1+asteroidPoly.x4, a1[i].y1+asteroidPoly.y4) || checkLinePoint(currX, currY, a1[i].x1+asteroidPoly.x4, a1[i].y1+asteroidPoly.y4, a1[i].x1+asteroidPoly.x5, a1[i].y1+asteroidPoly.y5) || checkLinePoint(currX, currY, a1[i].x1+asteroidPoly.x5, a1[i].y1+asteroidPoly.y5, a1[i].x1+asteroidPoly.x1, a1[i].y1+asteroidPoly.y1))
			{
				returnValue.x = currX;
				returnValue.y = currY;
				return returnValue;
			}
		    }
		    else 
		    	continue;
		}
		for(var i = 0;i < ss.length;i++) 
		{
			if(distancePoint(currX, currY, ss[i].x+76*(magicWidth()), ss[i].y+80*(magicWidth())) <= 82*(magicWidth()))
		    {
		    	returnValue.x = currX;
			    returnValue.y = currY;
			    ss[i].fh -= 0.6;
			    return returnValue;
		    }
	    }
		if(currY < 0 || currY > height-200 || currX < 0 || currX > width)
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
		if(mousex >= -40*(magicWidth()) && mousex <= 50*(magicWidth()) && mousey >= midy-350*(magicWidth()) && mousey <= midy-260*(magicWidth())) {
			enemyDestroyed = false;
			gameOver = false;
			minutes = 0;
			seconds = 0;
			runtime = 0;
			init = false;
			mirrors = [];
			CircMirrors = [];   //n
			sceneNumber = 1;
			for(var i = 0;i < mirrorCount;i++)
			{
				mirrorDrag[i] = false;
				canvas.removeEventListener("mousemove", Level_mousemove);
			}

			for(var i = 0;i < CircMirrorCount ;i++)
			{
				mirrorDrag[i] = false;
				canvas.removeEventListener("mousemove", Level_mousemove);
			}
			clearInterval(gameTimer);
			update();
			if(volume) menu_click.play();
		}
	}
	else if(enemyDestroyed)
	{
		if(mousex > midx-120*(magicWidth()) && mousex < midx-(90-65)*(magicWidth()) && mousey > midy && mousey < midy+55*(magicWidth()))
		{
			enemyDestroyed = false;
			gameOver = false;
			init = false;
			sceneNumber = 1;
			clearInterval(gameTimer);
			update();
			if(volume) menu_click.play();
		}
		if(mousex > midx+20*(magicWidth()) && mousex < midx+120*(magicWidth()) && mousey > midy && mousey < midy+55*(magicWidth()))
		{
			enemyDestroyed = false;
			gameOver = false;
			init = false;
			levelNumber++;
			clearInterval(gameTimer);
			update();
			if(volume) menu_click.play();
		}
	}
	else if(gameOver)
	{
		if(mousex > midx-50*(magicWidth()) && mousex < midx+50*(magicWidth()) && mousey > midy && mousey < midy+55*(magicWidth()))
		{
			enemyDestroyed = false;
			gameOver = false;
			init = false;
			sceneNumber = 1;
			clearInterval(gameTimer);
			update();
			if(volume) menu_click.play();
		}
	}
	else
	{
		if(mousex > midx-50*(magicWidth()) && mousex < midx+50*(magicWidth()) && mousey > midy && mousey < midy+55*(magicWidth()))
		{
			GC = false;
			enemyDestroyed = false;
			gameOver = false;
			init = false;
			sceneNumber = 1;
			clearInterval(gameTimer);
			update();
			if(volume) menu_click.play();
		}
	}
}

function LevelFinished()
{
	canvas.style.cursor = "auto";
	var sco = 0;
	if(levelNumber <= 12) {
		for(var i = 0;i<ss.length;i++){
			var sco = sco + ss[i].fh;
		}
		var sco1 = sco/ss.length;
		var score = (Math.floor(sco1+100*Math.pow(Math.E, -(minutes*60+seconds)/20)));       //????????????????changes the score to the average of space station
		scoreToShow = currentScore;
		currentScore += score;
}
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
	gameArena.clearRect(midx-218*(magicWidth()), midy-88*(magicWidth()), (440-4)*(magicWidth()), (180-4)*(magicWidth()));
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-220*(magicWidth()), midy-90*(magicWidth()), 440*(magicWidth()), 180*(magicWidth()), "#E6FFFF", 4);

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
	gameArena.clearRect(midx-218*(magicWidth()), midy-88*(magicWidth()), (440-4)*(magicWidth()), (180-4)*(magicWidth()));
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-220*(magicWidth()), midy-90*(magicWidth()), 440*(magicWidth()), 180*(magicWidth()), "#E6FFFF", 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Game Over!", midx, midy-30*(magicWidth()));
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
	drawRoundedRectangle(midx-220*(magicWidth()), midy-90*(magicWidth()), 440*(magicWidth()), 180*(magicWidth()), "#E6FFFF", 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Final Score: " + currentScore, midx, midy-30*(magicWidth()));
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	gameArena.font = "100px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Game Completed!", midx, midy-170*(magicWidth()));
	gameTimer = setInterval(drawGC, gameSpeed);
}

function drawLevelFinal()
{
	gameArena.clearRect(midx-200*(magicWidth()), midy-70*(magicWidth()), (440-40)*(magicWidth()), 150*(magicWidth()));
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
	gameArena.fillText("Score: " + scoreToShow, midx, midy-30*(magicWidth()));

	if(mousex > midx-(190-70)*(magicWidth()) && mousex < midx-(90-65)*(magicWidth()) && mousey > midy && mousey < midy+55*(magicWidth()))
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
	drawRoundedRectangle(midx-120*(magicWidth()), midy, 100*(magicWidth()), 60*(magicWidth()), colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<",midx-143+70,midy-45+92);

	if(mousex > midx+20*(magicWidth()) && mousex < midx+(50+70)*(magicWidth()) && mousey > midy && mousey < midy+55*(magicWidth()))
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
	drawRoundedRectangle(midx+20*(magicWidth()), midy, 100*(magicWidth()), 60*(magicWidth()), colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText(">",midx+(140-70)*(magicWidth()),midy-(45-92)*(magicWidth()));

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
	gameArena.clearRect(midx-200*(magicWidth()), midy-25*(magicWidth()), (440-40)*(magicWidth()), 100*(magicWidth()));
	mark = false;
	var colorCheck;
	var hoverCheck = 0;

	if(mousex > midx-50*(magicWidth()) && mousex < midx+50*(magicWidth()) && mousey > midy && mousey < midy+55*(magicWidth()))
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
	drawRoundedRectangle(midx-50*(magicWidth()), midy, 100*(magicWidth()), 60*(magicWidth()), colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<",midx,midy-(45-92)*(magicWidth()));

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
	drawRoundedRectangle(midx-220*(magicWidth()), midy-90*(magicWidth()), 440*(magicWidth()), 180*(magicWidth()), "#E6FFFF", 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Final Score: " + currentScore, midx, midy-30*(magicWidth()));
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	gameArena.font = "100px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Game Completed!", midx, midy-170*(magicWidth()));
	mark = false;
	var colorCheck;
	var hoverCheck = 0;

	if(mousex > midx-50*(magicWidth()) && mousex < midx+50*(magicWidth()) && mousey > midy && mousey < midy+55*(magicWidth()))
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
	drawRoundedRectangle(midx-50*(magicWidth()), midy, 100*(magicWidth()), 60*(magicWidth()), colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<",midx,midy-(45-92)*(magicWidth()));

	if(mark)
	{
		canvas.style.cursor = "pointer";
	}
	else
	{
		canvas.style.cursor = "auto";
	}
}

// erreor may be at 1053    circ_wow