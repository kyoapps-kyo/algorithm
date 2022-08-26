"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const search = (nums, target) => {
    let low = 0;
    let heigh = nums.length - 1;
    let mid = 0;
    let guess = 0;
    while (low <= heigh) {
        mid = parseInt((low + heigh) / 2 + "");
        guess = nums[mid];
        if (guess == target)
            return mid;
        nums[mid] < target ? (low = mid + 1) : (heigh = mid - 1);
    }
    return -1;
};
exports.search = search;
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let target = 9;
console.log(search(nums, target));
