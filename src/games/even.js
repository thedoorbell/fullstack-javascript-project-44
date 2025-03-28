import playGame, { getRandomNum } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const num = getRandomNum(100) + 1;
  const correctAnswer = isEven(num) ? 'yes' : 'no';

  return [num, correctAnswer];
};

export default () => playGame(rules, getGameData);
