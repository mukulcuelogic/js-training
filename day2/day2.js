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

/*
 *  calculation class for two arguments
 * @param {number} num1
 * @param {number} num2
 */
var calculation = function (num1, num2) {

    this.num1 = num1;
    this.num2 = num2;
    this.result = 0;
}

/*
 * Add 2 numbers
 */
calculation.prototype.doSum = function () {

    this.result = this.num1 + this.num2;
}

/*
 *Subtract 2 numbers
 */
calculation.prototype.doSubtract = function () {

    this.result = this.num1 - this.num2;
}

/*
 * Divide 2 numbers
 */
calculation.prototype.doDivide = function () {

    this.result = this.num1 / this.num2;
}

/*
 * Multiply 2 numbers
 */
calculation.prototype.doMultiply = function () {

    this.result = this.num1 * this.num2;
}

/*
 * return out put
 * @returns {calculation}
 */
calculation.prototype.getResult = function () {

    return this.result;
}


/*
 * 
 * update the program to do calculation for n number of arguments
 * @param {number} n1,n2,n3.......n
 */
var calculation_n = function () {

    this.result = null;
    if (arguments.length > 1) {
        for (var i = 0, len = arguments.length; i < len; i++) {
            if (typeof arguments[i] !== 'number') {
                alert('all arguments must be number');
                return false;
            }
        }
        this.arguments = arguments;
        this.result = this.arguments[0];
        this.length = this.arguments.length;
    } else {
        alert("please pass atleast two values!!");
        return false;
    }

}

/*
 * Add n numbers
 */
calculation_n.prototype.doSum = function () {

    for (var i = 1; i < this.length; i++) {

        this.result += this.arguments[i];
    }

}

/*
 * Subtract n numbers
 */
calculation_n.prototype.doSubtract = function () {

    for (var i = 1; i < this.length; i++) {

        this.result -= this.arguments[i];
    }
}
/*
 * Divide n numbers
 */
calculation_n.prototype.doDivide = function () {

    for (var i = 1; i < this.length; i++) {

        this.result /= this.arguments[i];
    }
}
/*
 * Multiply n numbers
 */
calculation_n.prototype.doMultiply = function () {

    for (var i = 1; i < this.length; i++) {

        this.result *= this.arguments[i];
    }
}

/*
 * return the output
 */
calculation_n.prototype.getResult = function () {

    return this.result;
}



/* How to use
 
 var summing = new calculation_n(2,4);
 summing.doSum();
 alert(summing.getResult()); 
 
 var cal = new calculation_n(8,4,5);   
 cal.doSubtract();
 alert(summing.getResult()); 
 cal.doDivide();
 cal.doMultiply();
 alert(summing.getResult()); 
 */



/*
 * 2. Write a program that will do the following:
 1. Create a student class and then create multiple student objects out of it.
 2. Using a student object, add a method in the student class that will be then accessible from new objects created.
 
 */

/*
 * Creating Student class 
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
student.prototype.getDetail = function () {

    return "Student Name: " + this.name + ", subject: " + this.subject + ", Age: " + this.age;
}

/*
 * creating objects from student class
 */
var student1 = new student("Mukul", "IT", 25);
var student1_detail = student1.getDetail();  // access the function
alert(student1_detail);

var student2 = new student("Gajendra", "MCA", 29);
var student2_detail = student2.getDetail();
alert(student2_detail);




/*
 * 3. Write a program that can make the use of 'reserved' keywords in JS without getting any error.
 */

var n = 100;

for (var i = 0; i <= n; i++) {

    if (i == 5) {
        continue;
    }
    if (i == 15) {
        break;
    } else {
        console.log(i);
    }
}

/*
 * In this program var, for, if, else, continue, break are reserved keywords
 */

/*
 *       OUTPUT
 
 0
 1
 2
 3
 4
 6
 7
 8
 9
 10
 11
 12
 13
 14
 */





/*
 * 4. Write a program that will print number from 1 to 100 using all the variants of a loop structure(for,while,do while etc)
 */



/*
 * 1. Using For Loop
 */
function printUsingFor(inital, maximum) {
    console.log("Using For Loop");
    for (var i = inital; i <= maximum; i++) {

        console.log(i);
    }
}

/*
 * 2. Using While Loop
 */
function printUsingWhile(inital, maximum) {
    console.log("Using While Loop");
    while (inital <= maximum) {
        console.log(inital);
        inital++;
    }
}


/*
 * 3. Using Do While Loop
 */
function printUsingDoWhile(inital, maximum) {
    console.log("Using Do While Loop");
    do {

        console.log(inital);
        inital++;

    } while (inital <= maximum);
}


/*
 *  4. Using Recursion
 */
function printUsingRecursion(inital, maximum) {

    if (inital <= maximum) {
        console.log(inital);
        printUsingRecursion(inital + 1, maximum);
    }
}

/*
 * Calling all functions with initial and max_limit values
 */
printUsingFor(1, 100);
printUsingWhile(1, 100);
printUsingDoWhile(1, 100);
console.log("Using Recursion");
printUsingRecursion(1, 100);

