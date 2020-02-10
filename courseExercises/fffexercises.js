// ex1: declare and assign variables using destructuring
const { name, weapon, room } = {"name": "Rusty", "room":"kitchen", "weapon":"candlestick"}

// ex2: different types of loops
for (let i = 0; i < obj.length; i++)
    console.log(obj[i])

for (let key in obj){
    console.log(obj[key])
}

// ex3: loop through properties in an object
for (var i = 0; i < game.suspects.length; i++) {
    for (var key in game.suspects[i]){
        console.log(game.suspects[i][key])
    }
}

// ex4: destructure nested data structure into two variables with the strings 'red' and 'orange'
const firstColor = game.suspects[0].color;
const secondColor = game.suspects[1].color;
var [color, color2] = [suspects[0].color, suspects[1].color];
var [{color: firstColor}, {color: secondColor}] = suspects;

// ex5: make the _.each method
_.each = function(list, callback) {
   if (Array.isArray(list)) { // true
        for (var i = 0; i < list.length; i++) {
            // call the callback with a list item
            callback(list[i], i, list);
        }
   } else // object
        for (var key in list) {
            callback(list[key], key, list)
        }
}

// ex6: use _.map and _.each together
_.map = function(list, callback) {
    var storage = [];

    // for (var i = 0; i < list.length; i++) {
    //     storage.push(callback(list[i], i, list));
    // }
    _.each(list, function(v, i, list){
        storage.push(callback(v, i, list))
    })

    return storage;
}

// ex7: make the _.filter method
_.filter = function(arr, cb) {
    // create a new array
    const storage = [];
    // loop through arr
    _.each(arr, function(item, i, item) {
        if(cb(item, i, list)) storage.push(item);
    });
    // return arr
    return storage;
}

// ex9: es5 to es6 rewrite exercise
const add = function(a, b = 2) {
    console.log(arguments);
    return a + b;
};

const add = function(a, b) {
    b = b || 2
    console.log(arguments);
    return a + b
}

// ex10: implement _.from()
const from = arr => {
    return Array.prototype.slice.call(arr)
}

// ex11: translate into ES6
var increment = function(n){ return n + 1; };
var square = function(n){ return n*n; };
var doMathSoIDontHaveTo = function(n, func){ return func(n); };
doMathSoIDontHaveTo(5, square);
doMathSoIDontHaveTo(4, increment);

const increment = n => { return n + 1; };
const square = n => { return n * n; };
const doMathSoIDontHaveTo = (n, func) => { return func(n); };

// ex12: implement _.reduce()
const reduce = function(list, cb, initial) {
    let memo = initial;

    for (let i = 0; i < list.length; i++) {
        if (i === 0 && memo === undefined) {
            memo = list[0];
        } else {
            memo = cb(list[i], memo);
        }
    }
    return memo;
}