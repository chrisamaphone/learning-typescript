function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
// var user = "Jane User";
// var user = [0,1,2]
var user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
