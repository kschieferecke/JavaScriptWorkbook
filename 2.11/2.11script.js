//What's the result of OR?
alert( null || 2 || undefined ); // 2

//What's the result of OR'ed alerts?
alert( alert(1) || 2 || alert(3) ); //1 ; 2

//What is the result of AND?
alert( 1 && null && 2 ); // null

//what is the result of AND'ed alerts?
alert( alert(1) && alert(2) ); // 1 ; undefined

//the result of OR AND OR
alert( null || 2 && 3 || 4 ); // 3

//check the range between
Write an if condition to check that age is between 14 and 90 inclusively.
“Inclusively” means that age can reach the edges 14 or 90.
// if (age >= 14 && age <= 90) 

//Check the range outside
Write an if condition to check that age is NOT between 14 and 90 inclusively.
Create two variants: the first one using NOT !, the second one – without it.
//1: if(!(age >= 14 && age <=90))
//2: if (age<14 || age<90)

//a question about "if"
Which of these alerts are going to execute?

What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' ); //command runs; -1, truth
if (-1 && 0) alert( 'second' ); //command doesn't run; 0, false
if (null || -1 && 1) alert( 'third' ); // command runs; 1, true

//check the login
let userName = prompt("Who's there?", '');
if (userName === 'Admin') {
  let pass = prompt('Password?', '');
  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === ' || userName === null') {
    alert ( 'Cancelled');
} else {
    alert ("I don't know you!") ;
}
