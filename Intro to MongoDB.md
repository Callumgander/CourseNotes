# Intro to MongoDB

How do you show your databases in mongo's cli
- `show dbs`

How do you create a database in mongo's cli?
- `use DBNAME`

How do you verify that a database has been created?
- use `show collections` which if the database was created without errors will not return errors

Should you use the mongo cli in production?
- No, use the GUI, it's easy to mess things up with the cli, stick to the GUI

How do you connect to a mongodb database from a nodejs application?
- 
``` 
    const mongoose = require('mongoose)

    const connect = () => {
        return mongoose.connect('mongodb://localhost:27017/NAMEOFTHEDB')
    }

```

How do you link the schema and the model in mongodb
- create a scheme then pass the scheme as the second argument into the mongoose.model() method