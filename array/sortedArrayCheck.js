

const isSorted = (arr) => {
    let check = true

    for(let i = 0; i < arr.length -1; i++){
        if(arr[i] > arr[i+1]){
            check = false;
            break
        }
    }

    return check
}

console.log(isSorted([1,3,5,7,9, 7]))