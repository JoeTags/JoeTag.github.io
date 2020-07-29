/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/* There are three properties that define the behavior of Javascript variables. These are reassignment, 
* hoisting and scope. These properties are important because it effects how Javascript interprets and executes
* our code. Above, we discussed how variables can be reassigned new values. Below, we discuss hoisting which is javascript's
* process of reading all of the code before executing actions and hoisting variables or functions to the top of our code. Scope
* is the space that code is created. I think of it as a room where certain actions can be performed. For example, we cook in the 
* kitchen, but  cannot in the bathroom. That is because each room is created for a specific action. That is scope. A programming 
* space where specific actions take place.
*
*/
//A. var: This is a variable that is bring phased out by let as Javascript creates more structure to reduce bugs.//
/* One of the confusing aspects of var is it's ability to have access to scope outside the blocks of code from within
* which it was created. var variables are hoisted to the top of their code. This means you can reference it before
* declaring.
*/
        console.log(typeof x === "string"); // prints undefined. referenced but no value.
        
        var x = "Joe";   // example of hoisting. the declared x variable is hoisted, while the value remains.
        
        console.log(typeof x === "string"); // prints true. 
        
//B. let: Essentially, let is the new var. An updated version of the var variable holder. The benefit of the the let update is that//
/* it pins variables to their scope. This means that it is only accessible within the scope it was created. This will help
* programmers reduce bugs in their code and make it cleaner and easier for other programmers to navigate.
*/

        let newString = "The virus has changed our world forever";
            newString = "Isn't the virus a hoax?"; // example of let reassignment
            
//C. const: This is a variable holder that prevents the variable from being reassigned.("constant" ) It has all the same//           
// properties as let except it's used when the programmer wants to ensure that a value will be static and unable to be changed.//
       
        const birthday = "06/14/1983"; // a value we do not want to be changed.
        
// Hoisting //
/*   This is the process by which the Javascript interpreter sweeps through the code and hoists functions or var variables.
*    This can be helpful with functions if we want to call a function for an action that we have yet to decide upon. 
*       
*/
        add(3, 2);  // Here the function is called before the function is created. Hoisting!!
        
        function add(a, b) {  // notcie our keyword function followed the function definition add.
            return a + b;     // Inside the parentheses are our parameters. These are placeholders for our arguments.  
        };                      // We return the parameters and execute the logic data. In this case, we use an arithmetic 
                                // assignment to add whatever arguments are passed into the function's parameters.
        
// DATATYPES: //
/*    These are categorizations of the different types of values Javascript utilizes.
*       -Number         3 or 4 or 344
*       -Boolean        true or false
*       -String         "hey there"
*       -NaN            not a number
*       -undefined       value is not defined 
*       -null           absence of value
*       -array          []
*       -object         {}
*       -function       function() { return };
*       -Infinity and -Infinity
*        They are are broken down into two major
* categories. We have simple and complex datatypes. Simple or primitive datatypes are copy by value whereas comple datatypes are
* copy by reference.
*
*       Simple: These are immutable values. They don't hold or collect any other types of data. Operations on these types of
*               values return new values. They only hold 8 bytes of memory. 
*
*       Complex: These are datatypes that are collections of simple datatypes. They hold references to values and the Javascript
*               interpreter looks to those references to find access those values.
*
*/

// 1. Number: 8 bytes of data it is a numeral value //
    let num = 3;
        num = 4;
        num = 3 + 4;
        console.log(num); // prints 7.. An action taken on a simple datatype returns a new simple datatype.//
 // 2. String: A string is made up character data that is wrapped in quotes to form words or sentences//
        let firstName = "Joe";
        console.log(firstName); //prints the string "Joe".       
// 3. Boolean: true or false data. We usually use this in an if statement to determine wht type of action we want to take//
                //place. It is an important part of logicd involved in programming.//

        console.log(typeof num === 'number'); // prints true //

// 4. Array: an array is a numerically indexed, ordered list of values. It can contain any type of primitive or complex data.//
        let allArray = ["cats", 4, {legs: 4}, true];
// 5. Object: an object is a collection of key/value pairs. It is like a bucket that holds different items in no set order.//
        let studyObject = {
                simple: 3,
                complex: allArray,  // objects hold reference to simple and complex data.
        };
//6. Function: This is a type of data that contains a block of code and lets us execute that code whenever we want.//
                // It is thought of as logic data because our code executes an action based on a set of given instructions.//
               
                add(2176, 5629385); // This is a function call. add is the name of a function declared earlier in our code.
                                    // The two numbers are known as arguments. These are passed into our function body. See line 77.//
//7. Undefined: A value that has not been defined. When a variable is not intitialized or set to a value, it's undefined. //                                     
                //When a function doesn't return a value, that is also undefined;
                let holiday;
                console.log(holiday);  // prints undefined;
               console.log(add());  
                                
//8. Null: The absence of value. This is set intentionally by a programmer. It is considered false. //
        const blackhole = null;
//9. NaN : When the result of an operation that expects numerical data receives a piece of data it can not resolve, it returns NaN.
       console.log(add(true, 3));  //prints NaN
//10. Infinity and - Infinity: A numeric value representing infinity or negative infinity. In Javascript, these datatypes are greater than any //       
                           // other number and are useful when expecting results with large numeric values.
