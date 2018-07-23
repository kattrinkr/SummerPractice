## Task 1
> ### 1. Map polyfill
> Write your implementation of the map function.<br/>
>[Look here](https://jsbin.com/jucizop/edit?js,console)
> 
> ### 2. Map
> Bring the array to such form: { id: …, title: … }.<br/>
>[Look here](https://jsbin.com/winivof/edit?js,console)
> 
> ### 3. Filter polyfill
> Write your implementation of the filter function.<br/>
>[Look here](https://jsbin.com/sozipu/edit?js,console)
> 
> ### 4. Filter/Map
> Output an array with id's for videos with a rating = 5.<br/>
>[Look here](https://jsbin.com/vohuguz/edit?js,console)
> 
> ### 5. Filter/Map/Concat
> Bring the data to the specified form: boxarts convert to boxart where value - is a link to a video size of 150x200.<br/>
> Expecting this output... <br/>
> [{'id': 70111470, 'title': 'Die Hard', 'boxart':'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg'}, ...];<br/>
>[Look here](https://jsbin.com/kotixec/edit?js,console)
> 
> ### 6. Reduce polyfill
> Write your implementation of the reduce function.<br/>
>[Look here](https://jsbin.com/tosibiy/edit?js,console)
> 
> ### 7. Reduce
> Get max value from array.<br/>
>[Look here](https://jsbin.com/hukexibuye/edit?js,console)
> 
> ### 8. Map/Reduce
> Derive URL with the largest area.<br/>
>[Look here](https://jsbin.com/mivepil/edit?js,console)
> 
> ### 9. Reduce
> Convert the array to an object using the reduce function.
> Expecting this output...
>  {'65432445': 'The Chamber', ... }<br/>
>[Look here](https://jsbin.com/zujuwusalo/edit?js,console)

## Task 2 
> ```js
> var Robot = function (name) {
>   this.name = name;
> }
> function add (op1, op2) {
>   this.name = this.name || 'Human';
>   return this.name + ' can count to ' + (op1 + op2);
> }
> var voltron = new Robot('Voltron');
> ```
> You need to console.log:
> * 'Human can count to 1' //0 + 1
> * 'Voltron can count to 3' //1 + 2
> * 'Voltron can count to 50' //20 + 30
> * 'Voltron can count to drinkingbeer'<br/>
>[Look here](https://jsbin.com/wofinuh/edit?js,console)

## Task 3
> ### 1. SetTimeout/clearTimeout
> Click on the button, after 5 seconds user can see 'Hello, World!'. If the button was pressed for those 5 seconds, timer start again.<br/>
>[Look here](https://jsbin.com/bufojoy/edit?html,js,console,output)
> 
> ### 2. SetInterval/clearInterval
> Click on the button, then every 3 seconds user will see 'You are welcome!'. If the button was pressed again, interval must stop.<br/>
>[Look here](https://jsbin.com/qedegos/edit?html,js,console,output)
> 
> ### 3. Recursive SetTimeout
> Click on the button. Program generate some integer value from 1 to 4, this value - count of seconds, through them user will see message 'seconds + ${seconds}'.<br/>
>[Look here](https://jsbin.com/licexa/edit?html,js,console,output)
> 
> ### 4. Events
> After a second when user stop to type, program must output in the console textvalue of textarea.<br/>
>[Look here](https://jsbin.com/lexobo/edit?html,js,console,output)

## Task 4
> ### 1. Promise
> The function should output "hi" after 2 seconds.<br/>
>[Look here](https://jsbin.com/yagemox/edit?js,console)
> 
> ### 2. Promise
> ```js
> new Promise(function(resolve, reject) {
>   // должно через 3 секунды передать дальше значение - 10
> }).then((result) => {
>   // должно вывести в console значение полученное и передать дальше увеличенное на 2
> }).then((result) => {
>   // должно вывести в console значение полученное и передать дальше увеличенное на 2 через 2 секунды
> }).then((result) => {
>   // должно вывести конечный результат
> });
> ```
>[Look here](https://jsbin.com/magemu/edit?js,console)
> 
> ### 3. Catch error in Promise
> Need to write Promise, which prints console.log 'Execution time is less than 2 seconds', if it less.
> And console.error if it's more. Time must be determined randomly. Use an internal error handler for Promise.<br/>
>[Look here](https://jsbin.com/liritoj/edit?js,console)
> 
> ### 4. Async/await
> The program generate 1 - 10 asynchronous functions, which output to the console function number and after how many
> time (also determined randomly from 1 to 10) console.log worked. All these functions must work in parallel. After
> end of these functions user need to see congratulation and execution time of program (the maximum value of 10).<br/>
>[Look here](https://jsbin.com/yaqamap/edit?js,console)

## Task 5
> ### 1. Find and fix an error
> ```js
> loadVideosAsync().then(function(videos) {
>   loadMetaAsync().then(function(meta) {
>     DoSomething(videos, meta);
>   });
> });
> ```
>[Look here](https://jsbin.com/voquqit/edit?js,console)
> 
> ### 2. Find and fix an error
> ```js
> function anAsyncCall() {
>   var promise = doSomethingAsync();
>   promise.then(function() {
>     somethingComplicated();
>   });
>   return promise;
> };
> ```
>[Look here](https://jsbin.com/jurajij/edit?js,console)
> 
> ### 3. Find and fix an error
> ```js
> db.getAllDocs().then(function (result) {
>   result.rows.forEach(function (row) {
>     db.remove(row.doc);
>   });
> }).then(function () {
>   // All docs must be removed!
> });
> ```
>[Look here](https://jsbin.com/zetaxeh/edit?js,console)
> 
> ### 4. Find and fix an error
> ```js
> doAsync().then(function () {
>   throw new Error('nope');
> }, function (err) {
>   // I didn't catch your error! :(
> });
> ```
>[Look here](https://jsbin.com/zijafef/edit?js,console)
