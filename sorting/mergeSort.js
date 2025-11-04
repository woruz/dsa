

const mergeSort = (arr) => {
    if(arr.length > 1){
        let mid = Math.floor(arr.length/2)
        let left = arr.slice(0,mid)
        let right = arr.slice(mid)
        mergeSort(left)
        mergeSort(right)

        let i = 0
        let j = 0
        let k = 0

        while(i < left.length && j < right.length){
            if(left[i] < right[j]){
                arr[k] = left[i]
                i = i + 1
            }else{
                arr[k] = right[j]
                j = j + 1
            }
            k = k + 1
        }

        while(i < left.length){
            arr[k] = left[i]
            i = i + 1
            k = k + 1
        }

        while(j < right.length){
            arr[k] = right[j]
            j = j + 1
            k = k + 1
        }
    }
    return arr
}

console.log(mergeSort([2,1,4,3,6,5]))