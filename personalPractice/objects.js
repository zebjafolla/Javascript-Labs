// Write a function called addTwoNumbers that takes in two numbers as arguments and returns the sum of those numbers.
function addTwoNumbers(num1, num2)
{
    return num1 + num2;
}
//console.log(addTwoNumbers(12, 3));

// Write a function called convertFahrenheitToCelsius that takes in a temperature in degrees Fahrenheit and returns the equivalent temperature in degrees Celsius.
function convertFahrenheitToCelsius(temp)
{
    return (temp - 32) / 1.8 ;
}
//console.log("The temperature in Celsius is " + Math.round(convertFahrenheitToCelsius(89)));

// Write a function called convertCelsiusToFahrenheit that takes in a temperature in degrees Celsius and returns the equivalent temperature in degrees Fahrenheit.

function convertCelsiusToFahrenheit(temp)
{
    return (temp * 1.8) + 32
}
//console.log("The temp in Fahrenheit is " + Math.round(convertCelsiusToFahrenheit(32)));

// Write a function called convertMilesToKilometers that takes in a distance in miles and returns the equivalent distance in kilometers.

function convertMilesToKilometers(dist)
{
    return dist * 1.60934;
}
//console.log("The distance in KM is " + convertMilesToKilometers(90));

// Write a function called convertKilometersToMiles that takes in a distance in kilometers and returns the equivalent distance in miles.

function convertKilometersToMiles(dist)
{
    return dist / 1.60934;
}
//console.log("The distance in Miles is " + convertKilometersToMiles(1039));

// Write a function called calculateAreaOfTriangle that takes in the base and height of a triangle and returns the area of the triangle.
function calculateAreaOfTriangle(base, height)
{
    return area = (1/2 * base) * height;
}
//console.log(calculateAreaOfTriangle(12, 23.5)); //<--- 141

// Write a function called calculateAreaOfCircle that takes in the radius of a circle and returns the area of the circle.
function calculateAreaOFCircle(rad)
{
    return area = (Math.PI) * Math.pow(rad, 2);
}
//console.log(calculateAreaOFCircle(12));

// Write a function called convertSecondsToMinutes that takes in a time duration in seconds and returns the equivalent time duration in minutes.
function convertSecondsToMinutes(seconds)
{
    x = seconds % 60;
    return (seconds - x) / 60;
}
//console.log("This would be " + convertSecondsToMinutes(112839) + " minutes with " + x + "s leftover.");

// Write a function called convertMinutesToSeconds that takes in a time duration in minutes and returns the equivalent time duration in seconds.
function convertMinutesToSeconds(time)
{
    return time * 60;
}
//console.log(`Time duration converting minutes to seconds: ${convertMinutesToSeconds(90009)}`);

// Write a function called calculateFactorial that takes in a positive integer and returns the factorial of that integer (i.e. the product of all the positive integers less than or equal to that integer). For example, the factorial of 5 would be 5 * 4 * 3 * 2 * 1 = 120.

function calculateFactorial(posint) 
{
    if (posint <= 0)
    {
        return 1;
    }
    return posint * calculateFactorial(posint - 1)
}
//console.log(calculateFactorial(5));

// Define an object called car that has properties for the make, model, and year of the car. Then, add a method to the car object called getDescription that returns a string describing the car, using the properties of the object. For example, the getDescription method for a car with make "Toyota", model "Corolla", and year "2022" should return the string "This car is a 2022 Toyota Corolla."

var car = {
    make: "Toyota",
    model: "Corolla",
    year: "2022",
    getDescription: function()
    {
        return `This car is a ${car.make} ${car.model} ${car.year}`;
    }
}
//console.log(car.getDescription());


// Define an object called person that has properties for the person's first and last name. Then, add a method to the person object called getFullName that returns the person's full name, using the properties of the object. For example, the getFullName method for a person with first name "Jane" and last name "Doe" should return the string "Jane Doe".

var person = {
    firstName: "Johnny",
    lastName: "babbits",
    getFullName: function(){
        return `${person.firstName} ${person.lastName}`;
    }
}
//console.log(person.getFullName());

