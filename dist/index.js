"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const res = sumOfAge({ name: "Pratik", age: 25 }, { name: "test", age: 29 });
console.log(res);
function Greet(firstName) {
    const greet = "Good Morning" + firstName;
    console.log(greet);
}
Greet("Pratik");
//type inference
function Sum(a, b) {
    return a + b;
}
const value = Sum(2, 3);
console.log(value);
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    return false;
}
const age = isLegal(23);
console.log(age);
function runaftersec(fn) {
    setTimeout(fn, 1000);
}
runaftersec(function () {
    console.log("hi there");
});
;
function isLegalUser(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
isLegalUser({
    age: 20
});
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
function doSomething(keypress) {
    console.log(Direction.left);
}
doSomething(Direction.up);
function identity(arg) {
    return arg;
}
let output1 = identity("mystring");
let output2 = identity(100);
output1.toUpperCase();
function getFirstElement(arr) {
    return arr[0];
}
const el = getFirstElement(["pratik", "prajapati"]);
const el2 = getFirstElement([{ fname: "pratikpp" }]);
console.log(el2.fname);
console.log(el);
