// Hello World App

let  greeting:string = "Gud morng Ts";
console.log(greeting);
document.getElementById('display').innerHTML = greeting;

// Variables Creation in TypeScript

 function greet(name:string):string{

    let greeting : string ="good morng" + name;
    return greeting;
}
let output : string = greet('john');
console.log(output);
document.getElementById('display').innerHTML = output;