// Define an object called rectangle that has properties for the width and height of the rectangle. Then, add a method to the rectangle object called getArea that returns the area of the rectangle, using the properties of the object. For example, the getArea method for a rectangle with width 10 and height 5 should return the value 50.

var rectangle = {
    width: 20,
    height: 56,
    getArea: function(){
        return this.width * this.height;
    }
}
//console.log(rectangle.getArea());

// Define an object called triangle that has properties for the base and height of the triangle. Then, add a method to the triangle object called getArea that returns the area of the triangle, using the properties of the object. For example, the getArea method for a triangle with base 10 and height 5 should return the value 25.

var triangle = {
    base: 25,
    height: 35,
    getArea: function(){
        return area = this.base * this.height / 2;
    }
}
//console.log(triangle.getArea());

// Define an object called circle that has a property for the radius of the circle. Then, add a method to the circle object called getArea that returns the area of the circle, using the property of the object. For example, the getArea method for a circle with radius 10 should return the value 314.16.

var circle = {
    radius: 5.56,
    getArea: function(){
        return area = Math.PI * Math.pow(this.radius, 2);
    }
}
//console.log(circle.getArea());

// Exercise 1

// Write a function called sum that takes two numbers as arguments and returns the sum of those numbers. For example, the call sum(2, 3) should return 5.

function sum(num1, num2)
{
    return num1 + num2;
}

// Write a function called isEven that takes a number as an argument and returns true if the number is even, and false if the number is odd. For example, the call isEven(5) should return false, and the call isEven(6) should return true.

function isEven(num){
    return (num % 2 !== 0) ? true : false;
}
//console.log(isEven(9));

// Write a function called max that takes three numbers as arguments and returns the largest of those numbers. For example, the call max(1, 2, 3) should return 3, and the call max(10, 5, 15) should return 15.

function max(num1, num2, num3){
    let max = num1;
    if (max < num2)
    {
        max = num2;
    }
    if (max < num3)
    {
        max = num3;
    }
    return max;
}
//console.log(max(10, 5, 15));

// Write a function called min that takes three numbers as arguments and returns the smallest of those numbers. For example, the call min(1, 2, 3) should return 1, and the call min(10, 5, 15) should return 5.

function min(num1, num2, num3){
    let min = num1;
    if (min > num2)
    {
        min = num2;
    }
    if (min > num3)
    {
        min = num3;
    }
    return min;
}
//console.log(min(10, 5, 15));



// Exercise 1

// Write a function called add that takes two numbers as arguments and returns their sum. Then, write a second function called subtract that takes two numbers as arguments and returns their difference. The subtract function should use the add function to calculate the result. For example, the call subtract(5, 3) should return 2, because 5 - 3 = 2.

function add(num1, num2){
    return num1 + num2;
}
    
function subtract(num1, num2){
        return num1 - num2;
    }

//console.log(`The result of the subtraction is ${subtract(6, 5)}, while the result of the addition is ${add(6, 5)}.`);

// Exercise 2

// Write a function called isPrime that takes a number as an argument and returns true if the number is prime, and false if the number is not prime. A prime number is a number that is divisible only by 1 and itself. To determine whether a number is prime, the isPrime function should call a second function called isDivisible that takes two numbers as arguments and returns true if the first number is divisible by the second number, and false otherwise. The isPrime function should use the isDivisible function to determine whether the given number is prime. For example, the call isPrime(7) should return true, because 7 is a prime number, and the call isPrime(6) should return false, because 6 is not a prime number.

// Exercise 3

// Write a function called getArea that takes the radius of a circle as an argument and returns the area of the circle. The getArea function should call a second function called square that takes a number as an argument and returns the square of that number. The getArea function should use the square function to calculate the area of the circle. The formula for the area of a circle is π * radius^2, where π is a constant that approximately equals 3.14. For example, the call getArea(2) should return 12.56, because π * 2^2 = 12.56.

var name = "mad";
name += " ";
name += "hatter";
console.log(name);

