module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let res = "";
  members.forEach(el => {
    if (typeof el === "string") {
      el = el.replace(/\s*/g, "");
      res += el[0].toUpperCase();
    }
  });
  return res
    .split("")
    .sort()
    .join("");
  // remove line with error and write your code here
};
