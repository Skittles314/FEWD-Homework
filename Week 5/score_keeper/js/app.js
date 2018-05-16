var score = 0

$("#zero").click(zeroButton)
$("#add5").click(addFive)
$("#add10").click(addTen)
$("#sub1").click(subtractOne)

function zeroButton () {
	// console.log ("zero button clicked")
	// zero out the score variable
	score = 0

	$("#result").html(score)
}

function addFive () {
	// update the score variable +5
	score = score + 5
	$("#result").html(score)
}

function addTen () {
	// update the score variable +10
	score = score + 10
	$("#result").html(score)
}

function subtractOne(){
    // subtract 1 from the current score
    score = score - 1

    // output the value of score in the #result h1
    $("#result").html(score)
}