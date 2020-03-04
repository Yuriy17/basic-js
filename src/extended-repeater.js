module.exports = function repeater(str, options) {
  let res = "";
  if (!options.repeatTimes) options.repeatTimes = 1;
  /* if (typeof str === "boolean") str = str.toString(); */
  for (let i = 0; i < options.repeatTimes; i++) {
    res += str;
    /*     options.addition =
      typeof options.addition === "boolean"
        ? options.addition.toString()
        : options.addition; */
    if (options.addition) {
      if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
      for (let y = 0; y < options.additionRepeatTimes; y++) {
        res += options.addition;
        if (y !== options.additionRepeatTimes - 1)
          res += options.additionSeparator;
      }
    }
    if (!options.separator) options.separator = "+";
    if (i !== options.repeatTimes - 1) res += options.separator;
  }
  return res; 
};
