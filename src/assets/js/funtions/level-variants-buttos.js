/*eslint-disable*/
import hideDiffButtons from '../show-hide-functions/hide-array-of-elem';

function lvlVariants(difficultyLevel, difficultyButtons) {
  hideDiffButtons(200, difficultyButtons);
  const lvlButtons = document.querySelectorAll('.level-button');
  console.log(lvlButtons);
  difficultyLevel.forEach((el, idx) => {
    lvlButtons[idx].innerHTML = el.name;
  });
  const levels = document.querySelectorAll('.levels-section');
  return levels;
}

export default lvlVariants;
