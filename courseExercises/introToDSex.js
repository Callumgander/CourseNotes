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

// class Queue {
//     constructor(){
//         this._storage = {};
//         this._length = 0;
//         this._headIndex = 0;
//     }

//     enqueue(value){
//         // TODO: argument validation
//         const lastIndex = this._length + this._headIndex;
//         this._storage[lastIndex] = value;
//         this._length++;
//     }

//     dequeue(){
//         if (this._length){
//             const firstVal = this._storage[this._headIndex];
//             delete this._storage[this._headIndex];
//             this._length--;
//             this._headIndex++;
//             return firstVal;
//         }
        
//     }

//     peek(){
//         if (this._storage === 0) {
//             return undefined
//         }
//         return this._storage[this._headIndex]
//     }
// }

// const myQueue = new Queue();

// myQueue.enqueue(5)
// console.log(myQueue.peek())
// myQueue.enqueue(2)
// console.log(myQueue.peek())
// myQueue.enqueue(4)
// console.log(myQueue.peek())
// myQueue.dequeue()
// console.log(myQueue.peek())

// Linked list

// class LinkedList {
//     constructor(value){
//         this.head = {value, next: null};
//         this.tail = this.head; 
//     }

//     insert(value) {
//         // update tail
//         const node = {value, next: null};
//         this.tail.next = node;
//         this.tail = node;
//     }

//     remove() {
        
//     }

//     removeTail() {
//         // loop and find the node beore the tail
//         // node.next === this.tail
//         let currentNode = this.head;
//         while(currentNode != this.tail){
//             currentNode = currentNode.next;
//         }
//         currentNode.next = null;
//         this.tail = currentNode;
//     }

//     contains(value) {
//         let currentNode = this.head;
//         while (currentNode.value != value){
//             currentNode = currentNode.next;
//         }
//         return currentNode.value === value
//     }

//     isHead(node) {
//         return node === this.head;
//     }

//     isTail() {
//         return node === this.tail;
//     }
// }

// const myList = new LinkedList(1);

class HashTable {
    constructor(val) {
        this._storage = [];
        this._tableSize = val;
    }

    insert(key, value) {
        const index = this._hash(key, this._tableSize);
        this._storage[index] = value

        if (!this._storage[index]) this._storage[index] = [];
        this._storage[index].push([key, value])
    }

    remove() {
        
    }

    retrieve(key) {
        const index = this.hash(key, this._tableSize);
        const arrayAtIndex = this._storage[index];
        
        if (arrayAtIndex) {
            for (let i = 0; i < this._storage[index].length; i++) {
                const  keyValueArray = arrayAtIndex[i];
                if (arrayAtIndex[0] === key) return keyValueArray[1];
            }
        }
    }

    _hash(str, n) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += str.charCodeAt(i) * 3
        }
        return sum % n;
    }
}

myHashTable = new HashTable(25);

myHashTable.insert('a', 1);

