var mirrors = [];
var CircMirrors = [];
var init = false;
var mirrorCount;
var CircMirrorCount = 0;
var mirrorDrag = [];
var CircMirrorDrag = [];
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
var epsilon = .01;

function initialiseLevel()
{ 
	const basicWidthCalc = (width / 1220)
	const resetLevel = () => {
		mirrors = [];
		mirrorDrag = [];
		CircMirrors = [];
		a1 = [];
		CircMirrorDrag = [];
		a = [];
		ss = [];
		minutes = 0;
		seconds = 0;
		runtime = 0;
		enemyDestroyed = false;
		mirrorCount = 0;
		CircMirrorCount = 0;
	}
	const buildSpaceship = (x, y) => {
		ss.push({
			x: x,
			y: y,
			fh: 100
		})
	}
	const buildMirror = (x, width, y, height, drag, dragBool) => {
		const mirror = {
			x: x,
			width: width,
			y: y,
			height: height,
			drag: drag
		}
		mirrors.push(mirror)
		mirrorDrag.push(dragBool)
		mirrorCount = mirrors.length;
	}

	const buildAsteroid = (x, y, moving) => {
		console.log('moving? ', moving)
		moving ? a1.push({x1: x, y1: y}) : a.push({x, y})
	}

    if(levelNumber == 1)
	{
		resetLevel();
		ex = width-140*basicWidthCalc;       
		ey = 100*basicWidthCalc;
		eh = 100; 
	
		ssx = midx - 70 * basicWidthCalc
		ssy = 100 * basicWidthCalc
		buildSpaceship(ssx, ssy)

		mX = 200*basicWidthCalc
		mWidth = 100*basicWidthCalc
		mY = 150*basicWidthCalc
		mHeight = 100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 600*basicWidthCalc
		mWidth = 100*basicWidthCalc
		mY = 400*basicWidthCalc
		mHeight = -100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)


		asteroidX = 1000*basicWidthCalc
		asteroidY = 100*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 1000*basicWidthCalc
		asteroidY = 200*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 1100*basicWidthCalc
		asteroidY = 240*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		init = true;
	}
	else if(levelNumber == 2)
	{
		resetLevel();
		ex = 20*basicWidthCalc;
		ey = 120*basicWidthCalc;
		eh = 100*basicWidthCalc;

		ssx = midx + 100 * basicWidthCalc
		ssy = 60 * basicWidthCalc
		buildSpaceship(ssx, ssy)

		mX = 200*basicWidthCalc
		mWidth = 0*basicWidthCalc
		mY = 150*basicWidthCalc
		mHeight = 100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 600*basicWidthCalc
		mWidth = 0*basicWidthCalc
		mY = 400*basicWidthCalc
		mHeight = 100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 600*basicWidthCalc
		mWidth = 0*basicWidthCalc
		mY = 150*basicWidthCalc
		mHeight = 100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 100*basicWidthCalc
		mWidth = 4*basicWidthCalc
		mY = 250*basicWidthCalc
		mHeight = 100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		init = true;
	}
	else if(levelNumber == 3)
	{
		resetLevel();

		ex = width-300*basicWidthCalc;
		ey = 20*basicWidthCalc;
		eh = 100;
		
		ssx = midx * (3 / 2) * basicWidthCalc
		ssy = 200 * basicWidthCalc
		buildSpaceship(ssx, ssy)

		mX = 200*basicWidthCalc
		mWidth = 0*basicWidthCalc
		mY = 150*basicWidthCalc
		mHeight = 100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 600*basicWidthCalc
		mWidth = 0*basicWidthCalc
		mY = 400*basicWidthCalc
		mHeight = 100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 100*basicWidthCalc
		mWidth = 4*basicWidthCalc
		mY = 250*basicWidthCalc
		mHeight = 100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		init = true;
	}
	else if(levelNumber == 4)
	{
		resetLevel();

		enemyDestroyed = false;
		ex = midx-60*basicWidthCalc;
		ey = 60*basicWidthCalc;
		eh = 100;
		
		ssx = midx - 20 * basicWidthCalc
		ssy = midy - 40 * basicWidthCalc
		buildSpaceship(ssx, ssy)

		mX = 200*basicWidthCalc
		mWidth = 0*basicWidthCalc
		mY = 150*basicWidthCalc
		mHeight = 100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 600*basicWidthCalc
		mWidth = 0*basicWidthCalc
		mY = 420*basicWidthCalc
		mHeight = 100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 700*basicWidthCalc
		mWidth = 0*basicWidthCalc
		mY = 150*basicWidthCalc
		mHeight = 100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 100*basicWidthCalc
		mWidth = 4*basicWidthCalc
		mY = 250*basicWidthCalc
		mHeight = 100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)


		asteroidX = 1100*basicWidthCalc
		asteroidY = 250*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 300*basicWidthCalc
		asteroidY = 300*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 1100*basicWidthCalc
		asteroidY = 150*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 400*basicWidthCalc
		asteroidY = 350*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 400*basicWidthCalc
		asteroidY = 250*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 500*basicWidthCalc
		asteroidY = 300*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		init = true;
	}
	else if(levelNumber == 5)
	{
		resetLevel();

		ex = 10*basicWidthCalc;
		ey = 90*basicWidthCalc;
		eh = 100;
		
		ssx = 180 * basicWidthCalc,
		ssy = midy - 40 * basicWidthCalc
		buildSpaceship(ssx, ssy)

		mX = 150*basicWidthCalc
		mWidth = 100*basicWidthCalc
		mY = midy+200*basicWidthCalc
		mHeight = 100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 800*basicWidthCalc
		mWidth = 100*basicWidthCalc
		mY = midy-100*basicWidthCalc
		mHeight = -150*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 700*basicWidthCalc
		mWidth = 0*basicWidthCalc
		mY = 400*basicWidthCalc
		mHeight = 100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 900*basicWidthCalc
		mWidth = 100*basicWidthCalc
		mY = 500*basicWidthCalc
		mHeight = 0*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)


		asteroidX = 5*basicWidthCalc
		asteroidY = 220*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 78*basicWidthCalc
		asteroidY = 190*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 130*basicWidthCalc
		asteroidY = 120*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		
		init = true;
	}
	else if(levelNumber == 6)
	{
		resetLevel();

		ex = 10*basicWidthCalc;
		ey = 90*basicWidthCalc;
		eh = 100;
		
		ssx = midx
		ssy - midy - 230 * basicWidthCalc
		buildSpaceship(ssx, ssy)

		mX = 250*basicWidthCalc
		mWidth = 100*basicWidthCalc
		mY = midy
		mHeight = 100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 1000*basicWidthCalc
		mWidth = 100*basicWidthCalc
		mY = midy-100*basicWidthCalc
		mHeight = 70*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 10*basicWidthCalc
		mWidth = 16*basicWidthCalc
		mY = midy+200*basicWidthCalc
		mHeight = 90*basicWidthCalc
		mDrag = 0
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 500*basicWidthCalc
		mWidth = 100*basicWidthCalc
		mY = midy+290*basicWidthCalc
		mHeight = -100*basicWidthCalc
		mDrag = 0
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 450*basicWidthCalc
		mWidth = 100*basicWidthCalc
		mY = midy-250*basicWidthCalc
		mHeight = 100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)


		asteroidX = 5*basicWidthCalc
		asteroidY = 220*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 85*basicWidthCalc
		asteroidY = 210*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 110*basicWidthCalc
		asteroidY = 130*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = midx+100*basicWidthCalc
		asteroidY = 270*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = midx-200*basicWidthCalc
		asteroidY = 270*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		
		init = true;
	}
	else if(levelNumber == 7)
	{

		resetLevel();

		ex = basicWidthCalc;       // ex,ey is the position of enemytriangle
		ey = 250*basicWidthCalc;
		eh = 100;     
		
		ssx = midx - 400 * basicWidthCalc
		ssy = 55 * basicWidthCalc
		buildSpaceship(ssx, ssy)

		mX = 700*basicWidthCalc
		mWidth = -15*basicWidthCalc
		mY = 360*basicWidthCalc
		mHeight = 100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 30*basicWidthCalc
		mWidth = 13*basicWidthCalc
		mY = 500*basicWidthCalc
		mHeight = 100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)


		mX = 900*basicWidthCalc
		mWidth = 100*basicWidthCalc
		mY = 200*basicWidthCalc
		mHeight = basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

        
        mX = 500*basicWidthCalc
		mWidth = 35*basicWidthCalc
		mY = 175*basicWidthCalc
		mHeight = basicWidthCalc
		mDrag = 0
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)


        asteroidX = 80*basicWidthCalc
		asteroidY = 180*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 115*basicWidthCalc
		asteroidY = 250*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 110*basicWidthCalc
		asteroidY = 335*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 50*basicWidthCalc
		asteroidY = 385*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)

		init = true;	
	}
	else if(levelNumber == 8)
	{

		resetLevel();

		ex = basicWidthCalc;       
		ey = 525*basicWidthCalc;
		eh = 100;
		
		ssx = midx - 70 * basicWidthCalc
		ssy = 250 * basicWidthCalc
		buildSpaceship(ssx, ssy)

		mX = 200*basicWidthCalc
		mWidth = -18*basicWidthCalc
		mY = 510*basicWidthCalc
		mHeight = 100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)
 

		mX = 270*basicWidthCalc
		mWidth = 100*basicWidthCalc
		mY = 620*basicWidthCalc
		mHeight = 0*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)
                 

		mX = 1100*basicWidthCalc
		mWidth = 95*basicWidthCalc
		mY = 530*basicWidthCalc
		mHeight = -100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)


		mX = 1200*basicWidthCalc
		mWidth = -95*basicWidthCalc
		mY = 150*basicWidthCalc
		mHeight = -100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)


		mX = 20*basicWidthCalc
		mWidth = 50*basicWidthCalc
		mY = 130*basicWidthCalc
		mHeight = -90*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)


		mX = 450*basicWidthCalc
		mWidth = 50*basicWidthCalc
		mY = 420*basicWidthCalc
		mHeight = 0*basicWidthCalc
		mDrag = 0
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)
 
		
		asteroidX = basicWidthCalc
		asteroidY = 430*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)

		asteroidX = 70*basicWidthCalc
		asteroidY = 440*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		  
		asteroidX = 110*basicWidthCalc
		asteroidY = 570*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)  
		init = true;
	}
	else if(levelNumber == 9)
	{
		resetLevel();

		ex = -15*basicWidthCalc;       
		ey = 520*basicWidthCalc;
		eh = 100; 
		
		ssx = 13 * basicWidthCalc
		ssy = 90 * basicWidthCalc
		buildSpaceship(ssx, ssy)
		
		ssx = 1067 * basicWidthCalc
		ssy = 90 * basicWidthCalc
		buildSpaceship(ssx, ssy)

		mX = 350*basicWidthCalc
		mWidth = 17*basicWidthCalc
		mY = 520*basicWidthCalc
		mHeight = 80*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 1040*basicWidthCalc
		mWidth = -100*basicWidthCalc
		mY = 320*basicWidthCalc
		mHeight = -80*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

        mX = 910*basicWidthCalc
		mWidth = 100*basicWidthCalc
		mY = 480*basicWidthCalc
		mHeight = -50*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 250*basicWidthCalc
		mWidth = 47.8*basicWidthCalc
		mY = 170*basicWidthCalc
		mHeight = -100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		asteroidX = 95*basicWidthCalc
		asteroidY = 545*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 105*basicWidthCalc
		asteroidY = 465*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 37*basicWidthCalc
		asteroidY = 430*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false) 

		init = true;
	}
    else if(levelNumber == 10)
	{
		resetLevel();

		ex = width-90*basicWidthCalc;  
		ey = 250*basicWidthCalc;
		eh = 100;    
		
		ssx = midx + 370 * (width /1220)
		ssy = 200 * (width / 122)
		buildSpaceship(ssx, ssy)

		ssx = 370 * basicWidthCalc
		ssy = 100 * basicWidthCalc
		buildSpaceship(ssx, ssy)

		mX = 380*basicWidthCalc
		mWidth = 100*basicWidthCalc
		mY = 520*basicWidthCalc
		mHeight = 100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 600*basicWidthCalc
		mWidth = 100*basicWidthCalc
		mY = 400*basicWidthCalc
		mHeight = 0*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)


		myCircMirror ={
			x: 200*basicWidthCalc,
			y: 300*basicWidthCalc,
			//height: -100*basicWidthCalc,
			drag: 1
		};
		CircMirrors.push(myCircMirror);
		CircMirrorDrag.push(false);

		asteroidX = 900*basicWidthCalc
		asteroidY = 150*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 900*basicWidthCalc
		asteroidY = 250*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 900*basicWidthCalc
		asteroidY = 350*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 900*basicWidthCalc
		asteroidY = 50*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 900*basicWidthCalc
		asteroidY = 1*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 1090*basicWidthCalc
		asteroidY = 170*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 1095*basicWidthCalc
		asteroidY = 350*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 1150*basicWidthCalc
		asteroidY = 390*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)

				CircMirrorCount = CircMirrors.length;
		init = true;

	}
	else if(levelNumber == 11)
	{
		resetLevel();

		ex = width-110*basicWidthCalc;       
		ey = 515*basicWidthCalc;
		eh = 100;
		
		ssx = 1 * basicWidthCalc
		ssy = 270 * basicWidthCalc
		buildSpaceship(ssx, ssy)

		ssx = 210 * basicWidthCalc
		ssy = 30 * basicWidthCalc
		buildSpaceship(ssx, ssy)

		ssx = (1080) * basicWidthCalc
		ssy = 30 * basicWidthCalc
		buildSpaceship(ssx, ssy)

        mX = 1135*basicWidthCalc
		mWidth = 70*basicWidthCalc
		mY = 360*basicWidthCalc
		mHeight = 0*basicWidthCalc
		mDrag = 0
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 1135*basicWidthCalc
		mWidth = 50*basicWidthCalc
		mY = 390*basicWidthCalc
		mHeight = 50*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 700*basicWidthCalc
		mWidth = 50*basicWidthCalc
		mY = 550*basicWidthCalc
		mHeight = 50*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 750*basicWidthCalc
		mWidth = -50*basicWidthCalc
		mY = 380*basicWidthCalc
		mHeight = 50*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)


		asteroidX = 1152*basicWidthCalc
		asteroidY = 425*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 1082*basicWidthCalc
		asteroidY = 435*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 1007*basicWidthCalc
		asteroidY = 480*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 1005*basicWidthCalc
		asteroidY = 580*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 230*basicWidthCalc
		asteroidY = 283*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, true)
		asteroidX = 300*basicWidthCalc
		asteroidY = 283*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, true)
		asteroidX = 370*basicWidthCalc
		asteroidY = 283*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, true)
		asteroidX = 440*basicWidthCalc
		asteroidY = 283*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, true)
		asteroidX = 510*basicWidthCalc
		asteroidY = 283*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, true)
		asteroidX = 580*basicWidthCalc
		asteroidY = 283*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, true)
		asteroidX = 650*basicWidthCalc
		asteroidY = 283*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, true)
		asteroidX = 720*basicWidthCalc
		asteroidY = 285*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, true)
		asteroidX = 790*basicWidthCalc
		asteroidY = 285*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, true)
		asteroidX = 860*basicWidthCalc
		asteroidY = 285*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, true)
		asteroidX = 930*basicWidthCalc
		asteroidY = 287*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, true)

		init = true;
	}
	else if(levelNumber == 12)
	{
		resetLevel();

		ex = 450*basicWidthCalc;       
		ey = 250*basicWidthCalc;
		eh = 100;
		
		ssx = 630 * basicWidthCalc
		ssy = 335 * basicWidthCalc
		buildSpaceship(ssx, ssy)

		mX = 800*basicWidthCalc
		mWidth = 11*basicWidthCalc
		mY = 530*basicWidthCalc
		mHeight = 70*basicWidthCalc
		mDrag = 0
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 830*basicWidthCalc
		mWidth = 0*basicWidthCalc
		mY = 395*basicWidthCalc
		mHeight = 50*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 900*basicWidthCalc
		mWidth = 0*basicWidthCalc
		mY = 370*basicWidthCalc
		mHeight = 100*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		mX = 90*basicWidthCalc
		mWidth = 100*basicWidthCalc
		mY = 60*basicWidthCalc
		mHeight = 0*basicWidthCalc
		mDrag = 0
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

        mX = 200*basicWidthCalc
		mWidth = -4*basicWidthCalc
		mY = 260*basicWidthCalc
		mHeight = -60*basicWidthCalc
		mDrag = 1
		mDragBool = false
		buildMirror(mX, mWidth, mY, mHeight, mDrag, mDragBool)

		asteroidX = 380*basicWidthCalc
		asteroidY = 190*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, true)
		asteroidX = 450*basicWidthCalc
		asteroidY = 170*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 520*basicWidthCalc
		asteroidY = 185*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 580*basicWidthCalc
		asteroidY = 215*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 565*basicWidthCalc
		asteroidY = 450*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 475*basicWidthCalc
		asteroidY = 370*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 410*basicWidthCalc
		asteroidY = 345*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		asteroidX = 380*basicWidthCalc
		asteroidY = 270*basicWidthCalc
		buildAsteroid(asteroidX, asteroidY, false)
		init = true;
	}
	else
	{
		resetLevel();

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
	gameArena.drawImage(mainShip, width-152*(width/1220), height-94*(width/1220), 150*(width/1220), 89*(width/1220)); 
    }

	if(levelNumber == 7)
	{	
	gameArena.shadowBlur = 10;
	gameArena.shadowColor = "#18CAE6";
	gameArena.drawImage(secondShip, width-(165+700)*(width/1220), -105*(width/1220), 330*(width/1220), 330*(width/1220));
	}

	if(levelNumber == 8)
	{	
	gameArena.shadowBlur = 10;
	gameArena.shadowColor = "#18CAE6";
	gameArena.drawImage(secondShip2, width-983*(width/1220), 113*(width/1220), 300*(width/1220), 300*(width/1220));
	}

	gameArena.shadowBlur = 50*Math.abs(Math.sin(runtime/20));            // for enemyship 
	gameArena.shadowColor = "#780000";
	gameArena.drawImage(enemyShip, ex, ey, 120*(width/1220), 114.43*(width/1220));

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
    gameArena.drawImage(mainShip, width-250*(width/1220), height-94*(width/1220), 150*(width/1220), 89*(width/1220))	
    }


    if(levelNumber == 10)
	{
	    a[0].y += v1;
		if(a[0].y>488*(width/1220) || a[0].y<(width/1220)) {
        v1 = v1*(-1);
		}
        
		a[1].y += v2;
		if(a[1].y>488*(width/1220) || a[1].y<(width/1220)) {
        v2 = v2*(-1);
		}
        
		a[2].y += v3;
		if(a[2].y>488*(width/1220) || a[2].y<(width/1220)) {
        v3 = v3*(-1);
		}

		a[3].y += v4*1.7;
		if(a[3].y>488*(width/1220) || a[3].y<(width/1220)) {
        v4 = v4*(-1);
		}
        
        a[4].y += v*1.7;
		if(a[4].y>488*(width/1220) || a[4].y<(width/1220)) {
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
	gameArena.arc(ss[i].x+76*(width/1220), ss[i].y+83*(width/1220), 82*(width/1220), 0, 2*Math.PI);
	gameArena.stroke();
    }    

	if(levelNumber == 10)
	{
		ss[0].y += v5;
		if(ss[0].y>315*(width/1220) || ss[0].y<150*(width/1220)){
			v5 = v5*(-1);
		}
	}

	if(levelNumber == 11) 
	{
		ss[0].y += v6;
		ss[0].x += v6;
		if(ss[0].y<270*(width/1220) || ss[0].y>480*(width/1220 ) || ss[0].x>240*(width/1220 ) || ss[0].x<1*(width/1220)){
			v6 = v6*(-1);
		}
		ss[1].y += v7;
		ss[1].x -= v7;
		if(ss[1].y<30*(width/1220) || ss[1].y>240*(width/1220 ) || ss[1].x>240*(width/1220 ) || ss[1].x<1*(width/1220)){
			v7 = v7*(-1);
		}
		ss[2].y -= v8;
		ss[2].x -= v8;
		if(ss[2].y<30*(width/1220) || ss[2].y>240*(width/1220 ) || ss[2].x<870*(width/1220 ) || ss[2].x>1080*(width/1220)){
			v8 = v8*(-1);
		}
	}

	if(levelNumber == 9)
	{
		ss[0].y += v21;
		if(ss[0].y>270*(width/1220) || ss[0].y<90*(width/1220)){
			v21 = v21*(-1);
		}
		ss[1].y += v22;
		if(ss[1].y>270*(width/1220) || ss[1].y<90*(width/1220)){
			v22 = v22*(-1);
		}
	}

	gameArena.shadowBlur = 20;                   // for the middle rectangle which one is for time
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-80*(width/1220), midy-350*(width/1220), 160*(width/1220), 90*(width/1220), "#E6FFFF", 4);  //change
	gameArena.shadowBlur = 0;
	gameArena.font = "42px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	var displayMinutes = (minutes<10)?("0"+minutes):(minutes);
	var displaySeconds = (seconds<10)?("0"+seconds):(seconds);
	gameArena.fillText(displayMinutes + ":" + displaySeconds, midx, midy-400);     // move time inside the rectangle   //change

	gameArena.shadowBlur = 7;                            // at top left corner on hovring the mouse on < then color changes 
	gameArena.shadowColor = "#E6FFFF";         
	colorCheck = "#18CAE6";
	if(mousex >= -40*(width/1220) && mousex <= 50*(width/1220) && mousey >= midy-350*(width/1220) && mousey <= midy-260*(width/1220)) {
		colorCheck = "#E6FFFF";
		mark = true;
	}

	gameArena.shadowBlur = 20;              // at left corner < 
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(-40*(width/1220), midy-350*(width/1220), 90*(width/1220), 90*(width/1220), colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<", 20*(width/1220), midy-270*(width/1220));

	colorCheck = "#E6FFFF";                // for the level at corner
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(width-182*(width/1220), midy-350*(width/1220), 220*(width/1220), 90*(width/1220), colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Level " + levelNumber, width-90*(width/1220), midy-273*(width/1220));

	colorCheck = "#E6FFFF";                // for the scoreboard 
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-(182+250+10)*(width/1220), midy-350*(width/1220), (250+20)*(width/1220), 90*(width/1220), colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Score: " + currentScore, midx-(55+250)*(width/1220), midy-273*(width/1220));

	if(!gameMode) {                     //  gamemode is 1 for survival and 0 for arcard     // lives only in arcard mode
		colorCheck = "#E6FFFF";
		gameArena.shadowBlur = 20;
		gameArena.shadowColor = "#18CAE6";
		drawRoundedRectangle(midx+180*(width/1220), midy-350*(width/1220), 150*(width/1220), 90*(width/1220), colorCheck, 4);
		gameArena.shadowBlur = 0;
		gameArena.font = "40px Zorque";
		gameArena.fillStyle = "#E6FFFF";
		if(lives >= 1) gameArena.drawImage(life, midx+(190-2)*(width/1220), midy-305*(width/1220));
		else gameArena.drawImage(life1, midx+(190-2)*(width/1220), midy-305*(width/1220));
		if(lives >= 2) gameArena.drawImage(life, midx+(235-2)*(width/1220), midy-305*(width/1220));
		else gameArena.drawImage(life1, midx+(235-2)*(width/1220), midy-305*(width/1220));
		if(lives >= 3) gameArena.drawImage(life, midx+(280-2)*(width/1220), midy-305*(width/1220));
		else gameArena.drawImage(life1, midx+(280-2)*(width/1220), midy-305*(width/1220));
	}

	if(eh >= 2.0) {                              // for making the yellow color life line of enemytriangle
		gameArena.shadowBlur = 50;
		gameArena.shadowColor = "#21E821";
		gameArena.beginPath();
		gameArena.lineWidth = 4;
		gameArena.strokeStyle = "#21E821";
		gameArena.moveTo(ex+30*(width/1220), ey-5*(width/1220));
		gameArena.lineTo(ex+(30+50*(eh/100.0))*(width/1220), ey-5*(width/1220));
		gameArena.stroke();
		gameArena.beginPath();
		gameArena.fillStyle = "#21E821";
		gameArena.arc(ex+30*(width/1220), ey-5*(width/1220), 2*(width/1220), 0, 2*Math.PI);
		gameArena.fill();
		gameArena.beginPath();
		gameArena.fillStyle = "#21E821";
		gameArena.arc(ex+(30+50*(eh/100.0))*(width/1220), ey-5*(width/1220), 2*(width/1220), 0, 2*Math.PI);
		gameArena.fill();
	}
	for(var i = 0;i < ss.length;i++) {
	if(ss[i].fh >= 2.0) {
		gameArena.shadowBlur = 50;               
		gameArena.shadowColor = "#21E821";
		gameArena.beginPath();
		gameArena.lineWidth = 4;
		gameArena.strokeStyle = "#21E821";
		gameArena.arc(ss[i].x+(30+20+20)*(width/1220),ss[i].y-15*(width/1220)+100,90,0,2*Math.PI*(ss[i].fh/100));
		gameArena.stroke();
		if(ss[i].fh<99) {
		gameArena.beginPath();
		gameArena.fillStyle = "#21E821";
		gameArena.arc(ss[i].x+(30+20+20)*(width/1220)+90, ss[i].y-15*(width/1220)+100, 2*(width/1220), 0, 2*Math.PI);
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
		if(mirrors[3].x>600*(width/1220) || mirrors[3].x<390*(width/1220)) {
        v = v*(-1);
		}
	}

	if(levelNumber == 8)     
	{
		mirrors[5].x += v;
		if(mirrors[5].x>600*(width/1220) || mirrors[5].x<400*(width/1220)) {
        v = v*(-1);
		}
	}

	if(levelNumber == 12)     
	{
		mirrors[0].x += v10;
		if(mirrors[0].x>800*(width/1220) || mirrors[0].x<120*(width/1220)) {
        v10 = v10*(-1);
		}
		mirrors[1].y +=  v11;
		if(mirrors[1].y>395*(width/1220) || mirrors[1].y<182*(width/1220)) {
			v11 = v11*(-1);
		}
		mirrors[2].y +=  v12;
		if(mirrors[2].y>370*(width/1220) || mirrors[2].y<157*(width/1220)) {
			v12 = v12*(-1);
		}
		mirrors[3].x +=  v13;
		if(mirrors[3].x>765*(width/1220) || mirrors[3].x<90*(width/1220)) {
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
	var rayX = width-150*(width/1220), rayY = height-50*(width/1220); 
    
    if(levelNumber == 11)
    var rayX = width-248*(width/1220), rayY = height-50*(width/1220);

	var currentAngle = 180.0;
	var offset;

	let lastAngle; // for preventing infinite ray tracing
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

		
		if (
			typeof lastAngle === 'number' &&
			Math.abs((currentAngle - (lastAngle + 180)) % 360) < epsilon
		) {
			// don't send ray back where it came from, would go back and forth
			break;
		}

		// update last angle
		lastAngle = currentAngle;
	}
} 

function traceRay0()                // for tracing the ray path
{
	var rayX = width-750*(width/1220), rayY = 110*(width/1220);         // position of starting point of ray
	var currentAngle = 225.0;
	var offset;

	let lastAngle; // for preventing infinite ray tracing
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


		if (
			typeof lastAngle === 'number' &&
			Math.abs((currentAngle - (lastAngle + 180)) % 360) < epsilon
		) {
			// don't send ray back where it came from, would go back and forth
			break;
		}

		// update last angle
		lastAngle = currentAngle;
	}
} 

function traceRay1()                // for tracing the ray path
{
	var rayX = width-800*(width/1220), rayY = height-300*(width/1220);         // position of starting point of ray
	var currentAngle = 300.0;
	var offset;

	let lastAngle; // for preventing infinite ray tracing
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

		
		if (
			typeof lastAngle === 'number' &&
			Math.abs((currentAngle - (lastAngle + 180)) % 360) < epsilon
		) {
			// don't send ray back where it came from, would go back and forth
			break;
		}

		// update last angle
		lastAngle = currentAngle;
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
	for(var r = 12*(width/1220);;r++)
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
			if(distancePoint(currX, currY, ss[i].x+76*(width/1220), ss[i].y+80*(width/1220)) <= 82*(width/1220))
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
	for(var r = 12*(width/1220);;r++)
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
			if(distancePoint(currX, currY, ss[i].x+76*(width/1220), ss[i].y+80*(width/1220)) <= 82*(width/1220))
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
	for(var r = 12*(width/1220);;r++)
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
			if(distancePoint(currX, currY, ss[i].x+76*(width/1220), ss[i].y+80*(width/1220)) <= 82*(width/1220))
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
		if(mousex >= -40*(width/1220) && mousex <= 50*(width/1220) && mousey >= midy-350*(width/1220) && mousey <= midy-260*(width/1220)) {
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
		if(mousex > midx-120*(width/1220) && mousex < midx-(90-65)*(width/1220) && mousey > midy && mousey < midy+55*(width/1220))
		{
			enemyDestroyed = false;
			gameOver = false;
			init = false;
			sceneNumber = 1;
			clearInterval(gameTimer);
			update();
			if(volume) menu_click.play();
		}
		if(mousex > midx+20*(width/1220) && mousex < midx+120*(width/1220) && mousey > midy && mousey < midy+55*(width/1220))
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
		if(mousex > midx-50*(width/1220) && mousex < midx+50*(width/1220) && mousey > midy && mousey < midy+55*(width/1220))
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
		if(mousex > midx-50*(width/1220) && mousex < midx+50*(width/1220) && mousey > midy && mousey < midy+55*(width/1220))
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
	gameArena.clearRect(midx-218*(width/1220), midy-88*(width/1220), (440-4)*(width/1220), (180-4)*(width/1220));
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-220*(width/1220), midy-90*(width/1220), 440*(width/1220), 180*(width/1220), "#E6FFFF", 4);

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
	gameArena.clearRect(midx-218*(width/1220), midy-88*(width/1220), (440-4)*(width/1220), (180-4)*(width/1220));
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	drawRoundedRectangle(midx-220*(width/1220), midy-90*(width/1220), 440*(width/1220), 180*(width/1220), "#E6FFFF", 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Game Over!", midx, midy-30*(width/1220));
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
	drawRoundedRectangle(midx-220*(width/1220), midy-90*(width/1220), 440*(width/1220), 180*(width/1220), "#E6FFFF", 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Final Score: " + currentScore, midx, midy-30*(width/1220));
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	gameArena.font = "100px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Game Completed!", midx, midy-170*(width/1220));
	gameTimer = setInterval(drawGC, gameSpeed);
}

function drawLevelFinal()
{
	gameArena.clearRect(midx-200*(width/1220), midy-70*(width/1220), (440-40)*(width/1220), 150*(width/1220));
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
	gameArena.fillText("Score: " + scoreToShow, midx, midy-30*(width/1220));

	if(mousex > midx-(190-70)*(width/1220) && mousex < midx-(90-65)*(width/1220) && mousey > midy && mousey < midy+55*(width/1220))
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
	drawRoundedRectangle(midx-120*(width/1220), midy, 100*(width/1220), 60*(width/1220), colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<",midx-143+70,midy-45+92);

	if(mousex > midx+20*(width/1220) && mousex < midx+(50+70)*(width/1220) && mousey > midy && mousey < midy+55*(width/1220))
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
	drawRoundedRectangle(midx+20*(width/1220), midy, 100*(width/1220), 60*(width/1220), colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText(">",midx+(140-70)*(width/1220),midy-(45-92)*(width/1220));

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
	gameArena.clearRect(midx-200*(width/1220), midy-25*(width/1220), (440-40)*(width/1220), 100*(width/1220));
	mark = false;
	var colorCheck;
	var hoverCheck = 0;

	if(mousex > midx-50*(width/1220) && mousex < midx+50*(width/1220) && mousey > midy && mousey < midy+55*(width/1220))
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
	drawRoundedRectangle(midx-50*(width/1220), midy, 100*(width/1220), 60*(width/1220), colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<",midx,midy-(45-92)*(width/1220));

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
	drawRoundedRectangle(midx-220*(width/1220), midy-90*(width/1220), 440*(width/1220), 180*(width/1220), "#E6FFFF", 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "40px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Final Score: " + currentScore, midx, midy-30*(width/1220));
	gameArena.shadowBlur = 20;
	gameArena.shadowColor = "#18CAE6";
	gameArena.font = "100px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("Game Completed!", midx, midy-170*(width/1220));
	mark = false;
	var colorCheck;
	var hoverCheck = 0;

	if(mousex > midx-50*(width/1220) && mousex < midx+50*(width/1220) && mousey > midy && mousey < midy+55*(width/1220))
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
	drawRoundedRectangle(midx-50*(width/1220), midy, 100*(width/1220), 60*(width/1220), colorCheck, 4);
	gameArena.shadowBlur = 0;
	gameArena.font = "50px Zorque";
	gameArena.fillStyle = "#E6FFFF";
	gameArena.fillText("<",midx,midy-(45-92)*(width/1220));

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
