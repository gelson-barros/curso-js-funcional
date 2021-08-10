// Criar uma função de intervalo
// range(5) -> [1, 2, 3, 4, 5]
// range(6, 11) -> [6, 7, 8, 9, 10, 11]
// range (10, 19, 2) -> [10, 12, 14, 16, 18]
// range (6, 2) -> [6, 5, 4, 3, 2]
// range(8, -3, 4) -> [8, 4, 0]

function range(...nums) {
    const arr = [];

    if (nums.length == 1) {
        for (let i = 1; i <= nums[0]; i++) {
            arr.push(i);
        }
    } else if (nums.length >= 2) {
        const increm = nums[2] !== undefined ? nums[2] : 1;
        if (nums[0] < nums[1]) {
            for (let i = nums[0]; i <= nums[1]; i += increm) {
                arr.push(i);
            }
        } else {
            for (let i = nums[0]; i >= nums[1]; i -= increm) {
                arr.push(i);
            }
        }
    } 
    return arr;
}

//console.log(range(5));
//console.log(range(6, 11));
//console.log(range(10, 19, 2));
//console.log(range(6, 2));
//console.log(range(8, -3, 4));

//solução do professor

function range1(a, b, s = 1){
    const nums = [];

    const n1 = b === undefined ? 1 : a
    const n2 = b === undefined ? a : b
    
    for (let i = n1; n1 < n2 ? i <= n2 : i >= n2; n1 < n2 ? i += s : i -= s) {
        nums.push(i);
    }
    return nums;
}
console.log(range1(5));
console.log(range1(6, 11));
console.log(range1(10, 19, 2));
console.log(range1(6, 2));
console.log(range1(8, -3, 4));