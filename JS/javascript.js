//typeof()
let variable = "color"; //string
variable = 123; //123
variable = 3 > 5; //false
variable = null; //null
variable = 0 / 0; //NaN

//type Coersion
5 == 5; //true
5 == "5"; //true
5 === "5"; //false
false == 1; //false
false == 0; //true
true == 12; //false
-0 === 0; //true
//strings have priority
7 + 7 + 7; //21 number
7 + 7 + "7"; //147 string
"7" + 7 + 7; //777 string
7 + "7" + 7; //777 string

//Objects in JS
var person = {
  name: "Jimmy",
  age: 74,
}; //{name:"Jimmy",age:74}
//constructor
function Human(name, age) {
  this.name = name;
  this.age = age;
}
let brad = new Human("brad", 33);
//maker
function makeHuman(name, age) {
  let h = {};
  h.name = name;
  h.age = age;
  return h;
}
//another maker
function makeHuman2(name, age) {
  var p = {
    name,
    age,
  };
  return p;
}

//Arrays
arr = [10, 20, 30];
arr[9] = 5; //arrays are mutable
arr[12] = "string";
arr[4] = [5, 7, "other string"];

//functions 3 invocations

//functions form - "this" refers to the global object 'window'
function divideByZero(kitty, kat) {
  console.log("hey kitty kitty");
  return kitty + kat;
}
//console.log(null, " string",' please'); ignores third arg
//functions cannot be overloaded

//Constructor Form = "this" refers to the object being made
var conFunc = new (function (a, b) {
  return a + b;
})();
//console.log(conFunc.constructor(2, 3)); to call this

//Method form -"this" refers to the object it's based off
person.getInfo = function () {
  return this.age;
};

var pizza = "not pinapple";
let crazy = function (at, least, three) {
  var cake = "thiscake";
  pizza2 = "pinapple";
  console.log(pizza);
  console.log(at);
  console.log(least);
  console.log(three);
  console.log(arguments[5]);
};
//crazy(1, 2, 3, 4, 5, 6); //returns 1,2,3,6

/**
 *  Function scope
        things that are declared inside a function
        use the var keyword to declare in block
        if we leave out the var keyword it creates an inplicit global
    Global scope
        anything declared outside of a function
        accessable anywhere
    Shadowing
 *
 */
//-----------------------------------------------------------
//Anonymous function presentation
//What is it:
//      A function that was declared without any named identifier

//1. It can be stored in a variable

//function declaration
function func1() {
  console.log("Hello");
}
//function expression
var funcA = function func2() {
  console.log("Everything");
};
//function expression with anonymous function
var funcB = function () {
  console.log("is fine");
};

// 2. can lose access to this function
// funcB = "Override var funcA";

// func1();
// funcA();
// funcB();

//function as argument
// var add = function (a, b) {
//   console.log(a + b());
// };

// add(5, function () {
//   return 5;
// });
//-----------------------------------------------------------
//closure
var add = (function () {
  var count = 0;
  return function () {
    count += 1;
    return count;
  };
})();
add();
