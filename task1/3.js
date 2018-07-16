Array.prototype.filter = function(predicateFunction) {
  var t = Object(this);
  var len = t.length >>> 0;
  if (typeof predicateFunction !== 'function') {
    throw new TypeError();
  }

  var res = [];
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  for (var i = 0; i < len; i++) {
    if (i in t) {
      var val = t[i];
      if (predicateFunction.call(thisArg, val, i, t)) {
        res.push(val);
      }
    }
  }

  return res;  
};

console.log(JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === '[3]')