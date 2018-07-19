loadVideosAsync()
  .then(function(videos) {
    return loadMetaAsync()
  })
  .then(function(meta) {
    return DoSomething(meta);
  })
  .catch(function(e) {console.log(e)});
/*---------------------------------------
       The code below - for testing
-----------------------------------------*/
async function loadVideosAsync() {
  let temp;
  return temp = await func();
}

function func() {
  console.log('1');
  return 1;
}

function loadMetaAsync() {
  console.log('2');
  return 2;
}

function DoSomething(meta) {
  console.log('3');
}