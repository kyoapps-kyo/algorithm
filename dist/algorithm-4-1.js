"use strict";
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
console.log(sum([1, 2, 3, 4, 5]));
