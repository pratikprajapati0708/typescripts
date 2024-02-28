"use strict";
//Pick in TypeScript -> Picks only the selected Value
function UserProfile(user) {
    console.log(`${user.name} ${user.age}`);
}
UserProfile({
    name: "Pratik",
    age: 20
});
