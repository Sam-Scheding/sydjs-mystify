let points = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  points.push(createPoint());
  points.push(createPoint());
  points.push(createPoint());
}

function draw() {
  background(0);
  points.forEach((p) => {
    p.update();
    p.draw();
  });
}

const createPoint = () => {

  return {
    pos: {
      x: random(0, width),
      y: random(0, height),
    },
    vel: {
      x: random([-2, 2]),
      y: random([-2, 2]),
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
