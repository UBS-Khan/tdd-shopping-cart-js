module.exports = class Cart {
    items = []
    totalPrice = 0;

    addItem(item){
        this.items.push(item);
        const price = item.price * item.quantity;
        this.totalPrice += price;
    }

    itemQuantities = (items) => items.map(item => `${item.name} - x${item.quantity}`) ;

    itemizedList = (items) => items.map(item => `${item.name} - x${item.quantity} - $${item.price*item.quantity}`);
    
    onSaleItems = (items) => items.map(item => {
        if(item.onSale == true){
            return `${item.name} - x${item.quantity} - $${item.price*item.quantity}`
        }
    });
}
