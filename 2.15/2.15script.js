//functions 
/* function name(parameters) {
    body
} */

//is "else" required? 
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }
  //OR
  function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }
  /* it looks like "else" is not required for it to work,
  but it does seem like it is required with the syntax 
  and grammar of coding */ 

  //rewrite the function using "?" or "||"
  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }

  function checkAge (age) {
      return (age > 18) ? true : confirm ("did parents allow you?");
  }

  function checkAge (age) {
      return (age > 18) || confirm ("did parents allow you?");
  }

  //write a function |min (a,b)| which returns the least of two numbers a and b.
  function min(a,b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }

  //Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
function pow(x,n) {
    let result = x;

    for (let i + 1; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = prompt ("x?", '');
let n = prompt ("n?", '');

if (n < 1) {
    alert ('power ${n} is not supported, use a positive integer');
} else {
    alert (pow (x,n));
}