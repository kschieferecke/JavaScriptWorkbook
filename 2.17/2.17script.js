//replace Function Expressions with arrow functions in the code below: 
function ask(question, yes, no) {
    if (confirm(question)) yes ()
    else no ();
}

ask (
    "Do you agree"?,
    function () {alert("you agreed"); },
    function () {alert("you cancelled the execution"); }
);


function ask(question, yes, no) {
    if (confirm(question)) yes ()
    else no ();
}

ask (
    "Do you agree"?,
    () => alert("you agreed.")
    () => alert ("you cancelled the execution."),
    function () {alert("you cancelled the execution")
);
