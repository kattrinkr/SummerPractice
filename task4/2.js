new Promise(function(resolve, reject) {
    setTimeout(() => { //After 3 sec return 10
        resolve (10);
    }, 3000);
}).then((result) => { //Return result+2
    console.log(result);
    return result + 2;
}).then((result) => { //Return result+2 after 2 seconds, but without new promise it will return 'undefined'
    console.log(result);
    new Promise(function(resolve, reject) {
        setTimeout(() => {
          resolve (result + 2);
        }, 2000);
    }).then((result) => {
        console.log(result); //Type result
    });
});