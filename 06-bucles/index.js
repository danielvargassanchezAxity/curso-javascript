let counter = 1;
let back = false;

for (counter; !back; counter++) {
    console.log("Iteracion en el for: ", counter);
    back = counter === 10;
}

back = false;
counter = 1;
while (!back) {
    console.log("Iteracion en el while: ", counter);
    back = counter === 10;
    counter++;
}

back = false;
counter = 1;
do {
    console.log("Iteracion en el do while: ", counter);
    back = counter === 10;
    counter++;
} while (!back)