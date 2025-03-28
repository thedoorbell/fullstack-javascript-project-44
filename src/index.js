import readlineSync from 'readline-sync';

export const getRandomNum = (x) => {
  const num = Math.floor(Math.random() * x);

  return num;
};

export default (rules, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
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
