const { Console } = require("@woowacourse/mission-utils");
const InputView = {
  /**
   * 사용자의 입력을 받는 메소드
   * @param {function} callback input을 사용하는 로직을 담은 콜백 함수
   */
  readUserInput(callback) {
    Console.readLine("", callback);
  },
};

module.exports = InputView;
