function showAnyElem(element, delay, display) {
  const el = element;
  const time = delay;
  const displ = display;
  el.style.opacity = '1';
  el.style.zIndex = '1';
  setTimeout(() => {
    el.style.display = displ;
  }, time);
}

export default showAnyElem;
