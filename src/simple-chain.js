const chainMaker = {
  newChain: [],

  getLength() {
    return this.newChain.length;
  },
  addLink(value) {
    this.newChain.push(value);
    return this;
  },
  removeLink(pos) {
    if (this.newChain[pos - 1] == undefined) {
      this.newChain = [];
      throw new Error("Error");
    }
    this.newChain.splice(pos - 1, 1);
    return this;
  },
  reverseChain() {
    this.newChain.reverse();
    return this;
  },
  finishChain() {
    let str = "";
    this.newChain.forEach((el, i) => {
      if (i === 0) {
        str += "( ";
      }
      str += el + " )~~( ";
      if (i === this.newChain.length - 1) {
        str = str.substring(0, str.length - 4);
      }
    });
    this.newChain = [];
    return str;
  }
};
module.exports = chainMaker;