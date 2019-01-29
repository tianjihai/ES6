class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    middleInitial: string;
    lastName: string;
}

function greeter(person : Person) {
    alert("Hello," + person.firstName + " " + person.middleInitial + " " + person.lastName);
}

let user = new Student("Tian", "Ji", "Hai");

greeter(user);