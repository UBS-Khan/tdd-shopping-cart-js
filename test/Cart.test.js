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