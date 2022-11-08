const MissionUtils = require("@woowacourse/mission-utils");
const returnComputerRandomArray = require("./modelComputer");
const baseballGame = require("./modelGame");
const view = require("./view");

class controller {
  constructor() {
    this.bg = new baseballGame();
    this.view = new view();
    this.computerRandomNumberArray = [];
  }

  firstPlay() {
    this.computerRandomNumberArray = returnComputerRandomArray();
    this.view.inputUserAnswer(this.getUserInputandPlay);
  }

  sendComputerArray() {
    return this.computerRandomNumberArray;
  }

  sendResult() {
    this.bg.returnResultofGame();
  }

  getUserInputandPlay(userAnswer) {
    this.bg.checkBall(computerRandomNumberArray, userAnswer);
    this.bg.checkStrike(computerRandomNumberArray, userAnswer);
    this.view.printResult(this.bg.returnResultofGame());
  }

  isStrikeOut(result) {
    if (result == "3스트라이크") {
      this.view.askReplayorClose();
    }
  }
}

module.exports = controller;