//11. While discussed earlier, the differerence between simple and complex datatypes are:
/*
*       Simple: These are immutable values. They don't hold or collect any other types of data. Operations on these types of
*               values return new values. They only hold 8 bytes of memory. COPY BY VALUE.
*
*       Complex: These are datatypes that are collections of simple datatypes. They hold references to values and the Javascript
*               interpreter looks to those references to find access to those values. COPY BY REFERENCE.
*
*/
//12.  BY COPY:  The values are copied directly into the variable at the exact place it occurs in the code.//
/*     BY REFERENCE: The value is a reference to data that is held in a memory address by Javascript. This
*                    is because the size of the data is too big to hold in an 8 byte datatype.
*/


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
        
        
        //STRING MANIPULATION//
/*
*    1. With Operators:  we can manipulate strings in Javascript to concatenate strings, to accumulate strings in a variable.
*
*/      
    let output = "shush"; 
        output += "shhhSHHHHshhh!";
        console.log(output); // prints shushshhhSHHHHshhh!
        
    let pizza = "PizzaHut";
    let taco = "TacoBell";
    let combinationPizzaHutTacoBell = pizza + " & " + taco;
    console.log(combinationPizzaHutTacoBell);
/*
*   2. With string methods: String methods are Javascripts unique ability to treat a primitive value as an object. It embues
*                           a series of methods and properties that allow us to access and manipulate strings. For instance, m
*                           many of the same methods that we use on arrays can be used on strings.
*       examples: .length, index based data accessing, slice, splice, search are just a few
*/
// .slice method: returns a new string from a portion of the string it is called upon. It makes a copy. Extremely useful for functional programming.//
    let paperString = "craft, wrapping, rolling";
      let newStr =  paperString.slice(17, paperString.length); // where to start and where to end(not included, unless .length is used)
        console.log(newStr, paperString); // paperString remains unchanged, newStr prints a new string with rolling 
    
// .length: returns the length of the string //
    console.log(paperString.length); // prints 24
    
//  .indexOf method: takes a string and returns the first occurrence of the specified text that is called. //

        console.log(paperString.indexOf("craft")); // prints 0

// CONTROL FLOW //

/*      This is the series of actions that our program takes based on the conditional statements that we "ask" our program.
*   There are infinite possibilities we can create from evaluating conditions to either a truthy or falsy value. This flow is     
*   controlled by executing one action after another based on these results.
*
*       if:  This is the first conditional statement or condition that we evaluate. It is followed by a block of code that 
*           executes based on (if) the condition resolves to true or false. We can use it to execute an action based on the
*           the first instance of a truthy value or we can use it to filter out falsy values by ignoring conditions that are
*           truthy.
*
*       else if: We use else if statements when we need to evaluate more than one condition. We can chain together any number
*               of else if statements but it can make our code unreadable and may be preferential to use a switch statement
*               if there are many conditions. The block of code that we want to execute in our else if statement is going to
*               be different than the block of code that executes in our if statement. It might be code that executes if the 
*               if statement was not true or vice versa. It may also be that a condition was not equal to a value in our if
*               statement but id equal to that value in the else if.
*
*       else:   This is the default statement where we don't evaluate a specific condition. However, if none of the other
*               conditions resolve to truthy/falsy the program will execute a block of code. 
*
*
*       switch: This is a more concise version of chaining else if statements together. It's used in the same way and looks like a 
*               function in structure. It takes an input to be evaluated and the all the subsequent statements or cases that follow              
*               will execute code if the case is resolved to truthy. We use a break statement that executes if the condition/ case
*               resolves to truthy/ falsy to end the switch evaluation otherwise the code will continue to evaluate the following]
*               cases. At the end, we place a default statement which acts similarly to the else statement but it is not required.
*/          
        let weather = "rainy";
        
        if (weather) {
            console.log("Raindrops keep falling on my head");
        };
        
        let dinner = "Tacos";
        if (dinner === "Spaghetti") {
            console.log("We're having spaghetti.");
        } else if (dinner === "Quiche"){
            console.log("We're having Quiche");
        } else {
            console.log("Better order take out");
        };
        
        const treesOnBlock = "Magnolia";
        
        switch (treesOnBlock) {
            case "Walnut":
                console.log("The tree is Walnut.");
                break;
            case "Chestnut":
                console.log("The tree is Chestnut.");
                break;
             case "Magnolia":
                console.log("The tree is Magnolia.");
                break; 
                default:
                console.log("I don't know what tree that is.");
        };
        
        
        //  LOOPS  //
        
/*     
*     1.  While, For, In Loops
*
*       while loops: the while loop is best used in situations where we don't know when our loop will end or we want to know how
*                   many times a condition occurs. It is important that every while loop has an incrementer/ decrementer set 
*                   when we create our loop. Between the condition and our incrementer/ decrementer we put a block of code to 
*                   be executed until our loop ends. It is very powerful and can crash the server if our loop doesn't have an end(infinite loop).
*
*       for loop: This is the Javascript workhorse. It's used on Arrays. The for loop has three parts: the initialization where our loop will start
*               it has a stop condition where our loop will end and the incrementer/ decrementer that will allow us to test
*               different to values to see if they meet a specific condition for our program to evaluate.
*
*       for in loop: This is used to iterate/ loop over an object's key/value pairs so we can get the value of that pair.
*                   In the way a for loop iterates over each array's index. The for in loop registers each of the object's keys.
*
*/


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


