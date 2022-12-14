const Message = {
  GREETING: "숫자 야구 게임을 시작합니다.",
  ASK_GUESS_NUMBER: "숫자를 입력해주세요 : ",
  END_MESSAGE: "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n",
  ASK_QUIT_OR_RETRY: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  NOTHING: "낫싱\n",

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
