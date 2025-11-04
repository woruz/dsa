const isSortedArray = (arr, n) => {
    if(n === 1) return true

    return arr[n-1] < arr[n-2] ? false : isSortedArray(arr.slice(0,arr.length-1), n-1)
}

console.log(isSortedArray([1,3,2,4,5,6],6)) 