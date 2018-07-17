Array.prototype.filter = function(predicateFunction) {
  let Obj = Object(this); //Creating object with array params
  let len = Obj.length; //Count of params
  if (typeof predicateFunction !== 'function') {
    throw new TypeError();
  }
  let Arr = [];
  let thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  for (var i = 0; i < len; i++) {
    if (i in Obj) {
      let iValue = Obj[i];
      if (predicateFunction.apply(thisArg, [iValue, i, Obj])) {
        Arr.push(iValue);
      }
    }
  }
  return Arr;  
};

console.log(JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === '[3]');