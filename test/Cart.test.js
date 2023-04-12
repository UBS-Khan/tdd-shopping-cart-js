const Cart = require("../src/Cart")
const Item = require("../src/Item")

test('AC1',()=>{
    //Arrange
    const assert = [];
    const cart = new Cart();
    //Act
    const result = cart.items;
    //Assert
    expect(result).toEqual(assert);
});

test('AC2',()=>{
    //Arrange
    const assert = 8;
    const cart = new Cart();
    const item = new Item("Mango", 4, false, 2)
    cart.addItem(item)
    //Act
    const result = cart.totalPrice;
    //Assert
    expect(result).toEqual(assert);
});

test('AC3',()=>{
    //Arrange
    const assert = ['Mango - x2', 'Banana - x4'];
    const cart = new Cart();
    const itemM = new Item("Mango", 4, false, 2)
    const itemB = new Item("Banana", 2, false, 4)
    cart.addItem(itemM)
    cart.addItem(itemB)
    //Act
    const result = cart.itemQuantities(cart.items);
    //Assert
    expect(result).toEqual(assert);
});