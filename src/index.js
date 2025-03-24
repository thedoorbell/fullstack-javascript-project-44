import readlineSync from 'readline-sync';
import getName from './cli.js';

const playGame = (rules, game) => {
  const name = getName();
  console.log(rules);

  for (let gameRound = 1; gameRound <= 3; gameRound += 1) {
    const [question, correctAnswer] = game();
    console.log('Question:', question);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
      if (gameRound === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export default playGame;
