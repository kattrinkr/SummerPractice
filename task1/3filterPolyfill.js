Array.prototype.filter = function(predicateFunction) {
  let array = [];
  if (typeof predicateFunction !== 'function') {
    throw new TypeError(predicateFunction + ' is not a function');
  }
  for (let i in this) {
    let filterValue = predicateFunction(this[i], i);
      if (filterValue) {
        array.push(this[i]);
      }
  }
  return array;  
};

console.log(JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === '[3]');