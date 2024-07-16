function addVerticalTips(size) {
  const verticalTipsField = document.querySelector('#vertical-tips-field');
  verticalTipsField.classList = '';
  verticalTipsField.innerHTML = '';
  verticalTipsField.classList.add('vertical-tips');
  for (let i = 0; i < size; i += 1) {
    const tip = document.createElement('span');
    tip.classList.add('vertical-tip');
    verticalTipsField.append(tip);
  }
}

function pushVerticalTips(arrayOfTips) {
  const tips = document.querySelectorAll('.vertical-tip');
  console.log(tips);
  tips.forEach((el, idx) => {
    const element = el;
    element.innerHTML = arrayOfTips[idx];
  });
}

export { addVerticalTips, pushVerticalTips };
