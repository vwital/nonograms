function elementsFromMatrix(matrix) {
  console.log(matrix);
  const elements = [];
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      const block = document.createElement('span');
      block.classList.add('block');
      if (matrix[i][j] === 1) {
        block.classList.add('shaded');
      } else {
        block.classList.add('crossed');
      }
      elements.push(block);
    }
  }
  return elements;
}

export default elementsFromMatrix;
