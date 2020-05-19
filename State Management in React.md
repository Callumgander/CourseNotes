# State Management in React

What is the main job of React?
- to take your application state and turn it into DOM nodes

What are some of the different kinds of state?
- model data, view/UI state, session state, communication, location

What is the model data?
- it's like the nouns in your application, i.e. the products on amazon, the price of a book, a to-do on your to-do list

What is View/UI state?
- how your model data is displayed. Are the books in descending order based on price or ascending order, etc.

What is session state?
- is the user logged in, what are they able to see when they're logged in vs when they're not logged in etc. 

What is communication state?
- the time based component of state, so are we fetching data, are we removing data, are we rendering, etc.

What is the location state?
- where are we in the application, are we looking at a product, are we in account sett ings, are we on the home page 

When should you not use state to store something?
- if you can calculate it using props or if you're not using it in the render method 
- If you're not going to rerender it, don't store it in state

Should you use props to directly calculate state, as in fullName: props.firstName + ' ' + props.lastName?
- No, derive the computed properties directly from props then use them, e.g. `const fullName = firstName + ' ' + lastName` then use it in the render method as `<h1>{fullName}</h1>`

up to useeeffect and dependencies