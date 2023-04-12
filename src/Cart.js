module.exports = class Cart {
    items = []
    totalPrice = 0;

    addItem(item){
        this.items.push(item);
        const price = item.price * item.quantity;
        this.totalPrice += price;
    }
}
