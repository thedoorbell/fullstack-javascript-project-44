import playGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGcd = () => {
  const firstNum = Math.floor(Math.random() * 150) + 1;
  const secondNum = Math.floor(Math.random() * 50) + 1;
  const minNum = Math.min(firstNum, secondNum);
  const question = `${firstNum} ${secondNum}`;
  let correctAnswer = 1;

  for (let i = 2; i <= minNum; i += 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      correctAnswer = i;
    }
  }

  return [question, String(correctAnswer)];
};

export default () => playGame(rules, findGcd);
