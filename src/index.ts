interface User {
    name : String,
    age : number
}

function sumOfAge(user1 : User, user2 : User){
    return user1.age + user2.age;
}

const res = sumOfAge({name : "Pratik",age : 25},{name : "test",age:29});
console.log(res);



