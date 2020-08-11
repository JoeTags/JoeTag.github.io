// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-joetags");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./JoeTag.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
  return  _.filter(customers, function(customer) {
        return customer.gender === "male";
    }).length
    }
    

//need to find the # of female customers(4).
var femaleCount = function(array) {
    return _.reduce(customers, function(accumulator, customer) {
        return accumulator + (customer.gender === "female");
    }, 0)
}

var oldestCustomer = function(array) {
    // compare the ages of the customers. customer.age > customer. 
      return _.reduce(customers, function(max, customer) {
           if (customer.age > max.age) {
               return customer.name;
          }
          
              return max;
      })
};
 

var youngestCustomer =  function(array) {
    // compare the ages of the customers. customer.age > customer.
    let theYoungest = array[0]["age"];
    let result;
    _.each(array, function(e, i, a) {
        if(array[i]["age"] < theYoungest) {
            theYoungest = array[i]["age"];
            result = array[i]["name"];
        }
    })
   return result;
};


var averageBalance = function(array) {
    // use reduce on balance property
    return _.reduce(customers, function(total, customer) {
        // convert string value to number
       let bankRoll = parseFloat(customer.balance.replace("$", "").replace(",", ""));   //.replace(/[^\$\,]/, '.')); // stupid comma messing me up
     return total + bankRoll;
    
    }, 0)/ customers.length;
    
    // something over here is messing me up
};


// use .length/2 or customers array

var firstLetterCount = function(array, letter) {
    
    return _.filter(customers, function(customer) {
        
        if(customer["name"][0].toLowerCase() === letter.toLowerCase()) {
            return customer["name"][0];
        }
            
    }).length;
    
};

var friendFirstLetterCount = function(array, customer, letter) {
    return _.each(array, function(e, i, a) {
    return _.filter(a[i]["friends"], function(e, i, a) {
          if(a[i]["name"][0].toLowerCase() === letter.toLowerCase()) {
            return customer.name[0];
        }
    }).length;
    })
};

var friendsCount = function(array, name) {
   let friendsOfFriends = [];
   _.each(array, function(e, i, a) {
       _.each(a[i]["friends"], function(element, index, arr) {
           if(arr[index]["name"] === name) {
              friendsOfFriends.push(array[i]["name"]);
           }
       })
   })
   return friendsOfFriends;
}




var topThreeTags = function(array) {
  let tagArray  = _.pluck(array, "tags");
  let tagCount = _.reduce(tagArray, function(tagObj, tag) {
      if (tagObj[tag]) {
          tagObj[tag] += 1;
      } else {
          tagObj[tag] = 1;
      }
      return tagObj;
  }, {});

let countsArray = [];
    for (let key in tagCount) {
        countsArray.push([key, tagCount[key]]);
        
    }
    countsArray.sort(function(a, b) {
        return b[1] - a[1];
    });
    
    let topThreeArray = countsArray.slice(0, 3);
    let topThreeWords = _.map(topThreeArray, function(array) {
        return array[0];
    });
    return topThreeWords;
};
// access array: loop through customers with each
// reduce the tag
var genderCount = function(array) {
    return _.reduce(customers, function(total, customer) {
        if (total[customer.gender]) {
            total[customer.gender] += 1;
        } else {
            total[customer.gender] = 1;
        }
        return total;
    }, {})
};
// use reduce to summarize the gender's of customers
// object will be output
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
