

const sortArray012 = (arr) => {
    let low = 0
    let mid = 0
    let high = arr.length - 1

    while(mid <= high){
        console.log({check: arr[mid]})
        if(arr[mid] === 0){
            [arr[low],arr[mid]] = [arr[mid],arr[low]]
            low = low + 1
            mid = mid + 1
        }else if(arr[mid] === 1){
            mid = mid + 1
        }else{
            [arr[mid],arr[high]] = [arr[high],arr[mid]]
            high = high - 1
        }
    }

    return arr
}

console.log(sortArray012([0, 2, 1, 2, 0, 1]))