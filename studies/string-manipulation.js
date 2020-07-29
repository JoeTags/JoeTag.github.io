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
