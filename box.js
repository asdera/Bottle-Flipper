function Box(body, colour) {
  this.body = body;
  this.colour = (colour === undefined) ? "black" : colour;
  this.destroy = false;
  World.add(world, this.body);

  this.show = function() {
    pos = this.body.position;
    push();
    stroke("white")
    fill(this.colour);
    strokeWeight(2);
    if (pos.y < 0) {
      triangle(pos.x, 0, pos.x - 20, 20, pos.x + 20, 20);
    } else {
      beginShape();
      for (var i in this.body.vertices) {
        vertexi = this.body.vertices[i];
        vertex(vertexi.x, vertexi.y);
      }
      endShape(CLOSE);
    }
    
    pop();
    if (!Matter.Bounds.contains(bounds, pos)) {
      this.rip();
    }
    if (this.add) {
      this.add(pos);
    }
  }

  this.rip = function() {
    World.remove(world, this.body);
    this.destroy = true;
  }
}