const { USER_INPUT_LENGTH } = require("./Constant");
const { Random } = require("@woowacourse/mission-utils");

const randomArrayGenerator = {
  makeRandomNumberArray() {
    const computerRandomNumberArray = [];

    while (computerRandomNumberArray.length < USER_INPUT_LENGTH) {
      const number = Random.pickNumberInRange(1, 9);

      if (!computerRandomNumberArray.includes(number)) {
        computerRandomNumberArray.push(number);
      }
    }

    return computerRandomNumberArray;
  },
};

module.exports = randomArrayGenerator;
