const mongo = require('mongoose');

function dbConnection() {
    // returns a promise
    return mongo.createConnection('mongodb://127.0.0.1:27017/', {
        user: 'root',
        pass: 'example',
        dbName: 'db',
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

const CustomerSchema = new mongo.Schema({
    id: String,
    name: String
});
(async () => {
    let connection;
    try {
        connection = await dbConnection();
        const CustomerModel = connection.model('Customer', CustomerSchema);
        const customer1 = new CustomerModel({id: '123', name: 'john'});
        await customer1.save();
    } finally {
        connection.close();
    }
})();







