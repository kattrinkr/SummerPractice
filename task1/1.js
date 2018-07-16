Array.prototype.map = function(callback) {
  var T, A, k;
  if (this == null) {
    throw new TypeError('this is null or not defined');
  }
  //console.log('this  '+this);
  var O = Object(this);
  //console.log('Object(this)  '+O);
  var len = O.length >>> 0;
  //console.log('O.length >>> 0  '+len);
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  if (arguments.length > 1) {
    T = arguments[1];
  }
  //console.log('arguments[1]  '+T);
  A = new Array(len);
  //console.log('A'+A);
  k = 0;
  while (k < len) {
    var kValue, mappedValue;
    if (k in O) {
      kValue = O[k];
      mappedValue = callback.call(T, kValue, k, O);
      //console.log('mappedValue  '+mappedValue);
      A[k] = mappedValue;
    }
    k++;
  }
  console.log(A);
  return A;
};
//let answer = [1,2,3].map(function(x) { return x + 1; });
console.log(JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]');