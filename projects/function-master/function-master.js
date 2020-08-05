//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let arr = [];                           // why doesn't object.values(object).join(" ") work
    for (let key in object) {
    if (typeof object[key] === 'string') {
         arr.push(object[key]);
    }
    
}
    return arr.join(" ");
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return "array";
    } else if (typeof collection === 'object') {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
                                                              //need to capitalize the first letter
function capitalizeWord(string) { 
    let upperCaseString = string.slice(0, 1).toUpperCase();
    let restOfWord = string.slice(1);                    // 1. slice the string, uprecase 1st index, then concat 1st index and
            return upperCaseString + restOfWord;            // rest of string
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {  
    let splitString = string.split(" ");
    let upperCaseArray = [];// substring. 
   for (let i = 0; i < splitString.length; i++) {
       upperCaseArray.push(capitalizeWord(splitString[i]));
   }
   return upperCaseArray.join(" "); 
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
    
            return "Welcome " + capitalizeWord(object["name"]) + "!";
  
    
    
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
   
            return capitalizeWord(object["name"]) + " is a " + capitalizeWord(object["species"]);
  

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
                                                // if (Object.hasOwnProperty(noises)) return noises.join(",")
function maybeNoises(object) {                  //return object["noises"].join(" ");
   for (let key in object) {
       if (object["noises"].length > 0) {
           return object["noises"].join(" ");
       } else if (object["noises"].length === 0){
           return "there are no noises";
       } 
   } 
    return "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //let newString = string.split(" ");
        for (let i = 0; i < string.length; i++) {
            if (string.includes(word)) {
                return true; 
            }
            
        }
       return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
        object["friends"].push(name);
        return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
        for (let key in object) {
           if (!object["friends"].includes(name)) {
                return false;
            }
            return true;
        } 
          if(!object.hasOwnProperty("friends")) {
            return false;
        } 
       
} 


//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {              //compare name frineds array with input array if 
    let nonFriendArray = [];                    // includes
    for (let i = 0; i < array.length; i++) {
    
    if((array[i]["name"] !== name) && !array[i]["friends"].includes(name)) {
         nonFriendArray.push(array[i]["name"]);
    }
    }
    return nonFriendArray;
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  
       if (!object.hasOwnProperty(key)) {
          object[key] = value;
            return object;
       }
       
  
     if (object.hasOwnProperty(key)) {
          object[key] = value;
           return object;
       } 
      
     
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties /////////////////////////////////// // 
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (let key in object) {
    for (let i = 0; i < array.length; i++) {
           if (key === array[i]) {
            // console.log(key, array[i]);
               delete object[key];
              // console.log(object);
           }
       }
  }     
}



//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
                                    // loop through array. if array has an element occur more than once remove it
function dedup(array) {   
   /* let newArray = [];// array methods: includes, indexOf, slice, 
       for (let i = 0; i < array.length; i++) {
           if (newArray.indexOf(array[i]) === -1) {
               newArray.push(array[i]);
           }
       }
       return newArray;*/
       let newArray = [];
       newArray = array.filter((element, index) => array.indexOf(element) === index);
       return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}