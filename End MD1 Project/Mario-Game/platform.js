
let holdValue = [];
class Platform {
    position;
    width;
    height;
    draw;
    image;
    constructor({x, y, image}) {
        this.position = {
            x,
            y
        }
        this.image = image;
        this.width = image.width;
        this.height = image.height;
        this.draw = function () {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    }
}
const platformImg = new Image();
platformImg.src = 'Img/platform.png'

const  backgroundImg = new Image();
backgroundImg.src = 'Img/background.png'
console.log(backgroundImg.width)

const hillImg = new Image();
hillImg.src = 'Img/hills.png'

const smallPlatform = new Image();
smallPlatform.src = 'Img/platformSmall.png'

let  platforms =  [new Platform({x:-1, y:470, image:platformImg}),
            new Platform({x:platformImg.width - 3, y:470, image:platformImg}),
            new Platform({x:2 * platformImg.width + 100, y:350, image:smallPlatform}),
            new Platform({x:3 * platformImg.width - 100, y:470, image:platformImg}),
            new Platform({x:4 * platformImg.width + 70, y:470, image:platformImg}),
            new Platform({x:5 * platformImg.width + 150, y:400, image:smallPlatform}),
            new Platform({x:6 * platformImg.width, y:300, image:smallPlatform}),
            new Platform({x:7 * platformImg.width - 150, y:230, image:smallPlatform}),
            new Platform({x:8 * platformImg.width - 300, y:300, image:smallPlatform}),
            new Platform({x:8 * platformImg.width + 150, y:400, image:smallPlatform}),
            new Platform({x:9 * platformImg.width, y:470, image:platformImg})];

let genericObjs = [new Platform({x: -1, y:-1, image:backgroundImg}), new Platform({x: -1, y:-1, image:hillImg})];



