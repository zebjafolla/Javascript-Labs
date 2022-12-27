// Create a function greet() that takes in a name as an argument and returns a greeting message. Then, use the call() method to invoke the greet() function with a different name as an argument each time.

// function blob(name, age, height) {
//     this.name = name;
//     this.age = age;
//     this.height = height;
//     this.greeting = function greet(name){
//         return `Hello ${name} it is very nice to see you again!`;
//     }
// }

// const blob1 = new blob("zeb", 36, "18 inches");
// const blob2 = new blob("joey", 18, "22 inches");
// const blob3 = new blob("harvey", 77, "33 inches");


// console.log(blob1.greeting.call(blob2, 'John'));

//Create an object person with properties name, age, and greet(), which is a function that returns a greeting message using the person's name. Use the apply() method to invoke the greet() function on the person object, passing in an array of arguments to the function.

const person = {
    name: 'bobby',
    age: 12,
    greet: function greet(){
        return `Hello ${this.name} its really good to see you again!`;
    }
}

console.log(person.greet.apply(null, "Alice"));
