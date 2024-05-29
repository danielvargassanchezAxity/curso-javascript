function testFill() {
    let fruits = ["MANGO","PLATANO","MANZANA","PERA"];
    const fruitsCopy2 = fruits;
    fruits = [];
    console.log(fruitsCopy2);
    
    const fruitsCopy = [...fruits];
    fruitsCopy.fill("UVA", 2, 4);
    console.log(fruitsCopy);
}

testFill();
// spread operator ...