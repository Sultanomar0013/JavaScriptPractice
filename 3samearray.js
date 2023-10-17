//.....................Same array..................................//

/* function same(arr1, arr2){
    if(arr1.length !== arr1.length){
        return false;
    }
    for(let i = 0; i<arr1.length; i++){
        let currentIndex = arr2.indexOf(arr1[i] ** 2)
        if(currentIndex === -1){
            return false
        }
        arr2.splice(currentIndex, 1)
        console.log(arr2)
    }
    return true
}

console.log(same([2,3,4], [4,9,16])) */

// the complexity of upper code is n**2 which is not suitable for good codeing


function same (arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false
    }
    let sc1 = {}
    let sc2 = {}

    for(let val of arr1){
        sc1[val] = sc1[val] +1 || 1
    }
    for (let val of arr2){
        sc2[val] = sc2[val] +1 || 1
    }
    for(let key in sc1){
        if(!( key**2 ) in sc2 ){
            return false
        }
        if(sc2[key**2] !== sc1[key]){
            return false
        }
    }
    return true
}


console.log(same([ 2, 3 , 4 ], [ 4, 16, 9 ]))


// the complexity is this code is O(n)