const Cart = require('../src/Cart.js')
const Item = require('../src/Item.js')

test('AC1',()=>{
    //Arrange
    const assert = 0;
    const cart = new Cart();
    //Act
    const result = cart.checkItems();
    //Assert
    expect(result).toBe(assert);
})

test('AC2',()=>{
    //Arrange
    const assert = 50;
    const cart = new Cart();
    cart.clearList();
    const item = new Item("Handbag", 25, false, 2);
    cart.addItem(item)
    //Act
    const result = cart.totalPrice;
    //Assert
    expect(result).toBe(assert);
})

test('AC3',()=>{
    //Arrange
    const assert = ['Handbag - x2', 'Gum - x5'];
    const cart = new Cart();
    cart.clearList();
    const item = new Item("Handbag", 25, false, 2);
    const item2 = new Item("Gum", 5, false, 5);
    cart.addItem(item)
    cart.addItem(item2)
    //Act
    const result = cart.itemQuantities();
    //Assert
    expect(result).toBe(assert);
})

