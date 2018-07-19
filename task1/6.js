Array.prototype.reduce = function(combiner, initialValue) {
    let length = this.length;
    accumulator = initialValue === undefined ? undefined : initialValue; //Check of having initialValue
  
    for(let i = 0; i < length; i++) {
      if (accumulator !== undefined) {
          accumulator = combiner(accumulator, this[i]);
      } else {
          accumulator = this[i]; //The first value will be here (will be initial in the next step)
        }
    }
    return accumulator;
  }
  
  console.log([1,2,3].reduce(function(memo, item) { return memo + item; }) === 6);
  console.log([1,2,3].reduce(function(memo, item) { return memo + item; }, 10) === 16);