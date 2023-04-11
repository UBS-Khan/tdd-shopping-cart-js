module.exports = class Cart {
    items = [];
    totalPrice = 0;

    clearList = () => this.items = [];
    checkItems = () => this.items.length;
    addItem = (item) => {
        let itemPrice = item.price * item.quantity;
        this.items.push(item);
        this.totalPrice += itemPrice;
    }
}
