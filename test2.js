const product = (a,b) => a * b
const div = (a,b) => a / b

let result = product (7, 8)
let expected = 56
weGot(result).weWant(expected)

result = div (12, 3)
expected = 3

weGot(result).weWant(expected)

function weGot (actual) {
    return {
        weWant(ans) {
            if (actual !== ans) 
                throw new Error( `${actual} is not equal to ${ans}`)
        }
    }
}
