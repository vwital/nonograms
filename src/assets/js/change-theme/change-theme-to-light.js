function changeThemeToLight() {
  const all = document.querySelectorAll('*');
  const block = document.querySelectorAll('.block');
  all.forEach((el) => {
    const elem = el;
    elem.classList.remove('dark');
  });
  if (block) {
    block.forEach((el) => {
      if (
        !el.classList.contains('crossed')
        && el.classList.contains('shaded-light')
      ) {
        el.classList.remove('shaded-light');
        el.classList.add('shaded');
      }
    });
  }
}

export default changeThemeToLight;
