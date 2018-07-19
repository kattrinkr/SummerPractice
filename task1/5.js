const movieLists = [{
  name: "Instant Queue",
  videos : [
     {"id": 70111470,
      "title": "Die Hard",
      "boxarts": [{
          width: 150,
          height: 200,
          url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
          }, {
          width: 200,
          height: 200,
          url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"
      }],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
     }, {
      "id": 654356453,
      "title": "Bad Boys",
      "boxarts": [{
          width: 200,
          height: 200,
          url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
          }, {
          width: 150,
          height: 200,
          url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"
      }],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id: 432534, time: 65876586 }]
      }]
      }, {
  name: "New Releases",
  videos: [{
      "id": 65432445,
      "title": "The Chamber",
      "boxarts": [{
          width: 150,
          height: 200,
          url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"
          }, {
          width: 200,
          height: 200,
          url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"
      }],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
      }, {
      "id": 675465,
      "title": "Fracture",
      "boxarts": [{
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
      }],
      "url": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id: 432534, time: 65876586 }]
   }]
}];

let links = [];
let a = false;
let b = false;

let answer = movieLists.map(function(item) { 
return mapped(item);
}).concat(movieLists.map(function(item) { //Concating 2 arrays by 'modify' call
return mapped(item);
}));
console.log(answer);

function modify(temp) {
let obj = {};;
for (let i = 0; i < temp.length; i++) {
  let link = temp[i].boxarts.filter(item => (item.width === 150 && item.height === 200)); //To find objects with params 150x200
  links.push(link[0].url); //Array with URL links
  obj.id = temp[i].id; //Creating 'id' field of new object
  obj.title = temp[i].title; //Creating 'title' field of new object
  obj.boxart = links.pop(); //Creating 'boxart' field of new object
  if (a === false && b === false) { //Some magic to return a necessary object :(
    a = true;
    return obj;
  }
}
if (a === true){ //Some magic to return a necessary object :(
  if (b === true) {
    a = false;
    b = false;
  } else b = true;
  return obj; 
}
}

function mapped(item) {
for (let key in item) {
  if (typeof item[key] === 'object') {
    let temp = item[key];
    return modify(temp);
  }
}
}