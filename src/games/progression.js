import playGame from '../index.js';

const rules = 'What number is missing in the progression?';

const findNumberInProgression = () => {
  const increasedBy = Math.floor(Math.random() * 10) + 1;
  let progressionNumber = Math.floor(Math.random() * 50);
  const progression = [progressionNumber];

  for (let i = 1; i < 10; i += 1) {
    progressionNumber += increasedBy;
    progression.push(progressionNumber);
  }

  const position = Math.floor(Math.random() * 10);
  const correctAnswer = progression[position];
  progression[position] = '..';

  return [progression.join(' '), String(correctAnswer)];
};

export default () => playGame(rules, findNumberInProgression);
