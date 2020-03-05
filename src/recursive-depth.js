
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let endDepth = 1;
    for (let value of arr) {
      if (Array.isArray(value)) {
        let depthCount = 1;
        depthCount = depthCount + this.calculateDepth(value);
        if (depthCount > endDepth) {
          endDepth = depthCount;
        }
      }
    }
    return endDepth;
  }
};