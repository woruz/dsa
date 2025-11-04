
const removeDuplicates = (arr) => {
    let j = 0

    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== arr[i+1]){
            j = j + 1

            arr[j] = arr[i]
        }
    }
}

console.log(removeDuplicates([1,1]))






































































