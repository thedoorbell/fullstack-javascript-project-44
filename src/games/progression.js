import playGame, { getRandomNum } from '../index.js';

const rules = 'What number is missing in the progression?';

const getProgression = () => {
  const increasedBy = getRandomNum(10) + 1;
  let progressionNumber = getRandomNum(50);
  const progression = [progressionNumber];

  for (let i = 1; i < 10; i += 1) {
    progressionNumber += increasedBy;
    progression.push(progressionNumber);
  }

  return progression;
};

const getGameData = () => {
  const progression = getProgression();
  const position = getRandomNum(10);
  const correctAnswer = progression[position];
  progression[position] = '..';

  return [progression.join(' '), String(correctAnswer)];
};

export default () => playGame(rules, getGameData);
