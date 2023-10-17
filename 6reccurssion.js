/* function findOddNumber(arr){
    let odd = []

    function helper(input){

        if(input.length === 0 ) 
            return

        if( input[0] % 2 !== 0 ){
            odd.push(input[0])
        }    

        helper(input.slice(1))
    }


    helper(arr)

    return odd
}

console.log(findOddNumber([2,3,5,6,7,9,12,11,14,45,66])) */

//...........................................................//

function findOddNumber1(arr) {

    let odd1 = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            odd1.push(arr[i])
        }
    
    }
    return odd1
}

console.log(findOddNumber1([2, 3, 5, 6, 7, 9, 12, 11, 14, 45, 66]))