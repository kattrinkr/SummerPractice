let Robot = function (name) {
    this.name = name;
}

function add (op1, op2) {
    this.name = this.name || "Human";
    return this.name + ' can count to ' + (op1 + op2);
}

let voltron = new Robot("Voltron");

console.log(add(0,1));
console.log(add.call(voltron, 1, 2));
console.log(add.apply(voltron, [20, 30]));
console.log(add.bind(voltron)('drinking', 'beer'));


let showName = function () { 
  let temp = this;
  setTimeout(function time() {
    console.log(this.name);
    console.log(temp.name);   
    console.log(voltron.name);
  }.call(this), 1000);
}.bind(voltron);
  
showName();
