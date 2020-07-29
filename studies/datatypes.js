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
               
                //add(2176, 5629385); This is a function call. add is the name of a function declared earlier in our code.
                                    // The two numbers are known as arguments. These are passed into our function body. See line 77.//
//7. Undefined: A value that has not been defined. When a variable is not intitialized or set to a value, it's undefined. //                                     
                //When a function doesn't return a value, that is also undefined;
                let holiday;
                console.log(holiday);  // prints undefined;
              // console.log(add());  
                                
//8. Null: The absence of value. This is set intentionally by a programmer. It is considered false. //
        const blackhole = null;
//9. NaN : When the result of an operation that expects numerical data receives a piece of data it can not resolve, it returns NaN.
       //console.log(add(true, 3));  //prints NaN
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