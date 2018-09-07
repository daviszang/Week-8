// // Connection URL
const url = "mongodb://localhost:27017/";

// // Database Name
const dbName = 'mydb';

Option = {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true
}

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, Option, function(err, db) {
    if (err) throw err;
    console.log('connect to database successfully');

    var dbase = db.db("mydb");
    require('./create')(dbase);
    require('./add')(dbase);
    require('./remove')(dbase);
    require('./update')(dbase);
    require('./read')(dbase);
    db.close();
});