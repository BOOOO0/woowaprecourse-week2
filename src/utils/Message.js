const Message = {
  GREETING: "숫자 야구 게임을 시작합니다.",
  ASK_GUESS_NUMBER: "숫자를 입력해주세요 : ",

  returnResultBall: (ball) => {
    return `${ball}볼\n`;
  },

  returnResultStrike: (strike) => {
    return `${strike}스트라이크\n`;
  },

  returnResultBallAndStrike: (ball, strike) => {
    return `${ball}볼 ${strike}스트라이크\n`;
  },
};

module.exports = Message;
