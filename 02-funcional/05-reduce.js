const numbers = [1, 2, 3, 4, 5, 6];

const sum = (total, el) => total + el;
const avg = (acc, el, i, array) =>{
    if(i === array.length-1){
        return (acc + el)/array.length
    }else{
        return acc + el;
    }
}
const total = numbers.reduce(sum /*, 100*/);
const totalV2 = numbers.reduce(avg);

console.log(total, totalV2);

const students = [
    { name: "Jake", score: 6.4 },
    { name: "Susan", score: 8.6 },
    { name: "Emma", score: 9.4 },
    { name: "Peter", score: 9.1 },
];