function showGameControls(htmlElem, delay) {
  const currentEl = htmlElem;
  const time = delay;
  setTimeout(() => {
    currentEl.style.display = 'flex';
    setTimeout(() => {
      currentEl.style.opacity = '1';
    }, time * 3);
  }, time);
}

export default showGameControls;
