interface PickTypes{
    name : String,
    email : String,
    password : String,
    age : number
}

type PickProfile = Pick<PickTypes, 'name'|'age'>;

//Partial types- mark everything as optional
type PartialUser = Partial<PickProfile>

function DisplayUser(user :PartialUser){
    console.log(`${user.name} ${user.age}`)
}

DisplayUser({
    name : "pratik"
})