function changeThemeToDark() {
  const all = document.querySelectorAll('*');
  const block = document.querySelectorAll('.block');
  all.forEach((el) => {
    const elem = el;
    elem.classList.add('dark');
  });
  if (block) {
    block.forEach((el) => {
      if (
        !el.classList.contains('crossed')
        && el.classList.contains('shaded')
      ) {
        el.classList.add('shaded-light');
      }
    });
  }
}

export default changeThemeToDark;
