// ### Problem 2:
// Put the start of your program in a main function.
// Ask the user to enter a 3 digit binary number.
//     Create a switch case that prints 1 if you enter 1, 2 if you enter 10,
//     3 if you enter 11, 4 if you enter 100, and 5 if you enter 101.

function main() {

    var bin = parseInt(prompt('Enter a binary number'));

    switch(bin){
        case 1:
            console.log(1);
            break;
        case 10:
            console.log(2);
            break;
        case 11:
            console.log(3);
            break;
        case 100:
            console.log(4);
            break;
        case 101:
            console.log(5);
            break;
        default:
            console.log("ERROR");
    }

}
main();