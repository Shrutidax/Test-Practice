const product = (a,b) => a * b
const div = (a,b) => a / b

function productTest() {
    result = product (7, 8)
    expected = 56
    weGot(result).weWant(expected)
}
test(`Multiplication`, productTest)

function divTest() {
    result = div (12, 3)
    expected = 3
    weGot(result).weWant(expected)
}
test(`Division`, divTest)

function test (title , callback) {
    try {
        callback()
        console.log(`✓ ${title}`)
    }
    catch (error) {
        console.log(`✕ ${title}`)
    }
}

function weGot (actual) {
    return {
        weWant(ans) {
            if (actual !== ans) 
                throw new Error( `${actual} is not equal to ${ans}`)
        }
    }
}

// ✓   ✕
