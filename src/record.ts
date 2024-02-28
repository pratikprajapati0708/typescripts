type Users = Record<string,number>

const user2: Users={
    "pratik" : 1,
    "hey" : 2
}

//Maps

type MyUser ={
    name : String,
    age : number,
    email : String
}

const users = new Map<string,MyUser>();
users.set("1",{name : "pratik",age: 25,email:"pratik@gmail.com"})
users.set("2",{name : "test",age: 20,email:"test@gmail.com"})

const myuser = users.get("1");
console.log(myuser);
