const solution = (arr, divisor) => {
    const result = arr.filter((num)=> num % divisor === 0).sort((a, b) => a - b)
    if (!result[0]) return [- 1]
    return result
    }
