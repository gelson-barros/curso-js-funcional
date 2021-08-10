const numbers = [1, 2, 3, 4, 5, 6];

const greaterThanZero = el => el > 0;
const greaterThanTen = el => el > 10;
const even = el => el % 2 == 0;

const numbersV2 = numbers.filter(greaterThanZero);
const numbersV3 = numbers.filter(greaterThanTen);
const numbersV4 = numbers.filter(even);

console.log(numbers, numbersV2, numbersV3, numbersV4);

const students = [
    { name: "Jake", score: 6.4 },
    { name: "Susan", score: 8.6 },
    { name: "Emma", score: 9.4 },
    { name: "Peter", score: 9.1 },
];

const greatStudent = el => el.score >= 9;

const studentsV2 = students.filter(greatStudent);

console.log(students, studentsV2);

//Obs: o array resultante tem um tamanho igual ou menor