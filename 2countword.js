//...............................Counting String..............................//

/* function charcount(str){
    let charlist = {}

    for( let i=0; i<str.length; i++ ){
        let char = str[i].toLowerCase()
        if(charlist[char] > 0){
            charlist[char]++
        }else{
            charlist[char]=1
        }
    }
    return charlist
}

console.log(charcount("helllo hello world everyone")); */


//................................................................//

function charcount(str){
    let charlist = {};
    for(let i=0; i<str.length; i++){
        let char = str[i].toLowerCase();
        charlist[char] = (charlist[char] || 0) +1;
    }
    return charlist;
}

console.log(charcount("hello world everyone Brother"))


