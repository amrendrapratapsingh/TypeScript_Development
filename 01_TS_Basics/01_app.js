// Hello World App
var greeting = "Gud morng Ts";
console.log(greeting);
document.getElementById('display').innerHTML = greeting;
// Variables Creation in TypeScript
function greet(name) {
    var greeting = "good morng" + name;
    return greeting;
}
var output = greet('john');
console.log(output);
document.getElementById('display').innerHTML = output;
