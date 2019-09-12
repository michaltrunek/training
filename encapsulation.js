// encapsulation without ES6 - Prototype version

// template for the object
function Product(_name, _price) {
    const name = _name;
    const price = _price;
    this.getName = () => { return name; };
    this.getPrice = () => { return price; };
}

function Book(_name, _price, _author) {
    Product.call(this, _name, _price);
    const author = _author;
    this.getAuthor = () => { return author; }
}

function Basket() {
    const products = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    this.addProduct = function(amount, product) {
        products.push(...Array(amount).fill(product))
    };
    this.calcTotal = () => { return products.map(product => product.getPrice()).reduce(reducer) };
    this.printShoppingInfo = () => {console.log('one has to pay in total: ' + this.calcTotal());}
}

// create new objects (new instances of classes)
const basket = new Basket();
const bread = new Product('bread', 1);
const faust = new Book('faust', 12.5, 'Goethe');

basket.addProduct(1, faust);
basket.addProduct(2, bread);
basket.printShoppingInfo();

// using prefix _ is a common convention to indicate the private member for the users