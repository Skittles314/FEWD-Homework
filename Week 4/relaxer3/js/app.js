console.log('js loaded')
$("#readmorelink").click(readMoreLinkClicked)
$("#readlesslink").click(readLessLinkClicked)
$(".learnmore").click(learnMoreClicked)
	
function readMoreLinkClicked (){
	$("#show-this-on-click").slideDown()
	$(".readmore").hide()
	$(".readless").show()
	event.preventDefault()

	
}

function readLessLinkClicked (){
	$("#show-this-on-click").slideUp()
	$(".readless").hide()
	$(".readmore").show()
	event.preventDefault()

}

function learnMoreClicked () {
	$("#learnmoretext").slideDown();
	$(".learnmore").hide();
	event.preventDefault();

}
