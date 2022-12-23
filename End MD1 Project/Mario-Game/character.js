const spriteStandRight = new Image();
spriteStandRight.src = "Img/spriteStandRight.png";
const spriteRunRight = new Image();
spriteRunRight.src = "Img/spriteRunRight.png";
const spriteStandLeft = new Image();
spriteStandLeft.src = "Img/spriteStandLeft.png"
const spriteRunLeft = new Image();
spriteRunLeft.src = "Img/spriteRunLeft.png";


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
        this.width = 50;
        this.height = 114;
        this.gravity = 1.5;
        this.sprite = {
            stand: {
                right: spriteStandRight,
                left: spriteStandLeft,
                cropWidth: 177,
                width: 50
            },
            run: {
                right: spriteRunRight,
                left: spriteRunLeft,
                cropWidth: 341,
                width: 96.875
            }
        }
        this.currentSprite = this.sprite.stand.right
        this.currentCropWidth = 177
        this.currentCropHeight = 400;
        this.frame = 0;
        this.draw = function () {
            ctx.drawImage(this.currentSprite,
                this.currentCropWidth * this.frame,
                0,
                this.currentCropWidth,
                this.currentCropHeight,
                this.position.x,
                this.position.y,
                this.width,
                this.height)
        }
        this.update = function () {
            this.frame++
            if (this.frame > 59 && (this.currentSprite === this.sprite.stand.right || this.currentSprite === this.sprite.stand.left)) {
                this.frame = 0;
            }
            if (this.frame > 29 && (this.currentSprite === this.sprite.run.right || this.currentSprite === this.sprite.run.left)) {
                this.frame = 0;
            }
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;
            this.velocity.y += this.gravity
        }
    }
}

// Player
const character = new Player();

function reset_npc_character() {
    character.position.x = 100;
    character.position.y = 100;
    npcPrincess.position.x = 5668;
    npcPrincess.position.y = 485 - npcPrincess.height - 1.5;
}
