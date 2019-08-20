let points = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  points.push(createPoint());
  points.push(createPoint());
  points.push(createPoint());
}

function draw() {
  stroke(255);
  background(0);
  for(let idx = 0; idx < points.length; idx++){
    let curr = points[idx];
    let next = points[(idx + 1) % points.length];
    line(curr.pos.x, curr.pos.y, next.pos.x, next.pos.y);
  }
  points.forEach((p) => { p .update(); });
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
      if(0 >= this.pos.x || this.pos.x >= width){
        this.vel.x *= -1;
      }
      this.pos.x += this.vel.x;
      if(0 >= this.pos.y || this.pos.y >= height){
        this.vel.y *= -1;
      }
      this.pos.y += this.vel.y;
    },
    draw() {
      stroke(255);
      strokeWeight(8);
      point(this.pos.x, this.pos.y);
    },
  };
}
