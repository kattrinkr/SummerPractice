const ratings = [2,3,1,4,5];
let answer = ratings.reduce(function(a, b) {
    if (a > b) return a;
    else return b
  });

console.log(answer);