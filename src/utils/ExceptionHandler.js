const { USER_INPUT_LENGTH, INVALID, REPLAY, CLOSE } = require("./Constant");

const ExceptionHandler = {
  checkUserInputRedundancy(answer) {
    const checkSet = new Set(answer.split(""));

    if ([...checkSet].length < USER_INPUT_LENGTH) {
      throw "[ERROR] 중복이 없는 숫자를 입력해주세요.\n";
    }
  },

  checkUserInputLength(answer) {
    if (answer.length !== USER_INPUT_LENGTH) {
      throw "[ERROR] 세자리 숫자를 입력해주세요.\n";
    }
  },

  checkValidInput(answer) {
    if (answer != REPLAY && answer != CLOSE) {
      throw "[ERROR] 유효한 숫자를 입력해주세요\n";
    }
  },

  checkInvalidDigit(answer) {
    answer.split("").forEach((digit) => {
      if (digit == INVALID) {
        throw "[ERROR] 1부터 9까지의 숫자를 입력해주세요\n";
      }
    });
  },
};

module.exports = ExceptionHandler;
