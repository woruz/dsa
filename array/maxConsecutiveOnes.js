

const maxConsecutiveOnes = (nums) => {
    let ctr = 0
    let max = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            ctr = ctr + 1
            max = Math.max(max,ctr)
        }else{
            ctr = 0
        }
    }
    return max
};

console.log(maxConsecutiveOnes([1,1,0,1,1,1]))