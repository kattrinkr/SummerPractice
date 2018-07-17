Array.prototype.reduce = function(combiner, initialValue) {
    let Arr = this;
    let len = Arr.length;
    accumulator = initialValue === undefined ? undefined : initialValue; //Check of having initialValue
  
    for(let i = 0; i < len; i++) {
      if (accumulator !== undefined && i in Arr) {
          accumulator = combiner.apply(undefined, [accumulator, Arr[i], i, Arr]);
      } else {
          accumulator = Arr[i]; //The first value will be here (will be initial in the next step)
        }
    }
    return accumulator;
  }
  
  console.log([1,2,3].reduce(function(memo, item) { return memo + item; }) === 6);
  console.log([1,2,3].reduce(function(memo, item) { return memo + item; }, 10) === 16);