//An array given and a value. Find the value in tha array 
//and give the index number. 

function linearSearch(arr, value){
    for (let i=0; i<arr.length; i++){
        if(arr[i] == value) return i
    }
    return (`there is no value`);
}
console.log(linearSearch([2,3,5,67,8,9],67))