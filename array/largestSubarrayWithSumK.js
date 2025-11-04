

const largestSubarrayWithSumK = (arr, k) => {
    let sum = 0
    let maxLen = 0
    let j = 0
    for(let i = 0; i < arr.length; i++){
        if(sum > k){
            while(sum > k){
                sum = sum - arr[j]
                console.log({sum2: sum})
                j = j + 1
                if(sum === k){
                    maxLen = Math.max(maxLen, i -  j)
                    console.log({maxLen})
                }
            }
        }
        if(sum < k){
            sum = sum + arr[i]

            console.log({sum})
            if(sum === k){
                maxLen = Math.max(maxLen, i-j+1)
                console.log({maxLen2: maxLen})
            }
        }
    };

    return maxLen
};

console.log(largestSubarrayWithSumK([1,1,1],1)); // 4