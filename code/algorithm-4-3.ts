// 找出列表中最大的数字
const maxNumber = (arr: Array<number>): number => {
  if (arr.length == 2) return arr[0] > arr[1] ? arr[0] : arr[1];
  let max = arr.splice(0, 1)[0];
  if (max > maxNumber(arr)) {
    arr.splice(0, 1, max);
    return max;
  } else {
    return maxNumber(arr);
  }
};

let array: Array<number> = [1, 2, 9, 1, 6, 2];

console.log(array);
console.log(maxNumber(array));
console.log(array);

export { maxNumber };
