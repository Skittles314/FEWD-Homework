# JavaScript Revisited - W05S09

**Variables, jQuery, More Practice**  

```
var codeBlock = function(){
  // this is JS
}
```
We can use jQuery to hold off on running JS until browser finishes rendering the DOM.  Make sure jQuery is loaded into your site/app first. 

We don't want our JavaScript code to run until the entire DOM has been rendered. If we target a particular element with JS before that element is in the DOM, our JS won't have the desired effect. 

```
$(document).ready(function(){
    // enter all your JS/jQuery here
    // it only runs after the DOM is loaded, prevents script mishaps
    });
});
```

The first time we declare a variable we use the `var` keyword.  
*Any time we refer to this variable after it's declared we don't use the var keyword*.  

This declares a variable ` color` and makes it equal to the answer of a prompt "What color?"  
`var color = prompt( "What color?" )`  

This redefines the already-declared variable `color` to the string "black"  
`color = "black"`  

This declares two variables, `firstNum` and `secondNum`, and creates another variable `answer` that equals `firstNum` plus `secondNum` and log it to the console.   

```
var firstNum = 1
var secondNum = 1
var answer = firstNum * secondNum
console.log("your total is: ")
console.log(sum)
```

**Conditionals (If Statements)**  
Now we're going to write a conditional to execute some code if the value of the `answer` variable is 1. 

Single equals signs is used for assignment. *Be careful with this. If you want to COMPARE variables and use `=`, you will be reassigning the variables instead of comparing them!*

```
if(answer == 1) {
	// enter some code that will be executed if answer == 1
}
```
Here we declare a variable `lightSwitch`, and set some conditional logic around it.  In this example, we alert "The lights are on" if lightSwitch is true, else we alert "The lights are off". 

```
var lightSwitch = true

if( lightSwitch == true ){
	alert("The lights are on")
} else {
	alert("The lights are off!")
}
```

