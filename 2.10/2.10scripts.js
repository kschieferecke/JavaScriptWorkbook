'use script';

//Will |alert| be shown?
if ("0") {
    alert( 'Hello' );
  }
  //yes, because "0" string is not an empty string
  
  //Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’ 
  //If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “Didn’t know? ECMAScript!”

let name = prompt('What is the "officiall" name of JavaScript? It is case sensitive!', '');

  if (name = ECMAScript) {
      alert ( "Right!" );
} else {
    alert ("you don't know? ECMAScript!");
}

//using if...else, write the code which gets a number via prompt and then shows in alert

let number = prompt ("enter number", '')

if (number > 0) {
    alert = "1"; 
} else if (number < 0) {
    alert = "-1";
} else if (number = 0) {
    alert = "0";
}

//rewrite this |if| using the conditional operatior '?'
let result;

if (a+b<4) {
    result = 'below';
} else {
    result = 'over';
}

let result = (a + b < 4) ? 'below' ? : 'over';

//rewrite |if...else| using multiple ternary operators |'?'| 
let message;

if (login == 'employee') {
    message = 'hello';
} else if (login == 'director') {
    message = 'greetings';
} else if (login == '') {
    message = 'no login';
} else {
    message = '';
}

let message = (login == 'employee') ? "hello":
    (login == 'director') ? "greetings" ; 
    (login == '') ? "no login" :
    '';