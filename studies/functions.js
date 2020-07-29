            // FUNCTIONS //

 /*
 *         1. There are two steps to creating a function. The first step is declaring the function. This is where we decide what
 *          it is exactly that we want our function to do. The second step is calling our function where we plug in some values
 *          to be tested or acted upon.
 */
                function addNameHere(parameter1, parameter2) {
                    return parameter1 + parameter2;
                }
                addNameHere("argument1", "argument2")
 
 
 /*          2. The difference between a functions parameters and its arguments are that parameters are just placeholders for the
 *              arguments whereas arguments are the values that we to plug into the function. 
 *
 *          3. Function Syntax
 */
            function profit(cost, price) {
                return price - cost; 
            }
            console.log(profit(4.00, 12.00));
            
            
 /*         4. Assigning a function to a variable
 *
 */
            let crispy = function(food, time) {
                if (food) {
                    console.log(time);
                }
            };
            
/*          5. After a function is declared the programmer decides what type of input will be evaluated. These are known as the 
*               the parameters of our function. They stand in place for the input value or arguments to be evaluated. Every function
*               creates a value as a result of some action. We get this value by using a return statement or returning the value
*               from the function. 
*
*           6. Scope is a feature that protects or utilizes variables based on where they are created. Inside of a function 
*               variables that are created have local or child scope. They are protected in other words they can only be used
*               inside of that function. Global or parent scope are variables that are created outside of the function. These
*               can be accessed by the function. 
*/
                function parentScope(){
                    let parentVar = "80";
                    function childScope() {
                        let babyVar = "1";
                        console.log(parentVar); // functions have access to variables that exist outside of their scope(global)
                    }
                    parentScope();
                    console.log(babyVar); // babyVar isnt defined because it is local to the function childScope
                    
                }                       
/*
*
*           7. Closure is essentially the ability of a function to continue to have access to variables in its global or parent
*               scope. This is especially valuable and vital because we may decide to alter the information in our global or 
*               parent scope and yet the function we defined can stil have access to those values and execute the actions defined
*               within its body to return a value.
*/            
