
module.exports = (a, b) => {
  let x = 0;
  let y = 0;

  if (a) {
    x = 1;
  } else {
    x = 2;
  }

  if (b) {
    y = 1;
  } else {
    y = 2;
  }

  return [x, y];
};
