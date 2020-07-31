const {model, Schema, createConnection} = require('mongoose');

const CustomerSchema = new Schema({
    id: String,
    name: String
});

function customerModel(connection) {
  return connection.model('Customer', CustomerSchema);
}

function connection() {
    // returns a promise
    return createConnection('mongodb://127.0.0.1:27017/', {
        user: 'root',
        pass: 'example',
        dbName: 'db',
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = {customerModel, connection};