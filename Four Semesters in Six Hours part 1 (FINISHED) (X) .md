- code is more about communication for the person that maintains it than for the computer

Big O 
\- how efficient an algorithm (or code) is 
\- deals with the big picture, sucks away less important information 
\- 3x^2 + x + 1. In this case, big O would essential ignore the x + 1 because they are neglible compared to the 3x^2 
\- Big O for the above equation would be O(n2) 
\- Works for both time and space analysis

```
function crossAdd(input) {
    var answer = [d (no actual d];
    for (var i = 0; i &lt; input.length; i++) {
        var goingUp = input[i];
        var goignDown = input[input.length-1-i];
        answer.push(goingUp + goingDown);
    }
    return answer;
}
```

-this is O(n) because we go through all the inputs once in a loop

```
function find(needle, haystack) {
    for (int i=0l i &lt; haystack.length; i++) {
        if (haystack[i] === needle) return true;
    }
}
```

-still O(n) 
-unless said othersise, we’re assuming the worst case scenario

```
function makeTuples(input) {
    var annswer = [d];
    for (var i = 0; i &lt; input.length; i++) {
        for (var j = 0; j &lt; input.length; j++) {
            answer.push([input[i], input[j]]);
        }
    }
    return answer
}
```

-this would be O(n2). For every input, we have to go through a full loop inside of another full loop, meaning we’re doing a lot of work 
-the trick is to look for loops. a loop inside of a loop inside of a loop would likewise be O(n3), if you’re doing this, it’s either an exceptional case, or more likely you’re doing something wrong 
-if you have no loops and just do something and exit/return, then it’s said we’re doing it in constant time, or O(1) 
-O(log n) if a code employs a divide-and-conquer strategy (often recursive), meaning as you add more terms, the increases in time as you add input diminishes

Recursion 
\- Recursion is when you define something in terms of itself, i.e. “what is a computer?” “something that computes things” 
\- in CS, it’s a function that calls itself 
\- It’s useful because it’s able to maintain state at different levels of recursion 
\- Useful but carries a large footprint with it as everytime you call the function, it adds another call to the stack. Some problems therefore are better solved inn a slightly-more-complicated-but-more-efficient way of iteration (loops) instead of recursion 
\- recursive approaches are more readable than iterative approaches, generally favour them for some problems unless the recursive approach is causing a bottleneck in your code, in which case switch to iterative

```
function basicRecursion(max, current) {
    if (current &gt; max) return;
    console.log(current);
    basicRecursion(max, current+1);
}
```

-first, write your base case, i.e. when do you stop 
-this should be done with recursion, just used to demonstrate the concept

```
function fibonacci(n) {
    if(n &lt;= 2) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};
```

-fibonacci sequences: 2 previous terms added together

```
function factorial(n) {
    if (n &lt; 2) return 1;
    return n * factorial(n - 1);
}
```

Bubble Sort 
\- not useful, will never use it in production code, but useful as a teaching tool 
\- O(n2), wildly inefficient

```
const bubbleSort = nums =&gt; {
  do {
    var swapped = false;
    for (let i = 0; i &lt; nums.length; i++) {
      if (nums[i] &gt; nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};
```

Insertion Sort 
\- useful, for arrays that are sort of sorted or almost completely sorted. crap for ones that aren’t sorted at all 
\- O(n2) in the worst case but in the best case O(n)

```
const insertionSort = nums =&gt; {
  for (let i = 1; i &lt; nums.length; i++) {
    for (let j = 0; j &lt; i; j++) {
      if (nums[i] &lt; nums[j]) {
        // take out the number at i
        const spliced = nums.splice(i, 1);
        // put i, represented by spliced[0], at position j
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
};
```

