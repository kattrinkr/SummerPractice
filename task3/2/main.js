const but = document.querySelector('#but');
let a = false; //Necessary to turning on/off the Interval

but.addEventListener("click", (event) => { 
    let id = setInterval(function() { 
        console.log("You are welcome!");
        but.setAttribute('click',true);
    }, 3000); 
  
    if ((id-1) && (a === false)) { //Turn off the previous and current intervals
        clearInterval(id-1);
        clearInterval(id);
        a = true;
    } else if (a === true) { //Help us turn off the interval by the next click
      a = false;
    }
});