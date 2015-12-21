//// simple way
            //init
            function createNewVariable(type) {
                
                switch(type) {
                    
                    case "int":
                        var newVar = new Number();
                    break;

                    case "string":
                        var newVar = new String();
                    break;

                    case "boolean":
                         var newVar = new Boolean();
                    break;

                    case "object":
                        var newVar = new Object();
                    break;

                    case "array":
                        var newVar = new Array();
                    break;
                }
                
                
                return newVar;
            }
            //add value into variable
            function addValue(newVar , value) {
                return newVar = value;
            }
            //push value into array
            function pushValueIntoArray(newVar , value) {
                return newVar.push(value);
            }
            //remove value from array
            function removeValuefromArray(newVar , value) {
                var valuePos = newVar.indexOf(value);
                newVar.splice(valuePos, 1); 
            }
            //toogle bool value
            function toogleBool(newVar) {
                return newVar = !newVar;
            }
            // concat string
            function stringConcat(newVar , stringValue) {

               return newVar = newVar.concat(stringValue);
            }
            
            
         var newBool = createNewVariable('boolean');
         newBool = addValue(newBool , true);
         newBool = toogleBool(newBool);
         console.log(newBool);
         
         var newArray = createNewVariable('array');
         console.log(newArray);
         
         var newInt = createNewVariable('int');
         console.log(newInt);
         
         var newString = createNewVariable('string');
         console.log(newString);
         
         var newObject = createNewVariable('object');
         console.log(newObject);