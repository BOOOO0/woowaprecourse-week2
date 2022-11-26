const BaseballGame = require("../Model/BaseballGame");
const ExceptionHandler = require("../utils/ExceptionHandler");
const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");

class gameController {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  greeting() {
    OutputView.printGreeting();
  }
}

module.exports = gameController;
