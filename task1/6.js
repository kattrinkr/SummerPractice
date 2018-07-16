Array.prototype.reduce = function(combiner, initialValue) {
    var arr = this,
    arrLen = arr.length,
    k = 0,
    accumulator = initialValue === undefined ? undefined : initialValue;

for(;k < arrLen;k++) {
    if (accumulator !== undefined && k in arr) {
        accumulator = combiner.call(undefined, accumulator, arr[k], k, arr);
    } else {
        accumulator = arr[k];
    }
}
return accumulator;
}
console.log([1,2,3].reduce(function(memo, item) { return memo + item; }) === 6);
console.log([1,2,3].reduce(function(memo, item) { return memo + item; }, 10) === 16);