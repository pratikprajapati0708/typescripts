"use strict";
const user2 = {
    "pratik": 1,
    "hey": 2
};
const users = new Map();
users.set("1", { name: "pratik", age: 25, email: "pratik@gmail.com" });
users.set("2", { name: "test", age: 20, email: "test@gmail.com" });
const myuser = users.get("1");
console.log(myuser);
