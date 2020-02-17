module.exports = function countCats(matrix) {
  let cats = 0;
  if (matrix.length !== 0) {
    for (let i = 0; i < matrix.length; i++) {
      for (let y = 0; y < matrix[i].length; y++) {
        if (matrix[i][y] === "^^") {
          cats += 1;
        }
      }
    }
  }
  return cats;
  // remove line with error and write your code here
};
