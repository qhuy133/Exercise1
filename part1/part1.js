let test1 = (arr = []) => {
  let arrLength = arr.map(e => e.length);
  let counts = arrLength.reduce((obj, k) => {
    obj[k] = (obj[k] || 0) + 1;
    return obj;
  }, {});
  let maxCount = Math.max(...Object.values(counts));
  let mostFrequent = Object.keys(counts).find(key => counts[key] === maxCount);

  const output = arr.filter(e => e.length == mostFrequent);
  return output
};

let test2 = (arr1 = []) => {
  let arr2 = arr1.sort((a, b) => b - a);
  let result = arr2[0] + arr2[1];
  return result;
};

const value = {
  test1,
  test2,
};

module.exports = value;
