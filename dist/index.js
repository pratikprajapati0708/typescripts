"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const res = sumOfAge({ name: "Pratik", age: 25 }, { name: "test", age: 29 });
console.log(res);
