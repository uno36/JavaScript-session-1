// 5. Find and print the largest number
const numbers2 = [3, 7, 2, 5, 10, 6];
let max = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > max) {
        max = numbers2[i];
    }
}
console.log(max);