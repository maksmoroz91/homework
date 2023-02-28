'use strict';

class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}

const products = [
    new Product('Apple', 2, 5, 'Fruit'),
    new Product('Pineapple', 4, 8, 'Fruit'),
    new Product('Cucumber', 6, 10, 'Vegetable'),
    new Product('Tomato', 8, 8, 'Vegetable'),
];

const checkOperation = {
    contains: (value, query) => {return value.toLowerCase().includes(query)},
    starts: (value, query) => {return value.toLowerCase().startsWith(query)},
    ends: (value, query) => {return value.toLowerCase().endsWith(query)},
    ">=": (value, query) => {return (value >= query)},
    "<=": (value, query) => {return (value <= query)},
    "=": (value, query) => {return (value == query)},
    ">": (value, query) => {return (value > query)},
    "<": (value, query) => {return (value < query)},
};

function filterProducts(str, products ) {
    let arrResponse = [];
    let queryParams = str.split('&');

    products.filter(product => {
        let isDoneQuery = true;

        queryParams.forEach(queryParams => {
            let [name, operation, value] = queryParams.split('-');

            if (!value) {
                value = operation.split(/\D+/)[1];
                operation = operation.split(/[^<>=]/)[0];
            }
            if (!checkOperation[operation](product[name], value)) {
                isDoneQuery = false;
            }
        });
        (isDoneQuery) ? arrResponse.push(product) : isDoneQuery = true;
    });
    return arrResponse;
}

let strQuery = ('name-ends-ato&price-<=8&quantity-<=8&description-starts-ve');

console.log(filterProducts(strQuery, products));
