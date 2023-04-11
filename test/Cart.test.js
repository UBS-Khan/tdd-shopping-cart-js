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