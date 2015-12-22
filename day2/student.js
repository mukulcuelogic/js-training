/*
 * 2. Write a program that will do the following:
    1. Create a student class and then create multiple student objects out of it.
    2. Using a student object, add a method in the student class that will be then accessible from new objects created.

*/
        // creating student class
        var student = function(name , subject, age) {
            
            this.name  = name;
            this.subject  = subject;
            this.age = age;
        }
        
        
        // function that accessible from new objects created by student class
        student.prototype.getDetail = function() {
            
            return "Student Name: " + this.name + ", subject: " + this.subject + ", Age: "+this.age;
        }
       
       //// creating objects from student class
        var student1 = new student("Mukul" , "IT", 25);
        var student1_detail = student1.getDetail();  // access the function
        alert(student1_detail);
       
        var student2 = new student("Gajendra" , "MCA", 29);
        var student2_detail = student2.getDetail();
        alert(student2_detail);