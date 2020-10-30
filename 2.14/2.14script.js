//rewrite the code usine if.. else which would correspond to the following switch: 
switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }

if (browser == "edge") {
    alert ("you've got the edge!");
} else if (browser == "chrome"
    || browser = "firefox"
    || browser = "safari"
    || browser = "opera") {
        alert ("okay we support that browser too!");
    } else {
        alert ("we hope this page looks ok!");
    }

//rewrite the code below usinga single |switch| statement
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

let a = +prompt ('a?', '');
switch (a) {
    case 0:
        alert (0); 
        break;
    
    case 1:
        alert (1);
        break;

    case 2:
    case 3:
        alert ("2,3");
        break;
}