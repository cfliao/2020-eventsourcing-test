const {model, Schema} = require('mongoose');

const CustomerSchema = new Schema({
    id: String,
    name: String
});

function customerModel(connection) {
  return connection.model('Customer', CustomerSchema);
}

module.exports = {customerModel};