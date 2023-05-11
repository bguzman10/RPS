class GameScene extends Phaser.Scene {
    constructor() {
      super("gameScene");
    }
    
    //load assets
    preload(){
        this.load.spritesheet(
            "avatarCcyan",
            "https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FinvaderCcyan.png?v=1589839200959",
            {
              frameWidth: 48,
              frameHeight: 48
            }
          );
          this.load.spritesheet(
            "avatarCyellow",
            "https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FinvaderCyellow.png?v=1589839198988",
            {
              frameWidth: 48,
              frameHeight: 48
            }
          );
    }
    
    //init variables, define animations & sounds, and display assets
    create(){
    }
    
    //update the attributes of various game objects per game logic
    update(){
    }
    
  }

const config = {
    width: 1400,
    height: 750,
    backgroundColor: "#FFFFF",
    parent: "gameContainer",
    scene: [GameScene],
    physics: {
      default: "arcade"
    }
  };