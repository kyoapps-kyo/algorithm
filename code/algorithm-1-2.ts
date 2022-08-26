// 二分查找

const search = (nums: Array<number>, target: number): number => {
  let low: number = 0;
  let heigh: number = nums.length - 1;
  let mid: number = 0;
  let guess: number = 0;
  while (low <= heigh) {
    mid = parseInt((low + heigh) / 2 + "");
    guess = nums[mid];
    if (guess == target) return mid;
    nums[mid] < target ? (low = mid + 1) : (heigh = mid - 1);
  }
  return -1;
};

let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let target: number = 9;

console.log(search(nums, target));

export { search };
