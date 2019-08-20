let Line = function(x1, y1, x2, y2) {
  return {
    x1,
    y1,
    x2,
    y2,
    lifespan: 400,
    run() {
      strokeWeight(3);
      stroke(255-(0.3*x1), 0.5*y2, 0.1*x2);
      this.lifespan -= 1;
      if(this.lifespan % 4 === 0){ line(x1, y1, x2, y2); }
    },
    get isDead() { return this.lifespan <= 0; },
  }
}

let LineSystem = function() {
  return {
    lines: [],
    addLine(curr, next) {
      this.lines.push(new Line(curr.x, curr.y, next.x, next.y));
    },
    run() {
      for (let i = this.lines.length-1; i >= 0; i--) {
        let line = this.lines[i];
        line.run();
        if (line.isDead) { this.lines.splice(i, 1); }
      }
    }
  }
};
