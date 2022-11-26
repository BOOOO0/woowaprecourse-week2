const BaseballGame = require("../Model/BaseballGame");
const ExceptionHandler = require("../utils/ExceptionHandler");
const Message = require("../utils/Message");
const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");
const RandomArrayGenerator = require("../RandomArrayGenerator");
const Constant = require("../utils/Constant");

class gameController {
  constructor() {
    this.baseballGame;
  }

  startGame() {
    this.greeting();
    this.constructBaseballGame();
    InputView.readUserInput(this.startGameCallback.bind(this));
  }

  replayGame() {
    this.constructBaseballGame();
    InputView.readUserInput(this.startGameCallback.bind(this));
  }

  restartGame() {
    InputView.readUserInput(this.startGameCallback.bind(this));
  }

  startGameCallback(input) {
    try {
      this.checkInputExceptions(input);

      this.baseballGame.gamePlay(input);
      this.printBallStrike(this.baseballGame.returnBall(), this.baseballGame.returnStrike());
      this.gameContinueOrEnd(this.baseballGame.returnStrike());
    } catch (err) {
      OutputView.printErrorMessage(err);
      this.restartGame();
    }
  }

  checkInputExceptions(input) {
    ExceptionHandler.checkUserInputLength(input);
    ExceptionHandler.checkUserInputRedundancy(input);
    ExceptionHandler.checkInvalidDigit(input);
  }

  greeting() {
    OutputView.printGreeting();
  }

  constructBaseballGame() {
    this.baseballGame = new BaseballGame(RandomArrayGenerator.makeRandomNumberArray());
  }

  gameContinueOrEnd(strike) {
    if (strike === Constant.STRIKE_OUT) {
      OutputView.printEndMessage();
      this.askReplayOrClose();
    } else {
      this.restartGame();
    }
  }

  printBallStrike(ball, strike) {
    if (ball === Constant.INVALID && strike !== Constant.INVALID) {
      OutputView.printGameResult(Message.returnResultStrike(strike));
    } else if (strike === Constant.INVALID && ball !== Constant.INVALID) {
      OutputView.printGameResult(Message.returnResultBall(ball));
    } else if (strike !== Constant.INVALID && ball !== Constant.INVALID) {
      OutputView.printGameResult(Message.returnResultBallAndStrike(ball, strike));
    } else {
      OutputView.printGameResult(Message.NOTHING);
    }
  }

  askReplayOrClose() {
    InputView.readReplay(this.askReplayOrCloseCallback.bind(this));
  }

  askReplayOrCloseCallback(input) {
    try {
      ExceptionHandler.checkValidInput(input);

      this.replayOrClose(input);
    } catch (err) {
      OutputView.printErrorMessage(err);
    }
  }

  replayOrClose(input) {
    if (!this.checkReplayOrClose(input)) {
      OutputView.closeConsole();
    } else {
      this.replayGame();
    }
  }

  checkReplayOrClose(input) {
    if (input == Constant.REPLAY) return true;
    return false;
  }
}

module.exports = gameController;
