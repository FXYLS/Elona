var picture;
var button;
var count = 0;
var scale1 = 1;

function 开场过渡() {
    picture = new laya.display.Sprite();
    picture.loadImage("开场过渡/1.png");
    picture.pos(0,0);
    Laya.stage.addChild(picture);
    
    button = new laya.display.Sprite();
    button.loadImage("开场过渡/4.png");
    button.pos(850,720);
    button.width = 150;
    button.height = 30;
    button.pivot(button.width / 2, button.height / 2);
    Laya.stage.addChild(button);
    Laya.stage.on(laya.events.Event.KEY_DOWN,this,onKeyDown);
   
}

function onKeyDown(e) {
    if(count == 5){
        button.graphics.clear();
        picture.graphics.clear();
        Laya.stage.off(laya.events.Event.KEY_DOWN,this,onKeyDown);
    }
    if(count == 4){
         Laya.timer.frameLoop(1, this, animateY);
         count++;
    }
    if(count == 3){
        button.scale(1,1);
        picture.graphics.clear();
        picture.loadImage("开场过渡/3.png");
        count++;
    }
    if(count == 2){
         Laya.timer.frameLoop(1, this, animateY);
         count++;
    }
    if (count == 1) {
        picture.graphics.clear();
        picture.loadImage("开场过渡/2.png");
        button.scale(1,1);
        count++;
    } 
    if(count == 0){
         Laya.timer.frameLoop(1, this, animateY);
         count++;
    }
       
}
function animateY() {
    if ( (scale1 - 0.02) < -0.04) {
        Laya.timer.clear(this,animateY);
        scale1 = 1;
    }else{
        button.scale(1,scale1);
        scale1 -= 0.02;
    }
}
