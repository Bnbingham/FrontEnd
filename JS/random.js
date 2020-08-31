let today = new Date();
let currentHour = today.getHours();
let greeting;

//Flow controls is nearly indentical to Java
if (currentHour > 18) {
  greeting = "good evening";
} else if (currentHour > 12) {
  greeting = "good afternoon!";
} else if (currentHour > 0) {
  greeting = "get away from me. i need coffee";
} else {
  greeting = "welcome";
}
//document.write('<h3>'+greeting+'</h3>');// not quite secure

/*
    Template Literals
        Template literals are enclosed by the back-tick 
        characters `` instead of single quotes. Template
        literals can contain placeholders. These are 
        indicated by the dollar sign and a set of 
        curly braces
         ${expression}. Whitespace included in the 
         template literal affects the way that the text is displayed.
*/

//better way with template literals. Cleaner syntax(intro'd in ES6)
document.write(`<h3> hello this my greeting ${greeting}</h3>`);

/*
    var vs. let vs. const
        var
            
            Before ES6, the var keyword was the primary way to declare a variable in JavaScript. Variables declared
            using var are allowed to be reassigned, and their scope can be either global or local (function) level.
            Variables declared using var are also subject to something known as 'variable hoisting', which we will
            cover later on.
        let
            Since ES6, the let keyword has been the preferred way to declare variables in JS. Variables declared using
            let are also able to be reassigned, however their scope is restricted to the block that they were declared 
            in.
        
        const
            This keyword may be obvious, but in case it isn't, its purpose is to declare a variable that cannot be
            reassigned after its initialization. Variables declared using const have a scope that is restricted to
            the scope that they were declared in.
*/

const PI = 3.14159;
console.log(PI);
const a = function () {
  console.log("Test");
};
const TAX = 0.08;
//Prototype
//Arrow Notation
//Classes
