function fixAngle(angle) {
	return (abs(degrees(angle) % 360) + 360) % 360;
}

function setBottle() {
	bottleSize = 10;
	bottleVertices = [{x: 1 * bottleSize, y: 0}, {x: 2 * bottleSize, y: 0}, {x: 3 * bottleSize, y: 2 * bottleSize}, {x: 3 * bottleSize, y: 6 * bottleSize}, {x: 0, y: 6 * bottleSize}, {x: 0, y: 2 * bottleSize}];
	bottle = new Box(Bodies.fromVertices(game.startingPoint.x, 0, bottleVertices, { friction: 0.8, restitution: 0.4 }));
	bottle.grounded = 0;
	bottle.size = bottleSize;
	bottle.colour = "blue";
	bottle.side = 0;
	bottle.add = function (pos) {
		if (abs(this.body.angularSpeed) < 0.00005) {
			bottle.grounded++;
	    } else {
	    	bottle.grounded = 0;
	    }

	    if (bottle.grounded > 5) {
	    	bottle.colour = "blue";
		    if (abs(finish.body.position.x - pos.x) < 150 && finish.body.position.y > pos.y && finish.body.position.y - pos.y < 50) {
			    angle = fixAngle(bottle.body.angle);
			    if (angle < 10 || 360 - angle < 10) {
			    	console.log("Perfect landing!")
			    }
			    if (abs(180 - angle) < 10) {
			    	console.log("On the tip! Unbelievable!")
			    }
			    console.log("You Win!")
			}
	    } else {
	    	bottle.colour = "skyblue";
	    }

	}
}