// 通过递归实现二分查找
// 基线条件：数组只剩一个元素，如果等于目标返回
// 递归条件：把数组分成两半，将其中一半丢掉，并对另一半执行查找

const search = (arr: Array<number>, target: number): number => {
  if (arr.length == 0) return -1;
  let mid = parseInt(arr.length / 2 + "");
  if (arr[mid] == target) return mid;
  if (arr[mid] > target) {
    arr.splice(mid);
    mid = mid - search(arr, target);
    return mid;
  } else {
    mid = mid + search(arr.splice(0, mid + 1), target);
    return mid;
  }
};

let test: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(search(test, 10));

export { search };
