// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //Inside of makeContact. create & return object with the parameters as keys. 
        return {
            id: id, 
            nameFirst: nameFirst, 
            nameLast: nameLast
        };
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     *
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length
              // This wants a function addContact(contact)
        // push the contact into the contacts array.
        },
        addContact: function(contact) {
           return contacts.push(contact);
        },
           // iterate through contacts, if fullName is in index  return  fullName. If not, return undefined.
         findContact: function(fullName) {
            for (let i = 0; i < contacts.length; i++) {
                if (fullName !== `${contacts[i].nameFirst} ${contacts[i].nameLast}`) {
                    return undefined;
                } 
                return contacts[i];
                
            }
              
         },
         // remove contact. delete it? 1st: we need to find it. call findcontact, then delete
         removeContact: function(contact) {
             contacts.splice(contacts.indexOf(contact), 1);
         },
         // add printAllContactNames() function, it should return all names of the contact list.
         // 1. create a string to hold the contacts. 2.loop through the contacts keys, return the keys(object.keys()
               //. 3.take that array, turn it into a string 4. replace the commas with a \n return that newString
         // 
           printAllContactNames: function() {
               let contactArray = [];
               for (let i = 0; i < contacts.length; i++) {
                   
                  contactArray.push(`${contacts[i].nameFirst} ${contacts[i].nameLast}`);
                  
               }
               let contactString = contactArray.toString();
                     let newStr = contactString.replace(/,/g, "\n");
                    return newStr;
           }
                   /* let contactString = contactArray.toString();
                 let newStr = contactString.replace(",", "\n");
                  return newStr; */
      
        
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
