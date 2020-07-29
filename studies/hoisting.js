// HOISTING //

/*  The general idea of hoisting is that Javaascript Interpreter is going to sweep through the code before it executes any of our programs.
*   And while this happens it "hoists" certain variables and function definitions to the top of the scope and holds it in memory. 
*   This can be confusing because where a variable or function appears in the code doesn't determine how we may utilize it.
*   A great example is that we can call a function at the top of our code whilst the function definition is coded below it.
*   The biggest issues with hoisting confusion is going to occur with nested scopes and variables that are declared in these scopes.
*/

// var //

/*  This is a variable whose definition gets hoisted to the top of whatever scope it exists in. If it's in the global scope, it's going to the top.
*    The definiton and not the value gets hoisted. So if you try to call or referene it before the initialization it will be undefined.
*    It's interesting to note that var is scoped to functions and both are hoisted to the top of our programs. 
*/

// const and let //

/*  These are both block scoped or local scoped. If we decare them within some curly braces(scope) then we can only access them while
*   inside those curly braces. However, if we declared a variable with let in the parent scope and then reassigned that variable in
*   the child scope that woud work just fine. When we try to access variables outside of their scope we get an error: [variable] is
*   not defined. If we intitialize a variable within the same scope before declaring it. It will log to the console as undefined.
*   In this sense, let is hoisted within its own scope. However, not with const! That will give us an error: not defined.
*/

    let myGarden = "herbs";
    console.log(neighborsGarden); // undefined. hoisted from all the way down on line 36.
    console.log(herGarden); // throws an error. not defined. not globally hoisted
    if (true) {
        console.log(herGarden); // prints undefined. Hoisted to top of ITS scope. 
        let herGarden = "flowers";
        myGarden = "award-winning herbs"; // reassignment. child scope accesses parent scope
        console.log(herGarden);  // prints flowers
    };
    
    var neighborsGarden; 
    neighborsGarden = "It's sad to look at";
    
    // function expression //
    
/* A function expression will behave the same way that var gets hoisted. The definition will be hoisted to the top of its scope
*  while the value stay where the code exists. And just like var if we call it before the initialization it will come back undefined.
*/  



let cook = prep("knife", "vegetables"); // error prep is not a function

let prep = function(tools, ingredients) {
    if (ingredients) {
        return tools;
    }
};
   