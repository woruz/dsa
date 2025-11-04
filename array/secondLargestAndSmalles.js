


const secondLargest = (arr) => {
    let max = -Infinity
    let secondMax = -Infinity

    for(let i = 0; i < arr.length; i++){
        console.log({check: arr[i]})
        if(arr[i] > max){
            secondMax = max
            max = arr[i]
        }else if(arr[i] > secondMax && arr[i] < max){
            secondMax = arr[i]
        }
        console.log({secondMax,max})
    }

    return secondMax
};

// console.log(secondLargest([1,2,4,7,7,5]))


const secondSmallest = (arr) => {
    let small = Infinity
    let secondSmall = Infinity

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < small){
            secondSmall = small
            small = arr[i]
        }else if(arr[i] < secondSmall && arr[i] > small){
            secondSmall = arr[i]
        }
    }

    return secondSmall
};

console.log(secondSmallest([1,2,4,7,7,5]))