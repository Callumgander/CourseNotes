# API Design in Node with Express v3

What is an API in the context of servers?
- A server that creates an HTTP interface for interacting with some data
- Application programming interface
- Usually a server on some remote machine that dictates how another application can interact with some data

What is REST?
- The most popular API design pattern, but is not the silver bullet, very blurry
- An API design that ceeombines DB resources, route paths, and HTTP verbs to allow applications describe what action they are trying to perform
- Popularized when SaaS products starting offering APIs for integrations 
- Works with basic models 
- Hard to scale with complex data models and client requirements 

What is Express?
- The standard API framework for Node.js
- Handles all the tedious tasks like managing sockets, route matching, error handling, and more 

What is MongoDB 
- Non-relational document store that is easy to get started and scales well
- ORM/ODM (object relational mapper/object data mapper(?))

What is Middleware?
- A list of functions that execute, in order, before your controllers
- Allow you to execute functions on an incoming request with guaranteed order
- They can also respond to request like a controller would, but that is not their intent

What might you use Middleware for?
- Authenticating, transforming the request, tracking, error handling

What is route matching?
- the process of matching a http request to some sort of data or functionality in the backend, say /hello to GET the hello file

What are the different ways Express can route match?
- exact, regex, glob, and parameter matching

What is the difference between put and post?
- Post is used to create new data, put is used to update it

What are schemas?
- Schemas hold the instructions for models. Things like validation, names, indexes, and hooks

What are controllers in the context of express?
- Controllers are just middleware but with the intent of returning some data
- Controllers handle what a Route + Verb combo can access from the DB
- Controllers implement the logic that interacts with our DB models
- You can generalize controllers to work for many models because we're going with a REST approach which requires CRUD actions on resources 

How do you set the status code of a response in express?
- res.status(400) or whatever the code is

Note on Auth
- you can never truly protect an API, but requiring authentication makes it a bit safer

What is authentication in the context of web development?
- Authentication is controlling if an incoming request can proceed or not

What is authorization in the context of web development
- Authorization is controlling if an authenticated request has the correct permissions to access a resource

What is JWT authentication?
- Json Web Token
- A bearer token strategy that allows the API to be stateless with user auth
- created by a combination of secrets on the API and a payload like a user object
- Must bee sent with every request where the API will then try to verify the token was created with the expected secrets

  



