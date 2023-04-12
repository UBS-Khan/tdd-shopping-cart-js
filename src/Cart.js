module.exports = class Cart {
    items = []
    totalPrice = 0;

    addItem(item){
        this.items.push(item);
        const price = item.price * item.quantity;
        this.totalPrice += price;
    }

    itemQuantities = (items) => items.map(item => `${item.name} - x${item.quantity}`) 
}
