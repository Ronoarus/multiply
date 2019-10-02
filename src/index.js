module.exports = function multiply(first, second) {
  let a = first
    .split("")
    .reverse()
    .join("");
  let b = second
    .split("")
    .reverse()
    .join("");
  let result = "";
  let arr = [];
  let temp = 0;
  let tempMul = 0;

  for (let i = 0; i < b.length; i++) {
    arr[i] = "";
    arr[i] = arr[i].padStart(i, "0");
    for (let j = 0; j < a.length; j++) {
      tempMul = a[j] * b[i];
      tempMul += temp;
      temp = Math.floor(tempMul / 10);
      arr[i] += tempMul % 10;
    }
    arr[i] += temp;
    temp = 0;
    for (let k = 0; k < b.length - i - 1; k++) arr[i] += "0";
  }

  for (let j = 0; j < arr[0].length; j++) {
    tempMul = 0;
    for (let i = 0; i < b.length; i++) {
      tempMul += parseInt(arr[i][j], 10);
    }
    tempMul += temp;
    temp = Math.floor(tempMul / 10);
    result += tempMul % 10;
  }

  result = result
    .split("")
    .reverse()
    .join("");

  if (result[0] == "0") {
    result = result.slice(1);
  }

  return result;
};
