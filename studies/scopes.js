/*            // SCOPE  //
*
*
* Now you see me, now you don't//
*
* Scope refers to the accessibility of different variables throughout our program.
* There are seversal types of scope:
*       1. Global
*       2. Local/Function
*       3. Block
*       4. Parent/Child
*
*   //Global//
*   This scope refers to varaiables that are declared outside of other scopes. This means that the variables
*   are declared outside of functions, if statements, or for loops.   
*/
        let message = "";           // since we declared message in global scope. our function can access it.
        function doSomething() {    // Therefore, we do not need to redeclare it within the function.
            message = "what?";      // When we call the function and log message again we print "what?" because
            console.log(message);   // the message was declared globally.
        }
        doSomething();
        console.log(message);
/*
*
*   // Local/Function //
* 
*   This refers to variables that are declared within a function. They can only be accessed while inside the
*   function or within any functions that are nested within that function. In the case of nested scopes,
*   we refer to the varying levels as parent/ child scope. A function nested within another function can access
*   variables outside of it but this does not work the other way around.
*/

        function print() {
            var letter = "a";    // var is a variable that is function scoped. This is the only time it is not
            console.log(letter); // hoisted to the global scope.
          function printSomethingElse() {
              letter = "b";
          }      
          printSomethingElse();
          console.log(letter);   // prints b because letter accesses the var letter declared in the parent scope.
        }                        // after we call the function it prints the reassigend letter.
            console.log(letter); // throws an error. letter is not defined.
            
            
    //  Block //   
/*
*   This refers to variables that are declared within  if else statements or for loops. The block is the
*   the piece of code between the curly braces. Anything that is declared within that block only has value
*   within that block. If you make refrence to a const or let before declaration within a block you will encounter
*   some issues. Const will throw an error and let will say that it is undefined.
*
*   Let is confusing becuse it is hoisted to the top of its own scope but not hoisted to the top of the program.
*   If you were to refrence let before it is declared globally it throws an error, however within block it is
*   hoisted and will read undefined!!!!
*/  
            
            