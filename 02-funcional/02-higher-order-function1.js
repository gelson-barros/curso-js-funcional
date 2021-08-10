/**
 * Function that operate on other functions,
 * either by taking them as arguments or by
 * returning them, are called higher-order functions.
 */

function run(fn){
    //fn();
    return `Result:${fn()}`;
}

function sayHello(){
    console.log('Hello!!');
}


//run(3)//deve se passar uma função não invocada.
//run(sayHello());//não pode ser invocada
//chamar uma função
run(sayHello);//deve passar a função como referência

//invocar um função no parametro
run(function(){
    console.log('Runn!!');
})

const  result = run(Math.random);

console.log(result);