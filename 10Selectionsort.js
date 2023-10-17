function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        for (let j = i + 1; j < arr.length; j++) {
            //console.log("to see", arr, arr[i], arr[j+1])
            if (arr[lowest] > arr[j]) {
                lowest = j
            }
        }
        console.log(arr, i, lowest)
        let temp = arr[i]
        arr[i] = arr[lowest]
        arr[lowest] = temp
    }
    return arr;
}



console.log(selectionSort([27, 89, 56, 12, 34, 56, 78]))