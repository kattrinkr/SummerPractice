const BUT = document.querySelector('#but'); 
let id;

BUT.addEventListener("click", (event) => { 
    if (id) {
      clearTimeout(id);
    } 
    id = setTimeout(function() { 
      console.log("Hello World"); 
    }, 5000);    
});