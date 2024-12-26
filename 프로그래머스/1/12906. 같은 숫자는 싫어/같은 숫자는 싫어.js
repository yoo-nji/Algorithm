const solution = (arr) =>
{ 
    let result = []
    for(let i = 0 ; i < arr.length ; i++){
        if(result[result.length - 1] === arr[i]) continue
        result.push(arr[i])
    } 
    return result
}