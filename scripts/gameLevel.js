// USE:
// to create a new level, type `let <levelname> = new GameLevel(<enemy ship x-coordinate>, <enemy ship y-coordinate>, <spacestation x-coordinate>, <spacestation y-coordinatie>)`. 
// to add mirrors, type `<levelname>.addMirror(<x-coordinate><y-coordinate>, <width>, <height>);`. If you want the mirrors position to be fixed, add `"fixed"` or `true` in the parameters after the height. Default width/height is 100.
// for circular mirrors, use the same function but leave out the width and height (add `"fixed"` after the y-coordinate instead).
// to add an asteroid, a moving asteroid, or another spacestation, the methods are `.addAsteroid`, `.addMovingAsteroid`, and `.addSpacestation` respectively, with the X- and Y- coordinates included as arguments.
// any of these methods can also be called in bulk by putting multiple sets of arguments in brackets.
// afterwards, your new level can be pushed to the levelsDefinition array. 

class GameLevel {

	constructor(enemyX, enemyY, stationX, stationY)  {
	this.ex = enemyX*(width/1220), 
	this.ey = enemyY*(width/1220), 
	this.eh = 100,
	this.mySpacestations = [{x: stationX*(width/1220), y: stationY*(width/1220), fh: 100}],
	this.mirrors = [],
	this.asteroids = [],
	this.circMirrors = [],
	this.movingAsteroids = []
	}
	addMirror(mirrorX, mirrorY, mirrorWidth=100, mirrorHeight=100, fixed=false) {
		if (Array.isArray(arguments[0])){
			for (let i = 0; i < arguments.length; i++) {
				this.addMirror(arguments[i][0], arguments[i][1], arguments[i][2], arguments[i][3], arguments[i][4])
			}}else{	
				let mutability;
				fixed ? mutability = 0 : mutability = 1;
				this.mirrors.push({x: mirrorX*(width/1220), width: mirrorWidth*(width/1220), y: mirrorY*(width/1220), height: mirrorHeight*(width/1220), drag: mutability})
			}
		}
	addCircMirror(circMirrorX, circMirrorY, fixed=false) {
		if (Array.isArray(arguments[0])){
			for (let i = 0; i < arguments.length; i++) {
				this.addCircMirror(arguments[i][0], arguments[i][1], arguments[i][2])
			}}else{	
				let mutability;
				fixed ? mutability = 0 : mutability = 1;
				this.circMirrors.push({x: circMirrorX*(width/1220), y: circMirrorY*(width/1220), drag: mutability})
			}
		}
	addAsteroid(asteroidX, asteroidY){
        if (Array.isArray(arguments[0])){
            for (let i = 0; i < arguments.length; i++) {
				this.addAsteroid(arguments[i][0], arguments[i][1])
			}}else{
				this.asteroids.push({x: asteroidX*(width/1220), y: asteroidY*(width/1220)})};
    };
    addMovingAsteroid(asteroidX, asteroidY) {
		if (Array.isArray(arguments[0])){
            for (let i = 0; i < arguments.length; i++) {
				this.addMovingAsteroid(arguments[i][0], arguments[i][1])
			}}else{
				this.movingAsteroids.push({x: asteroidX*(width/1220), y: asteroidY*(width/1220)})};
	}
	addSpacestation(newStationX, newStationY) { 
		if (Array.isArray(arguments[0])){
            for (let i = 0; i < arguments.length; i++) {
				this.addSpacestation(arguments[i][0], arguments[i][1])
			}}else{
				this.mySpacestations.push({x: newStationX*(width/1220), y: newStationY*(width/1220)})}
	}
}