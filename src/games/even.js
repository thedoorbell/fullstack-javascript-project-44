import playGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const askIsEven = () => {
  const evenNum = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = evenNum % 2 === 0 ? 'yes' : 'no';
  return [evenNum, correctAnswer];
};

export default () => playGame(rules, askIsEven);
