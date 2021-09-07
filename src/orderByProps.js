export default (obj, rules) => {
  const keys = Object.keys(obj);
  const max = keys.length;
  keys.sort((a, b) => {
    let ia = rules.indexOf(a);
    let ib = rules.indexOf(b);
    if (ia === -1) {
      ia = max;
    }
    if (ib === -1) {
      ib = max;
    }
    if (ia === ib) {
      if (a > b) {
        return 1;
      }
      return -1;
    }
    return ia - ib;
  });
  const sorted = keys.map((key) => ({
    key,
    value: obj[key],
  }));
  return sorted;
};
