- Space complexity - how much memory is used?
- Time complexity - how many primitive operations are executed?
- with respect to input size and assuming worst case scenarios 
- Problem: given a list of hotels, return the price range of hotels in a given search result
- we'd expect that the more data we have, the longer it will take to figure out the min and max required for the range
- However, as our data grows, the cost can grow really fast or slow
- approach 1: compare all numbers to one another
- 3 hotels, 9 operations. 5 hotels, 25 operationns, 10 hotels, 100 operations
- this is an example of quadratic time, n^2, where n is the number of hotels, as n grows, the amount of work increases at that rate
- approach 2: track min &amp; max
- we consider this 2n because as the data grows, the amount of work increases by 2 
- approach 3: sorted list
- just go to the first one and the last one
- number of operations: 2
- n^2 is quadratic time
- n, 2n, 3n, etc. is linear time
- 1, 2, 3, etc. is constant time
- Fast to slow: constant O(1) -&gt; logarithmic O(logn) -&gt; linear O(n) -&gt; quadratic O(n^2) -&gt; exponential O(k^n)
- Don't need to think about time complexity until your dataset grows

Native Methods and JS expressions
- for loops are linear
- pop() is constant time as you're just taking off the last one
- .forEach() and map() vary depending on the callback function
- saving to an obj or arr is constant
- &gt; or &lt; is a constant time operation

Big O notation
- what do we do if we have multiple expressions/loops/etc.
- O(1) running a statement 
- O(1) value look-up on an array, object, variable
- O(lognn) loop that cuts problem in half every iteration
- O(n) looping through the values of an array
- O(n^2) double nested loops
- O(n^3) triple nested loops

- essentially, to evaluate a function in terms of Big O notation, you evaluate the time complexity of each expression and whatever the worst expression is, is essentially your big O (sort of)

Faster algorithms
- Rather than using a loop within a loop, use the 'breadcrumb' method, **caching**
- you keep track of things you've already seen and then we can do a property look up on an object, which is a constant time operation, and hence faster tha nthe quadratic time of a loop within a loop

Caching with memoization
- memoization: caching the value that a function returns
- for example

    const factorial = (n) =&gt; {
        //calculations: n * (n-1) * (n-2) ... (2) * (1)
        return factorial;
    }
    
    factorial(35);
    
- caching is faster but it takes up more space, time vs space complexity
- in the browser environment, typically the obvious trade off is time complexity, in other environments where memory constraints are more relevant, it's something that you want to think about more

- Closures do not return the body of the function, they return the function that is being returned, so values that are being defined in the scope of the function persist in the functions cache
- Using memoization you are trading time complexity for space complexity, making it faster but costing space

Recursion
- recursion is simply when a function calls itself; however it doesn't stop there
- Why use recursion? elegant solutions to keep your code DRY, and it's expected CS knowledge 
- What is the typical recipe for recursion? 
- 1. identify base case(s)
- 2. identify recursive case(s)
- 3. return where appropriate
- 4. Write procedures for each case that bring you closer to the base case(s)

    var callMyself = function() {
        if() {
            // base case
            return;
        } else {
            // recursive case
            callMyself();
        }
        return;
    };

-  What's the difference between recursion and loops? Recursion can always be implemented as a loop, but in some situations, believe it or not, it is simpler to use recursion
-  ES6 offers TCO (tail-call optimization) which allows some functions to be called without growing the call stack
-  Looping is more complicated with nested data structures and it's just easier to use recursion
- What are two common patterns for recursion? wrapper functions and accumulators
- So a wrapper function essentially just uses closure, it declares a function and then another function inside of that and then calls it 

    function wrapperFnLoop(start, end) {
        function recurse(i) {
            // end is a closure variable
            if(i &lt; end) {
                recurse(i + 1);
            }
        }
        
        recurse(start);
    
    }


- accumulator method - after each loop, not only are we incrementing our index, but we're saving some result and that result is being passed down into our recursion
- 

Divide and conquer
- what is divide and conquer? Divide and conquer is a recursive technique for taking a large problem and dividing it into sub problems in order to reach some goal or solution
- What is a classic example of a divide and conquer algorithm? binary search: search for a value in a sorted array by cutting the side of the search area in half
- if it's divide and conquer, you're probably going to split in the middle but that's not always the case, e.g. quicksort splits from the end
- How does binary search work at a high level? find the middle of the array, check it's the number, if it is return it, if it's not is the value smaller or larger than the guess. If larger, increment the max value by one and repeat the process again, if smaller, increment the min value by one and repeat the process again. Repeat this until the value is found or if the value cannot be found return -1
- What is divide and conquer? recursive calls to a subset of the problem
- What is the recipe for divide and conquer? 
- 1. recognise the base case
- 2. divide: break problem down during each call
- 3. conquer: do work on each subset
- 4. combine: solutions
- What are naive sorts? keep looping and comparing values until the list is sortede, e.g. bubble sort, insertion sort, selection sort
- What are divide and conquer sorts? recursively divide lists and sort smaller parts of list until entire list is sorted, e.g. mergesort or quicksort
- How does bubble sort work? loop thorugh an array, comparing adjacent indices and swapping the greater value to the end
- How does merge sort work? recursively merge sorted sub-lists
- What is the pseudocode for merge sort?

    mergeSort(list)
        base case: if list.length &lt; 2, return
        break the list into halves L &amp; R
        Lsorted = mergeSort(L)
        Rsorted = mergeSort(R)
        return merge(Lsorted, Rsorted)
    
- What is the big O of mergesort? O(n log n)

Greedy Algorithms
- Greed algorithms always make the locally optimal choice
- When is the best time to use a greedy algorithm? When your dataset is too big and finding the optimal choice would be too complex/time consuming/computationally too much, it's better to have some solution than no solution
- You are the banker in Monopoly with your family who has lost many of the game pieces so you can only have bills in these denominations: $5 $10 $25
- You need only pay out your family in the least number of bills possible so you don't run out before the game is over. Write a function that calculates the least number of bills required for any given  dollar amount that is divisible
- Greedy Approach: always subtract the largest coin possible from the current amount
- Generally try to avoid greedy approaches in interviews as there are a lot of cases in which you can be completely wrong
- Brute Force Approach: calculate every single combination possible and keep track of the minimum 

Dynamic Programming

- Dynamic Approach: Cache values to avoid repeated calculations
- What are some qualities of dynamic programming? Optimal substructure (tends to be recursive), overlapping subproblems
- Honestly, the slides in this course just got worse and worse as the course went on, not much was properly explained here
- 