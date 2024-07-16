import createLayout from './assets/js/layout/make-layout';
import './main.scss';

createLayout();
/*eslint-disable*/
import {
  easyLvl,
  mediumLvl,
  hardLvl,
  easyLvlNames,
  mediumLvlNames,
  hardLvlNames,
} from './assets/js/constants/difficulty-levels';
import matrixFromElements from './assets/js/funtions/matrix-from-elements';
import createField from './assets/js/funtions/create-blocks-field';
import {
  addVerticalTips,
  pushVerticalTips,
} from './assets/js/funtions/add-vertical-tips';
import {
  addHorizontalTips,
  pushHorizontalTips,
} from './assets/js/funtions/add-horizontal-tips';
import lvlVariants from './assets/js/funtions/level-variants-buttos';
import compareMatrix from './assets/js/funtions/compare-matrix';
import getRandomNumber from './assets/js/funtions/get-random-num';
import elementsFromMatrix from './assets/js/funtions/elements-from-matrix';
import createTimer from './assets/js/components/create-timer';
import showGameControls from './assets/js/show-hide-functions/show-game-controls';
import hideStartButtons from './assets/js/show-hide-functions/hide-start-buttons';
import showStartButtons from './assets/js/show-hide-functions/show-start-buttons';
import hideAnyElem from './assets/js/show-hide-functions/hide-any-elem';
import showAnyElem from './assets/js/show-hide-functions/show-any-elem';
import showArrayOfElem from './assets/js/show-hide-functions/show-array-of-elem';
import hideArrayOfElem from './assets/js/show-hide-functions/hide-array-of-elem';
import changeThemeToDark from './assets/js/change-theme/change-theme-to-dark';
import changeThemeToLight from './assets/js/change-theme/change-theme-to-light';

/*TODO


Пустой body
Запушить и залить ссылку!


*/

/**

*/

/*eslint-disable*/

const gameControlElements = document.querySelector('#game-stats');
const gameBlock = document.querySelector('#game');
const newGameButton = document.querySelector('#new-game-button');
const resultsGameButton = document.querySelector('.results-button');
const levelsSection = document.querySelector('.levels-section');
let gameField = document.querySelector('.game-field');
const startButton = document.querySelector('.start-game-button');
const startSectionButtons = document.querySelectorAll('.start-button');
const lvlButtons = document.querySelectorAll('.lvl-button');
const lvlButtonsSection = document.querySelector('.lvl-buttons');
const darkThemeButton = document.querySelector('#dark-theme');
const lightThemeButton = document.querySelector('#light-theme');
const winTime = document.querySelector('.win-time');
const gameTimer = document.querySelector('#game-timer');
const resultsModal = document.querySelector('.results-window ');
const resultsBackButton = document.querySelector('.results-back-button');
const gameWinModal = document.querySelector('.game-win');
const gameWinResult = document.querySelector('.game-win-result');
const gameWinButton = document.querySelector('.game-win-button');
const gameWinMessage = document.querySelector('.game-win-message');
const soundButton = document.querySelector('#sound-button');

let timer;
// ADD AUDIO
import audio from './assets/audio/win-game.mp3';
const audioWin = new Audio(audio);
audioWin.volume = 0.7;

import sound from './assets/audio/block-on.mp3';
const blockOn = new Audio(sound);
blockOn.volume = 0.5;

import sound1 from './assets/audio/block-off.mp3';
const blockOff = new Audio(sound1);
blockOff.volume = 0.5;

import sound2 from './assets/audio/x-mark.mp3';
const xMark = new Audio(sound2);
xMark.volume = 0.5;

let soundOn = true;
let resumed;

soundButton.addEventListener('click', () => {
  if (soundOn) {
    soundButton.firstElementChild.classList.add('sound-bg-off');
    soundButton.firstElementChild.classList.remove('sound-bg-on');
    soundOn = false;
    audioWin.volume = 0;
    blockOn.volume = 0;
    blockOff.volume = 0;
    xMark.volume = 0;
  } else if (!soundOn) {
    soundButton.firstElementChild.classList.remove('sound-bg-off');
    soundButton.firstElementChild.classList.add('sound-bg-on');
    soundOn = true;
    audioWin.volume = 0.7;
    blockOn.volume = 0.5;
    blockOff.volume = 0.5;
    xMark.volume = 0.5;
  }
});

//Audio End

