export function testReduce(): void {
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
            quantity: 3,
            price: 200
        },  
    ];
    let total2  = 0;
    products.forEach(item => {
        total2 += (item.price * item.quantity)
    });
    console.log(total2);


    const total = products.reduce((total, product) => total + (product.quantity * product.price), 0);
    const products2 = products.reduce((stringProduct, product) => stringProduct + ","+product.name, "");
    console.log(products2);
}