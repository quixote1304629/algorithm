function buildRandomArr(N = 10) {
  const arr = [];
  for (let i = 0; i < N; i++) {
    const num = Math.floor(Math.random() * N + 1);
    arr.push(num);
  }
  return arr;
}

module.exports = {
  buildRandomArr,
};
