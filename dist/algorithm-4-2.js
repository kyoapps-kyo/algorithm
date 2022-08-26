"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.count = void 0;
const count = (arr) => {
    let total;
    if (arr.length == 0)
        return 0;
    arr.splice(0, 1);
    total = 1 + count(arr);
    return total;
};
exports.count = count;
let arr = [1, 2, 3, 4, 5, 6, 3, 21, 41, 23, 1, 24, 12, 312, 3];
console.log(arr.length);
console.log(count(arr));
