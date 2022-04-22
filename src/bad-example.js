console.log("Hello QAs at Core-Code.io");

// Object of one individual dog
var rufus = {
  name: "Rufus",
  birthday: "02/01/2011",
  age: function () {
    return Date.now() - this.birthday;
  },
  attendance: 0,
};

// Object of second individual dog
var fluffy = {
  name: "Fluffy",
  birthday: "01/12/2019",
  age: function () {
    return Date.now() - this.birthday;
  },
  attendance: 0,
};

console.log(rufus);
console.log(fluffy);
console.log(rufus.age());
console.log(fluffy.age());