function createSpaceStation(pointX, pointY, fullHealth){
	return {
		x: pointX,
		y: pointY,
		fh: fullHealth
	}
}

function createMirror(pointX, mirrorWidth, pointY, mirrorHeight, dragable){
	return{
		x: pointX,
		width: mirrorWidth,
		y: pointY,
		height: mirrorHeight,
		drag: dragable
	}
}

function createCircleMirror(pointX, pointY, dragable){
	return {
		x: pointX,
		//width: 100*(width/1220),
		y: pointY,
		//height: -100*(width/1220),
		drag: dragable
	}
}

function createAsteroid(pointX, pointY){
	return {
		x: pointX,
		y: pointY
	};
}

function createMovingAsteroid(pointX, pointY){
	return {
		x1: pointX,
		y1: pointY
	}
}