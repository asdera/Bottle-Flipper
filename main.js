// module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Vertices = Matter.Vertices,
    Bounds = Matter.Bounds

var engine;
var world;
var bottle;
var boxes;
var grounds;
var bounds;
var win;
var canvaswidth = 1800;
var canvasheight = 900;
var game = {};
var reset = 0;

function setup() {
	game.startingPoint = {
		x: random(canvaswidth * 0.1, canvaswidth * 0.9),
		y: random(canvasheight * 0.2, canvasheight * 0.8)
	},
	game.finishingPoint = {
		x: random(canvaswidth * 0.1, canvaswidth * 0.9),
		y: random(canvasheight * 0.1, canvasheight * 0.8)
	}
	bottles = []
	boxes = [];
	grounds = [];
	win = reset == 1 ? "Drag the Bottle to start" : "";
	Body.create();
	createCanvas(canvaswidth, canvasheight);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	grounds.push(new Box(Bodies.rectangle(game.startingPoint.x, game.startingPoint.y, 400, 20, { isStatic: true })));
	finish = new Box(Bodies.rectangle(game.finishingPoint.x, game.finishingPoint.y, 200, 20, { isStatic: true }), "red");
	setBottle();
	setBoundaries();
	win = reset == 1 ? "Drag the Bottle to start" : "";
}

function draw() {
	background(51);
	if (bottle.destroy) {
		clearWorld();
	} else {
		bottle.show();
	}
	finish.show();
	for (var i = boxes.length - 1; i >= 0; i--) {
		boxi = boxes[i];
		if (boxi.destroy) {
			boxes.splice(i,1)
		} else {
			boxi.show();
		}
	}
	for (var i = grounds.length - 1; i >= 0; i--) {
		groundi = grounds[i];
		if (groundi.destroy) {
			grounds.splice(i,1)
		} else {
			groundi.show();
		}
	}
	push();
	fill("red");
	stroke(255);
	strokeWeight(4);
	textAlign(CENTER);
	textSize(144);
	text(win, width/2, height/6);
	fill("blue");
	textSize(64);
	text((win != "" && reset != 1) ? "Press R to start another game" : "", width/2, height/3);
	// ellipse(width/2, height/8, 20);

	if (mouse.selected) {
		line(mouse.x, mouse.y, mouseX, mouseY);
	}

	pop();
}

function clearWorld() {
	Matter.World.clear(world, false);
	setup();
}



