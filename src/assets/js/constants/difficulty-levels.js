import heart from '../tasks/5x5/heart';
import lemon from '../tasks/5x5/lemon';
import robot from '../tasks/5x5/robot';
import smile from '../tasks/5x5/smile';
import tree from '../tasks/5x5/tree';

import alarmClock from '../tasks/10x10/alarm-clock';
import house from '../tasks/10x10/house';
import questionMark from '../tasks/10x10/question-mark';
import scorpion from '../tasks/10x10/scorpion';
import turtle from '../tasks/10x10/turtle';

import deer from '../tasks/15x15/deer';
import dolphin from '../tasks/15x15/dolphin';
import duck from '../tasks/15x15/duck';
import octopus from '../tasks/15x15/octopus';
import rat from '../tasks/15x15/rat';

const easyLvl = [heart, lemon, robot, smile, tree];
const mediumLvl = [alarmClock, house, questionMark, scorpion, turtle];
const hardLvl = [deer, dolphin, duck, octopus, rat];
const easyLvlNames = ['Heart', 'Lemon', 'Robot', 'Smile', 'Tree'];
const mediumLvlNames = ['Alarm Clock', 'House', 'Question Mark', 'Scorpion', 'Turtle'];
const hardLvlNames = ['Deer', 'Dolphin', 'Duck', 'Octopus', 'Rat'];

export {
  easyLvl, mediumLvl, hardLvl, easyLvlNames, mediumLvlNames, hardLvlNames,
};
