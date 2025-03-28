import playGame, { getRandomNum } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  const min = Math.min(a, b);
  let result = 1;

  for (let i = 2; i <= min; i += 1) {
    if (a % i === 0 && b % i === 0) {
      result = i;
    }
  }

  return result;
};

const getGameData = () => {
  const firstNum = getRandomNum(150) + 1;
  const secondNum = getRandomNum(50) + 1;
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = getGcd(firstNum, secondNum);

  return [question, String(correctAnswer)];
};

export default () => playGame(rules, getGameData);
