function testLastones() {
    const products = [
        {
            id: 10,
            name: "Laptop",
            quantity: 2,
            price: 120.50
        },
        {
            id: 4,
            name: "Mouse",
            quantity: 1,
            price: 10
        },
        {
            id: 20,
            name: "Monitor Gamer",
            quantity: 10,
            price: 200
        },  
    ];
    // some
    console.log(products.some(x => x.quantity <= 0));

    // every
    console.log(products.every(x => x.quantity > 0))
}

testLastones();