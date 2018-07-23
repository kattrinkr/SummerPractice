const MIN = 1; //Minimal integer value of interval
const MAX = 10; //Max integer value of interval
let arrayOfPromiseLinks = [];


function generatorOfFunctions(countOfFunctions) {
  try {
    let executionTime = 1; //Default value of execution time
    let func;
    for (let i = 0; i < countOfFunctions; i++) {
      let seconds = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN; //How nuch seconds function will be execute
      if (seconds > executionTime) { //Find the biggest interval
        executionTime = seconds;
      }
      func = newFunction(i+1, seconds); //Func will have only link to promise
      arrayOfPromiseLinks.push(func);
    }
    return Promise.all(arrayOfPromiseLinks); //After creating all functions, start to execute promises
  } catch(e) {
      return console.log(e);
    }
}

function newFunction(number, seconds) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Number of this function: ${number}. You see after ${seconds} seconds`);
      resolve();
    }, seconds * 1000);
     
  })
}

let countOfFunctions = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN; //Integer from [min,max]
generatorOfFunctions(countOfFunctions).then(listOfSeconds => {  //Start to generate functions
  console.log(`Congratulations! Execution time is: ${listOfSeconds.reduce(function(memo, item) {
    if (memo > item) return memo;
    else return item
  })
 } seconds.`); 
}); 
