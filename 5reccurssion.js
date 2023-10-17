//for loop use to solve this minimal problem

/* function countDown(n){
    for(let i=n; i>0; i--){
        console.log(i);
    }
}
countDown(10) */

//We can also use Reccurssion to solve this problem
/* function countDown(n){
    console.log(n)
    n--
    if(n>0){
        countDown(n)//here i calling the function 
                    //again thats call reccurssion
    }
}

countDown(10) */

//.......................some of number by for loop................................//
/* function sumofNumber(n){
    let sum= 0;

    for(let i=n; i>0; i--){
        sum += i;
    
    }
    return sum;
}
console.log(sumofNumber(10)); */

//same problem solve by reccurssion

/* function sumofNumber(n){
    if(n<0) 
        return 0;    

    return n+ sumofNumber(n-1)
}

console.log(sumofNumber(3)); */

//......................sum of array by reccurssion..................//

function sumofArrayslow(arr){
    if(arr.length === 0)
    return 0;

    let rest = arr.slice(1)

    return arr[0] + sumofArrayslow(rest)

}

let input = new Array(900).fill(1)

let time1slow = performance.now();
console.log(sumofArrayslow(input))
let time2slow = performance.now();
console.log(`  Reccurssion solve in bigO(n*n) ${(time2slow - time1slow) * 1000 } ms`);

//the time complexity of following reccursion is bigO(n*n);
//and space complexity is bigO(n);


function sumofArrayfast(arr){
    return helpsum(arr, 0)
}

function helpsum(arr, index){
    if( arr.length === index) 
        return 0;
    
    return arr[index] + helpsum(arr, index+1)    
}


let input1 = new Array(900).fill(1)

let time1 = performance.now();
console.log(sumofArrayfast(input1));
let time2 = performance.now();
console.log(`reccursion solve in bigO(n) ${(time2 - time1) * 1000 } ms`);
