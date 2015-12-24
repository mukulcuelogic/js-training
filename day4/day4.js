/*
 * 1. Write a program to copy two objects. It should accept two arguments - source ( the object from which we need to copy) 
 * and target ( to which we need to copy). The target object will initially be empty.
 */

var copyTwoObjects = function(source, target) {
    try {
        
        if(typeof source !== "object") throw 'accept Only object';  // throw error 
        if(typeof target !== "object") throw 'accept Only object';  // throw error 
        target = JSON.parse(JSON.stringify(source));
        return target;
        
    } catch (err) {  // catch error message
        alert(err);
        return false;
    }
    
}

console.log(copyTwoObjects({car:"asd",color:"red"}, {}));


/*
 * 2. Write a program to merge two objects. It should accept two arguments - objectA and objectB. The result object will have 
 * the combined values and should not change the structure of either objectA or objectB. If both objects have same properties,
 *  consider using objectA property instead.
 */

var margeObjects = function(objectA, objectB) {
    try {
        if(typeof objectA !== "object") throw 'accept Only object';  // throw error 
        if(typeof objectB !== "object") throw 'accept Only object';  // throw error
        var objectC = JSON.parse(JSON.stringify(objectB)); //copy objectB to objectC
        for(var key in objectA) {
            if(objectA.hasOwnProperty(key)) objectC[key] = objectA[key];
        }
        return objectC; //return marged object
    } catch (err) {
        alert(err);
        return false;
    }
}

console.log(margeObjects({fname:"mukul",age:"25"}, {lname:"medatwal",age:"65"}));


/*
 * 3. Extend number type to have a 'float()' function that will convert any given 'integer' value to its float equivalent. 
 * (a no such as 5 should become 5.00) The function should only return that value and should not affect the actual number's value.
 */

Number.prototype.float = function(){
   var originalValue = this.valueOf();
   return originalValue.toFixed(2);
}

var a = 5;
console.log(a.float());
console.log(a);

/*
 * 4. Extend number type to have a 'int()' function that will convert any given 'float' value to its integer equivalent. (a no such as 5.00 should become 5). 
 * The function should only return that value and should not affect the actual number's value.
 */

Number.prototype.int = function(){
   var originalValue = this.valueOf();
   return Math.round(originalValue);
}

var b = 6.23;
console.log(b.int());
console.log(b);

/*
 * 5. Write a program to loop through the children of a ul element(ul will have 5 li's). 
 * Loop through each of the li and attach a function on it that will alert the value of that li (html text inside the li). 
 */


var attachFuncitonToChild = function(id) {
    
    var children = document.getElementById(id).children;
    var childrenLength = children.length;
    for (var i = 0; i < childrenLength; i++) {
         children[i].addEventListener("click", displayValue);
    }
}
function displayValue() {
    alert(this.innerText);
}
window.onload = function() {
  attachFuncitonToChild('parent_ul');
};