module.exports = class Cart {
    items = []; //Initialized an empty array.
    totalPrice = 0; 

    //This function adds an item to the items[] array.
    addItem(item){ 
        this.items.push(item);
        const price = item.price * item.quantity;
        this.totalPrice += price;
    }

    //This function takes items array and return item's name and it's quantity.
    itemQuantities = (items) => items.map(item => `${item.name} - x${item.quantity}`) ;

    //This function provides item's name, quantity and total price of the cart.
    itemizedList = (items) => items.map(item => `${item.name} - x${item.quantity} - $${item.price*item.quantity}`);
    
    //This function returns the items which are on Sale.
    onSaleItems = (items) => items.map(item => {
        if(item.onSale === true){
            return item.onSale && `${item.name} - x${item.quantity} - $${item.price*item.quantity}`
        }
        return
    });
}
