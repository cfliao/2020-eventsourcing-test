const mongoose = require('mongoose');

function createConnection() {
    // returns a promise
    return mongoose.createConnection('mongodb://127.0.0.1:27017/', {
        user: 'root',
        pass: 'example',
        dbName: 'esdb',
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

// const connection = createEventStoreConnection();
// connection.on('error', err => console.log(err));
//
// // readyState 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
// connection.then(() => {
//     console.log(connection.readyState);
// }).catch(reason => {
//     console.log(reason);
// }).finally(() => {
//     connection.close();
//     console.log(connection.readyState);
// });

module.exports = {createConnection};