/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  /* brute force
    if(nums.length===1) return true
        
    const jump = i =>{
        console.log(i, nums[i])
        if(nums[i] === 0) return false
        if(i === nums.length-1) return true
        if(i>nums.length) return false
        for(let j=1; j<=nums[i]; j++){
            jump(i+j)
        }
    }
    
    return jump(0)
    */

  /* dp
    const dp = new Array(nums.length).fill(false)
    dp[nums.length-1] = true
    for(let i = nums.length-2; i>=0; i--){
        for(let j = 0; j<=nums[i]; j++){
            if(dp[i+j]){
                dp[i] = true  
                break
            } 
        }
    }
    // console.log(dp)
    return dp[0]
    */

  // greedy
  let goal = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }

  if (goal === 0) return true;
  else return false;
};
