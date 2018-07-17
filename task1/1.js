Array.prototype.map = function(projectionFunction) {
  let T, Arr;
  if (this == null) {
    throw new TypeError('this is null or not defined');
  }
  let Obj = Object(this); //Creating object with array params
  let len = Obj.length; //Count of params
  if (typeof projectionFunction !== 'function') {
    throw new TypeError(projectionFunction + ' is not a function');
  }
  if (arguments.length > 1) {
    T = arguments[1]; //If there is some argument
  }
  Arr = new Array(len); //We will save here modified array
  for (let i = 0; i < len; i++) {
    var iValue, mappedValue;
    if (i in Obj) {
      iValue = Obj[i];
      mappedValue = projectionFunction.apply(T, [iValue, i, Obj]);
      Arr[i] = mappedValue;
    }
  }
  console.log(Arr);
  return Arr;
};

console.log(JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]');