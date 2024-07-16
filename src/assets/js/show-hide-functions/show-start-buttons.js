function showStartButtons(buttons, delay) {
  const elem = buttons;
  const time = delay;
  elem.forEach((el) => {
    const element = el;
    element.style.opacity = '0';
    element.style.zIndex = '0';
    setTimeout(() => {
      element.style.display = 'none';
    }, time);
  });
}

export default showStartButtons;
