console.log("Hello QAs at Core-Code.io");

class Dog {
  constructor(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  }

  // Declare private variables
  _attendance = 0;

  getAge() {
    // Getter
    return this.calcAge();
  }

  calcAge() {
    // calculate age using today's date and birthday
    return Date.now() - this.birthday;
  }

  bark() {
    return console.log("Woof!");
  }

  updateAttendance() {
    // add a day to the dog's attendance days at the petsitters
    this._attendance++;
  }
}

// instantiate a new object of the Dog class, and individual dog named Rufus
const rufus = new Dog("Rufus", "02/01/2011");

// let's check what the object has
console.log(rufus);

// call one of the dog's methods
rufus.bark();

// let's change the dog's name and birthday - setting the name
rufus.name = "Rufus QA Changed Name";
rufus.birthday = "12/06/2015";

// let's check what the object has (now changed)
console.log(rufus);

// let's change the dog's name - updating attendance
rufus.updateAttendance(); //attendance = 1
rufus.updateAttendance(); // attendance = 2

// let's check what the object has (now changed)
console.log(rufus);

// modifying the method for that instance to a custom one
rufus.bark = function () {
  msg = "Hi! my name is " + this.name;
  msg += " and my birthday is on " + this.birthday;
  console.log(msg);
};

// calling rufus's method
rufus.bark();

// instantiate a new object of the Dog class, and individual dog named Rufus
const fuffy = new Dog("Fuffy", "02/01/2008");

// let's check what fuffy has
console.log(fuffy);

// call parent's method
fuffy.bark();
