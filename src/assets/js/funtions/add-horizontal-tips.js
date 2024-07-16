function addHorizontalTips(size) {
  const horizontalTipsField = document.querySelector('#horizontal-tips-field');
  horizontalTipsField.classList = '';
  horizontalTipsField.innerHTML = '';
  horizontalTipsField.classList.add('horizontal-tips');
  for (let i = 0; i < size; i += 1) {
    const tip = document.createElement('span');
    tip.classList.add('horizontal-tip');
    horizontalTipsField.append(tip);
  }
}

function pushHorizontalTips(arrayOfTips) {
  const tips = document.querySelectorAll('.horizontal-tip');
  console.log(tips);
  tips.forEach((el, idx) => {
    const element = el;
    element.innerHTML = arrayOfTips[idx];
  });
}

export { addHorizontalTips, pushHorizontalTips };
