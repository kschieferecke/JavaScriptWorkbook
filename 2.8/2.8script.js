//What are the final values of all variables a, b, c and d after the code below?

let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?


/*
a = 2
b = 2
c = 2
d = 1 */

//What are the values of a and x after the code below?

let a = 2;

let x = 1 + (a *= 2);

/*
a = 4
x = 5
*/

//What are the results of these expressions?

"" + 1 + 0 // 1
"" - 1 + 0 //-1
true + false // 1
6 / "3" // 2
"2" * "3" // "6"
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // infinity, null
"  -9  " + 5 // "-9 5"
"  -9  " - 5 // "-14"
null + 1 // 1
undefined + 1 //NaN
" \t \n" - 2 //-2

//Fix the Addition
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

let a = prompt("First Number?", 1);
let a = prompt("Second Number?", 2);
alert(+a + +b);