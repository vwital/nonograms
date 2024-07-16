function hideStartButtons(element, delay) {
  const elem = element;
  const time = delay;
  elem.forEach((el) => {
    const elel = el;
    elel.style.opacity = '0';
    elel.style.zIndex = '0';
    setTimeout(() => {
      elel.style.display = 'none';
    }, time);
  });
}

export default hideStartButtons;
