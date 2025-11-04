

const union = (arr1,arr2) => {
    let i = 0
    let j = 0
    let res = []
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j] && res[res.length - 1] !== arr1[i]){
            res.push(arr1[i])
            i = i + 1
        }else if(arr1[i] > arr2[j] && res[res.length - 1] !== arr2[j]){
            res.push(arr2[j])
            j = j + 1
        }else{
            if (res[res.length - 1] !== arr1[i]) res.push(arr1[i]);
            i = i + 1
            j = j + 1
        }
    }

    if(i < arr1.length){
        while(i < arr1.length){
            if (res[res.length - 1] !== arr1[i]) res.push(arr1[i]);
            i = i + 1
        }
    }

    if(j < arr2.length){
        while(j < arr2.length){
            if (res[res.length - 1] !== arr2[j]) res.push(arr2[j]);
            j = j + 1
        }
    }
    return res
};

console.log(union([1,2,2,3,4,5,6,7,8,9,10],[2,3,4,4,5,11,12]))