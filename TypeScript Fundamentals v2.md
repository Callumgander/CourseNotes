# TypeScript Fundamentals v2

What is TypeScript?
- An open-source typed, syntactic superset of JS, developed by Microsoft
- You can think of it as a static analysis tool that does a lot of checking on your code base
- Compiles to readable JavaScript
- Comes in three parts: Language, Language Server and Compiler
- Works seamlessly with Babel 7
  
Why would you add types?
- Encode contraints and assumptions,as part of developer intent
- Catch common mistakes (i.e. incomplete refactors)
- Move some runtime errors to compile time
- Provide your consumers (including you) with a great developer experience

What this course will teach you
- Adding type information to variables, functions and classes
- Configuring the compiler
- A practical strategy for incrementally converting JS to TS
- Parameterizing interfaces and type aliases with generics
- Conditional, mapped and branded types
- TS Compiler API basics 

What are some typescript flags?
- ```tsc file.ts --target ES2015```
- ```tsc file.ts --target ES2017 --module commonjs``` basically compiles it  so it can be used in node because node uses commonjs imports and exports



