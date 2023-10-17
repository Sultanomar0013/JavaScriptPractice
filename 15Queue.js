//QUEUE IS FIFO METHOD( FIRST IN FORST OUT)
class Queue {
    constructor() {
        this.arr = [];
    }
    //push
    push(value) {
        this.arr.unshift(value);
        return this.arr;
    }

    pop(){
        this.arr.pop();
        return this.arr;
    }
    peek(){
        return this.arr[this.arr.length - 1];
    }
}

let q = new Queue();

console.log(q.push(10));
console.log(q.push(15));
console.log(q.pop());
console.log(q.peek());