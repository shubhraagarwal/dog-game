/**  @type {HTMLCanvasElement} **/

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_HEIGHT = (canvas.height = 1000);
const CANVAS_WIDTH = (canvas.width = 500);

const numberOfEnemies = 100;
const enemiesArray = [];

const enemyOne = new Image();
enemyOne.src = "../assets/enemy1.png";

let gameFrame = 0;

class Enemy {
  constructor() {
    this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.frame = 0;
    this.y = Math.random() * (canvas.height - this.height);
    this.x = Math.random() * (canvas.width - this.width);
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }
  update() {
    this.x += Math.random() * 15 - 7.5;
    this.y += Math.random() * 10 - 5;

    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    ctx.drawImage(
      enemyOne,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new Enemy());
}

console.log(enemiesArray);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemiesArray.map((enemy) => {
    enemy.update();
    enemy.draw();
  });
  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
