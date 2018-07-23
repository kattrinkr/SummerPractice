const BUT = document.querySelector('#but');
const MIN = 1;
const MAX = 4;
let id;

BUT.addEventListener("click", (event) => {
  if (id) { //Turning off the recursive timeout
    clearTimeout(id);
    id = 0;
  } else {
    id = setTimeout(function message() {
      let seconds = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN; //Integer from [1,4]
      console.log(`You can see message after ${seconds} seconds`);
      id = setTimeout(message, seconds * 1000);
    }, 0);
  }
});