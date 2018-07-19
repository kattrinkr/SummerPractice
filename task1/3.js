Array.prototype.filter = function(predicateFunction) {
  let array = [];
  let length = this.length; //Count of params
  if (typeof predicateFunction !== 'function') {
    throw new TypeError(predicateFunction + ' is not a function');
  }
  for (var i = 0; i < length; i++) {
    let filterValue = predicateFunction(this[i], i);
      if (filterValue) {
        array.push(this[i]);
      }
  }
  return array;  
};

console.log(JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === '[3]');