/*
 * 3. Write a program that can make the use of 'reserved' keywords in JS without getting any error.
*/
       
       var n = 100;
       
       for(var i = 0; i<=n; i++) {
           
            if(i==5) {
               
                continue;
            
            }
           
           
            if(i==15) {
                
                break;
                
            } else {
           
                console.log(i);
            }
       }
       
       //In this program var, for, if, else, continue, break are reserved keywords
       
       
//       OUTPUT

//0
//1
//2
//3
//4
//6
//7
//8
//9
//10
//11
//12
//13
//14