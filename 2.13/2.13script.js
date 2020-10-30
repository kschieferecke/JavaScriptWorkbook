//What is the last value alerted by this code? why? 
let i = 3;

while (i) {
  alert( i-- );
} // answer will show 1 because the number 3 will decrease by one every line. I believe it stops at 1 because
    // after 0, it is not longer a positive number. 

//which values does the while loop show?
let i = 0;
while (++i < 5) alert( i ); // 1,2,3,4,

let i = 0;
while (i++ < 5) alert( i ); // 1,2,3,4,5

//which values get shown by the "for" loop?
for (let i = 0; i < 5; i++) alert( i ); // 0,1,2,3,4
for (let i = 0; i < 5; ++i) alert( i ); // 0,1,2,3,4
//both loops alert exact same values

//Output even numbers in the loop
//use the for loop to output even numbers from 2 to 10. 
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert (i);
  }
}

//replace "for" with "while"
//re-write the code changing the |for| loop to |while| without altering its behavior (the output should stay the same)
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

let i =0;
while (i <3) {
  alert ('number ${i}!');
  i++;
}

//Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
 let num;
 do {
   num=prompt("enter a number greater than 100", 0);
 } while (num <= 100 && num);

 //write a loop which outputs prime numbers in the interval from 2 to n
 let n=100
nextPrime:
for (let i =2; i <= n; i++) {
  for (let j = 2; j < i; j++){
    if (i % j == 0) continue nextPrime;
  }
  console.log(i)
}