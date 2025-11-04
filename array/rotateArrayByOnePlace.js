

const rotateArrayByOnePlace = (arr) => {


    const lastVal = arr[0]

    for(let i = 1; i < arr.length; i++){
        arr[i-1] = arr[i]
        console.log({arr})
    }

    arr[arr.length - 1] = lastVal
    return arr
}

console.log(rotateArrayByOnePlace([1,2,3,4,5]))