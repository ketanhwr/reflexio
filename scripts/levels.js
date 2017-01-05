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
		ex = width-140*(width/1220);       
		ey = 100*(width/1220);
		eh = 100; 

		mySpacestation = {
        	x: midx-70*(width/1220),
        	y: 100*(width/1220),
        	fh: 100
        };
        ss.push(mySpacestation);                      
		myMirror = {
			x: 200*(width/1220),
			width: 100*(width/1220),
			y: 150*(width/1220),
			height: 100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 600*(width/1220),
			width: 100*(width/1220),
			y: 400*(width/1220),
			height: -100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);

		myAsteroid = {
			x: 1000*(width/1220),
			y: 100*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 1000*(width/1220),
			y: 200*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 1100*(width/1220),
			y: 240*(width/1220)
		};
		a.push(myAsteroid);
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
		ex = 20*(width/1220);
		ey = 80*(width/1220);
		eh = 100*(width/1220);
		mySpacestation = {
        	x: midx+100*(width/1220),
        	y: 60*(width/1220),
        	fh: 100
        };
        ss.push(mySpacestation); 
		myMirror = {
			x: 200*(width/1220),
			width: 0*(width/1220),
			y: 150*(width/1220),
			height: 100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 600*(width/1220),
			width: 0*(width/1220),
			y: 400*(width/1220),
			height: 100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 600*(width/1220),
			width: 0*(width/1220),
			y: 150*(width/1220),
			height: 100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 100*(width/1220),
			width: 4*(width/1220),
			y: 250*(width/1220),
			height: 100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
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
		ex = width-300*(width/1220);
		ey = 20*(width/1220);
		eh = 100;
		mySpacestation = {
        	x: midx*(3/2)*(width/1220),
        	y: 200*(width/1220),
        	fh: 100
        };
        ss.push(mySpacestation); 
		myMirror = {
			x: 200*(width/1220),
			width: 0*(width/1220),
			y: 150*(width/1220),
			height: 100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 600*(width/1220),
			width: 0*(width/1220),
			y: 400*(width/1220),
			height: 100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 100*(width/1220),
			width: 4*(width/1220),
			y: 250*(width/1220),
			height: 100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
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
		ex = midx-60*(width/1220);
		ey = 60*(width/1220);
		eh = 100;
		mySpacestation = {
        	x: midx-20*(width/1220),
        	y: midy-40*(width/1220),
        	fh: 100
        };
        ss.push(mySpacestation);
		myMirror = {
			x: 200*(width/1220),
			width: 0*(width/1220),
			y: 150*(width/1220),
			height: 100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 600*(width/1220),
			width: 0*(width/1220),
			y: 420*(width/1220),
			height: 100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 700*(width/1220),
			width: 0*(width/1220),
			y: 150*(width/1220),
			height: 100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 100*(width/1220),
			width: 4*(width/1220),
			y: 250*(width/1220),
			height: 100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);

		myAsteroid = {
			x: 1100*(width/1220),
			y: 250*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 300*(width/1220),
			y: 300*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 1100*(width/1220),
			y: 150*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 400*(width/1220),
			y: 350*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 400*(width/1220),
			y: 250*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 500*(width/1220),
			y: 300*(width/1220)
		};
		a.push(myAsteroid);
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
		ex = 10*(width/1220);
		ey = 90*(width/1220);
		eh = 100;
		mySpacestation = {
        	x: 180*(width/1220),
        	y: midy-40*(width/1220),
        	fh: 100
        };
        ss.push(mySpacestation);
		myMirror = {
			x: 150*(width/1220),
			width: 100*(width/1220),
			y: midy+200*(width/1220),
			height: 100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 800*(width/1220),
			width: 100*(width/1220),
			y: midy-100*(width/1220),
			height: -150*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 700*(width/1220),
			width: 0*(width/1220),
			y: 400*(width/1220),
			height: 100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 900*(width/1220),
			width: 100*(width/1220),
			y: 500*(width/1220),
			height: 0*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);

		myAsteroid = {
			x: 5*(width/1220),
			y: 220*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 78*(width/1220),
			y: 190*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 130*(width/1220),
			y: 120*(width/1220)
		};
		a.push(myAsteroid);
		
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
		ex = 10*(width/1220);
		ey = 90*(width/1220);
		eh = 100;
		mySpacestation = {
        	x: midx,
        	y: midy-230*(width/1220),
        	fh: 100
        };
        ss.push(mySpacestation);
		myMirror = {
			x: 250*(width/1220),
			width: 100*(width/1220),
			y: midy,
			height: 100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 1000*(width/1220),
			width: 100*(width/1220),
			y: midy-100*(width/1220),
			height: 70*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 10*(width/1220),
			width: 16*(width/1220),
			y: midy+200*(width/1220),
			height: 90*(width/1220),
			drag: 0
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 500*(width/1220),
			width: 100*(width/1220),
			y: midy+290*(width/1220),
			height: -100*(width/1220),
			drag: 0
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 450*(width/1220),
			width: 100*(width/1220),
			y: midy-250*(width/1220),
			height: 100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);

		myAsteroid = {
			x: 5*(width/1220),
			y: 220*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 85*(width/1220),
			y: 210*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 110*(width/1220),
			y: 130*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: midx+100*(width/1220),
			y: 270*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: midx-200*(width/1220),
			y: 270*(width/1220)
		};
		a.push(myAsteroid);
		
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
		ex = (width/1220);       // ex,ey is the position of enemytriangle
		ey = 250*(width/1220);
		eh = 100;
		mySpacestation = {
        	x: midx-400*(width/1220),
        	y: 55*(width/1220),
        	fh: 100
        };
        ss.push(mySpacestation);                      
		myMirror = {                
			x: 700*(width/1220),
			width: -15*(width/1220),
			y: 360*(width/1220),
			height: 100*(width/1220),       // increase the mirror by adding this  
			drag: 1                              // drag is only for fixing the mirror.
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 30*(width/1220),
			width: 13*(width/1220),
			y: 500*(width/1220),
			height: 100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);

		myMirror = {                
			x: 900*(width/1220),
			width: 100*(width/1220),
			y: 200*(width/1220),
			height: (width/1220),       // increase the mirror by adding this  
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
        
        myMirror = {                
			x: 500*(width/1220),
			width: 35*(width/1220),
			y: 175*(width/1220),
			height: (width/1220),       // increase the mirror by adding this  
			drag: 0
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);

        myAsteroid = {
			x: 80*(width/1220),
			y: 180*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 115*(width/1220),
			y: 250*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 110*(width/1220),
			y: 335*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 50*(width/1220),
			y: 385*(width/1220)
		};
		a.push(myAsteroid);


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
		ex = (width/1220);       
		ey = 525*(width/1220);
		eh = 100;
        mySpacestation = {
        	x: midx-70*(width/1220),
        	y: 250*(width/1220),
        	fh: 100
        };
        ss.push(mySpacestation);
		myMirror = {
			x: 200*(width/1220),
			width: -18*(width/1220),
			y: 510*(width/1220),
			height: 100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false); 

		myMirror = {
			x: 270*(width/1220),
			width: 100*(width/1220),
			y: 620*(width/1220),
			height: 0*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);                 

		myMirror = {
			x: 1100*(width/1220),
			width: 95*(width/1220),
			y: 530*(width/1220),
			height: -100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);

		myMirror = {
			x: 1200*(width/1220),
			width: -95*(width/1220),
			y: 150*(width/1220),
			height: -100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);

		myMirror = {
			x: 20*(width/1220),
			width: 50*(width/1220),
			y: 130*(width/1220),
			height: -90*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);

		myMirror = {                                        
			x: 450*(width/1220),
			width: 50*(width/1220),
			y: 420*(width/1220),
			height: 0*(width/1220),
			drag: 0
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false); 
		
		myAsteroid = {
			x: (width/1220),
			y: 430*(width/1220)
		};
		a.push(myAsteroid);

		myAsteroid = {
			x: 70*(width/1220),
			y: 440*(width/1220)
		};
		a.push(myAsteroid);
		  
		myAsteroid = {
			x: 110*(width/1220),
			y: 570*(width/1220)
		};
		a.push(myAsteroid);  
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
		ex = -15*(width/1220);       
		ey = 520*(width/1220);
		eh = 100; 

        mySpacestation = {
        	x: 13*(width/1220),
        	y: 90*(width/1220),
        	fh: 100
        };
        ss.push(mySpacestation);  
        mySpacestation = {
        	x: 1067*(width/1220),
        	y: 90*(width/1220),
        	fh: 100
        };
        ss.push(mySpacestation);                    
		myMirror = {
			x: 350*(width/1220),
			width: 17*(width/1220),
			y: 520*(width/1220),
			height: 80*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 1040*(width/1220),
			width: -100*(width/1220),
			y: 320*(width/1220),
			height: -80*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
        myMirror = {
			x: 910*(width/1220),
			width: 100*(width/1220),
			y: 480*(width/1220),
			height: -50*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 250*(width/1220),
			width: 47.8*(width/1220),
			y: 170*(width/1220),
			height: -100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myAsteroid = {
			x: 95*(width/1220),
			y: 545*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 105*(width/1220),
			y: 465*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 37*(width/1220),
			y: 430*(width/1220)
		};
		a.push(myAsteroid); 

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
		ex = width-90*(width/1220);  
		ey = 250*(width/1220);
		eh = 100; 
		mySpacestation = {
        	x: midx+370*(width/1220),
        	y: 200*(width/1220),
        	fh: 100
        };

        ss.push(mySpacestation);
        mySpacestation = {
        	x: 370*(width/1220),
        	y: 100*(width/1220),
        	fh: 100
        };
        ss.push(mySpacestation);                       
		myMirror = {
			x: 380*(width/1220),
			width: 100*(width/1220),
			y: 520*(width/1220),
			height: 100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 600*(width/1220),
			width: 100*(width/1220),
			y: 400*(width/1220),
			height: 0*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);

		myCircMirror ={
			x: 200*(width/1220),
			//width: 100*(width/1220),
			y: 300*(width/1220),
			//height: -100*(width/1220),
			drag: 1
		};
		CircMirrors.push(myCircMirror);
		CircMirrorDrag.push(false);

		myAsteroid = {
			x: 900*(width/1220),
			y: 150*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 900*(width/1220),
			y: 250*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 900*(width/1220),
			y: 350*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 900*(width/1220),
			y: 50*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 900*(width/1220),
			y: 1*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 1090*(width/1220),
			y: 170*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 1095*(width/1220),
			y: 350*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 1150*(width/1220),
			y: 390*(width/1220)
		};
		a.push(myAsteroid);

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
		ex = width-110*(width/1220);       
		ey = 515*(width/1220);
		eh = 100; 

		mySpacestation = {
        	x: 1*(width/1220),
        	y: 270*(width/1220),
        	fh: 100
        };
        ss.push(mySpacestation);                      
        mySpacestation = {
        	x: 210*(width/1220),
        	y: 30*(width/1220),
        	fh: 100
        };
        ss.push(mySpacestation)
        mySpacestation = {
        	x: (1080)*(width/1220),    
        	y: 240*(width/1220),     
        	fh: 100
        };
        ss.push(mySpacestation)
        myMirror = {
			x: 1135*(width/1220),
			width: 70*(width/1220),
			y: 360*(width/1220),
			height: 0*(width/1220),
			drag: 0
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 1135*(width/1220),
			width: 50*(width/1220),
			y: 390*(width/1220),
			height: 50*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 700*(width/1220),
			width: 50*(width/1220),
			y: 550*(width/1220),
			height: 50*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 750*(width/1220),
			width: -50*(width/1220),
			y: 380*(width/1220),
			height: 50*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);

		myAsteroid = {
			x: 1152*(width/1220),
			y: 425*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 1082*(width/1220),
			y: 435*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 1007*(width/1220),
			y: 480*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 1005*(width/1220),
			y: 580*(width/1220)
		};
		a.push(myAsteroid);
		myMovingAsteroid = {
			x1: 230*(width/1220),
			y1: 283*(width/1220),
		};
		a1.push(myMovingAsteroid);
		myMovingAsteroid = {
			x1: 300*(width/1220),
			y1: 283*(width/1220),
		};
		a1.push(myMovingAsteroid);
		myMovingAsteroid = {
			x1: 370*(width/1220),
			y1: 283*(width/1220),
		};
		a1.push(myMovingAsteroid);
		myMovingAsteroid = {
			x1: 440*(width/1220),
			y1: 283*(width/1220),
		};
		a1.push(myMovingAsteroid);
		myMovingAsteroid = {
			x1: 510*(width/1220),
			y1: 283*(width/1220),
		};
		a1.push(myMovingAsteroid);
		myMovingAsteroid = {
			x1: 580*(width/1220),
			y1: 283*(width/1220),
		};
		a1.push(myMovingAsteroid);
		myMovingAsteroid = {
			x1: 650*(width/1220),
			y1: 283*(width/1220),
		};
		a1.push(myMovingAsteroid);
		myMovingAsteroid = {
			x1: 720*(width/1220),
			y1: 285*(width/1220),
		};
		a1.push(myMovingAsteroid);
		myMovingAsteroid = {
			x1: 790*(width/1220),
			y1: 285*(width/1220),
		};
		a1.push(myMovingAsteroid);
		myMovingAsteroid = {
			x1: 860*(width/1220),
			y1: 285*(width/1220),
		};
		a1.push(myMovingAsteroid);
		myMovingAsteroid = {
			x1: 930*(width/1220),
			y1: 287*(width/1220),
		};
		a1.push(myMovingAsteroid);

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
		ex = 450*(width/1220);       
		ey = 250*(width/1220);
		eh = 100; 

		mySpacestation = {
        	x: 630*(width/1220),
        	y: 335*(width/1220),
        	fh: 100
        };
        ss.push(mySpacestation);                  
		myMirror = {
			x: 800*(width/1220),
			width: 11*(width/1220),
			y: 530*(width/1220),
			height: 70*(width/1220),
			drag: 0
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 830*(width/1220),
			width: 0*(width/1220),
			y: 395*(width/1220),
			height: 50*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 900*(width/1220),
			width: 0*(width/1220),
			y: 370*(width/1220),
			height: 100*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
		myMirror = {
			x: 90*(width/1220), 
			width: 100*(width/1220),
			y: 60*(width/1220),
			height: 0*(width/1220),
			drag: 0
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);
        myMirror = {
			x: 200*(width/1220), 
			width: -4*(width/1220),
			y: 260*(width/1220),
			height: -60*(width/1220),
			drag: 1
		};
		mirrors.push(myMirror);
		mirrorDrag.push(false);

		myMovingAsteroid = {
			x1: 380*(width/1220),
			y1: 190*(width/1220),
		};
		a1.push(myMovingAsteroid);

		myAsteroid = {
			x: 450*(width/1220),
			y: 170*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 520*(width/1220),
			y: 185*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 580*(width/1220),
			y: 215*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 565*(width/1220),
			y: 450*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 475*(width/1220),
			y: 370*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 410*(width/1220),
			y: 345*(width/1220)
		};
		a.push(myAsteroid);
		myAsteroid = {
			x: 380*(width/1220),
			y: 270*(width/1220)
		};
		a.push(myAsteroid);
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
	gameArena.fillText(displayMinutes + ":" + displaySeconds, midx, midy-305);     // move time inside the rectangle   //change

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
	var rayX = width-750*(width/1220), rayY = 110*(width/1220);         // position of starting point of ray
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
	var rayX = width-800*(width/1220), rayY = height-300*(width/1220);         // position of starting point of ray
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