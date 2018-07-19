const text = document.querySelector('#text'); 

let id;
text.addEventListener("input", (event) => {
    if (id) {
        clearTimeout(id);
    } 
    id = setTimeout(function() { 
        console.log(text.value);
    }, 1000);       
});