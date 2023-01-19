window.onload = function()
{
    var suspects = ["bart", "lisa", "homer", "marge", "moe", "ralph"];
    var url = ["../Bart/bart.html", "../Lisa/lisa.html", "../Homer/homer.html", "../Marge/marge.html", "../Moe/moe.html", "../Ralph/ralph.html"]
    for (i = 0; i < suspects.length; i++)
    {
        var yes = document.getElementById(suspects[i]);
        yes.addEventListener("click", function () 
        {
            for (i = 0; i < suspects.length; i++)
            {
                if (this.id == suspects[i])
                {
                    
                    var newWindow = window.open(url[i], "bartwindow", "width=800 height=800");
                    // Create a button element
                    var button = document.createElement("button");
                    button.innerHTML = "Close Window";
                    // Add an event listener that closes the window when the button is clicked
                    button.addEventListener("click", function() {
                    newWindow.close();
                    });
                    // Append the button to the new window's body
                    newWindow.document.body.appendChild(button);
                }
            }
        });
    }
}

// var newWindow = window.open(url[i], "bartwindow", "width=800, height=800");

// // Create a button element
// var button = document.createElement("button");
// button.innerHTML = "Close Window";

// // Add an event listener that closes the window when the button is clicked
// button.addEventListener("click", function() {
//   newWindow.close();
// });

// // Append the button to the new window's body
// newWindow.document.body.appendChild(button);


// newWindow.addEventListener("load", function ()
// {
//     let closeButton = document.createElement("button");
//     closeButton.innerHTML = "Click to Close";
//     document.body.appendChild(closeButton);
//     closeButton.addEventListener("click", function() 
//     {
//         newWindow.close();
//     });
// });
