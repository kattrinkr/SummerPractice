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

let temp = boxarts.map(item => item.width*item.height); //We will get array with area of boxart
//console.log(temp);

let answerArea = temp.reduce(function(a, b) { //We will get the biggest area from array
    if (a > b) return a;
    else return b
});
//console.log(answerArea);

let answer = boxarts.filter(item => item.width*item.height >= answerArea); //Return the object with the biggest area
//console.log(answer);

let answerURL = answer[0].url; //URL of the object with the biggest area
console.log(answerURL);