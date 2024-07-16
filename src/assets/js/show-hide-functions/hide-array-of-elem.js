function hideArrayOfElem(timeToHide, arr) {
  setTimeout(() => {
    arr.forEach((el) => {
      const element = el;
      element.style.opacity = '0';
      element.style.zIndex = '0';
      setTimeout(() => {
        element.style.display = 'none';
      }, timeToHide * 3);
    });
  }, timeToHide);
}

export default hideArrayOfElem;
