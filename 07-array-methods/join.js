function testJoin() {
    const cars = ["BMW", "Nissan", "Mercedez"];
    let result = cars.join(",");
    console.log(result);


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
    console.log(products.map(x => x.name).join(","));
}
testJoin();