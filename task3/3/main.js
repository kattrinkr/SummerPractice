const but = document.querySelector('#but');
let a = false; //Necessary to on/off Interval 
let min = 1;
let max = 4;

but.addEventListener("click", (event) => {    
    let seconds = Math.floor(Math.random() * (max - min + 1)) + min; //Integer from [1,4]
    let id = setInterval(function() { 
        console.log("You can see message after " + seconds + " seconds");
        but.setAttribute('click',true);
    }, seconds*1000); 
  
    if ((id-1) && (a === false)) { //Turn off the previous and current intervals 
        clearInterval(id-1);
        clearInterval(id);
        a = true;
    } else if (a === true) { //Help us turn off the interval by the next click
      a = false;
    }
});