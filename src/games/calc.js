import playGame from '../index.js';

const rules = 'What is the result of the expression?';

const calc = () => {
  const firstNum = Math.floor(Math.random() * 50) + 1;
  const secondNum = Math.floor(Math.random() * 25) + 1;
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * 3)];
  const expression = `${firstNum} ${operation} ${secondNum}`;
  let correctAnswer = 0;

  switch (operation) {
    case '+':
      correctAnswer = firstNum + secondNum;
      break;
    case '-':
      correctAnswer = firstNum - secondNum;
      break;
    case '*':
      correctAnswer = firstNum * secondNum;
      break;
    default:
      break;
  }

  return [expression, String(correctAnswer)];
};

export default () => playGame(rules, calc);
