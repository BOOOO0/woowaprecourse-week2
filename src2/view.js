const MissionUtils = require("@woowacourse/mission-utils");
const controller = require("./controller");

class view {
  constructor() {
    this.controller = new controller();
  }
  greeting() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  inputUserAnswer(getUserInputandPlay) {
    MissionUtils.Console.readline("aa", (answer) => {});
  }

  gamePlay() {}

  askReplayorClose() {
    MissionUtils.Console.readline("aa", (answer) => {});
  }

  printResult(result) {
    MissionUtils.Console.print(result);
  }
}

module.exports = view;
