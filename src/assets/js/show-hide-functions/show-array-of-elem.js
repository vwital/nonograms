function showArrayOfElem(arr, timeToSow, displayParameter) {
  const time = timeToSow;
  setTimeout(() => {
    arr.forEach((el) => {
      const elem = el;
      elem.style.opacity = '1';
      elem.style.zIndex = '1';
      setTimeout(() => {
        elem.style.display = displayParameter;
      }, time * 3);
    });
  }, time);
}

export default showArrayOfElem;
