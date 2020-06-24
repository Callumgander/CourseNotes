# Intro to GraphQL

Tools for this course
- node.js for runtime
- mongodb for our database
- mongoose for interacting with our database
- jest for testing everything

What is Graphql?
- A strongly typed query language and runtime for your data
- Open source and created by Facebook
- Just a spec, there are different implementations for different languages
- Gives clients the powre to describe exactly what data they want
- Strongly typed (think typescript for your data)
- Enables excellent developer tooling and experiences
- Can sit in front of any existing API because it's just a query language

GraphQL vs REST
- Different but sneakily similar
- GraphQL only has one URL. It doees not ned a resource url + verb combo. The request details are in a POST body (sometimes GET)
- In REST, the shape and size of the data resource is determined by the server, with Graphql its determined by the query (request)
- In REST, you have to make multiple API calls to retrieve relational data, with GraphQL, you can start with entry resource and traverse all the connections in one request
- In REST, the shape of the response is determined by whomever created the server, in GraphQL the shape is determined by the query
- In REST, a single request will execute on controller on the server, in GraphQL a request might execute MANY resolvers on the server 

We already have DB schemas so why use GraphQL schemas?
- GraphQL schema strictly defines what resources, how they relate, and how a client can consume them
- DB Schema is for keeping data consistent when entering our DB
- GraphQL schema is for defining what resources are available for querying, how they relate and how you can query them
- Both schemas can be the same, or not. DB schema is a good starting point for GraphQL schema
- GraphQL schema sits in front of your DB queries, it validates incoming request queries
- Some GraphQL tools create GraphQL APIs based off of your DB Schemas, and the other way around

What is Schema Definition Language (SDL) and why use it?
- Instead of using functions to create a schema, use a verbose, string based syntax for your schemas. Later you can transform that syntax into many other representations if needed 
- Much easier to read
- Can be composable
- Supported by all tools

What are scalar and object types in GraphQL?
- They describe resources that will be used in queries and mutations
- Scalar types are like built in primatives, e.g. string, int, boolean, ID, etc.
- Object types are custom shapes with fields that are either scalar types or other object types
- Object types fields also describe any arguments and or validations
- Types are the target for all requests

What are Query and Mutation Types in GraphQL?
- basically how you do CRUD on your GraphQL API
- Query type describes the different queries your API is capable of 
- A query operation is just a name, with possible arguments that eventually returns a type
- A mutation is the exact same thing, but with the intent of mutating the DB vs just reading 
- Queries and Mutations are what will be available to clients interacting with your API, think of them as your routes

What are resolvers?
- Like controllers, but instead resolve types all the way down
- resolvers are like controllers in a REST API, they are responsible for retrieving data
- Every query and mutation your schema has, must have resolver that returns the specified type
- Types and fields on types often have resolvers as well
- Incoming query dictates what resolvers run and in what order

How do you create resolves
- return the same shape as described in the schema, or delegate to another resolver
- Resolvers take a few args:
  - starting object (what the parent resolver returned or starting value from server)
  - args (any arguments from the incoming request)
  - context (shared context obj across all resolvers, like the req object in express)
  - info (advanced AST of the incoming request)
- any errors are caught and immediately send back to the client

up to field type resolvers