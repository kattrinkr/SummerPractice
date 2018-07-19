let min = 0;
let max = 10;

let promise = new Promise((resolve, reject) => {
  let seconds = Math.floor(Math.random() * (max - min + 1)) + min; //Integer from [min,max]
  setTimeout(() => {
    if (seconds <= 2) {
      resolve('Execution time is less than 2 seconds');
    } else reject ('Execution time is more than 2 seconds ('+seconds+')');
  }, seconds * 1000);

});

promise
  .then(
    result => {
      console.log(result); // result - argument of resolve
    },
    error => {
      console.error(error); // error - argument of reject
    }
  );