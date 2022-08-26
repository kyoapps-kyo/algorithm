"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const search = (arr, target) => {
    if (arr.length == 0)
        return -1;
    let mid = parseInt(arr.length / 2 + "");
    if (arr[mid] == target)
        return mid;
    if (arr[mid] > target) {
        arr.splice(mid);
        mid = mid - search(arr, target);
        return mid;
    }
    else {
        mid = mid + search(arr.splice(0, mid + 1), target);
        return mid;
    }
};
exports.search = search;
let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(search(test, 10));
