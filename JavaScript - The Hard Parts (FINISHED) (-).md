What are the five things that make a world class engineer according to the CEO of codesmith?

- analytical problem solving with code
- technical communication (can i implement your approach just from your explanation)
- engineering best practices and approach (debugging, code structure, patience and reference to documentation)
- non-technical communication (empathetic and thoughtful communication)
- language and computer science experience 

What happens when javascript executes my code?

- As soon as we start running our code, we create a global execution context which is
- thread of execution (parsing and executing the code line after line)
- live memory of variables with data (known as a Global Variable Environment)

What is the threat in JS?

- Single threaded (one thing at a time)
- Synchronous executionn (for now)

What happens when you execute a function?

- you create a new execution context comprising of:
- the thread of execution (we go through the code in the function line by line)
- a local memory ('variable environment') where anything defined in the function is stored

What is the default waiting value?

- undefined

What is a call stack?

- a special data structure that allows JS to track where the threat of execution current is in our code
- the last thing you put into a stack is the first thing you take out 

What is the technical name for adding to a stack?

- pushing

What is the tecnical name for removing from a stack?

- popping

If you don't put return in a function, what does the implicit return default return?

- undefined

What is the technical name for local memory?

- variable environment 

Why use const instead of var?

- if you're definitely not going to reassign a variable in memory, use const 

What is functional programming?

- it's a paradigm for thinking about how to write code for scale
- Core features are:
- Pure functions (no side effects), so when you call a function, you don't then change other parts of the program, they just return the return value
- 'Higher order functions'

What are generalizable functions?

- essentially, if you're going to be using a function again and again but you're writing different functions for each one but only changing one or two parts, you could just add extra parameters to the first function to make it more generalizable and save you having to write multiple functions 

Why can functions be passed to other functions in JS?

- functions are first class objects in JS
- they can be treated like any other JS object
- they can be assigned to variables and properties of other objects, passed as arguments into functions and returned as values from functions 

What is the only difference between objects and functions in JS?

- functions can be invoked 

What is the difference between callback and higher-order functions

- the function we pass in is a callback function, the outer function that takes in the function (our callback) is a higher-order function

What is a higher order function?

- a function that takes in a function or passes out a function

What if our functions could hold on to live data/state between executions? this would let our functiosn definitions have an associated cache/persistent memory. But it starts with us returning a function from another function

Closure


    function outer (){
        let counter = 0;
        function incrementCounter(){
            counter ++;
        }
        incrementCounter();
    }
    
    outer();

- Where you define your functions determines what variables your function have access to when you call the function
- so in the above example, there is no counter variable within the incrementCounter, so it will look in the variable environment above to find it and increment it to 1

How do you run a function outside where it was defined?

- you return the function and assign it to a new variable
- 

    function outer (){
        let counter = 0;
        function incrementCounter(){
            counter ++;
        }
        incrementCounter();
    }
    
    var myNewFunction = outer();

WHERE YOU DEFINE DETERMINES WHAT VARIABLES YOUR FUNCTION HAS ACCESS TO

What is meant by Javascript static/lexical scoping?

- our lexical scope (the available live data when our function was defined) is what determines our available variables and prioritization at function execution, not where our function called
- so basically, the variables in scope when the function was *defined* are the variables that function will refer to when called

- when a function is defined, it gets a [[scope]] property that references the Local Memory/Variable Environment in which it has been defined
- whenever we call that incrementCounter function - it will always look first in its immediate local memory (variable environment), and then in the [[scope]] property next before it looks any further up

 - What is the power of Closure? functions get 'memories' - functions can then have certain functionality, say if it's run once then it won't run again or will function different or it allows you to memoize results of previous times the function has been run. In a more advanced sense, you can implement the module pattern in JS
 - What is the modular pattern in JS? basically using closure so that your variables stay attached to the scope in which they were defined, their lexical scope, rather than the global scope in order to keep the global scope as clean as possible and prevent functions from having side effects that affect the global scope

Asynchronous JavaScript

- What is the backbone of modern web development in JavaScript? Asychronicity
- How many threads does JS have? JS is single threaded, one command executes at a time and has a synchronous execution model, each line is executed in the order the code appears
- So what if we need to wait some time before we can execute certain bits of code? perhaps we need to wait on fresh data from an API/server request or for a timer to complete and then execute our code
- We have a conundrum - a tension between wanting to delay some code execution but not wanting to block the thread from any further code running while we wait
- What are the 3 additional components of JS beyond thread of execution, memory/variable environment and callstack? web browser APIs/Node background threads, callback/message/task queue, and event loop

Browser API

- What is an API? a bunch of functionality or data we can interact with
- What is the web browser in relation to JS? It's a javascript runtime with a bunch of other tools, like setTimeout

Callback Queue

