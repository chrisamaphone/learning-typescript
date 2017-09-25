interface Person {
  firstName : string;
  lastName : string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

// var user = "Jane User";
// var user = [0,1,2]
var user = {firstName: "Jane", lastName: "User"};

document.body.innerHTML = greeter(user);

