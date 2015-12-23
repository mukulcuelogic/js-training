/*
 * 1. Write a program to create variables of the following types:
 int
 string
 boolean
 object
 array
 then add values in array(can be value of any type). Delete values from the array using array built in methods. 
 Toggle values of boolean variables
 Concatenate string with more values(without creating new string variables)
 */  
/*
 * init class
 * @param {type} varType
 */
var createVariable = function (varType) {
    this.type = null;
    this.outPutType = varType;
    this.outPut;
};

/*
 * set and get variable type
 * 
 * @returns {Array|Number|Object|String|Boolean}
 */
createVariable.prototype.getVariable = function () {

    switch (this.outPutType) {

        case "int":
            var newVar = new Number();
            // var newVar = 0;
            break;

        case "string":
            var newVar = new String();
            // var newVar = "";
            break;

        case "boolean":
            var newVar = new Boolean();
            break;

        case "object":
            var newVar = new Object();
            // var newVar = {};
            break;

        case "array":
            var newVar = new Array();
            // var newVar = [];
            break;
    }
    this.outPut = newVar;
    return this.outPut;
}

/*
 * add values into array
 * @param {type} arrayValue
 */
createVariable.prototype.pushValueInArray = function (arrayValue) {

    this.outPut.push(arrayValue);
}

//delete value from array
createVariable.prototype.deleteValueInArray = function (arrayValue) {

    var valuePos = this.outPut.indexOf(arrayValue);
    this.outPut.splice(valuePos, 1);
}

/*
 * put value into variable
 * @type Object
 */
createVariable.prototype.addValue = function (boolValue) {

    this.outPut = boolValue;
}
/*
 * toogle bool value
 * @type Object
 */
createVariable.prototype.toogleBool = function () {

    this.outPut = !this.outPut;
}
/*
 * concatinate string
 * @param {string} stringValue
 */
createVariable.prototype.stringConcat = function (stringValue) {

    this.outPut = this.outPut.concat(stringValue);
    //this.outPut = this.outPut + stringValue  
}
/*
 * get output of variable
 * @type Object
 */
createVariable.prototype.getOutPut = function () {

    return this.outPut;
}

/*----------------------------OUTPUT q1-------------------------------*/
/*
 * creating new number type variable
 */

console.log("creating new number type variable");
var customVar = new createVariable('int');
var newNumber = customVar.getVariable();
console.log(newNumber);

/*
 * creating new string type variable
 */ 
console.log("creating new string type variable");
var customVar = new createVariable('string');
var newString = customVar.getVariable();
console.log(newString);

console.log("adding value to string");
customVar.addValue("mukul");
console.log(customVar.getOutPut());

console.log("concatinate value to string");
customVar.stringConcat(" medatwal");
console.log(customVar.getOutPut());



/*
 * creating new boolean type variable
 */ 
console.log("creating new boolean type variable");
var customVar = new createVariable('boolean');
var newBoolean = customVar.getVariable();
console.log(newBoolean);


/*
 * adding boolvalue 
 */
console.log("adding boolvalue ");
customVar.addValue(true);
console.log(customVar.getOutPut());
/*
 * toggle bool value
 */
console.log("toggle bool value 1 ");
customVar.toogleBool();
console.log(customVar.getOutPut());

console.log("toggle bool value 2");
customVar.toogleBool();
console.log(customVar.getOutPut());


/* creating new    
 * 
 */
console.log("creating new object type variable");
var customVar = new createVariable('object');
var newObject = customVar.getVariable();
console.log(newObject);

/* creating new array type variable
 * 
 */
console.log("creating new array type variable");
var customVar = new createVariable('array');
var newArray = customVar.getVariable();
console.log(newArray);

/* adding values in array
 * 
 */
customVar.pushValueInArray('Mukul'); // string
//customVar.pushValueInArray('Medatwal');
customVar.pushValueInArray(12); // number
customVar.pushValueInArray(false); // boolean
customVar.pushValueInArray({name: "mukul", age: 24}); // object
var newArrayWithValue = customVar.getOutPut(); //get output

console.log(newArrayWithValue);



/*
 * delete from array
 */ 
customVar.deleteValueInArray('Mukul');
console.log(customVar.getOutPut());

/*
 * 2. Write a program that uses at least three ways to create an object variable,array variable
 */
//1. -->

var user = {fname: "mukul", lname: "medatwal", age: 24};


//2. --> 

var user = new Object();
user.fname = "mukul";
user.lname = "mukul";
user.age = "mukul";


//3. -->

function user(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
}


var user1 = new user("mukul", "medatwal", 24);
var user2 = new user("shyam", "singh", 35);



/*
 * ways to create array
 */ 

//  1. 

var languages = new Array("JS", "PHP", "JAVA");

//  2.

var languages = ["JS", "PHP", "JAVA"];

//  3.

var languages = new Array();
languages.push("JS");

//    4.
var languages = [];
languages[0] = "JS";
languages[1] = "PHP";








