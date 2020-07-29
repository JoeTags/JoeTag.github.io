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
*/          // while loop
                let sheep = 0;
                let sleep = "Zzzz";
                
                while (sheep < 10) {
                    sleep += sleep;
                    console.log(sleep);
                    sheep++;
                }
                
            // for loop
            
            let pets = ["dog", "cat", "fish", "bird"];      // increment through each index of the pets array
                                                            // until we reach the end of the array.
            for (let i = 0; i < pets.length; i++) {         //
                console.log(pets[2]); // prints fish        //
            }
                
            // for in loop //
            
            let loops = {
                for: "arrays",
                forIn: "objects",
                while: "working with numbers" 
            }
            
            for (let key in loops) {
                console.log(key);  // prints the key
                console.log(loops[key]); // prints the values of the key
            }