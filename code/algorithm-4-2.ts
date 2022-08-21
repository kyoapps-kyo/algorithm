// 编写一个递归函数来计算列表包含的元素数
const count = (arr: Array<number>): number => {
  let total: number;
  if (arr.length == 0) return 0;
  arr.splice(0, 1);
  total = 1 + count(arr);
  return total;
};
let arr: Array<number> = [1, 2, 3, 4, 5, 6, 3, 21, 41, 23, 1, 24, 12, 312, 3];
console.log(arr.length);

console.log(count(arr));
