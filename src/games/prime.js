import playGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const askIfPrime = () => {
  const num = Math.floor(Math.random() * 100) + 1;
  let divisors = 1;
  let correctAnswer = '';

  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0) {
      divisors += 1;
      if (divisors === 3) {
        break;
      }
    }
  }
  correctAnswer = divisors === 2 ? 'yes' : 'no';

  return [num, correctAnswer];
};

export default () => playGame(rules, askIfPrime);