newGameButton.addEventListener('click', () => {
  const levelsSection = document.querySelector('.levels-section');
  gameTimer.textContent = '00:00';
  clearTimeout(timer);
  clickCounter = 0;
  hideAnyElem(gameWinModal, 200);
  hideAnyElem(resultsModal, 200);
  hideAnyElem(gameField, 200);
  hideAnyElem(gameControlElements, 200);
  hideAnyElem(levelsSection, 300);
  hideAnyElem(lvlButtonsSection, 300);
  showArrayOfElem(startSectionButtons, 200, 'block');
  isGameResolved = false;
});

function createGameField(size, blockStyle, currentLvl) {
  let styleClasses = [];
  showAnyElem(gameField, 200, 'flex');
  showGameControls(gameControlElements, 50);
  if (size === 5) styleClasses = ['block', 'block5'];
  if (size === 10) styleClasses = ['block', 'block10'];
  if (size === 15) styleClasses = ['block', 'block15'];
  createField(size * size, blockStyle, styleClasses);
  addVerticalTips(size);
  addHorizontalTips(size);
  pushVerticalTips(currentLvl.vKey);
  pushHorizontalTips(currentLvl.hKey);
  if (isThemeDark) {
    changeThemeToDark();
  } else changeThemeToLight();
}

let currentDifficulty = '';
let currentLevel = '';
let currentLvlPack = '';
let currentLvlNames = '';
let currentSize = 0;
let currentGameClass = '';
let isThemeDark;
let isGameSaved = false;
let isGameResolved = false;
let clickCounter = 0;

function gameMechanic() {
  if (isThemeDark) {
    changeThemeToDark();
  } else {
    changeThemeToLight();
  }
  const buttons = document.querySelectorAll('.block');
  buttons.forEach((el) => {
    let shadeClass = 'shaded';
    if (isThemeDark) {
      shadeClass = 'shaded-light';
    } else if (!isThemeDark) shadeClass = 'shaded';
    el.addEventListener('click', () => {
      if (isThemeDark) {
        shadeClass = 'shaded-light';
      } else if (!isThemeDark) shadeClass = 'shaded';
      clickCounter += 1;
      if (!resumed) {
        if (clickCounter === 1) {
          gameTimer.textContent = '00:00';
          clearTimeout(timer);
          timer = createTimer(gameTimer);
        }
      }
      resumed = false;

      if (
        !el.classList.contains(shadeClass) &&
        !el.classList.contains('crossed')
      ) {
        el.classList.add(shadeClass);
        blockOn.play();
      } else {
        el.classList.remove(shadeClass);
        blockOff.play();
      }
      const currentMatrix = matrixFromElements(buttons, currentSize, 'shaded');
      const result = compareMatrix(currentLevel.task, currentMatrix);
      const currentMatrixLight = matrixFromElements(
        buttons,
        currentSize,
        'shaded-light'
      );
      const resultLight = compareMatrix(currentLevel.task, currentMatrixLight);
      if (result || resultLight) {
        clearInterval(timer);
        const winInfo = `${
          currentLevel.name
        } - ${currentDifficulty.toString()} - ${gameTimer.textContent} `;
        sendResToLocalStorage(winInfo);
        showAnyElem(gameWinModal, 200, 'flex');
        gameWinMessage.innerHTML = `Great! You have solved the nonogram in ${getSecTime(
          winInfo
        )} seconds`;
        gameWinResult.innerHTML = `Diff: ${currentDifficulty
          .toString()
          .toUpperCase()} - Lvl: ${currentLevel.name} - Time: ${
          gameTimer.textContent
        }`;
        audioWin.play();
        isGameResolved = true;
        const solutionElements = elementsFromMatrix(currentLevel.task);
        const blockField = document.querySelector('#block-field');
        blockField.innerHTML = '';
        solutionElements.forEach((el) => {
          if (isThemeDark && !el.classList.contains('crossed'))
            el.classList.add('shaded-light');
          blockField.append(el);
        });
      }
    });
    el.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      if (el.classList.contains('crossed')) {
        el.classList.remove('crossed');
        blockOff.play();
      } else if (!el.classList.contains(shadeClass)) {
        el.classList.add('crossed');
        xMark.play();
      }
    });
  });
}
// Markup

startButton.addEventListener('click', () => {
  // hideStartButtons(startSectionButtons,300)
  hideAnyElem(resultsModal, 100);
  showAnyElem(lvlButtonsSection, 300, 'flex');
  startSectionButtons.forEach((el) => {
    el.style.opacity = '0';
    el.style.zIndex = '0';
    setTimeout(() => {
      el.style.display = 'none';
    }, 500);
  });
  lvlButtons.forEach((el) => {
    el.style.opacity = '1';
    el.style.zIndex = '1';
    setTimeout(() => {
      el.style.display = 'block';
      lvlButtonsSection.style.opacity = '1';
    }, 700);
  });
});

