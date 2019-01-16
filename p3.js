// ### Problem 3:
// Put the start of your program in a main function.
// Create an attendance array.
//     Ask the user if a teacher, student, or parent is checking in.
// Use a switch statement to add the teacher/student/parent to the attendance array, then log the option they chose. Repeat this five times.
//
// <strong>Challenge</strong>: Do the above program until the user enter's 'q'.
//     Also, print and add to the array via a function call to the appropriate teacher/student/parent function.

function main() {

 var atten = [];

 var checkIn = prompt('Is a teacher, student, or parent checking in?');

 switch(checkIn){
     case "teacher":
     case "Teacher":
         atten.push("teacher");
         break;
     case "student":
     case "Student"
         atten.push("student");
         break;
     case "parent":
     case "Parent":
         atten.push("parent");
         break;
 }

}
main();