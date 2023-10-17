/* var twosum = function(nums, target){
    for(let i = 0; i < nums.length; i++){

        for( let j = i+1; j < nums.length; j++){
            if((nums[i]+nums[j]) === target)
            return [i,j]
        }
    }
    return false;
}

console.log(twosum([2,5,7,8], 7)) */

//----------Solving it other way-------------//

var twosum = function(nums, target){
    for(let i = 0; i < nums.length; i++){
        let remaining = target - nums[i]
        for( let j = i+1; j < nums.length; j++){
            if(remaining === nums[j])
            return [i,j]
        }
    }
    return false;
};

console.log(twosum([2,5,7,8], 7))

