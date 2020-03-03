- install yarn with yarn init
- add babel-preset-es2019 babel-register babel-polyfill with yarn add
- yarn add express
- create index.js
- add requires for babel-register, babel-polyfill and./server
- create server folder and create another index.js inside of that 
- import express to the server
- create a const app = express()
- create a const PORT =  process.env.PORT || 3000
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
- create a postman GET request that gets all entries in your db

BACKEND DONE (for now)

- install expo (process different to video as has been totally overhauled)
- expo may be one of the coolest bits of software I've ever seen
- start a new project with blank project with expo and create it inside the meetupME folder
- create an api.js file
- "yarn start" to run backend server
- getting "possible unhandled promise rejection (id: 0): TypeError: undefined is not an object (evaluating 'data.meetups'), for whatever reason the frontend react native code isn't processing the GET request properly because the server shows that the request is being sent and in postman requests work fine, definitely something to do with componentDidMount function
- https://stackoverflow.com/questions/55140139/react-native-async-array-map-undefined-is-not-an-object useful
- https://stackoverflow.com/questions/51534747/typeerror-this-state-patients-map-is-not-a-function
- Got another error related to state.____.map not being a function, I was twicking bits of code, constantly reloading and suddenly reset after an experiment and it was working fine. I have no idea why but I guess I understand the process of state in React a bit better now
- cmd + D in ios and click debugger to open react-native debugger
- npm start to start expo

part 2
- work on group model
- install equimper's eslint rules
- make a .eslintrc and extend the rules
- make a .editorconfig file 
- add eventDate to schema
- create a groups module and then add a controller, index, model and routes.js file to the module
- write the schema for the groups model
- write the controller for the groups model using an async request and resolve thingie
- if the request's name has not name or is not a string, return errors
- shift + cmd + d to copy line in vscode
- to select multiple instances of the same keyword press cmd + d and then repeated click d to select the next option as well and then you can type and delete or replace them

up to 19:31

- it gets pretty complicated, essentially it's about creating the createmeetup functionality and tying it to a specific group and sorting out the routes for such
- addMeetup is a static function 
- was getting an error on the group.meetups.push(meetup) line
- use unshift instead of push as it's deprecated
- https://stackoverflow.com/questions/48607918/mongoerror-unknown-modifier-pushall-in-node-js
- up to third video 
- 