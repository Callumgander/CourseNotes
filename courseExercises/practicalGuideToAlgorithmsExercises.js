// ex1: implement unique sort
const uniqSort = function(arr) {
    const breadcrumbs = {};
    const result = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        // 0 element is always unique
        if (!breadcrumbs[arr[i]]) {
            result.push(arr[i]);
            breadcrumbs[arr[i]] = true;
        }
    }
    return result.sort((a, b) => a - b)
}

// ex2: write a function, times10, that takes an argument multiples n by 10
const times10 = (n) => (n * 10);

// ex3: basic memoized function
const cache = {};

const memoTimes10 = (n) => {
    if (n in cache) {
        console.log('Fetching from cache:', n);
        return cache(n);
    }
    else {
        console.log('Calculating result');
        let result = times10(n);
        cache[n] = result;
        return result;
    }
}

// ex4: memoized function with closure
const memoizedClosureTimes10 = () => {
    let cache = {};
    return (n) => {
        if (n in cache) {
            console.log('Fetching from cache:', n);
            return cache[n];
        }
        else {
            console.log('Calculating result');
            let result = n * 10;
            cache[n] = result;
            return result;
        }
    };
};

// ex5: take a recursive function and convert it into a iterative one
// recursive
function joinElements(array, joinString) {
    function recurse(index, resultSoFar) {
        resultSoFar += array[index];

        if(index === array.length - 1) {
            return resultSoFar;
        } else {
            return recurse(index + 1, resultSoFar + joinString);
        }
    }

    return recurse(0, '');
}
// iterative
function joinElements(array, joinString) {
    let resultSoFar = ''

    for (let i = 0; i < array.length - 1; i++) {
        resultSoFar += array[i] + joinString;
    }

    return resultSoFar + array[array.length - 1]
}

// ex6: write your own memoized recursive function
const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            console.log('Fetching from cache', n);
            return cache[n];
        }
        else {
            console.log('Calculating result', n);
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}
const factorial = memoize(
    (x) => {
        if (x === 0) {
            return 1;
        }
        else {
            return x * factorial(x - 1); 
        }
    }
)

// monopoly problem
// write a function, makeChange, that returns an integer 
// that represents the least number of coins that add up to an amount where 
// the amount is always divisible by 5
// coin values: 5, 10, 25

// greedy approach: always subtract the largest coin possible from the current amount
const makeChange = (coins, amount) => {
    coins.sort((a, b) => b - a);
    let coinTotal = 0;
    let i = 0;
    while (amount > 0) {
        if (coins[i] <= amount) {
            amount -= coins[i];
            coinTotal++;
        } else {
            i++;
        }
    }
    return coinTotal;
} 
makeChange([5, 10, 25], 50);

// input amount: 40, output number of coins: 3 (25, 10, 5)
// input amount: 35, output number of coins: 2 (25, 10)

// brute force approach:
let recursionCounter = 0;
const coins = [10, 6, 1];

const makeChange = (value, i) => {
    recursionCounter++;
    console.log(`${recursionCounter}: calling ${value} at ${i}`)
    if (value === 0) return 0;
    let minCoins;
    coins.forEach((coin, i) => {
        if (value - coin >= 0) {
            let currMincoins = makeChange(value - coin, i);
            if (minCoins === undefined || currMinCoins < minCoins) {
                minCoins = currMinCoins;
            }
        }
    });
    return minCoins + 1;
}

makeChange(12);

// dynamic approach
const makeChange = (c) => {
    // Return the value if it's in the cache
    if (cache[ c]) return cache[c];

    let mincoins = -1;

    // Find the best coin
    coins.forEach(coin => {
        if (c - coin >= 0) {
            let currMinCoins = makeChange(c - coin);
            if (minCoins === -1 || currMinCoins < minCoins) {
                minCoins = currMinCoins
            }
        }
    })
}