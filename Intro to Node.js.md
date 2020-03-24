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

UP TO IMPORTING NODE MODULES
 

