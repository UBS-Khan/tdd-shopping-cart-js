const Cart = require("../src/Cart")

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
    const result = cart.totalPrice();
    //Assert
    expect(result).toEqual(assert);
});