//..Built in sort function in js..//

/* //default sort order
let arr = [5,6,5,34,8,9,34,56,7,54,567,]

arr.sort()

console.log(arr)
//Accending order
let arr1 = [5,6,5,34,8,9,34,56,7,54,567,]

arr1.sort((a,b) => a-b)

console.log(arr1)

//decending order
let arr2 = [5,6,5,34,8,9,34,56,7,54,567,]

arr2.sort((a,b) => b-a)

console.log(arr2) */


//..........bubble sort..........//

/* function bubbleSort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j= 0; j<arr.length - 1; j++){
            console.log("to see", arr, arr[i], arr[j+1])
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}


console.log(bubbleSort([2,5,3,6,7])) */


//..........bubble sort making less compexity..........//

function bubbleSort(arr) {
    let isSwap
    for (let i = 0; i < arr.length; i++) {
        isSwap = false;
        for (let j = 0; j < arr.length - 1; j++) {
            console.log("to see", arr, arr[i], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                isSwap = true
            }
        }
        if (!isSwap) break
    }
    return arr
}


console.log(bubbleSort([2, 5, 3, 6, 7]))
// all bubble sort complexity in bigO(n**2)