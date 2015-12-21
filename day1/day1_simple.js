//// simple way
            //init
var var_int = 0;
var var_string = "";
var var_bool = false;
var var_array = [];
var var_object = {};

//add value into variable
function addValue(newVar , value) {
    return newVar = value;
}

//push value into array
function pushValueIntoArray(value) {
    return var_array.push(value);
}
//remove value from array
function removeValuefromArray(value) {
    var valuePos = var_array.indexOf(value);
    var_array.splice(valuePos, 1); 
}
//toogle bool value
function toogleBool() {
    return var_bool = !var_bool;
}
// concat string
function stringConcat(stringValue) {

//var_string = var_string + stringValue;
   return var_string = var_string.concat(stringValue);
}
            
            
         