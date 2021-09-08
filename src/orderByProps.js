export default (obj, rules) => {
  const props = [];
  // eslint-disable-next-line guard-for-in
  for (const key in obj) {
    props.push({
      key,
      value: obj[key],
    });
  }
  const max = props.length;
  props.sort(({ key: a }, { key: b }) => {
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
  return props;
};
