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
      return _.reduce(customers, function(min, customer) {
            if (customer.age < min.age) {
                min = customer.age;
              return min;
          }
              return customer.name;
      })
      
};;

var averageBalance = function(array) {
    // use reduce on balance property
    return _.reduce(customers, function(total, customer) {
        // convert string value to number
       let bankRoll = parseFloat(customer.balance);   //.replace(/[^\$\,]/, '.')); // stupid comma messing me up
        return total + bankRoll;
    }, 0) / customers.length;
};


// use .length/2 or customers array

var firstLetterCount = function(array, letter) {
    const regex2 = new RegExp(letter, "i");
    return _.filter(customers, function(customer) {
        
        return customer["name"][0] === letter;
            
    }).length;
    
};

var friendFirstLetterCount = function(array, customer, letter) {
    return _.filter(customers, function(customer) {
        // return customer["friends"]["name"][0] === letter;
       // return _.pluck(customer.friends, customer.friends.name); 
          return customer["friends"]["name"][0] === letter;
    }).length;
};

var friendsCount = function(array, name) {
   return _.each(customers, function(customer) {
          _.each(customer, function(friends) {
             _.filter(friends, function(friend) {
              if (customer.friend.name === name) {
                  return customer.name;
              }
           })
       })
   })
};

var topThreeTags = function(array) {
    return _.each(customers, function(customer) {
      _.reduce(customer.tags, function(total, tag) {
          if(total[tag]) {
              total[tag] += 1;
          } else {
              total[tag] = 1;
          }
          return total;
      }, {})  
    })
};
// access array: loop through customers with each
// reduce the tag
var genderCount;

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
