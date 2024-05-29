function testFilter() {
    const numbersList = [1,2,3,4,5,6,7,9,10];
    let suma = 0;
    numbersList.filter(x => x < 4).forEach((x) => {
        suma +=x;
    });
    console.log(suma);
    

    const branches = ["MAZDA", "TOYOTA", "NISSAN", "MERCEDEZ"];
    console.log(branches.filter(x => x.length > 5));
}
testFilter();