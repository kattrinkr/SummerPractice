const TEXT = document.querySelector('#text'); 

let id;
TEXT.addEventListener("input", (event) => {
    if (id) {
        clearTimeout(id);
    } 
    id = setTimeout(function() { 
        console.log(TEXT.value);
    }, 1000);       
});