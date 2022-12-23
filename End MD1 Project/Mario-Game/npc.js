const princessSprite = new Image();
princessSprite.src = "Img/princessSprite.png"
const princessSprite2 = new Image();
princessSprite2.src = "Img/princessSprite2.png"


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
        // this.currenSprite = princessSprite2
        this.currentCropWidth = 144;//144 76
        this.currentCropHeight = 185;//185 122
        // this.frameCol = 0
        this.frameRow = 0;
        this.draw = function () {
            ctx.drawImage(
                this.currenSprite,
                this.currentCropWidth * this.frameRow,
                0,
                // this.currentCropHeight * this.frameCol,
                this.currentCropWidth,
                this.currentCropHeight,
                this.position.x,
                this.position.y,
                this.width,
                this.height)
            this.frameRow++
            if (this.frameRow > 29)//8 {
                this.frameRow = 0;
                // this.frameCol++
            }
            // if (this.frameCol > 3) {
            //     this.frameCol = 0;
            // }
        // }
    }
}

// npcPrincess
let npcPrincess = new npc();
npcPrincess.position.x = 5668;
npcPrincess.position.y = 485 - npcPrincess.height - 1.5;
