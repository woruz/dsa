
const bubbleSort = (arr) => {

    let swapped = true
    for(let i = 0; i < arr.length && swapped; i++){
        swapped = false
        for(let j = i; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1],arr[j]]
                swapped = true
            }
        }
    }

    return arr
}           

console.log(bubbleSort([2,1,4,3,6,5]))
