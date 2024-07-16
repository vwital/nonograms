function createField(numOfBlocks, fieldClass, blockClasses) {
  const blockField = document.querySelector('#block-field');
  blockField.classList = '';
  blockField.innerHTML = '';
  blockField.classList.add(fieldClass);
  for (let i = 0; i < numOfBlocks; i += 1) {
    const block = document.createElement('span');
    blockClasses.forEach((el) => {
      block.classList.add(el);
    });
    blockField.append(block);
  }
}

export default createField;
