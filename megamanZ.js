class megamanZ {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.game.megamanZ = this;

        //Megaman spritesheet
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/Purple_manZ.png");

        this.facing = 0; //0 = right, 1 = left
        this.state = 0; // 0 = idle, 1 = walking, 2 = running, 3 = jumping falling


        this.animation = new Animator(this.spritesheet, 100, 54, 35.2, 47, 11, 0.1, 5.7, false, true);
    };

    update() {

    };

    draw(ctx) {

        //ctx.drawImage(this.spritesheet, 230, 5, 35, 47, 50, 500, 105, 141);
        //console.log("draw");

        this.animation.drawFrame(this.game.clockTick, ctx, 50, 500, 3);

        //ctx.fillStyle = "White";
        //ctx.strokeStyle = "Red";

        //ctx.strokeRect(100, 110, 100, 100);

        //ctx.beginPath();
        //ctx.arc(50, 50, 25, 0, 1 * Math.PI);
        //ctx.fill();
        //ctx.stroke();

        //ctx.beginPath();
        //ctx.moveTo(100, 100);
        //ctx.lineTo(200, 100);
        //ctx.stroke();

       
    };

}