const princessSprite = new Image();
princessSprite.src = "Img/princessSprite.png"

class npc {
    position;
    width;
    height;
    draw;

    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.width = 80;
        this.height = 114;
        this.currenSprite = princessSprite
        this.currentCropWidth = 144;
        this.currentCropHeight = 185;
        this.frame = 0;
        this.draw = function () {
            ctx.drawImage(
                this.currenSprite,
                this.currentCropWidth * this.frame,
                0,
                this.currentCropWidth,
                this.currentCropHeight,
                this.position.x,
                this.position.y,
                this.width,
                this.height)
            this.frame++
            if (this.frame > 29) {
                this.frame = 0;
            }
        }
    }
}

// npcPrincess
let npcPrincess = new npc();
npcPrincess.position.x = 5668;
npcPrincess.position.y = 485 - npcPrincess.height - 1.5;
