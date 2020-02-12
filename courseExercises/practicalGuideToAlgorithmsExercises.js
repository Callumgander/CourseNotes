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