//Pick in TypeScript -> Picks only the selected Value

interface PickTypes{
    name : String,
    email : String,
    password : String,
    age : number
}

type UserPickProfile = Pick<PickTypes, 'name'|'age'>;

function UserProfile(user: UserPickProfile){
    console.log(`${user.name} ${user.age}`)
}

UserProfile({
    name :"Pratik",
    age: 20
})