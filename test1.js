const product = (a,b) => a * b
const div = (a,b) => a / b

let result = product (5, 4)
let actual = 21

if (result !== actual) {
    throw new Error (`${result} is not equal to ${actual}`);
}