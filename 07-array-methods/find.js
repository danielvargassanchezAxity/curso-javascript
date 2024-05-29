function testFind() {
    const data = [1,2,3,4,5,6,7];
    const result = data.find((x) => x <= 3);
    const index = data.findIndex((x) => x <= 3);
    console.log(result);
    console.log(index);
}
testFind();