const easyButton = document.querySelector('#easy-lvl');
const mediumButton = document.querySelector('#medium-lvl');
const hardButton = document.querySelector('#hard-lvl');
const randomButton = document.querySelector('#random-lvl');

const settingsForRandomgame = {
  difficulties: ['easy', 'medium', 'hard'],
  sizes: [5, 10, 15],
  levelPacks: [easyLvl, mediumLvl, hardLvl],
  levelNames: [easyLvlNames, mediumLvlNames, hardLvlNames],
  classes: ['five-blocks', 'ten-blocks', 'fifteen-blocks'],
};

easyButton.addEventListener('click', () => {
  const levels = lvlVariants(easyLvl, lvlButtons);
  currentDifficulty = 'easy';
  currentSize = 5;
  currentLvlPack = easyLvl;
  currentLvlNames = easyLvlNames;
  currentGameClass = 'five-blocks';
  setTimeout(createLevels(levels), 500);
});
mediumButton.addEventListener('click', () => {
  const levels = lvlVariants(mediumLvl, lvlButtons);
  currentDifficulty = 'medium';
  currentSize = 10;
  currentLvlPack = mediumLvl;
  currentLvlNames = mediumLvlNames;
  currentGameClass = 'ten-blocks';
  setTimeout(createLevels(levels), 200);
});
hardButton.addEventListener('click', () => {
  const levels = lvlVariants(hardLvl, lvlButtons);
  currentDifficulty = 'hard';
  currentSize = 15;
  currentLvlPack = hardLvl;
  currentLvlNames = hardLvlNames;
  currentGameClass = 'fifteen-blocks';
  setTimeout(createLevels(levels), 100);
});
randomButton.addEventListener('click', () => {
  const difficulty = getRandomNumber(0, 2);
  const level = getRandomNumber(0, 4);
  currentDifficulty = settingsForRandomgame.difficulties[difficulty];
  currentSize = settingsForRandomgame.sizes[difficulty];
  currentLvlPack = settingsForRandomgame.levelPacks[difficulty];
  currentLvlNames = settingsForRandomgame.levelNames[level];
  currentGameClass = settingsForRandomgame.classes[difficulty];
  const index = level;
  currentLevel = currentLvlPack[level];
  createGameField(currentSize, currentGameClass, currentLevel);
  const levelsSection = document.querySelector('.levels-section');
  const welcome = document.querySelector('.welcome');
  hideAnyElem(lvlButtonsSection, 0);
  gameMechanic();
});

function createLevels(levels) {
  if (isThemeDark) {
    changeThemeToDark();
  } else {
    changeThemeToLight();
  }
  showAnyElem(levels[0], 600, 'flex');
  levels.forEach((el) => {
    el.addEventListener('click', (e) => {
      const backButton = document.querySelector('#back');
      if (e.target === backButton) {
        hideAnyElem(levelsSection, 200);
        showArrayOfElem(lvlButtons, 100, 'block');
      } else if (e.target.classList.contains('button')) {
        const index = currentLvlNames.indexOf(e.target.textContent);
        currentLevel = currentLvlPack[index];
        createGameField(currentSize, currentGameClass, currentLevel);
        const levelsSection = document.querySelector('.levels-section');
        hideAnyElem(levelsSection, 0);
        gameMechanic();
      }
    });
  });
}

// Control elements

const saveGameButton = document.querySelector('#save-button');
const resumeGameButton = document.querySelector('#resume-button');
const resetGameButton = document.querySelector('#reset-button');
const solutionGameButton = document.querySelector('#solution-button');

solutionGameButton.addEventListener('click', () => {
  const solutionElements = elementsFromMatrix(currentLevel.task);
  const blockField = document.querySelector('#block-field');
  blockField.innerHTML = '';
  solutionElements.forEach((el) => {
    if (isThemeDark && !el.classList.contains('crossed'))
      el.classList.add('shaded-light');
    blockField.append(el);
  });
  if (isThemeDark) {
    changeThemeToDark();
  } else {
    changeThemeToLight();
  }
  clearInterval(timer);
  isGameSaved = false;
  isGameResolved = true;
});

