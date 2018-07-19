doAsync().then(function () {
  return SomeFunction();
}).catch(function (err) {
  console.log(err);// catch error
});

/*---------------------------------------
       The code below - for testing
-----------------------------------------*/

async function doAsync() {
  console.log('1');
}

function SomeFunction() {
  console.log('2');
}