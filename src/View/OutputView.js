const Message = require("../utils/Message");
const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printGreeting() {
    Console.print(Message.GREETING);
  },
};

module.exports = OutputView;