Merge Sort 
\- most often the type of sort you’ll use 
\- very consistent 
\- divide annd conquer, recursive 
\- “stable sorting” 
\- take a big list, break it into two smaller lists, then repeat and repeat until you’re at the smallest unit and can’t break it down any smaller 
\- merge sort and stitch function 
\- Stable which means if you have equivalent elements, it will keep their original order in the array. Sometimes important, sometimes not 
\- Big O is O(n log n), spatial complexity is o(n) 
\- this is more or less what JS does under the hood when you call sort 
\- pop/push, shift/unshift??

```
const mergeSort = nums =&gt; {
  // do base case
  if (nums.length &lt; 2) {
    return nums;
  }
  // find the middle
  const length = nums.length;
  const middle = Math.floor(length / 2);
  // divide into two halves
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, length);
  // recursively apply the mergesort algorithm to
  // divide into two halves then stitch together
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return stitch(sortedLeft, sortedRight);
};

const stitch = (left, right) =&gt; {
  const results = <label class="task checkbox"><input data-task="1" type="checkbox" class="checkbox--input" /><svg class="checkbox--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path class="checkbox--path" d="M16.667,62.167c3.109,5.55,7.217,10.591,10.926,15.75 c2.614,3.636,5.149,7.519,8.161,10.853c-0.046-0.051,1.959,2.414,2.692,2.343c0.895-0.088,6.958-8.511,6.014-7.3 c5.997-7.695,11.68-15.463,16.931-23.696c6.393-10.025,12.235-20.373,18.104-30.707C82.004,24.988,84.802,20.601,87,16"></path></svg><span class="checkbox--text">;</span></label>

  // left.length &gt;= 0 and right.length &gt;= 0
  while (left.length &amp;&amp; right.length) {
    if (left[0] &lt;= right[0]) {
      // shift is going to take the 0 element in left and take it off and push it into results
      results.push(left.shift());
    } else {
      // unshift is like push, you push to the front of results
      results.unshift(5);
      results.push(right.shift());
    }
  }

  while (left.length) {
    results.push(left.shift());
  }
  while (right.length) {
    results.push(right.shift());
  }

  return results;
};
```

- two sorted arrays, find the median element between the arrays
- naive answer: concat the arrays and sort
- or, even better, use the stitch part of the merge sort algorithm and just find the median of the results, which will take up less time
- you shouldn’t really need to copy these algorithms vertatum but instead be able to take ideas from them to use in problems

Quicksort 
\- one of the most useful and powerful sorting algorithms 
\- even though merge sort is used for most js sorting, whenever it’s not used, quicksort is 
\- there are like 70 plus variations of quicksort 
\- another recursive algorithm 
\- basic gist is that you take the last element in the list and call it the pivot 
\- construct two lists, basically those in the left list are those that are smaller than the pivot and those larger are in the right list 
\- then call quicksort on each of those lists 
\- the initial pivot doesn’t get passed down to the further break downs 
\- if the base case, length of one of the lists is zero then concat the lists and the pivot and return 
\- another Big O of O(n log n) but takes up less memory than mergesort so it is often favoured, but it does poorly if you pass it a sorted list

**Data Structures - Interfaces** 
Sets 
\- a set has no order and is not a list 
\- has no duplicates 
\- allows at least four different things: add, remove contains, and toList 
\- Basic idea is that you can add items to a set andn then later check if they’re there. You can also request later a list of thsoeitems in the set, but not in any order 
\- good for deduplication since you can only add something to a set once

Map 
\- basically like dictionaries 
\- quite similar to simple JS objects 
\- Maps are a set/collectionn of keys that have values associated with those keys 
\- Unlike objects, they don’t have prototypes, inheritance, methods, or anything of that sort 
\- Similar to associative arrays in other languages 
\- Again, since the keys are a set, there cannot be duplication of keys but you can have duplication of values though

Stack 
\- an interface that adheres to the “Last-in First-Out” (LIFO) mantra 
\- In a stack, you can only push(add) or pop(remove). The last thing you pushed will be what pop returns to you (pop will also remove it from the stack) 
\- These concepts are borrowed in arrays but arrays aren’t technically stacks 
\- Often they have a method called peek too which just looks at the top value of the stack without modifying the stack 
\- programming IS a stack

