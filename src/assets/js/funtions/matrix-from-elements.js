function matrixFromElements(elements, size, shadeClass) {
  const matrix = [];
  let row = [];
  elements.forEach((el) => {
    if (el.classList.contains(shadeClass)) {
      row.push(1);
    } else {
      row.push(0);
    }
    if (row.length === size) {
      matrix.push(row);
      row = [];
    }
  });
  return matrix;
}

export default matrixFromElements;
