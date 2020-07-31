class Customer {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class Command {
    constructor(id, type, timestamp, name, content) {
        this.id = id;
        this.type = type;
        this.timestamp = timestamp;
        this.name = name;
        this.content = content;
    }
}

class Event {
    constructor(id, type, timestamp, name, target, delta) {
        this.id = id;
        this.type = type;
        this.timestamp = timestamp;
        this.name = name;
        this.target = target;
        this.delta = delta;
    }
}


module.exports = {Customer, Command, Event};