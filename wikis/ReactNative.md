GENERAL ROADMAP
- install everything + get emulators working
- create a components folder and then create .js files for each page of the app
- go inside those files and build structure skeletons and link all the navigation
- link these files to the main app.js using createStackNavigator and createAppContainer
- Create the database, add various functions for: looking at contents of db, searching for an item, adding items to db
- 

Things you need
- node, yarn, npm, react-native
- check versions with ____ -v, e.g. node -v

Installing React Native
- sudo npm install -g react-native-cli

Creating a new app
- react-native init fileName

Running the app
- cd into the folder
- react-native run-ios
- react-native start / when in the folder to run the app
- react-native run-android 

Issues with Java
- https://stackoverflow.com/questions/46513639/how-to-downgrade-java-from-9-to-8-on-a-macos-eclipse-is-not-running-with-java-9

Issues with Gradle
- https://stackoverflow.com/questions/54776936/command-failed-gradlew-bat-installdebug

Opening files from terminal
- sudo nano fileName
- control + x to exit

Running gradle from cmd on mac
- https://stackoverflow.com/questions/41700798/gradlew-command-not-found

Adding React Native Navigation Header
- yarn add react-navigation --save
- yarn add react-native-gesture-handler --save
- react-native link react-native-gesture-handler

Creating a folder for components and components files in the root of the app folder
- mkdir components
- touch components/ProductScreen.js
- touch components/ProductDetailsScreen.js
- touch components/ProductAddScreen.js
- touch components/ProductEditScreen.js

Moving up a level in terminal
- cd ..

How to import components from React
- `import React, { Component } from 'react';`

How to import react native specific things, like views
- `import { Button, View, Text } from 'react-native';`

Exporting components in React
- export default ______
- eg. can use a class `export default class Dog()`

Difference between render and return in React
- render is a method that tell react what to display. return in a method or function is the output of the method or function

Tutorial on how to use react snippets
- https://scotch.io/tutorials/the-best-react-extension-for-vs-code

How to create buttons that link to other pages
-
    `<button title="Go to Home"> this.props.navigation.navigate('Product')}
            /&gt;`
- onPress={() =&gt; this.props.navigation.navigate('nameOfThePage')

How to create buttons that link to other pages
- 

    </button><button title="Go back"> this.props.navigation.goBack()}
        /&gt;
- onPress={() =&gt; this.props.navigation.goBack() is the key part

How do you style a view
- you create the view tag then put style={{ cssHere }} inside of it then put the css inside like below

          <view style="{{flex:"></view></button>
      

What does Static navigationOptions do?
- it's used to set activity action bar background color, title text color and title text itself and some other style options

How to import components to the main app
- `import ProductScreen from './components/ProductScreen';`

What does createAppContainer do?
- Containers are responsible for managing your app state and linking your top-level navigation to the app environment
- Can also be configured to persist your navigation state
- https://reactnavigation.org/docs/en/app-containers.html

Making sure to install react-navigation-stack
- yarn add react-navigation-stack
- https://reactnavigation.org/docs/en/stack-navigator.html

Fixing the TypeError: null is not an object (evaluating '_RNGestureHandlerModule.default.Direction') ERROR
- `npm install react-native-gesture-handler`
- `react-native link react-native-gesture-handler`
- Above things didn't work but going into the ios folder, typing pod install, seemed to work

Creating an offline CRUD application using local data
- need to install SQLite Storage + required UI/UX module
- `react-native-sqlite-storage`
- `yarn add react-native-sqlite-storage --save`
- `yarn add react-native-elements --save`
- `react-native link`

What does .then() do in JS?
- returns a Promise, takes two callback functions, one for is the promise is successful, one for if it fails

How to put a variable in a string
- use `` not '' or ""
- use ${variableName} to hold the variable in the string
- so something like `Prod ID: ${row.prodId}` (in this program the `` just make it code)

how do you execute sql code in JS
- first  you use this.initDB().then((dv) =&gt; { db.transaction((tx) =&gt;
- then you use tx.executeSql('TYPE IN SQL HERE')
- if you want to use variables, use the following format "tx.executeSql('FROM * Product WHERE prodId = ?', blah) where blah is the variable you insert where the ? is in the command

How to show or display the list of products?
- replace all the imports in ProductScreen.js with StyleSheet, FlatList, ActivityIndicator, View, Text (React-native), ListItem, Button (react-native-elements), and Database (SQLite)
- `import React, { Component } from 'react';`
- `import { StyleSheet, FlatList, ActivityIndicator, View, Text } from 'react-native';`
- `import { ListItem, Button } from 'react-native-elements';`
- `import Database from '../Database';`

What is an ActivityIndicator?
- a components for displayinng a loading action (the little spinny circle things)

What is a constructor()?
- a constructor for a React components is called before it is mounted
- Typically they are only used for two purposes:
- initializing local state by assigning an object to this.state
- binding event handler methods to an instance

When we create a constructor, why is the first thing we do to call super()?
- otherwise this.props will be undefined in the constructor, which can lead to bugs

What does the .bind method do?
- it binds the argument to the method prior to .bind, allowing it to be used in the prior methods callback
- e.g. this.handleClick.bind(this) allows this to be used in the callback for handleClick

What does componentDidMount() do?
- sets up subscriptions, initalization that requires DOM nodes should go here

What is .catch()?

- a method with a callback function that triggers whenever a promise is rejected