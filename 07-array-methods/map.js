function testMap() {
    const users = [
        { id: 1, name: "daniel" },
        { id: 2, name: "daniel" },
        { id: 3, name: "daniel" },
    ]
    console.log(users.map(x => {
        return {
            id: x.id,
            firstName: x.name
        }
    }));
    // const numbersList = [1,2,3,4,5,6,7,8,9];
    // console.log(numbersList.map(x => x.toString()));
}

testMap();