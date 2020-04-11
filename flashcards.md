## List different speeds of time complexity from fast to slow
- Fast to slow: constant O(1) -&gt; logarithmic O(logn) -&gt; linear O(n) -&gt; quadratic O(n^2) -&gt; exponential O(k^n)
- Don't need to think about time complexity until your dataset grows

## What is the time complexity of a JS loop?
- for loops are linear

## What is the time complexity of pop in JS?
- pop() is constant time as you're just taking off the last one

## What is the time complexity of .forEach() and .map()
- .forEach() and map() vary depending on the callback function

## What is the time complexity of saving to an obj or arr?
- saving to an obj or arr is constant

## What is the time complexity of logical comparisons? 
- > or < is a constant time operation

## What is the time complexity of running a statement?
- O(1)

## What is the time complexity of a value look-up on an array, object or variable?
- O(1) 

## What is the time complexity of a loop that cuts a problem in half every iteration?
- O(n log n)

## What is the time complexity of looping through an array of values?
- O(n) looping through the values of an array

## What is the time complexity of a double nested loop?
- O(n^2)

## What is the time complexity of a triple nested loop?
- O(n^3) triple nested loops

## At a very high level, how can you evaluate the big O of a function?
- essentially, to evaluate a function in terms of Big O notation, you evaluate the time complexity of each expression and whatever the worst expression is, is essentially your big O (sort of)

## What is caching with memoization?
- memoization: caching the value that a function returns
- you keep track of things you've already seen and then we can do a property look up on an object, which is a constant time operation, and hence faster than the quadratic time of a loop within a loop

## How does caching relate to time and space complexity?
- caching is faster but it takes up more space

## What are the trade-offs in terms of time and space complexity when it comes to browsers vs. other environments?
- in the browser environment, typically the obvious trade off is time complexity, in other environments where memory constraints are more relevant, it's something that you want to think about more

## Why use recursion? 
- elegant solutions to keep your code DRY, and it's expected CS knowledge 

## What is the typical recipe for recursion? 
- 1. identify base case(s)
- 2. identify recursive case(s)
- 3. return where appropriate
- 4. Write procedures for each case that bring you closer to the base case(s)

## What's the difference between recursion and loops? 
- Recursion can always be implemented as a loop, but in some situations, believe it or not, it is simpler to use recursion
- Looping is more complicated with nested data structures and it's just easier to use recursion

## What does ES6 offer that allows some functions to be called without growing the call stack?
- ES6 offers TCO (tail-call optimization) which allows some functions to be called without growing the call stack

## What are two common patterns for recursion? 
- wrapper functions and accumulators
- wrapper functions - So a wrapper function essentially just uses closure, it declares a function and then another function inside of that and then calls it 
- accumulator method - after each loop, not only are we incrementing our index, but we're saving some result and that result is being passed down into our recursion


## What is divide and conquer? 
- Divide and conquer is a recursive technique for taking a large problem and dividing it into sub problems in order to reach some goal or solution
- if it's divide and conquer, you're probably going to split in the middle but that's not always the case, e.g. quicksort splits from the end


## What is a classic example of a divide and conquer algorithm? 
- binary search: search for a value in a sorted array by cutting the side of the search area in half

## How does binary search work at a high level? 
- find the middle of the array, check it's the number, if it is return it, if it's not is the value smaller or larger than the guess. If larger, increment the max value by one and repeat the process again, if smaller, increment the min value by one and repeat the process again. Repeat this until the value is found or if the value cannot be found return -1

## What is the recipe for divide and conquer? 
- 1. recognise the base case
- 2. divide: break problem down during each call
- 3. conquer: do work on each subset
- 4. combine: solutions

## What are naive sorts? 
- keep looping and comparing values until the list is sortede, e.g. bubble sort, insertion sort, selection sort

## What are divide and conquer sorts? 
- recursively divide lists and sort smaller parts of list until entire list is sorted, e.g. mergesort or quicksort

## How does bubble sort work? 
- loop thorugh an array, comparing adjacent indices and swapping the greater value to the end
- How does merge sort work? recursively merge sorted sub-lists
- What is the pseudocode for merge sort?

## When is the best time to use a greedy algorithm? 
- When your dataset is too big and finding the optimal choice would be too complex/time consuming/computationally too much, it's better to have some solution than no solution

## Should you use the greedy approach in interviews?
- Generally try to avoid greedy approaches in interviews as there are a lot of cases in which you can be completely wrong


## What is Dynamic Programming?
- Basically, cache values to avoid repeated calculations
- The idea is to simply  store the results of subproblems, so that we do not have to re-compute them when needed later
