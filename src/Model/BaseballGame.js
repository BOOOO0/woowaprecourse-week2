const Constant = require("../utils/Constant");
const { returnResultBall } = require("../utils/Message");

class BaseballGame {
  #randomNumberArray;
  #ballAndStrike;
  constructor(randomNumberArray) {
    this.#randomNumberArray = randomNumberArray;
    this.#ballAndStrike = new Map();
  }

  gamePlay(input) {
    this.checkBall(input, this.#randomNumberArray);
    this.checkStrike(input, this.#randomNumberArray);
  }

  checkBall(input, randomNumberArray) {
    let ball = 0;

    input.split("").forEach((digit, index) => {
      if (randomNumberArray.includes(parseInt(digit)) && randomNumberArray.indexOf(parseInt(digit)) !== index) ball++;
    });

    this.#ballAndStrike.set(Constant.BALL, ball);
  }

  checkStrike(input, randomNumberArray) {
    let strike = 0;

    input.split("").forEach((digit, index) => {
      if (randomNumberArray.includes(parseInt(digit)) && randomNumberArray.indexOf(parseInt(digit)) === index) strike++;
    });

    this.#ballAndStrike.set(Constant.STRIKE, strike);
  }

  returnBall() {
    return this.#ballAndStrike.get(Constant.BALL);
  }

  returnStrike() {
    return this.#ballAndStrike.get(Constant.STRIKE);
  }

  returnBallAndStrike() {
    return [this.#ballAndStrike.get(Constant.BALL), this.#ballAndStrike.get(Constant.STRIKE)];
  }
}

module.exports = BaseballGame;
