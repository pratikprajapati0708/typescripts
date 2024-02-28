const user = {
    name : "harkirat",
    age : 21
}

user.name = "asdf"

//above we can change the value of reference variable in const 
//so we need readonly

type User1={
    name: String,
    age : number
}

const user1 :Readonly<User1> ={
    name :'pratik',
    age : 20
}

//user1.age = 21;  -> will not allow due to readonly

interface Config{
    endpoint : String,
    APIkey : String
}

const config : Readonly<Config> ={
    endpoint : "https//pratikprajapati.com",
    APIkey : "ehvhdhe11"
}

//config.APIkey = ""
