var movieLists = [{
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
let answer = movieLists.map(function(x) { return modify(x)});
console.log(answer);

function modify(o) {
    //console.log(o);
    let obj = {};
    for (let key in o) {
        if (typeof o[key] === 'object') {
            let temp = o[key];
            //console.log(temp.length);
            
            for (let i = 0; i < temp.length; i++) {
                //console.log(temp[1]);
                let link = temp[i].boxarts.filter(x => (x.width === 150 && x.height === 200));
                links.push(link[0].url);
                for (let k in temp[i]){
                  if (k === 'id') {
                    obj[k] = temp[i].id;
                  }
                  if (k === 'title') {
                    obj[k] = temp[i].title;
                  } 
                }
                obj['boxart'] = links.pop();
                //console.log(obj);
            }
            return obj;
        }
    }
    
}