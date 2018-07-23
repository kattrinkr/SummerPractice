const BUT = document.querySelector('#but');
let id;

BUT.addEventListener("click", (event) => { 
    if (id) { //Turning off the interval
      clearInterval(id);
      id = 0;
    } else {
      id = setInterval(function() { 
        console.log("You are welcome!");
      }, 3000); 
    }
});
