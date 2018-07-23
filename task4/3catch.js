const MIN = 0;
const MAX = 10;

function delay() {
return new Promise((resolve, reject) => {
  let seconds = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN; //Integer from [min,max]
  if (seconds <= 2) {
      resolve(seconds);
  } else {
    reject(`Execution time is more than 2 seconds (${seconds})`);
  }
});
}

delay().then( result => {
        setTimeout((result) => {
          console.log('Execution time is less than 2 seconds'); // result - argument of resolve
        }, result * 1000);    
      }).catch(error => {
           console.error(error); // error - argument of reject
      });