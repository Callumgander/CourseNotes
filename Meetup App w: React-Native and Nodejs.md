- install yarn with yarn init
- add babel-preset-es2019 babel-register babel-polyfill with yarn add
- yarn add express
- create index.js
- add requires for babel-register, babel-polyfill and./server
- create server folder and create another index.js inside of that 
- import express to the server
- create a const app = express()
- create a const PORT = process.env.PORT || 3000
- listen to the port with app.listen and if an error pops up use console.error
- What are .fdsfds**rc** files?
- you will get an error when you use node index.js unless you create a .babelrc file and put { presets:"es2015" in it
- Create a config folder and the create a db.js file for your database 
- import mongoose
- export default, make some promise, etc. etc. DON'T UNDERSTAND
- UP TO 8.33 ish problem with MongoDB on running index.js
- MongoError: failed to connect to server [localhost:27017] on first connec
- FIXED: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
- install mongodb via brew, run it as a service, start with "mongo" in a terminal outside and node index.js will run correctly
- install nodemon
- yarn add -D nodemon
- whenever you change something, it automatically reloads (similar to parcel?)
- put this inside package.json, start with yarn dev and then use rs to reload
  
    "scripts": {
        "dev": "NODE_ENV=development nodemon index.js"
    }

- install middleware
- yarn add morgan body-parser
- so we can send json objects and get it inside a req from express
- morgan will console log all the server requests we are going to do
- create a modules folder inside server, and create a meetups folder inside of that
- create a model.js file and a controller.js file
- install babel-preset-stage-0
- yarn add babel-preset-stage-0
- create a routes.js file 
- create another index.js inside meetups
- then create another index.js inside modules
- add "app.use('/api', [MeetupRoutes]);" to server/index.js
- this caused SOOO many errors, some due to mongodb, some due to postman
- essentially, make sure  you use native es6 promises, not mongoose.promise because it's deprecated. make sure in postman you use http not https as the latter won't work when making requests to localhost
- create a postman POST request that essential practices sending a POST request to your db
- create a get route 
