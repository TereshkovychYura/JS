/* let Person = {
  name: "Jason",
  age: 26,
  ShowPerson() {
    console.log("Name => ", Person.name);
    console.log("Age => ", Person.age);
  },
  SetName(name) {
    if (typeof name == "string") {
      this.name = name;
    }
  }
};

Person.ShowPerson();
Person.SetName("Jack");
Person.ShowPerson(); */

let Person = [
  {
    name: "Jason",
    age: 26,
    ShowPerson() {
      console.log("Name => ", this.name);
      console.log("Age => ", this.age);
    },
    SetName(name) {
      if (typeof name == "string") {
        this.name = name;
      }
    }
  },
  {
    name: "Jesica",
    age: 22,
    ShowPerson() {
      console.log("Name => ", this.name);
      console.log("Age => ", this.age);
    },
    SetName(name) {
      if (typeof name == "string") {
        this.name = name;
      }
    }
  }
];
// console.log(Person);

//  const onePerson = Person.map(item => {
//   item.ShowPerson();
// });

// function Plus(a, b) {
//   return a + b;
// }

// console.log("Result => ", Plus(2, 6));

// function Plus(...params) {
//   let result = 0;
//   for (let i = 0; i < params.length; i++) {
//     result += params[i];
//   }
//   return result;
// }

// console.log(Plus(6, 6));
// console.log(Plus(6, 6, "i love js"));

const Minus = function(a, b) {
  return a - b;
};

// console.log("Minus => ", Minus(8, 2));

const Multiple = (...params) => {
  let result = 1;
  for (let i = 0; i < params.length; i++) {
    result += params[i];
  }
  return result;
};

// const App = params => console.log(id);

//App(32);

function User(name, age) {
  this.name = name;
  this.age = age;

  this.ShowUser = function() {
    console.log("Name =>", this.name);
    console.log("age =>", this.age);
  };
}

let user1 = new User("Bob", 30);

user1.ShowUser();

let user2 = new User("Tom", 28);

user2.ShowUser();