resetGameButton.addEventListener('click', () => {
  if (isGameResolved) {
    gameMechanic();
    isGameResolved = false;
  }
  const buttons = document.querySelectorAll('.block');
  buttons.forEach((el) => {
    el.classList.remove('shaded');
    el.classList.remove('shaded-light');
    el.classList.remove('crossed');
  });
  gameTimer.textContent = '00:00';
  clearTimeout(timer);
  clickCounter = 0;
  createGameField(currentSize, currentGameClass, currentLevel);
  gameMechanic();
});

let gameStatus;
let savedItems = {};
saveGameButton.addEventListener('click', () => {
  localStorage.setItem('gameField', gameField.innerHTML);
  localStorage.setItem('gameTimer', timer);
  localStorage.setItem('gameTimerLayout', gameTimer.textContent);
  localStorage.setItem('savedLevel', currentLevel.name);
  localStorage.setItem('savedGameClass', currentGameClass);
  let [lvlInd, packLvl] = searchGameParametersFromLvlName(currentLevel.name);
  alert('Saved');
});

function searchGameParametersFromLvlName(lvlName) {
  let indexOfLvl;
  let lvlPack;
  let lvlSize;
  let lvlClass;
  if (easyLvlNames.indexOf(lvlName) !== -1) {
    indexOfLvl = easyLvlNames.indexOf(lvlName);
    lvlPack = easyLvl;
    lvlSize = 5;
    lvlClass = 'five-blocks';
  }
  if (mediumLvlNames.indexOf(lvlName) !== -1) {
    indexOfLvl = mediumLvlNames.indexOf(lvlName);
    lvlPack = mediumLvl;
    lvlSize = 10;
    lvlClass = 'ten-blocks';
  }
  if (hardLvlNames.indexOf(lvlName) !== -1) {
    indexOfLvl = hardLvlNames.indexOf(lvlName);
    lvlPack = hardLvl;
    lvlSize = 15;
    lvlClass = 'fifteen-blocks';
  }
  return [indexOfLvl, lvlPack, lvlSize, lvlClass];
}

resumeGameButton.addEventListener('click', () => {
  resumed = true;
  if (!localStorage.getItem('gameField')) {
    alert(`You don't have saved game`);
  } else {
    let [indexOfLvl, packOfLvl, sizeOfLvl, classLvl] =
      searchGameParametersFromLvlName(localStorage.getItem('savedLevel'));
    currentLevel = packOfLvl[indexOfLvl];
    currentLvlPack = packOfLvl;
    currentSize = sizeOfLvl;
    currentGameClass = classLvl;
    hideArrayOfElem(0, startSectionButtons);
    showAnyElem(gameControlElements, 200, 'flex');
    hideAnyElem(levelsSection, 300);
    hideAnyElem(lvlButtonsSection, 300);
    hideAnyElem(resultsModal, 100);
    hideAnyElem(gameWinModal, 300);
    showAnyElem(gameField, 100, 'flex');
    gameField.innerHTML = '';
    gameField.innerHTML = localStorage.getItem('gameField');
    let timerId = localStorage.getItem('gameTimer');
    let timeValue = localStorage.getItem('gameTimerLayout');
    clearTimeout(timer);
    timer = createTimer(gameTimer, timeValue);
    gameMechanic();
    if (isGameSaved) {
      gameField.innerHTML = '';
      gameField.innerHTML = savedItems.gameFieldHtml;
      resumed = true;
      gameMechanic();
    } else {
    }
    if (isThemeDark) {
      changeThemeToDark();
    } else {
      changeThemeToLight();
    }
  }
});

// Theme start

if (isThemeDark) {
  darkThemeButton.classList.add('theme-button_active');
} else {
  lightThemeButton.classList.add('theme-button_active');
}

darkThemeButton.addEventListener('click', () => {
  changeThemeToDark();
  lightThemeButton.classList.remove('theme-button_active');
  darkThemeButton.classList.add('theme-button_active');
  isThemeDark = true;
});

lightThemeButton.addEventListener('click', () => {
  changeThemeToLight();
  darkThemeButton.classList.remove('theme-button_active');
  lightThemeButton.classList.add('theme-button_active');
  isThemeDark = false;
});

