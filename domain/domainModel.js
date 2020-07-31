class Order {
    constructor(id, customer, lineItems) {
        this.id = id;
        this.customer = customer;
        this.items = lineItems; // a list of items
    }
}

class Customer {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class Item {
    constructor(id, name, price, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

module.exports = {Order, Item, Customer};
