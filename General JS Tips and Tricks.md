# General JS Tips and Tricks

## Right and wrong ways to console log
- don't use multiple logs, log multiple objects within an object like so

    ```
    console.log({ foo, bar, baz });
    ```

- you can add css styles to your logs

    ```
    console.log('%c My Friends', 'color: orange; font-weight: bold')
    ```

- if variables share common properties, you can log them as a table?
  
    ```
    console.table([foo, bar, baz);
    ```

- you can console log how long something takes to happen

    ```
    console.time('looper')`

    `let i = 0;`
    `while (i < 1000000) { i ++ }`

    `console.timeEnd('looper')
    ```

- you can also trace functions using console.trace
  
    ```
    console.trace('blah blah')
    ```

- up to like 4m https://www.youtube.com/watch?v=Mus_vwhTCq0
- 