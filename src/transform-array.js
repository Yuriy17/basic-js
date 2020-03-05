module.exports = function transform(arr) {
  if (Array.isArray(arr) && arr.length) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "--discard-next") {
        if (i >= arr.length) throw Error;
        arr.splice(i, 2);
        i -= 2;
      } else if (arr[i] === "--discard-next") {
        if (i === 0) throw Error;
        arr.splice(i - 1, 2);
        i -= 2;
      } else if (arr[i] === "--double-next") {
        if (i >= arr.length) throw Error;
        arr.splice(i, 1, arr[i + 1]);
      } else if (arr[i] === "--double-prev") {
        if (i === 0) throw Error;
        arr.splice(i, 1, arr[i - 1]);
      }
    }
    return arr;
  } else {
    throw Error;
  }
};
