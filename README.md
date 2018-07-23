## Task 1
> ### 1. Map polyfill
> Write your implementation of the map function.
> 
> ### 2. Map
> Bring the array to such form: { id: …, title: … }.
> 
> ### 3. Filter polyfill
> Write your implementation of the filter function.
> 
> ### 4. Filter/Map
> Output an array with id's for videos with a rating = 5.
> 
> ### 5. Filter/Map/Concat
> Bring the data to the specified form: boxarts convert to boxart where value - is a link to a video size of 150x200.<br/>
> Expecting this output... <br/>
> [{'id': 70111470, 'title': 'Die Hard', 'boxart':'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg'}, ...];
> 
> ### 6. Reduce polyfill
> Write your implementation of the reduce function.
> 
> ### 7. Reduce
> Get max value from array.
> 
> ### 8. Map/Reduce
> Derive URL with the largest area.
> 
> ### 9. Reduce
> Convert the array to an object using the reduce function.
> Expecting this output...
>  {'65432445': 'The Chamber', ... }

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
> * 'Voltron can count to drinkingbeer'

## Task 3
> ### 1. SetTimeout/clearTimeout
> Click on the button, after 5 seconds user can see 'Hello, World!'. If the button was pressed for those 5 seconds, timer start again.
> 
> ### 2. SetInterval/clearInterval
> Click on the button, then every 3 seconds user will see 'You are welcome!'. If the button was pressed again, interval must stop.
> 
> ### 3. Recursive SetTimeout
> Click on the button. Program generate some integer value from 1 to 4, this value - count of seconds, through them user will see message 'seconds + ${seconds}'.
> 
> ### 4. Events
> After a second when user stop to type, program must output in the console textvalue of textarea.

## Task 4
> ### 1. Promise
> The function should output "hi" after 2 seconds.
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
> 
> ### 3. Catch error in Promise
> Need to write Promise, which prints console.log 'Execution time is less than 2 seconds', if it less.
> And console.error if it's more. Time must be determined randomly. Use an internal error handler for Promise.
> 
> ### 4. Async/await
> The program generate 1 - 10 asynchronous functions, which output to the console function number and after how many
> time (also determined randomly from 1 to 10) console.log worked. All these functions must work in parallel. After
> end of these functions user need to see congratulation and execution time of program (the maximum value of 10).

## Task 5
> ### 1. Find and fix an error
> ```js
> loadVideosAsync().then(function(videos) {
>   loadMetaAsync().then(function(meta) {
>     DoSomething(videos, meta);
>   });
> });
> ```
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
> 
> ### 4. Find and fix an error
> ```js
> doAsync().then(function () {
>   throw new Error('nope');
> }, function (err) {
>   // I didn't catch your error! :(
> });
> ```
