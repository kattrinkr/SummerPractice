function delay(duration){
    let promise;
    return promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("result");
      }, duration);
    })
  }
  function logHi(){
    console.log('hi');
  }
  
  delay(2000).then(logHi);