const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {
    user: 'root',
    password: 'example',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {

    if (err) throw err;

    const db = client.db("db");

    db.listCollections().toArray().then((docs) => {

        console.log('Available collections:');
        docs.forEach((doc, idx, array) => {
            console.log(doc.name)
        });

    }).catch((err) => {

        console.log(err);
    }).finally(() => {

        client.close();
    });
});