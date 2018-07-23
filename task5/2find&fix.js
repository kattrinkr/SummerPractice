function anAsyncCall() {
  return new Promise((resolve, reject) => {
    doSomethingAsync().then(resolve);
  });
}