
//..........................................................................//
function uniqueName(arr) {
    let uniqueName = []
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i]
        if (!uniqueName.includes(ele)) {
            uniqueName.push(ele)
        }  
    }
    return uniqueName;
}

let nameArray = [ "tasib", "rakib", "rafi", "alif", "rakib" ]
//console.log(nameArray);
console.log(uniqueName(nameArray));



