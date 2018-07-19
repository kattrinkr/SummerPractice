Array.prototype.map = function(projectionFunction) {
  let array = [];
  let length = this.length; //Count of params
  
  if (typeof projectionFunction !== 'function') {
    throw new TypeError(projectionFunction + ' is not a function');
  }
  
  for (let i = 0; i < length; i++) {
    let mappedValue= projectionFunction(this[i], i);
    array.push(mappedValue);
  }
  return array;
};

console.log(JSON.stringify([1,2,3].map(function(item) { return item + 1; })) === '[2,3,4]');