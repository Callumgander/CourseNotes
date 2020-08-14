# Webpack Fundamentals

What are the two ways to use Javascript in web development?
- using scripts, i.e. <script src="index.js">
- writing inside the script tag itself
- problems include: too many scripts, unmaintainable scripts

What is an iife and why are they relevant?
- immediately invoked function expression
- Allows you to have multiple variables with the same names that don't affect each other because they are lexically scoped, and so scope collision won't occur 

What is webpack?
- a module bundler. it lets you write any module format and compiles them for the browser
- Support code splitting (static async bundling)

How do you use webpack?
- three different ways
- webpack.config.js
- ```module.exports = {
    entry: {
        vendor: './src/vendors.ts',
        main: './src/main.browser.ts'
    },
    output: {
        path: 'dist/',
        filename: '[name].bundle.js'
    }
}```
- webpack cli
- ``` webpack <entry.js> <result.js> --color --progress```
- ``` webpack-dev-server --port=9000```
- node API
``` var webpack = require("webpack");

// returns a compiler instance
webpack({
    // configuration object here
}), function(err, stats) {
    // ...
    // compilerCallback
    console.error(err);
}; ```

UP TO SETTTING UP DEBUGGING

