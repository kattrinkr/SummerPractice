const but = document.querySelector('#but'); 

but.addEventListener("click", (event) => { 
    let id = setTimeout(function() { 
        console.log("Hello World"); 
    }, 5000); 
  
    if (id-1) { //Destroying previous setTimeOut
        clearTimeout(id-1); 
    } 
});