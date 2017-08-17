mouse = {
	x: 0,
	y: 0,
	selected: false
}

function mousePressed() {
	// boxes.push(new Box(Bodies.rectangle(mouseX, mouseY, 40, 40, { restitution: 1 })));
	// boxes.push(new Box(Bodies.circle(mouseX, mouseY, 20, { restitution: 0.4 })));
	mouse.x = mouseX;
	mouse.y = mouseY;
}

function mouseReleased() {
	if (mouseButton == LEFT) {
		if (Vertices.contains(bottle.body.vertices, {x: mouse.x, y: mouse.y})) {
			if (bottle.grounded > 5) { 
				if (sqrt((mouseX - mouse.x) ** 2 + (mouseX - mouse.x) ** 2) < 400) {
					Body.applyForce(bottle.body, {x: mouse.x, y: mouse.y}, {x: (mouseX - mouse.x) / 2000, y: (mouseY - mouse.y) / 2000});
				} else {
					angle = atan2(mouseY - mouse.y, mouseX - mouse.x);
					Body.applyForce(bottle.body, {x: mouse.x, y: mouse.y}, {x: Math.cos(angle) / 5, y: Math.sin(angle) / 5});
				}
			}
		} else if (mouseX == mouse.x && mouseY == mouse.y) {
			boxes.push(new Box(Bodies.circle(mouseX, mouseY, 40, { restitution: 1 }), "orange"));
		} else if (abs(mouseX - mouse.x) * abs(mouseY - mouse.y) > 1000){
			boxes.push(new Box(Bodies.rectangle(min(mouseX, mouse.x) + abs(mouseX - mouse.x) / 2, min(mouseY, mouse.y) + abs(mouseY - mouse.y) / 2, abs(mouseX - mouse.x), abs(mouseY - mouse.y), { restitution: 0.4 }), "darkgreen"));
		}
	} else {
		for (var i = boxes.length - 1; i >= 0; i--) {
			boxi = boxes[i];
			if (Vertices.contains(boxi.body.vertices, {x: mouse.x, y: mouse.y})) {
				boxi.rip();
			}

		}
	}
}

function keyPressed() {
	if (keyCode == 32) {
		// spin counter-clockwise
		console.log(bottle)
	}
	if (keyCode == 82) {
		// restart level
		clearWorld();
	}
	if (keyCode == 87) {
		// air hop
		Body.applyForce(bottle.body, bottle.body.position, {x: 0, y: -0.03})
	}
	if (keyCode == 83) {
		// slam dunk
		Body.applyForce(bottle.body, bottle.body.position, {x: 0, y: 0.09})
	}
	if (keyCode == 65) {
		// lunge to the left
		Body.applyForce(bottle.body, {x: bottle.body.position.x, y: bottle.body.position.y + bottle.size * 2}, {x: -0.01, y: -0.01})
	}
	if (keyCode == 68) {
		// lunge to the right
		Body.applyForce(bottle.body, {x: bottle.body.position.x, y: bottle.body.position.y + bottle.size * 2}, {x: 0.01, y: -0.01})
	}
	if (keyCode == 81) {
		// spin counter-clockwise
		Body.applyForce(bottle.body, {x: bottle.body.position.x, y: bottle.body.position.y + bottle.size * 2}, {x: 0.01, y: 0})
		Body.applyForce(bottle.body, {x: bottle.body.position.x, y: bottle.body.position.y - bottle.size * 2}, {x: -0.01, y: 0})	
	}
	if (keyCode == 69) {
		// spin clockwise
		Body.applyForce(bottle.body, {x: bottle.body.position.x, y: bottle.body.position.y + bottle.size * 2}, {x: -0.01, y: 0})
		Body.applyForce(bottle.body, {x: bottle.body.position.x, y: bottle.body.position.y - bottle.size * 2}, {x: 0.01, y: 0})
	}
	if (keyCode == 70) {
		// dynamic thrust
		angle = bottle.body.angle - radians(90);
		Body.applyForce(bottle.body, bottle.body.position, {x: Math.cos(angle) / 20, y: Math.sin(angle) / 20});
	}
}

function keyIsDown() {
	if (keyCode == 90) {
		// shoot pebble
		
	}
}