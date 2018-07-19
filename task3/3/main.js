const but = document.querySelector('#but');
let min = 1;
let max = 4;
let id;

but.addEventListener("click", (event) => {
  if (id) { //Turning off the recursive timeout
    clearTimeout(id);
    id = 0;
  } else {
    id = setTimeout(function message() {
      let seconds = Math.floor(Math.random() * (max - min + 1)) + min; //Integer from [1,4]
      console.log(`You can see message after ${seconds} seconds`);
      id = setTimeout(message, seconds * 1000);
    }, 0);
  }
});