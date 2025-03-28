import playGame, { getRandomNum } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let divisors = 1;
  let result = '';

  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0) {
      divisors += 1;
      if (divisors === 3) {
        break;
      }
    }
  }
  result = divisors === 2 ? 'yes' : 'no';

  return result;
};

const getGameData = () => {
  const num = getRandomNum(100) + 1;
  const correctAnswer = isPrime(num);

  return [num, correctAnswer];
};

export default () => playGame(rules, getGameData);
