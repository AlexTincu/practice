
///////////////////////////////////////
// 3. Object.create
const PersonProto = {
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
    calcAge() {
        console.log(2037 - this.birthYear);
    }
};

const steven = Object.create(PersonProto);
steven.init('Alex', 1990);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);

// steven.name = 'Steven';
// steven.birthYear = 2002;

console.log(steven);
console.log(steven.__proto__ === PersonProto);

steven.calcAge();
sarah.calcAge();


///////////////////////////////////////
// Inheritance Between "Classes": Object.create

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const person = Object.create(PersonProto);
person.init('Jay', 2010);
person.calcAge();

const jay = Object.create(StudentProto);

jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
