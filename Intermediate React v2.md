# Intermediate React v2

slides at bit.ly/react-v5

## Hooks 

useRef
- honestly still don't understand this
useReducer
- special type hook that is essentially a function that allows you to apply some action to state
useMemo
- basically allows you to cache state so that if you have computationally heavy functions being computed, you don't have to recalculate them each rerender
useCallback
- works in tandem with a memo, using memo(props) on the props going into the functional component. Essentially, as long as the props don't change, don't rerender the component. Usecallback just says this is the same function, pass back the same function everytime

DON'T USE USEMEMO AND USECALLBACK, unless you actually need to, it just makes your app more complicatede than it needs to be otherwise

useLayoutEffect
- for measuring elements in the DOM

useImperativeHandle
- will probably never use this one, mainly for library authors
- allows you to reverse the flow of state so a child can control it's parent 

## CSS in JS

- in short, use emotion

## Code Splitting

What is code splitting?
- you don't want to load every part of your site upfront on the first load, code splitting is dividing your code up

How to do code splitting in React?
- Import lazy and Suspense from react
- delete your import for files you don't need on the first load
- then declare it in this format ```const Details = lazy(() => import('./Details'))```
- around your router for that component, put ```<Suspense fallback={<h1> loading route .. </h1>}>```

Why would you want to server-side render? 
- allows react to prerender everything then send user the complete markup then react will take over the page once it's finished loading

How do you migrate your js project to typescript?
- install type script: npm install -D typescript 
- initate a typescript project: npx tsc --init 
- Configure the tsconfig.json
- Get types for react, react-dom, and reach router: npm install -D @types/react @types/react-dom @types/reach__router


Up to typing an error boundary