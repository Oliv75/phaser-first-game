var loadState = {
  preload: function(){
    var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', {
      font: '30px Arial', fill: '#fff'
    });
    loadingLabel.anchor.setTo(0.5, 0.5);

    var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
    progressBar.anchor.setTo(0.5, 0.5);
    game.load.setPreloadSprite(progressBar);

    game.load.spritesheet('player', 'images/player2.png', 20, 20);
    game.load.image('enemy', 'images/enemy.png');
    game.load.image('coin', 'images/coin.png');
    game.load.image('tileset', 'images/tileset.png');
    game.load.tilemap('map', 'images/map.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('background', 'images/background.png');
    game.load.image('pixel', 'images/pixel.png');
    game.load.spritesheet('mute', 'images/muteButton.png', 28, 22);
    game.load.image('jumpButton', 'images/jumpButton.png');
    game.load.image('rightButton', 'images/rightButton.png');
    game.load.image('leftButton', 'images/leftButton.png');

    game.load.audio('jump', ['sounds/jump.ogg', 'sounds/jump.mp3']);
    game.load.audio('coin', ['sounds/coin.ogg', 'sounds/coin.mp3']);
    game.load.audio('dead', ['sounds/dead.ogg', 'sounds/dead.mp3']);
  },
  create: function(){
    game.state.start('menu');
  }
};
