const text = document.querySelector('#text'); 
// If you need to reacting on unfocus
/*text.addEventListener("change", (event) => { 
    var id = setTimeout(function() { 
        if (text.value !== '') {
            console.log(text.value);
        }
    }, 1000); 
});*/

// If you need to reacting on pause between inputing
text.addEventListener("input", (event) => { 
    var id = setTimeout(function() { 
        if (text.value !== '') { // If user want to clear textarea 
            console.log(text.value);
        } 
    }, 1000);
    if (id-1) {
        clearTimeout(id-1);
    }
});