import playGame, { getRandomNum } from '../index.js';

const rules = 'What is the result of the expression?';

const calc = (operation, a, b) => {
  let result = 0;

  switch (operation) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      break;
  }

  return result;
};

const getGameData = () => {
  const firstNum = getRandomNum(50) + 1;
  const secondNum = getRandomNum(25) + 1;
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomNum(3)];
  const expression = `${firstNum} ${operation} ${secondNum}`;
  const correctAnswer = calc(operation, firstNum, secondNum);

  return [expression, String(correctAnswer)];
};

export default () => playGame(rules, getGameData);
