# Intro to Node.js

What is Nodejs 
- An environment to run JS outside of a browser
- Open source runtime
- Built on Chrome's V8 JS engine

What can you create with Nodejs?
- pretty much anything a scripting and server language like python or ruby can, but with javascript
- Tooling (build, automation, etc.)
- API's (REST, Realtime, etc.)
- CDNs
- Shareable libraries
- Desktop applications (Electron)
- IOT 

Why install node using Node Version Manager (NVM) over the pkg from the Nodejs website?
- it can cause permission errors, can only install limited number of versions
- nvm allows you to install many versions of node whenever

How do you start the node REPL?
- just type in node with no args

How to install Nodejs?
- curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
- then use  nvm install node

How do you set the default  node  version?
- `nvm alias default (versionnum/or just node)`
- e.g. `nvm alias default 10`

How do you open the bash profile file?
- `touch ~/.bash_profile`

What are some differences between browser js and nodejs?
- Nodejs: no DOM, no GUI, server side apps and scripts, window, versioned so no fragmentation, required modules, can access filesystem
- Browser: interactive apps for the web, DOM, no window but does have a global, fragmentation (different browsers support different things), optional modules (es6), cannot access filesystem

Should you create your own globals in nodejs?
- no, it's bad practice, bad for security, can interfere

What is the process global variable in nodejs?
- it has information about the environment the program is running in

What is the require global variable in nodejs?
- it's a function to find and use modules in current module
- it's basically node's version of import in python

What is the __dirname variable in nodejs?
- shows the current directory path

What is the module variable in nodejs?
- it's information about current module, methods or making module consumable

What is the global variable in nodejs?
- like window in the browser, it's the "global" object. Almost NEVER use this

What are modules?
- encapsulated code
- e.g. 
    ```
        var module1 = (function(exports, require, module, __filename, __dirname)){
            // your nodejs code in a file
        })
    ```
How do you create modules?
- all your nodejs code are already modules, just export them 
- e.g.
    ```
        // exported
        const add = (num, num2) => {}
        // not exported
        const notPublic = () => {}

        module.exports = {add, thing() {}, value: 1}
    ```

How do you import modules in node?
- require(/filename/modulename)
- Takes a relative path to the module that you want to consume, and synchronously loads it by returning whatever the target module exported

What is fs module in nodejs?
- the fileSystem module for interacting with files on a machine

How do you import fs in a file?
- `const fs = require('fs')`

How do you write to a file with fs in nodejs?
- `fs.writeFileSync('./lib.js, 'var me = "me"')`

What is the http module in nodejs?
- low level-ish module for creating network based programs, like APIs

What is the path module in nodejs?
- useful for manipulating path strings and handling differences across many OS's

What does a package.json file do?
- it manages the dependencies in your project 

What are the commander and inquirer modules for?
- Commander: a module for building command line interfaces
- Inquirer: a module for building command line prompts

What is the callback pattern for async JS?
- 
    ```
        // callback takes error as first arg, and result as second
        doAsyncThing((error, result) => {})
    ```

What is the promises pattern for async JS?
- 
    ```
        doAsyncThing()
            .then(result => {})
            .catch(error =>{})
    ```

What is the async/await pattern for async JS?
- 
    ```
        const run = async() => {
            const results = await doAsyncThing() // must return a promise
            console.log('hello')
        }
    ```

Why do you need to handle your errors in nodejs?
- any thrown or unhandled errors will cause the process to crash and exit 
- i.e. one unhandled error can break your server serving thousands of people

What is the basic structure for a promise?
- e
    ```
        return new Promise(resolve, reject) => {
            // your code here
            fs.readFile(assetPath, {encoding: 'utf-8'}, (error, result) => if (error) {
                reject(error)
            } else { resolve (result)}
        }
    ```

What are three levels for debugging in nodejs?
- level 1: use console.log to log your way through fixing your app. In production, record your logs
- level 2: use the node inspector when starting your app and debug just like you would an browser app in chrome
- level 3: text editor integration offers the most seamless experience

How do you use the node inspector to debug your app?
- `node --inspect name/name2/file.js`
- go into chrome://inspect, go to the file name and inspect, and you can inspect your application

What do you need to do tests in nodejs?
- your code to be tested 
- test suites - responsible for helping organize your tests, provide hooks, and overall environment
- assertion library - does the actual comparisons in your test
- mocks + spies - tools to help you test your code without testing other code or actually running your code (mock out api calls, check to see if an internal function was called)

What are the different types of tests?
- unit, e.g. testing individuals functions, etc.
- integration, e.g. testing if an api that interacts with a lot of services or does a lot of things works
- end-to-end, e.g. starting from a client all the way to the server
- UI, basically end-to-end but just for UI
- snapshot, e.g. snapshot what's happening at a certain time
- performance testing, e.g. how fast your app works, etc.
- and there are more too!

How do you share modules to NPM
- tldr; push code to github, publish to NPM

What things do you need to do when sharing modules to npm?
- add node_modules to gitignore
- declare remote modules as devDependencies if you only need them to develop with, so you may use jest to develop with but you won't need it if you just intend to use the module
- think about how your app will be used and what dependencies the host app might have, you don't want to include another version (although NPM tries to fix this for you)
- is this private or public? you can publish private npm modules

How do you install a package as a developer dependency using node?
- npm i whateverpkg -D 

How do you deploy your server?
- Each cloud provider has it's own method of deploying your apps on their platforms. Most of them have some integration with Github or a CLI to assist
- remove secrets and use environment vars
- setup a continuous intergration flow for your app
- make sure you are developing with the same version of node you're deploying to










