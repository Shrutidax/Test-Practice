const product = (a,b) => a * b
const div = (a,b) => a / b

let result = product (7, 8)
let expected = 58

weGot(result).weWant(expected)

function weGot (actual) {
    return {
        weWant(ans) {
            if (actual !== ans) 
                throw new Error( `${actual} is not equal to ${ans}`)
        }
    }
}
