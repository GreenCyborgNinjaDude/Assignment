var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();


ASSET_MANAGER.queueDownload("./Sprites/Purple_manZ.png");

ASSET_MANAGER.downloadAll(function () {
	//PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;

	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');
	var MZ = new megamanZ(gameEngine);

	//PARAMS.CANVAS_WIDTH = canvas.width;

	gameEngine.init(ctx);
	ctx.imageSmoothingEnabled = false;
	this.gameEngine.addEntity(MZ); 
	//this.spritesheet = ASSET_MANAGER.getAsset("C:\Users\kiett\source\repos\Assignment\Sprites\Megaman_Zero(Basic).PNG");
	//ctx.drawImage(this.spritesheet, 0, 0);

	gameEngine.start();
});
