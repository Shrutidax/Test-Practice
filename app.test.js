
import {describe, test} from '@jest/globals';


const product = (a,b) => a * b
const div = (a,b) => a / b

describe('Product', () => { test(`Multiplication`, () => {
    result = product (7, 8)
    expected = 56
    weGot(result).weWant(expected)
})})

function weGot (actual) {
    return {
        weWant(ans) {
            if (actual !== ans) 
                throw new Error( `${actual} is not equal to ${ans}`)
        }
    }
}