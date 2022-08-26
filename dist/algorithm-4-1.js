"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
const sum = (arr) => {
    let x = arr[0];
    let result;
    arr.splice(0, 1);
    if (arr.length == 0)
        return x;
    else
        result = x + sum(arr);
    return result;
};
exports.sum = sum;
console.log(sum([1, 2, 3, 4, 5]));
