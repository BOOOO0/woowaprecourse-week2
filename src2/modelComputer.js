const MissionUtils = require("@woowacourse/mission-utils");

const returnComputerRandomArray = () => {
  const computerRandomNumberArray = [];

  while (computerRandomNumberArray.length < USER_INPUT_LENGTH) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!computerRandomNumberArray.includes(number)) {
      computerRandomNumberArray.push(number);
    }
  }

  return computerRandomNumberArray;
};

exports.returnComputerRandomArray = returnComputerRandomArray;
