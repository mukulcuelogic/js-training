/*
 * 4. Write a program that will print number from 1 to 100 using all the variants of a loop structure(for,while,do while etc)
*/
       
  
//      1. Using For Loop

function printUsingFor(inital, maximum) {
    console.log("Using For Loop");
    for(var i = inital; i<=maximum; i++ ) {
        
        console.log(i);
    }
}

//      2. Using While Loop
function printUsingWhile(inital, maximum) {
     console.log("Using While Loop");
    while (inital<=maximum) {
        console.log(inital);
        inital++;
    }
}

//      3. Using Do While Loop
function printUsingDoWhile(inital, maximum) {
    console.log("Using Do While Loop");
    do{
        
      console.log(inital);
      inital++;
      
    } while (inital<=maximum);
}

//      4. Using Recursion
function printUsingRecursion(inital, maximum) {
    
    if(inital<=maximum) {
        console.log(inital);
        printUsingRecursion(inital + 1, maximum);
    }
}

printUsingFor(1,100);
printUsingWhile(1,100);
printUsingDoWhile(1,100);
console.log("Using Recursion");
printUsingRecursion(1,100);
