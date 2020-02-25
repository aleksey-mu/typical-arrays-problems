
exports.min = function min (array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }
  let min = array[0];
  for (num of array) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

exports.max = function max (array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }
  let max = array[0];
  for (num of array) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }
  let sum = 0;
  for (num of array) {
    sum += num;
  }
  return sum / array.length;
}
