function testForeach() {
    const numbersList = [1,2,3,4,5,6,7,9,10];
    let suma = 0;
    
    numbersList.forEach((value, index) => {
        if (value < 4) {
            suma += value;
        }
    });
    console.log(suma);
}
testForeach();