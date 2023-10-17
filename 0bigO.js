
//..........................................................................//
function sumofAll(n){
    let total= 0;
    for(let i=0; i<=n; i++){
        total += i
    }
    return total;
}
let time1 = performance.now();
console.log(sumofAll(1000000000));
let time2 = performance.now();
console.log(`OUTPUT BigO(n):   your time ${(time2 - time1) / 1000 }`);//bigO(n)



//..........................................................................//
function sumOfAll(n){
    return n*(n+1)/2
}

let time3 = performance.now();
console.log(sumOfAll(1000000000));
let time4 = performance.now();
console.log(`OUTPUT BigO(1): your time is ${ (time4-time3) / 1000 }`);//bigO(1)


//..........................................................................//
function multiply(n){
    for(let i=0; i<=n; i++){
        for( let j=0; j<=n; j++)
            console.log(`OUTPUT BigO(n2): the combination of i and j`,i,j)//bigO(n2)
    }
}

multiply(1)

//..........................................................................//
function anotherLogN(n){
    if(n<=1){
        console.log("Done")
        return
    }
    console.log(`OUTPUT BigO(Logn):`,n)
    anotherLogN(n/2)
}
anotherLogN(8);//bigO(logn)




//..........................................................................//
const myObject ={
    Name: "Omar",
    Skills: "Nothing, Everything",
    Age: [7, 14, 21,25]
}
console.log(`OUTPUT BigO(n)` , Object.keys(myObject));//bigO(n)
console.log(`OUTPUT BigO(n)` , Object.values(myObject));//bigO(n)
console.log(`OUTPUT BigO(n)` , Object.entries(myObject));//bigO(n)
console.log(`OUTPUT BigO(1)` , myObject.hasOwnProperty('Name'));//bigO(1)


