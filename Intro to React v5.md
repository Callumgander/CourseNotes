https://btholt.github.io/complete-intro-to-react-v5/

What is a component in React? 
- a function that returns a result of React.createElement. Something that returns markup

What is App in React? 
- It is like a rubber stamp that you can reuse to stamp things as many times as you want

What is createElement in React? 
- so it creates an element with whatever the first parameter is, i.e. h1, and then populates it with whatever the third parameter is

What does ReactDOM.render do? 
- It essentially renders whatever element is passed into the React.createElement in the first parameter of .render

What are the 3 parameters React.createElement gets? 
- what kind of tag it is, attributes you want to give the component, and whatever children you want to be passed to an element
What is so great about components in React? - They are reusable

How do you destructure props? 
- instead of passing in props into the function and using the notion props.propertyone, props.propertytwo, you instead just pass in ({ propertyone, propertytwo, etc.}) and then just use the properties names without prefixing them with props.


How do you avoid npm asking you questions when you initialize it? 
- npm init -y

What is package-lock? 
- when you develop your code to production, the package-lock file is what the client uses to download the exact same version of dependencies specified in the package.json

What does the npm ci command do? 
- it installs the exact same packages as the package-lock.json file

What are extends in the eslintrc.json file? 
- extends sets of rules to how the code is formatted

What does "sourceType": "module" mean in parserOptions in the eslinrc.json file? 
- means we'll use es modules, so export and import 

What does .gitignore do? 
- it basically tells git to not keep track of certain things inside your repo, e.g. node_modules

Why use parcel over webpack? 
- it's very hands off and configures everything by itself

What does parcel do? 
- It bundles all your code together and gets it ready for production as well as your development environment

How do you set up parcel after install? 
- in the package.json file, go to scripts, type "dev": "parcel src/index.html"

what is in /nodemodules/bin? 
- binaries tools that are used when you run node scripts

What does npm run dev do? 
- it builds your app

How do you install react and react-dom? 
- npm i react react-dom

How many components per file? 
- 1 component per file


What is JSX? 
- It allows you to just write HTML rather than convert html into React

How do you install all the commands so that ESLint understands react correctly? 
- npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

What is babel? 
- Babel is a transplier 

What are extends in eslint? 
- sets of rules for eslint to follow

What are rules in eslint? 
- the area where you can turn on and off specific rules 

What do hooks do? 
- they allow you to use functions statefully, so if you have a function on a input box, you might assign the initial value of that box to "hello" but then the hook will essentially update tha

Where do hooks never ever go? 
- inside if statements or for loops

How do you configure ESLint for Hooks? 
- "npm i -D eslint-plugin-react-hooks" then "add "react-hooks/rules-of-hooks": 2" and ""react-hooks/exhaustive-deps": 1" to rules and "react-hooks" to plugins. The rules are written by the actual react team

If you type in "import { ANIMALS } from "@frontendmasters/pet";" at the top of your file but you don't have this dependency, what will parcel do? 
- parcel will automatically install it, link dependencies and rebuild your package

How does React work in terms of rerendering? 
- Everytime something changes, it runs render function again

Say you just need to sort a list and you don't want to rerender everything, what does React have to deal with this? 
- you add a key to the element and essentially react will see that it is part of a unique list and rather than rerendering everything, it will just move the elements within that list. These keys need to be unique per user, so in a bigger application maybe by email or id, etc.


When does useEffect() run?
- after everything is rendered

How does useEffect() work? 
- everytime a certain condition changes, it will update something
- for example, in the pets app, when an animal is changed, it will update the breeds list to correspond to that animal 

The first argument in useEffect() is the callback function, what is the second argument?
- A list of dependencies, it is compulsory otherwise you'll get errors. Whenever any of these dependencies are updated, useEffect will call the callback function

