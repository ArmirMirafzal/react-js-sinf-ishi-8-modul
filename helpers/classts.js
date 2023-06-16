var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Person = /** @class */ (function () {
    function Person(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
    Person.prototype.eat = function () {
        this.run();
        console.log("".concat(this.name, " is eating..."));
    };
    return Person;
}());

var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Doctor.prototype.treatment = function () {
        console.log("".concat(this.name, " is treatmenting..."));
    };
    Doctor.prototype.run = function () {
        console.log("".concat(this.name, " doctor is running..."));
    };
    return Doctor;
}(Person));

var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.teach = function () {
        console.log("".concat(this.name, " is teaching..."));
    };
    Teacher.prototype.run = function () {
        console.log("".concat(this.name, " teacher is running..."));
    };
    return Teacher;
}(Person));

var teacher = new Teacher("Arslonbek", "12.12.1212");
teacher.teach();
teacher.eat();
var doctor = new Doctor("armir", "12.12.1212");
doctor.treatment();
doctor.eat();
