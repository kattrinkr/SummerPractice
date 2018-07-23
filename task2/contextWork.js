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
  const CONTEXT = this; //№1 By binding the context to a variable
  setTimeout(function time() {
    console.log(this.name);
    console.log(CONTEXT.name);   
    console.log(voltron.name); //№3 By access to the 'voltron'
  }.bind(this), 1000); //№2 By binding the context to a timeout function
}.bind(voltron);
//№4 arrow function  in the setTimeout
  
showName();
