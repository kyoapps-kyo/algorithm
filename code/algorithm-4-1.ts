// 用递归对数组求和
const sum = (arr: Array<number>): number => {
  let x: number = arr[0];
  let result: number;
  arr.splice(0, 1);
  if (arr.length == 0) return x;
  else result = x + sum(arr);
  return result;
};

console.log(sum([1, 2, 3, 4, 5]));

export { sum };
