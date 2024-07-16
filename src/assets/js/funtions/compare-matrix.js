function compareMatrix(m1, m2) {
  return JSON.stringify(m1.flat(2)) === JSON.stringify(m2.flat(2));
}

export default compareMatrix;
