
class Player {
    position;
    width;
    height;
    draw;
    velocity;
    update;
    gravity;
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 30;
        this.height = 30;
        this.gravity = 1.5;
        this.color = "red";
        this.draw = function () {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
        this.update = function () {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;
            this.velocity.y += this.gravity
        }
    }
}
// Player
const character = new Player();


// npcPrincess
let npcPrincess = new Player();
npcPrincess.position.x = 1500;
npcPrincess.position.y = 470 - npcPrincess.height - 1.5;
npcPrincess.gravity = 0;
npcPrincess.color = "blue"


