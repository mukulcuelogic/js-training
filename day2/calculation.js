/*1. Write a program to create functions that will do the following 
    1. Add 2 numbers
    2. Subtract 2 numbers
    3. Divide 2 numbers
    4. Multiply 2 numbers
    Then update the program to get dynamic no of arguments(there can be 2,3,4 etc no of variables passed in 
    when invoking the functions) 
    The function should accept at least 2 variables and throw error if less then 2 are passed. 
    The function should also validate the type of argument passed in
*/
        
        var calculation = function(num1 , num2) {
            
            this.num1  = num1;
            this.num2  = num2;
            this.result = 0;
        }
        
        //Add 2 numbers
        calculation.prototype.doSum = function() {
            
            this.result = this.num1 + this.num2;
        }
        
        //Subtract 2 numbers
        calculation.prototype.doSubtract = function() {
            
            this.result = this.num1 - this.num2;
        }
        
        //Divide 2 numbers
        calculation.prototype.doDivide = function() {
            
            this.result = this.num1 / this.num2;
        }
        
        //Multiply 2 numbers
        calculation.prototype.doMultiply = function() {
            
            this.result = this.num1 * this.num2;
        }
        
        // return out put
        calculation.prototype.getResult = function() {
            
            return this.result;
        }
        
        
        
        ////// update the program to passing n arguments for calculation
        
        
        
        var calculation_n = function() {
            
            this.result = null;
            if(arguments.length > 1 ) {
                for (var i = 0; i < arguments.length; i++) {
                    if (typeof arguments[i] != 'number') {
                        alert('all arguments must be number');
                        return false;
                    }
                }
                this.arguments = arguments;
                this.result = this.arguments[0];
            
            } else {
                alert("please pass atleast two values!!");
                return false;
            }
                      
        }
        
        //Add n numbers
        calculation_n.prototype.doSum = function() {
          
            for (var i = 1; i < this.arguments.length; i++) {
                
                this.result += this.arguments[i];
            }
            
        }
        
//        Subtract n numbers
        calculation_n.prototype.doSubtract = function() {
            
            for (var i = 1; i < this.arguments.length; i++) {
                
                this.result -= this.arguments[i];
            }
        }
//        Divide n numbers
        calculation_n.prototype.doDivide = function() {
            
            for (var i = 1; i < this.arguments.length; i++) {
                
                this.result /= this.arguments[i];
            }
        }
        
         //Multiply n numbers
        calculation_n.prototype.doMultiply = function() {
            
            for (var i = 1; i < this.arguments.length; i++) {
                
                this.result *= this.arguments[i];
            }
        }
         //return the output
        calculation_n.prototype.getResult = function() {
            
            return this.result;
        }
        
        
//        
//        ///////How to use
//        
//        var summing = new calculation_n(2,4);
//            summing.doSum();
//            alert(summing.getResult()); 
//            
//            var cal = new calculation_n(8,4,5);   
//            cal.doSubtract();
//            alert(summing.getResult()); 
//            cal.doDivide();
//        cal.doMultiply();
//        alert(summing.getResult()); 