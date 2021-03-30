class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`hello ${this.name}, welcome you are ${this.age} old`);
    }
}
module.exports = Person;