const Message = require("../utils/Message");
const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printGreeting() {
    Console.print(Message.GREETING);
  },

  printGameResult(result) {
    Console.print(result);
  },

  printEndMessage() {
    Console.print(Message.END_MESSAGE);
  },

  printErrorMessage(err) {
    Console.print(err);
  },

  closeConsole() {
    Console.close();
  },
};

module.exports = OutputView;
