

const moveZerosToTheEnd = (arr) => {
    let j = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            j = i
            break
        }
    }
    for(let i = j+1; i < arr.length; i++){
        if(arr[i] !== 0){
            [arr[i],arr[j]] = [arr[j],arr[i]]
            j = j + 1 
        }
    } 

    return arr
};
 
console.log(moveZerosToTheEnd([1 ,0, 0,1,1,3 ,4 ,0 ,1]))