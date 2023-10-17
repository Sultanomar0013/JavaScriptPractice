function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                //element swaping technique 1
                /* let temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp */

                //element swaping technique 2
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]

            } else {
                break
            }
        }
    }
    return arr
}


console.log(insertionSort([23, 56, 43, 12, 34, 2, 4, 78, 45]))

//time complexity bigO(n**2) space complexiy bigO(n)