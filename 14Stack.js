//STACK IS LIFO (LAST IN FIRST OUT)

/* class Stack {
    constructor() {
        //return this
        this.arr = []
    }
    //push
    added(value) {
        this.arr.push(value);
        return this.arr;
    }
    //pop
    pop() {
        this.arr.pop();
        return this.arr;
    }
    lookup() {
        return this.arr[this.arr.length - 1];
    }
}

let stack = new Stack()
console.log(stack.added(5));
console.log(stack.added(10));
console.log(stack.added(15));
//console.log(stack.pop());
console.log(stack.lookup());
console.log(stack.pop()); */




/* let obj = {
    name: "omar",
    roll: 123
}

obj.age = 23

console.log(obj) */


//Another example of stack

class AnotherStack{
    constructor(){
        this.database = {};
        this.count = 0;
    }
    push(value){
        this.count++; 
        this.database[this.count] = value;
        return this.database;
    }
    pop(){
        let deleteItem = this.database[this.count];
        delete this.database[this.count];
        this.count--;
        return deleteItem
    }
    peek(){
        return this.database[this.count]
    }
}

let stack1 = new AnotherStack();

console.log(stack1)
console.log(stack1.push(10))
console.log(stack1.push(12))
console.log(stack1.pop())
console.log(stack1.peek())



/* let obj = {
    "1" : 15,
    "2" : 20
}

obj[4] = 50;

console.log(obj) */
