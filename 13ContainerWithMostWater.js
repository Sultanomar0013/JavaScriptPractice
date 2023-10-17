/* var maxArea = function(heights) {
    let totalwater = 0; 

    for(let i=0; i<heights.length; i++){
        for(let j= i +1; j< heights.length; j++){
            
            let height
            if(heights[i] > heights[j]){
                height = heights[j]
            } else {
                height = heights[i]
            }
            let width = j - i 

            let currentwater = height * width;
            if( currentwater > totalwater){
                totalwater = currentwater
            }
        }
    }
    return totalwater;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])) */

//.........solving this problem with more efficient way..............//

/* var maxArea = function (heights) {
    let totalwater = 0;

    for (let i = 0; i < heights.length; i++) {
        for (let j = i + 1; j < heights.length; j++) {

            let height = Math.min(heights[i], heights[j]);
            //    if(heights[i] > heights[j]){
            //        height = heights[j]
            //    } else {
            //        height = heights[i]
            //    }
                
            let width = j - i

            let currentwater = height * width;

            totalwater = Math.max(currentwater, totalwater)
            //    if( currentwater > totalwater){
            //        totalwater = currentwater
            //    } 

        }
    }
    return totalwater;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) */


//.....the codes that given ups are time exceed limit now
//.....we are solving it different way to solve this to prevent time complexity
var maxArea = function (heights) {
    let totalWater = 0;
    let firstPointer = 0;
    let lastPointer = heights.length - 1;

    while(firstPointer < lastPointer){
        let height = Math.min(heights[firstPointer], heights[lastPointer]);
        let width = lastPointer - firstPointer;

        let currentWater = height * width;

        totalWater = Math.max( totalWater, currentWater );
        if(heights[firstPointer] <= heights[lastPointer]){
            firstPointer++;
        } else {
            lastPointer--;
        }
    }
    return totalWater;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))


