const productAsync = (a,b) => a * b
const divAsync = (a,b) => a / b

test(`Multiplication`, async () => {
    result = await productAsync (7, 8)
    expected = 56
    weGot(result).weWant(expected)
})

test(`Division`, async () => {
    result = await divAsync (12, 3)
    expected = 4
    weGot(result).weWant(expected)
})

async function test (title , callback) {
    try {
        await callback()
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
