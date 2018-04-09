console.log("js loaded")
// $("body").slideUp()

$("#weblink").click(webLinkClicked)

$("#rock-button").click(rockClicked)
document.getElementById("paper-button").onclick = paperClicked
document.getElementById("scissors-button").onclick = scissorsClicked

function rockClicked(){
    console.log("You chose Rock!")
    console.log("Computer player chooses Rock")
    console.log("It's a tie!")
    $("body").css("background-color", "yellow")
    // $("#rock-button").css ("display","none") 
    // $("#rock-button").css fadeOut() 

}

function paperClicked(){
    console.log("You chose Paper!")
    console.log("Computer player chooses Rock")
    console.log("You win!!!!!")
    $("body").css("background-color", "green")
}

function scissorsClicked(){
    console.log("You chose Scissors!")
    console.log("Computer player chooses Rock")
    console.log("You lose!!!!!")
    $("body").css("background-color", "red")
}

function webLinkClicked(){
    alert("Woohoo you clicked the secret link!")
    event.preventDefault()
}