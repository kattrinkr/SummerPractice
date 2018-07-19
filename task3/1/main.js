const but = document.querySelector('#but'); 
let id;

but.addEventListener("click", (event) => { 
    if (id) {
      clearTimeout(id);
    } 
    id = setTimeout(function() { 
      console.log("Hello World"); 
    }, 5000);    
});