- functions coming from the web browser api will not be called until the global callstack is completely clear
- What are the two rules for the execution of asynchronously delayed code? hold each deferred function in a queue (the Callback Queue) when the API 'completes'
- Add the function to the Call stack (i.e. execute the function) ONLY when the call stack is totally empty (have the Event Loop check this condition)
- What is the Event Loop? The process of checking whether the call stack is empty and whether the callstack queue has a function in it 
- What are somethings where waiting would block our threat and we use Browser APIs for instead? a timer to finish running, new information from a server (Ajax), indication that a portion of the page has loaded, user interaction (clicks, mouseovers, drags), writing/reading to file system (Node), writing/reading database (Node)

    function display(data){
        console.log(data.post);
    }

    $.get("http://twitter.com/willsen/tweet/1", display);

    console.log("Me first!);

- xmlHttpRequest
- Asynchronous callbacks, Web APIs, the Callback Queue and Event loop allow us to defer our actions until the 'work' (an API request, timer, etc.) is completed and continue running our code line by line in the meantime
- Asynchronous JS is the backbone of the modern web - letting us build fast 'non-blocking' applications

Object-Oriented JavaScript

- Why is OOP a popular paradigm for structuring complex code? easy to add features and functionality, performant (efficient in terms of memory), easy for us and other developers to reason about (a clear structure)
- objects store functions with their assoicated data
- What is encapsulation? binding together the data and functions that manipulate the data 

    let user1 = {
        name: "Will",
        score: 3,
        increment: function() {
            user1.score++;
        }
    };
    
    user1.increment();

- What alternative techniques do we have for creating objects?
- using dot notation, i.e. 

    let user2 = {};
    user2.name = "Tim";

- using Object.create

    let user3 = Object.create(null);

    user3.name = "Eva";
    user3.score = 9;
    user3.increment = function() {
        user3.score++;
    }

- Generate objects using function
  
  function userCreator(name, score) {
      let newUser = {};
      newUser.name = name;
      newUser.score = score;
      newUser.increment = function() {
          newUser.score++;
      }
      return newUser
  };

  // later

  let user1 = userCreator("Will", 3);
  let user2 = userCreator("Tim", 5);
  user1.increment();
  user2.increment();

- what is the problem with the above code? Each time we create a new user, we make space in our computer's memory for all our data and functions. But our functions are just copies, meaning that rather than just attaching it to 1 separate function and recalling for each one, we are creating new functions for each user, wasting huge sums on memory at larger scales
-  solution 2: store the increment function in just one object and have the interpreter, if it doesn't find the function on user1, look up to that object to check if it's there? How to make this link?

    function userCreator(name, score){
        let newUser = Object.create(userFunctionStore);
        newUser.name = name;
        newUser.score = score;
        return newUser;
    };

    let userFunctionStore = {
        increment: function(){this.score++;},
        login: function(){console.log("You're logged in");}
    };

    let user1 = userCreator("Will", 3);
    let user2 = userCreator("Tim", 5);
    user1.increment();

- separate the object functionality from the object creator. The object creator creates the object functionality as a separate object then assigns it to a variables which it then adds properties to and returns
- what does the line let newUser = Object.create(userFunctionStore); do? create a newUser variable and assign to it and empty object with the prototype of it being userFunctionStore
- the below is sophiscated but not standard

    let newUser = Object.create(functionStore)
    ...
    return newUser 

- introduce the magic keyword new

    let user1 = new userCreator("Will",3);

- What happens when we invoke userCreator("Will", 3) without the new keyword?
- When we call the constructor function with new in front we automate 2 things
  1. Create a new user object
  2. return the new user object

- This is how the function quite a bit above looks with the new keyword

    function User(name, score){
        this.name = name;
        this.score = score;
    }

    User.prototype.increment = function(){
        this.score++;
    }
    
    let user1 = new User("Will", 3);

- so essentially, rather than storing the functionality in a separate function/object then creating a new copy of that functionality object inside another create function/object and then adding the properties to it, you instead just store it in the userCreator.prototype property 
- We're writing our shared methods separatetly from our object 'constructor' itself (off in the User.prototype object)
- Other languages let us do this all in one place. ES2015 lets us do so too
- The class 'syntactic sugar'
  
  class user {
      constructor (name, score){
          this.name = name;
          this.score = score;
      }
      increment() {
          this.score++;
      }
  }

  let user1 = new User("Eva", 9)
  user1.increment();

- What are the benefits? this is emerging as a new standard, feels more like style of other languages (e.g. Python)
- Lecturer advises that if you are aspiring to get mid -> senior roles, do not build generic full-stack applications with no users, build developer empowering tools and libraries
  
JUST NEED TO DO ADDITIONALLY SECTIONS FROM v2 (promises, etc.)
- 