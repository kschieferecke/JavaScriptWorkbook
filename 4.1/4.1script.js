//hello object
//write the code, one line for each action

let user = {
    name : "John",
    surname : "Smith",
  }
   console.log(user)
  
   user.name = "pete";
   console.log(user);
   delete user.name;
   console.log(user);

   //check for emptiness: write the function isEmpty(obj) which returns true if the object has no properties, false otherwise

   function isEmpty (obj) {
    for (let key in obj) {
      return false;
    }
    return; true
  }

  //sum object properties
  //write the code to sum all salaries and store in the variable sum, 

  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
console.log(salaries)

let sum = 0;
for (let key in salaries) {
 sum += salaries[key];
}

console.log(sum);

//create a function |multiplyNumeric(obj)| that multiplies all
//numeric propery values of |obj| by 2
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  // after the call
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };

  function multiplyNumeric(obj) {
      for (let key in obj) {
          if (typeof obj [key] =="number") {
              obj [key] *= 2;
          }
      }
  }