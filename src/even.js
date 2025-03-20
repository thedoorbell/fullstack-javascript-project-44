import readlineSync from 'readline-sync';

const askIsEven = (name) => {
  for (let questionNum = 1; questionNum <= 3; questionNum += 1) {
    const evenNum = Math.floor(Math.random() * 100) + 1;
    const rightAnswer = evenNum % 2 === 0 ? 'yes' : 'no';
    console.log('Question: ', evenNum);
    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      console.log('Correct!');
      if (questionNum === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export default askIsEven;
