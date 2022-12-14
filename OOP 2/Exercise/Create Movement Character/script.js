/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }
  this.speed = function () {
    speed = true
  }

  this.moveRight = function(move){
    if (move) {
      this.left += 100;
      console.log('ok: ' + this.left);
    } else {
      this.left += 20;
    }
  }
  this.moveLeft = function(move){
    if (move) {
      this.left -= 100;
      console.log('ok: ' + this.left);
    } else {
      this.left -= 20;
    }
  }
  this.moveUp = function(move){
    if (move) {
      this.top -= 100;
      console.log('ok: ' + this.left);
    } else {
      this.top -= 20;
    }
  }
  this.moveDown = function(move){
    if (move) {
      this.top += 100;
      console.log('ok: ' + this.left);
    } else {
      this.top += 20;
    }
  }
}

let hero = new Hero('Nobita.png', 20, 30, 200);
let speed = false;

function start(){
  if(hero.left < window.innerWidth - hero.size){
    hero.speed();
    hero.moveRight(speed);
    hero.moveDown(speed);
    // hero.moveUp(speed);
    // hero.moveLeft(speed);
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();