// Theme end
//Last Results
let resultIdx = 1;
/*eslint-disable*/
function sendResToLocalStorage(newValue) {
  function moveItems(value) {
    localStorage.setItem('2', localStorage.getItem('1'));
    localStorage.setItem('3', localStorage.getItem('2'));
    localStorage.setItem('4', localStorage.getItem('3'));
    localStorage.setItem('5', localStorage.getItem('4'));
    localStorage.setItem('1', value);
  }
  if (!localStorage.getItem('1')) {
    localStorage.setItem('1', newValue);
  } else if (!localStorage.getItem('2')) {
    localStorage.setItem('2', localStorage.getItem('1'));
    localStorage.setItem('1', newValue);
  } else if (!localStorage.getItem('3')) {
    localStorage.setItem('3', localStorage.getItem('2'));
    localStorage.setItem('2', localStorage.getItem('1'));
    localStorage.setItem('1', newValue);
  } else if (!localStorage.getItem('4')) {
    localStorage.setItem('4', localStorage.getItem('3'));
    localStorage.setItem('3', localStorage.getItem('2'));
    localStorage.setItem('2', localStorage.getItem('1'));
    localStorage.setItem('1', newValue);
  } else if (!localStorage.getItem('5')) {
    localStorage.setItem('5', localStorage.getItem('4'));
    localStorage.setItem('4', localStorage.getItem('3'));
    localStorage.setItem('3', localStorage.getItem('2'));
    localStorage.setItem('2', localStorage.getItem('1'));
    localStorage.setItem('1', newValue);
  } else {
    localStorage.setItem('5', localStorage.getItem('4'));
    localStorage.setItem('4', localStorage.getItem('3'));
    localStorage.setItem('3', localStorage.getItem('2'));
    localStorage.setItem('2', localStorage.getItem('1'));
    localStorage.setItem('1', newValue);
  }
}

function getArrayOfResults() {
  const arrayOfResults = [];
  arrayOfResults.push(localStorage.getItem('1'));
  arrayOfResults.push(localStorage.getItem('2'));
  arrayOfResults.push(localStorage.getItem('3'));
  arrayOfResults.push(localStorage.getItem('4'));
  arrayOfResults.push(localStorage.getItem('5'));
  const result = arrayOfResults.sort(sortArrayByTime);
  return result;
}

function getSecTime(value) {
  if (value) {
    let resTime =
      parseFloat(value.slice(-5, -2)) * 60 + parseFloat(value.slice(-3));
    return resTime;
  }
}

function sortArrayByTime(a, b) {
  if (getSecTime(a) < getSecTime(b)) {
    return -1;
  } else if (getSecTime(a) > getSecTime(b)) {
    return 1;
  }
  return 0;
}
hideAnyElem(resultsModal, 0);
hideAnyElem(gameWinModal, 0);

resultsGameButton.addEventListener('click', () => {
  showAnyElem(resultsModal, 200, 'flex');
  const resultsElements = document.querySelectorAll('.result');
  const savedResultsArray = getArrayOfResults();
  resultsElements.forEach((el, idx) => {
    if (savedResultsArray[idx]) {
      el.innerHTML = savedResultsArray[idx];
    } else {
      el.innerHTML = '--Empty--';
    }
  });
});

resultsBackButton.addEventListener('click', () => {
  hideAnyElem(resultsModal, 200);
});

gameWinButton.addEventListener('click', () => {
  const levelsSection = document.querySelector('.levels-section');
  gameTimer.textContent = '00:00';
  clearTimeout(timer);
  clickCounter = 0;
  hideAnyElem(gameWinModal, 200);
  hideAnyElem(resultsModal, 200);
  hideAnyElem(gameField, 200);
  hideAnyElem(gameControlElements, 200);
  hideAnyElem(levelsSection, 300);
  hideAnyElem(lvlButtonsSection, 300);
  showArrayOfElem(startSectionButtons, 200, 'block');
  isGameResolved = false;
});

function startLvl5x5() {
  const difficulty = 0;
  const level = getRandomNumber(0, 4);
  currentDifficulty = settingsForRandomgame.difficulties[difficulty];
  currentSize = settingsForRandomgame.sizes[difficulty];
  currentLvlPack = settingsForRandomgame.levelPacks[difficulty];
  currentLvlNames = settingsForRandomgame.levelNames[level];
  currentGameClass = settingsForRandomgame.classes[difficulty];
  const index = level;
  currentLevel = currentLvlPack[level];
  createGameField(currentSize, currentGameClass, currentLevel);
  const levelsSection = document.querySelector('.levels-section');
  const welcome = document.querySelector('.welcome');
  hideAnyElem(lvlButtonsSection, 0);
  hideArrayOfElem(0, startSectionButtons);
  gameMechanic();
}
startLvl5x5();
