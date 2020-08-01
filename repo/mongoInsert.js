const {connect, Schema, model, connection} = require('mongoose');

connect('mongodb://127.0.0.1:27017/', {
    user: 'root',
    pass: 'example',
    dbName: 'esdb',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 4
});

const CustomerSchema = new Schema({
    id: String,
    name: String
});

const CustomerModel = model('Customer', CustomerSchema);

connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// connection.once('open', function () {
//
//     const customer1 = new CustomerModel({id: '123', name: 'john'});
//     customer1.save(err => {
//         if (err) throw err;
//         console.log('saved.');
//         connection.close();
//     });
//
// });




