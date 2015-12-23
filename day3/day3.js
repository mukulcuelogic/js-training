/*1. Write a program to calculate factorial using recursive strategy.
 * 
 */

/*
 * to calculate factorial of any number using recursion
 */
var factorial = function(n) {
    if(n == 0) {
        return 1;   
    } else {
        return n * factorial(n-1);
    }
} 

/*
 * Demo Output
 */
console.log(factorial(10));



/*
 * 2. Update program - 2 of Practicals Day 2 to add a method that will print name (called printName()) of each student object in its prototype.
 */

/*
 * Creating student class 
 * @param {type} name
 * @param {type} subject
 * @param {type} age
 */
var student = function (name, subject, age) {
    this.name = name;
    this.subject = subject;
    this.age = age;
}

/*
 * function that accessible from new objects created by student class
 * @returns {String}
 */
student.prototype.getDetail = function() {
    return "Student Name: " + this.name + ", subject: " + this.subject + ", Age: " + this.age;
}

/*
 * print student name 
 * @returns {String}
 */
student.prototype.printName = function() {
    return "Student Name: " + this.name;
}

/*
 * creating objects from student class
 */
var student1 = new student("Mukul", "IT", 25);
var student1_detail = student1.printName();  // access the function
console.log(student1_detail);

var student2 = new student("Gajendra", "MCA", 29);
var student2_detail = student2.printName();
console.log(student2_detail);


/*
 * 3. Write a program that will do the following:
    1. Accept two string values as arguments, where first value will be a long word(can be any random characters as well), 
        second string will be a single character or substring that will already exist in the first value.
    2. The function should then return an object with properties - 'count' which will count the no of occurrences of substring in the first value,
     'lastIndex' which will return the index of last occurrence of the substring in the first value. 
      return -1 if the substring can't be found
 */

var checkOccurrencesSubstring = function(longString, subString ) {
    if(typeof longString !== 'string' || typeof subString !=='string' ) {
        alert('Both arguments are should be String!');
    }
    if(longString.indexOf(subString) > -1 || subString.length == 1) {
        var substringMatch = new RegExp(subString, 'g');
        var occurrencesCount = longString.match(substringMatch).length;
        var occurrencesLastIndex = longString.lastIndexOf(subString);
        return {count:occurrencesCount,lastIndex:occurrencesLastIndex};
    } else {
        return -1;
    }
}



console.log(checkOccurrencesSubstring('olalalalala','la'));

/*
 * 4. Write a function that will accept a unix timeStamp and covert to its UTC equivalent value
 */

var unixToUtcTime = function(unixTimestamp) {
    
    if(((new Date(unixTimestamp)).getTime()) > 0) {  // check it is correct time stamp
        
        var unixtime = new Date(unixTimestamp); //create date of timestamp
        return unixtime.toUTCString(); // convert to utc date and return
    }
    return "invalid unix timestamp";
}

//alert(unixToUtcTime(1332042634));


/*
 * 5.  Write a function that will accept a single dimensional array whose value will be like ['00','01','11','10','11','00'] and break it into a 2 dimensional array like the following:
    [
        [0,0,1,1,1,0]
        [0,1,1,0,1,0]
    ]
    the  length of array can be dynamic and contain as many values as possible
 */

var create2dArray = function(input1dArray) {
    if(Array.isArray(input1dArray) && !Array.isArray(input1dArray[0])) {
        var newArray = [];
        for(var i = 0, len = input1dArray.length; i <= len; i++) {
            if(typeof input1dArray[i] != 'undefined') {
                var arrayValue = input1dArray[i].toString().split("");
                for(var j = 0,innerLen = arrayValue.length; j <= innerLen; j++) {
                    if(typeof arrayValue[j] != 'undefined') {
                        if(!Array.isArray(newArray[j])) {
                            newArray[j] = [];
                        }
                        newArray[j].push(arrayValue[j]);
                    }
                }
            }
        }
        return newArray;
        
        
    }
    return "Only accept 1D array";
}

//create2dArray([
//    [1,2,3,4]
//    [4,5,6,4]
//]);
//alert(create2dArray([[4,5,6,4],[4,5,6,4]]));
//alert(create2dArray(6546));
console.log(create2dArray(['011','111','101','0011']));

/*
 * 6. Write a program to do the following:
    1. Create an array and add numbers 1 to 100 in it
    2. Print each element of that array in a new line WITHOUT using any loop structure.
 */

var printNumbers = function(inital, maximum) { 
    var numberArray = [];
    var createArray = function(inital, maximum) {
        if (inital <= maximum) {
            numberArray.push(inital);
            createArray(inital + 1 , maximum);
        }
    }
    createArray(inital, maximum);
    return  processPrint = function(initaialArrayIndex){  // pass always array initial index
        if(numberArray[initaialArrayIndex]) {
            console.log(numberArray[initaialArrayIndex]);
            processPrint(initaialArrayIndex + 1);
        }
    }
}
var printing = printNumbers(1,100);
printing(0);
