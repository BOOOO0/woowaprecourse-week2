const GameController = require("./Controller/GameController");

class App {
  constructor() {
    this.GameController = new GameController();
  }

  play() {
    this.GameController.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
