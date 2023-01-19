// Write a function addNumbers that takes in two numbers and a callback function. The addNumbers function should return the result of the two numbers being added, and the callback function should receive this result as an argument and log it to the console.

function addNumbers(num1, num2, callback)
{
    const result = num1 + num2;
    callback(result);

    

}
addNumbers(5, 7, function(result)
{
    console.log(result);
});

// Write a function multiplyNumbers that takes in two numbers and a callback function. The multiplyNumbers function should return the result of the two numbers being multiplied, and the callback function should receive this result as an argument and log it to the console.

function muiltiplyNumbers(num1, num2, callback, )
{
    const result = num1 * num2;
    callback(result);
    
}

muiltiplyNumbers(12, 8, function(result, callback){
    console.log(result);

});
// Modify the addNumbers and multiplyNumbers functions from the previous exercises to accept an optional third argument, which should be a function that takes in the result of the operation as an argument and returns the result with a string message. For example, if the result of the operation is 5, the function should return "The result is 5."

function multiplyNumbers(num1, num2, callback)
{
    const result = num1 * num2;
    if (callback && callback === 'function')
    {
        return "The value of multiplyNumbers is " + result;
    }
    return result;
}

multiplyNumbers(1, 2);

multiplyNumbers(2, 4, function(result){
});
    


    

// Write a function getUserData that takes in a user ID and a callback function. The getUserData function should simulate a server request to retrieve user data by the given ID, and should pass the retrieved user data to the callback function as an argument. The user data should be an object with the following structure:

// Copy code
// {
//   id: 1,
//   name: 'John',
//   email: 'john@example.com'
// }
// Modify the getUserData function from the previous exercise to accept an optional third argument, which should be a function that takes in the retrieved user data as an argument and logs it to the console.


