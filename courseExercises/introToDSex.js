// // Class representing a Stack

// class Stack {
//     constructor() {
//         this._storage = {};
//         this._length = 0;
//     }

//     // for pushing values to the stack
//     push(value) {
//         // TODO: Add typechecking and check arguments
//         this._storage[this._length] = value;
//         this._length++
//     }

//     // for popping values off the stack
//     pop() {
//         // TODO: What if it's empty?
//         if (this._length) {
//             const lastVal = this._storage[this._length - 1];
//             delete this._storage[this._length - 1];
//             this._length--
//             return lastVal
//         } else {
//             return undefined
//         }
//     }

//     // for peeking at the value at the end of the stack
//     peek() {
//         if (this._length) {
//            return this._storage[this._length - 1] 
//         }
//     }
// }

// const myStack = new Stack();

// myStack.push(5)
// myStack.push(2)
// myStack.push(4)
// console.log(myStack.peek())
// myStack.pop()

// console.log(myStack)

class Queue {
    constructor(){
        this._storage = {};
        this._length = 0;
        this._headIndex = 0;
    }

    enqueue(value){
        // TODO: argument validation
        const lastIndex = this._length + this._headIndex;
        this._storage[lastIndex] = value;
        this._length++;
    }

    dequeue(){
        if (this._length){
            const firstVal = this._storage[this._headIndex];
            delete this._storage[this._headIndex];
            this._length--;
            this._headIndex++;
            return firstVal;
        }
        
    }

    peek(){
        if (this._storage === 0) {
            return undefined
        }
        return this._storage[this._headIndex]
    }
}

const myQueue = new Queue();

myQueue.enqueue(5)
console.log(myQueue.peek())
myQueue.enqueue(2)
console.log(myQueue.peek())
myQueue.enqueue(4)
console.log(myQueue.peek())
myQueue.dequeue()
console.log(myQueue.peek())
