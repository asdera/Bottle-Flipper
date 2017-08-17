function setBoundaries() {
	grounds.push(new Box(Bodies.rectangle(canvaswidth/2, canvasheight, canvaswidth, 40, { isStatic: true })));
	grounds.push(new Box(Bodies.rectangle(0, canvasheight/2, 40, canvasheight * 10, { isStatic: true })));
	grounds.push(new Box(Bodies.rectangle(canvaswidth, canvasheight/2, 40, canvasheight * 10, { isStatic: true })));

	bounds = Matter.Bounds.create([{x: -1000, y: -Infinity}, {x: canvaswidth + 1000, y: canvasheight * 2}])
}
