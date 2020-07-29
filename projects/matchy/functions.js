/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, animalName) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === animalName) {   // checks animals array for property name that has value ==
            return animals[i];  // returns animal object                                        //animalName
        } 
        
    }
    return null;
}


////////////////////////////////////////////////////////////////////// Use the previous function search to replace and animal object
// Step 2 - Replace //////////////////////////////////////////////////  if statement that plugs name into search function and if true
//////////////////////////////////////////////////////////////////////  returns new object.
function replace(animals, name, replacement) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {   // checks animals array for property name that has value ==
            animals[i] = replacement;  // returns animal object                                        //animalName
        } 
        
    }
}


//////////////////////////////////////////////////////////////////////  remove -- delete animal object
// Step 3 - Remove ///////////////////////////////////////////////////  search-- loop through animals array and if animal name(test)
//////////////////////////////////////////////////////////////////////  equals that in the animals array. delete the animal object.
 function remove (animals, name) {
     for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {   // checks animals array for property name that has value ==
          // animals.shift(animals[i]);  //                                         //animalName
            animals.splice(animals.indexOf(animals[i]), 1);
            
        }
     }
     
 }

                                                                        // loop through animals array
//////////////////////////////////////////////////////////////////////  if (Object.hasOwnProperty(name) > 0)
// Step 4 - Add ///////////////////////////////////////////////////         Object.hasOwnProperty(species) > 0)
//////////////////////////////////////////////////////////////////////
    function add(animals, animal) {
        for (let i = 0; i < animals.length; i++) {
            if (animal.hasOwnProperty("name") > 0 && animal.hasOwnProperty("species") > 0 && animals[i].name !== animal.name) {
                animals.push(animal);
            } else {
                return null;
            }
        }
    }


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
