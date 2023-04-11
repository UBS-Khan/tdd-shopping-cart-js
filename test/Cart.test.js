const Cart = require('../src/Cart.js')
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
    const item = new Item("Handbag", 25, false);
    cart.addItem(item, 2)
    //Act
    const result = cart.totalPrice;
    //Assert
    expect(result).toBe(assert);
})

