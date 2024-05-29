function testConcat() {
    const cars = ["volvo", "mazda", "toyota"];
    const newCars = ["Jab", "Kia"];

    console.log(cars.concat(newCars).concat(cars));
    console.log(cars);
    console.log(newCars);
}

testConcat();