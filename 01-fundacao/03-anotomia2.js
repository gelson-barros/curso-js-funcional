//função anonima
(function (a, b, c){
    return a + b + c; 
})

//Expressão de função(Function expression)
const x1 = 1;
const sum = function (a, b){
    return a + b;
}

const result = sum(3, 59);
console.log(result);

const anotherSum = sum;//passagem para outra variável
console.log(anotherSum(5, 9));

let x = 3;
console.log(x);

x = sum;
console.log(x(11, 16))