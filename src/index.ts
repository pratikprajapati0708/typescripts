interface User {
    name : String,
    age : number
}

function sumOfAge(user1 : User, user2 : User){
    return user1.age + user2.age;
}

const res = sumOfAge({name : "Pratik",age : 25},{name : "test",age:29});
console.log(res);



function Greet(firstName : String){
    const greet = "Good Morning"+ firstName;
    console.log(greet);
    
}

Greet("Pratik");

//type inference
function Sum(a : number,b : number):number{
    return a + b;
}

const value = Sum(2,3);
console.log(value);

function isLegal(age : number) : boolean{
    if(age > 18){
        return true;
    }
    return false;
}

const age = isLegal(23);
console.log(age);

function runaftersec(fn : ()=> void){
    setTimeout(fn,1000);
}
runaftersec(function(){
    console.log("hi there");
    
})

interface UserV{
    name? : String,
    age: number
};
function isLegalUser(user : UserV){
    if(user.age > 18){
        return true;
    }
    else{
        return false;
    }
}
isLegalUser({
    age :20
})


enum Direction{
    up,
    down,
    left,
    right
}

function doSomething(keypress : Direction){
    console.log(Direction.left);
}

doSomething(Direction.up);


function identity<T>(arg : T):T{
    return arg;
}
let output1 = identity<string>("mystring");
let output2 = identity<number>(100);

output1.toUpperCase();


function getFirstElement<T>(arr : T[]):T{
    return arr[0];
}

interface Userss{
    fname : string;
}
const el = getFirstElement<string>(["pratik","prajapati"])
const el2 = getFirstElement<Userss>([{fname : "pratikpp"}])
console.log(el2.fname);
console.log(el);