Queue 
\- “first-in first-out” 
\- similar to people queing in line 
\- methods called enqueue (add/push) and dequeue (remove/pop) and can usually peek 
\- Useful for programming problems like printing jobs, first to send to printer is first to print 
\- Also priority queues, assign priorities to elements and ones with higher priorities get dequeued first 
\- Priority queues are useful in networking

**Data Structures - Implementation** 
Array List 
\- Going to be talking abotu two types of implementationsof array, ArrayList and LinkedList (terms borrowed from Java). What we’re going todo is to approximate how these work underneath the hood; in reality since JavaScript is a garbage-collected language that you don’t have to worry about allocation and deallocation, it is simplified 
\- ArrayList is done by directly interacting with an allocated piece of memory. You then interact with that piece of memory by addressing the specific indicies in the array. In other words, you just treat it like a normal array. However, things get a bit more complicated when deleting items from an ArrayList: you have to collapse the list down to the spot where you deleted 
\- no commas in JS classes 
\- what is a constructor? 
\- good if you need to get a lot and not delete a lot 
\- what is a helper function?

Linked List 
\- each node has a value and a next 
\- First element is called the head, last is called the tail

Binary Search Tree 
\- not a lis, middle ground between linkedlists annd arraylists 
\- each node in a BST has zero, one, or two subtrees, every element in the left subtree is lesser than the value of the node and every node in the right is greater 
\- very quick finds 
\- Adding things is simple as you just change pointers when you add new elements 
\- BSTs get an average case of O(log n) on gets, adds, and deletes, but they can have a worst case of o(n) if you do slmethign like add a sorted list to a BST 
\- Having your data randomized is actually important for production

AVL Tree 
\- is a specialised binary search tree 
\- keeps tree as flat as possible and migates the worse case scenario of the binary search tree 
\- has to be recursive 
\- if children are out of balance you have to do a rotation, if it’s 2 or greater, it’s out of balance 
\- won’t hit worst case scenario of O(n) for look up 
\- worst case always o(log n) 
\- single rotation and double rotation

Hash tables 
\- Hash tables are extremelty powerful tools in modernCS and are used extensively in things like programming languages’ underpinnnnings, databases, caches, etc. They do have some tradeoffs, namely potentially memory footprints and the need for complicated hashing but they have constant time (o(1)) lookups, deletes, annd adds if you’re doing a set or map 
\- the gist of hash tables is you send your key through a hashing function (like MD5, SHA1, or one of your invention) which converts the key to an addressable space (some sort of index) 
\- need sufficiently large footprint of memnory to be able to store all of your objects without collisions 
\- won’t be ordered at all 
\- a good hashing algorithm spits out viable addresses for a table that don’t collide 
\- hashing algorithm needs to be idempotent, which means that a function givenn an input always outputs the same output 
\- need to be performant

Functional Programming 101 
\- functional programming is maintainable, composeable, and easy to reason about 
\- few key concepts: avoiding side effects, higher order fucntion, transforming lists of data 
\- want to minize where we affect state, so that our program is easier to reason about as we can easily reason through individual parts of our code 
\- if your code has a lot of state that gets modified everywhere then you have to reason through your code over time instead of being able to take tiny snapshots of individual functions. A function that modifies no state and is idempotent is called a pure function. We generally want small, focused, pure functions 
\- higher order functions are functions that apply other functions 
\- whenn you’re operating exclusively on lists, it’s called vector or array programming. When you’redoing that you can depend on the fact that you can take the output of one function and safetly put that into the next function. We can chain calls together. Our code becomes expressive at this point. We begin to describe what we want to happen rather than imperatively telling how

Map 
\- map in the sense of forEach, not map in the sense of data structure 
\- Takes an array and transforms it

Reduce 
\- take a list of values and combine them in some meaningful way down to one value 
\- an accumulator is an interim value

Filter

## - takes a list of items and applies a function to it, if it returns true, the item stays in the list and if it returns false, it goes