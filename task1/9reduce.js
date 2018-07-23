const videos = [{
    "id": 65432445,
    "title": "The Chamber"
    }, {
    "id": 675465,
    "title": "Fracture"
    }, {
    "id": 70111470,
    "title": "Die Hard"
    }, {
    "id": 654356453,
    "title": "Bad Boys"
}];

let initialValue = {};
let answer = videos.reduce(function(a, b) { //Giving an empty object like initialValue and creating fields for 
    initialValue[b['id']] = b['title'];     //him
    return initialValue;
}, initialValue);

console.log(answer);