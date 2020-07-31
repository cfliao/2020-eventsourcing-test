const repo = require('./repo');
const connection = repo.connection();
connection.on('error', err => console.log(err));
const CustomerModel = repo.customerModel(connection);

const {connect} = require('mqtt');
const mqtt = connect('mqtt://localhost');

const {v4: uuid} = require('uuid');
const {Event, Command} = require('./model');

mqtt.on('connect', () => {
    mqtt.subscribe('customer');
});

mqtt.on('message', (topic, rawMessage) => {
    const message = JSON.parse(rawMessage.toString());
    console.log(message);
    if (message.type === 'COMMAND') {
        const event = process(message);
        mqtt.publish('customer', JSON.stringify(event));
    } else if (message.type === "EVENT") {
        apply(message);
        //console.log(message);
    }
});

// update and persist model state
// 還有update的部份沒寫
function apply(eventMessage) {
    if (eventMessage.name === "CustomerAdded") {
        const customer = new CustomerModel(eventMessage.to);
        customer.save(err => {
            if (err) throw err;
            console.log(JSON.stringify(eventMessage.to) + ' saved.');
        });
    }else if(eventMessage.name === "CustomerUpdated"){
        // 先找出要更新的，再更新
    }
}

// generate event by command
function process(commandMessage) {
    if(commandMessage.name === "CreateCustomer")
        return new Event(uuid(), 'EVENT', new Date(), 'CustomerAdded', undefined, commandMessage.content);
    else if(commandMessage.name === "UpdateCustomer") {
        // 更新物件中指定的欄位
        // 先找出目前的
        // 再找出之後的
        return new Event(uuid(), 'EVENT', new Date(), 'CustomerUpdated', undefined, commandMessage.content);
    }

}
