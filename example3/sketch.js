let points = [];
let system;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  points.push(createPoint());
  points.push(createPoint());
  points.push(createPoint());
  points.push(createPoint());
  system = new LineSystem();
  strokeWeight(1);

}

function draw() {
  background(0);
  for(let idx = 0; idx < points.length; idx++){
    let curr = points[idx];
    let next = points[(idx + 1) % points.length];
    line(curr.pos.x, curr.pos.y, next.pos.x, next.pos.y);
    system.addLine(curr.pos, next.pos);
  }
  system.run();
  points.forEach((p) => { p.update(); });
}

const createPoint = () => {

  return {
    pos: {
      x: random(0, width),
      y: random(0, height),
    },
    vel: {
      x: random([-4, -3, 3, 4]),
      y: random([-4, -3, 3, 4]),
    },
    update() {
      if(0 >= this.pos.x || this.pos.x >= width){ this.vel.x *= -1; }
      this.pos.x += this.vel.x;
      if(0 >= this.pos.y || this.pos.y >= height){ this.vel.y *= -1; }
      this.pos.y += this.vel.y;
    },
    draw() {
      stroke(255);
      strokeWeight(8);
      point(this.pos.x, this.pos.y);
    },
  };
}
