function hideAnyElem(element, delay) {
  const el = element;
  const time = delay;
  el.style.opacity = '0';
  el.style.zIndex = '0';
  setTimeout(() => {
    el.style.display = 'none';
  }, time);
}

export default hideAnyElem;
