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

test('AC4',()=>{
    //Arrange
    const assert = ['Mango - x2 - $8', 'Banana - x4 - $8'];
    const cart = new Cart();
    const itemM = new Item("Mango", 4, false, 2)
    const itemB = new Item("Banana", 2, false, 4)
    cart.addItem(itemM)
    cart.addItem(itemB)
    //Act
    const result = cart.itemizedList(cart.items);
    //Assert
    expect(result).toEqual(assert);
});

test('AC5',()=>{
    //Arrange
    const assert = 16;
    const cart = new Cart();
    const itemM = new Item("Mango", 4, false, 2)
    const itemB = new Item("Banana", 2, false, 4)
    cart.addItem(itemM)
    cart.addItem(itemB)
    //Act
    const result = cart.totalPrice;
    //Assert
    expect(result).toEqual(assert);
});

test('AC6',()=>{
    //Arrange
    const assert = ['Carrot - x1 - $1'];
    const cart = new Cart();
    const itemO = new Item("Orange", 1, false, 1)
    const itemC = new Item("Carrot", 1, true, 1)
    cart.addItem(itemC)
    cart.addItem(itemO)
    //Act
    const result = cart.onSaleItems(cart.items);
    //Assert
    expect(result).toEqual(assert);
});