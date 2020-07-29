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
        