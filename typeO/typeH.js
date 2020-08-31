var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var human = /** @class */ (function () {
    function human() {
        this.number = 0;
    }
    human.prototype.increment = function (n) {
        this.number++;
    };
    return human;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return student;
}(human));
var person = new student();
person.increment(5);
console.log(person.number);
