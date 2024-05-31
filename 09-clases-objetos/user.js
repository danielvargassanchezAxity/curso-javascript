export class User {
    name = '';
    age = 0;
    constructor(name = '', age = 1) {
        this.name = name;
        this.age = age;
    }

    showInformation() {
        console.log(`Hola soy ${this.name}, tengo ${this.age} años`);
    }
}