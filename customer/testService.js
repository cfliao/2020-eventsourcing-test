const {connect} = require('mqtt');
const client = connect('mqtt://localhost');
const {v4: uuid} = require('uuid');
const {Command} = require('./model');

setInterval(() => {
    const msg = new Command(uuid(), 'COMMAND', new Date(), 'CreateCustomer', {id: uuid(), name: randomString()});

    client.publish('customer', JSON.stringify(msg));
    console.log('sending: ' + JSON.stringify(msg));
}, 1000);

function randomString(length = 6) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}