///////////////////////////////////////
//2. ES6 Classes

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

// Class expression
// const Person = class {}

// Class declaration
class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
        this.parents = [];
    }

    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    // alternative
    // calcAge = function () {
    //   console.log(2037 - this.birthYear);
    // }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName.toUpperCase();
    }

    // Static method
    static hey() {
        console.log('Hey there 👋');
        console.log(this);
    }
}

const jessica = new Person('Jessica Davis', 1996);
jessica.fullName = 'Alex T';
console.log(jessica);
console.log(jessica.fullName);
console.log(jessica._fullName);
jessica.calcAge();
console.log(jessica.age);
console.log(Person.hey());

console.log(jessica.__proto__ === Person.prototype);

Person.prototype.greet = function () {
    console.log(`Hey ${this.fullName}`);
};
jessica.greet();

// call a static method
const walter = new Person('Walter White', 1965);
Person.hey();

///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance methods
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log('Hey there 👋');
    }
}

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first!
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(
            `I'm ${2037 - this.birthYear
            } years old, but as a student I feel more like ${2037 - this.birthYear + 10
            }`
        );
    }
}
// console.log(StudentCl.prototype);
// console.log(PersonCl.prototype);

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

// Encapsulation: Protected Properties and Methods (_)
// Encapsulation: Private Class Fields and Methods (#)

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
    // 1) Public fields (instances)
    locale = navigator.language;

    // 2) Private fields (instances)
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;

        // Protected property
        // this._movements = movements;
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // 3) Public methods

    // Public interface
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    requestLoan(val) {
        if (this.#approveLoan(val)) {
            // if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
            return this;
        }
    }

    static helper() {
        console.log('Helper');
    }

    // 4) Private methods
    #approveLoan(val) {
        // _approveLoan(val) { // just a convention
        return true;
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1.#approveLoan(20));

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// console.log(acc1.getMovements());
// console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300)
    .deposit(500)
    .withdraw(35)
    .requestLoan(25000)
    .withdraw(4000);
// console.log(acc1.getMovements());