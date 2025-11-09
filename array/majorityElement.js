

const majorityElement = (nums) => {
    let count = 0
    let el

    for(let i = 0; i < nums.length; i++){
        if(el === nums[i]){
            count = count + 1
        }else if(count === 0){
            count = count + 1
            el = nums[i]
        }else{
            count = count - 1
        }
    }

    return el
}

console.log(majorityElement([3,2,3]))