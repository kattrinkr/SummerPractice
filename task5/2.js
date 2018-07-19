function anAsyncCall() {
  let promise;
  return promise = new Promise((resolve, reject) => {
    doSomethingAsync();
    resolve();
  });
}

/*---------------------------------------
       The code below - for testing
-----------------------------------------*/

anAsyncCall().then(somethingComplicated);

function doSomethingAsync() {
  console.log('1');
  return 2;
}

function somethingComplicated() {
  console.log('2');
}