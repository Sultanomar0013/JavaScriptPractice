//...........................Highest Value.......................................//

/* let temparature = [-2, 4, 52, 61, 7, -4, -6, 8, 43]

function highesttemp() {
    let highesttemp1 = temparature[0];
    for (let i = 1; i < temparature.length; i++) {
        if (temparature[i] > highesttemp1) {
            highesttemp1 = temparature[i]
        }
    }
    return highesttemp1;
}
let time1 = performance.now();
console.log(`Highest temp is :`, highesttemp())


function lowesttemp() {
    let lowesttemp1 = temparature[0];
    for (let i = 1; i < temparature.length; i++) {
        if (temparature[i] < lowesttemp1) {
            lowesttemp1 = temparature[i]
        }
    }
    return lowesttemp1;
}
console.log(`Lowest temp is:`, lowesttemp())

console.log(`Different between highest to lowest is:`,
    highesttemp() - lowesttemp())
    let time2 = performance.now();
console.log(`OUTPUT BigO(n):   your time ${(time2 - time1) / 1000 }`);//bigO(n) */



//............................................................//


/* let temparature = [-2, 4, 52, 61, 7, -4, -6, 8, 43]
function tempdiff() {
    let highesttemp = temparature[0];
    let lowesttemp = temparature[0];
    let tempdiff1 = 0;
    for (let i = 1; i < temparature.length; i++) {
        if (temparature[i] > highesttemp) {
            highesttemp = temparature[i]
        }
        if( temparature[i] < lowesttemp ){
            lowesttemp = temparature[i]
        }
    }
        tempdiff1 = highesttemp - lowesttemp;

    return tempdiff1;

}
let time1 = performance.now();
console.log( tempdiff() );
let time2 = performance.now();
console.log(`OUTPUT BigO(n):   your time ${(time2 - time1) / 1000 }`);//bigO(n) */
