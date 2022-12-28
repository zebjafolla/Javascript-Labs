

var answer = "shark";
function response() //<--- function so dont have as many lines
{
    console.log("You have a " + answer + " ' '.")
}
function addOnIf() //<---- tells user if .. else statement was used
{
    console.log("This statement was made using the if ... else statement");
}
if (answer == "Ford" || answer == "Chrysler" || answer == "Mitsubishi" || answer == "Porsche" || answer == "Honda" || answer == "Dodge")
    {
        response();
        addOnIf();
    }
else 
{
    console.log("Try again. Please respond with make Ford, Chrysler, Mitsubishi, Porsche, Honda or Dodge.");
    addOnIf();
}

//<--- end of 'if... else' statement section


console.log("\n"); //<-- breaks up answers





function addOn() //<---- tells user switch statement was used
{
    console.log("This response was made with the switch statement");
}

switch (answer)
{
    case "Ford":
        response();
        addOn();
  
  addOn();      break;
    case "Mitsubishi":
        response();
        addOn();
        break;
    case "Chrysler":
        response();
        addOn();
        break;
    case "Porsche":
        response();
        addOn();
        break;
    case "Honda":
        response();
        addOn();
        break;
    case "Dodge":
        response();
        addOn();
        break;
    default:
        console.log("You didnt input a make or model we sell. Please try again.");
        addOn();
        break;
}