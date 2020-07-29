// OPERATORS //

// Act on our data. They peform OPERATIONS like assigning or comparing values to variables. They can perform math operations//
// on two or more values. They are classified by what operations they perform and how many operands(the value acted on) they require.//

//1. Assignment operators: //
                var blueBlood = "vein"; // equal sign in the operator.        

//2. Arithmetic operators: These perfrom mathematical operations on values.( +, -, * , /, %) //
                            // they can be unary and binary.
        let mathOperationsBegin = (((3 + 2) * 5 ) / 5);
        let multiply = 4 * 4; // asterisk is the multpier
        let divide = 4 / 4; // forward slash is divide
        let drModulo = 4 % 4; // modulus returns the remainder of two numbers
        let negative = -1; // number is negative
//3. Comparison operators: ( <, >, <=, >=) These operations resolve our values to true or false //
        console.log(5 > multiply); // prints false 5 is not less than 16.
        console.log(1 >= divide);  // prints  true

//4. Logical operators: (&&, ||, !)//
/*          && assesses two conditions both of which must resolve to true
*           || assesses two conditions one of which must resolve to true
*           ! the bang operator which flips the truthiness of a value to false.
*/
            function ageCheck(num) {
                if (num < 21 && num > 18) {
                    console.log("You can enter but you can't drink");
                }
            }
            ageCheck(19);
//5. Unary operators (!, typeOf, -): These operators only take one value to operate on.
    console.log("4" !== 4); // prints true
    console.log(typeof num === 'number'); // prints true;

//6. Ternary operator (a ? b : c): The only example of an opertion that takes three values.
/*      This is used in place of a conditional if statement. Its a feature of ES6. 
*       it takes  a condition to evaluate (?) an expression to execute if truthy (:) an expression
*       to execute if falsy
*/

        function isitFree(item) {
            return item ? "yes" : "no"; // evaluates whether item is true or false returns "yes" or "no"
        }
        console.log(isitFree(false)); // prints "no"
        
        