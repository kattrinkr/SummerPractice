let min = 1; //Minimal integer value of interval
let max = 10; //Max integer value of interval
let arrayOfPromiseLinks = [];


async function generatorOfFunctions(countOfFunctions) {
  try {
    let executionTime = 1; //Default value of execution time
    let func;
    for (let i = 0; i < countOfFunctions; i++) {
      let seconds = Math.floor(Math.random() * (max - min + 1)) + min; //How nuch seconds function will be execute
      if (seconds > executionTime) { //Find the biggest interval
        executionTime = seconds;
      }
      func = newFunction(i+1, seconds); //Func will have only link to promise
      arrayOfPromiseLinks.push(func);
    }
    await Promise.all(arrayOfPromiseLinks); //After creating all functions, start to execute promises
    return executionTime;
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

let countOfFunctions = Math.floor(Math.random() * (max - min + 1)) + min; //Integer from [min,max]
generatorOfFunctions(countOfFunctions).then(executionTime => {  //Start to generate functions
  console.log(`Congratulations! Execution time is: ${executionTime}  seconds.`); 
}); 
