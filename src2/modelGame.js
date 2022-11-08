class BaseballGame {
  constructor() {
    this.ball = 0;
    this.strike = 0;
  }

  checkBall(computerRandomNumberArray, userAnswer) {
    userAnswer.split("").forEach((digit, index) => {
      if (
        computerRandomNumberArray.includes(parseInt(digit)) &&
        computerRandomNumberArray.indexOf(parseInt(digit)) !== index
      )
        this.ball++;
    });
  }

  checkStrike(computerRandomNumberArray, userAnswer) {
    userAnswer.split("").forEach((digit, index) => {
      if (
        computerRandomNumberArray.includes(parseInt(digit)) &&
        computerRandomNumberArray.indexOf(parseInt(digit)) === index
      )
        this.strike++;
    });
  }

  initializeBallandStrike() {
    this.ball = 0;
    this.strike = 0;
  }

  returnResultofGame() {
    if (this.ball === INVALID && this.strike !== INVALID) {
      return `${this.strike}스트라이크`;
    } else if (this.strike === INVALID && this.ball !== INVALID) {
      return `${this.ball}볼`;
    } else if (this.strike !== INVALID && this.ball !== INVALID) {
      return `${this.ball}볼 ${this.strike}스트라이크`;
    } else {
      return "낫싱";
    }
  }
}

module.exports = BaseballGame;
