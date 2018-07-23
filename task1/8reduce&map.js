const boxarts = [{
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
    }, {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
    }, {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
    }, {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
}];

let answer = boxarts.reduce(function(memo, item) {
    let result;
    if (!memo) {
      result = item;
    } else if ((memo.width * memo.height) > (item.width * item.height)) {
      result = memo.url;
    } else {
        result = item.url
      }
    return result;
});

console.log(answer);