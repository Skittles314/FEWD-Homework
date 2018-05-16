// This waits till the page finishes loading before running the code inside the {}
$(document).ready(function() {
  // declare a variable called responses that's an array of strings
  var responses = ["Fer Sure", "Mos Def", "Unclear, ask again", "Hell 2 da naw", "Most Likely", "Don't bet the ranch", "Nahhhh"];
  var newResponse = []
  
  // add a click listener to the submit link. When it's clicked, call the giveResponse function.
  $("#submit").click(giveResponse)
  $("#addBtn").click(addResponse)

  // declare a function named giveResponse
  function giveResponse(){
    //console.log("you clicked the button")

  // add your own resonse to the array
  function addResponse(){
    console.log("you added a response")
    responses.push(document.getElementById("#addResponse").text)
  }
    
    // Create a random number between 0 and the amount of items in the responses array
    var rand = responses[Math.floor(Math.random() * responses.length)]

    // target the element with id response and replace the text using the index nuber of the responses array
    $("#response").text([rand])

//left off with only needing to finish add response. 
    
  
    
  }



// Extra Credit:
  // declare a function named addResponse, this will take user input and add it to possible responses.
    // declare a variable newResponse that equals the value of the user input in the text box
    // only add newResponse to the responses array if it exists (box is not blank)
      // push newResponse into the responses array
      // log our result to the console, for funsies
      // clear the box after submitting new response
      // if the box is blank, alert a notification





});
