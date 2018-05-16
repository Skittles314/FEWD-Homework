/*
function compare() {
  var comparison;
  var a = $('#a').val();
  var b = $('#b').val();
 
  if (a < b) {
    comparison = '<';
  } else if (a > b) {
    comparison = '>';
  } else if (a === b) {
    comparison = '===';
  } else{
    comparison = 'N/A';
  }
  
 $('#comparison').html(comparison);
}

$('#submit').click(compare); */

$("#submit").click(compareClicked)

function compareClicked (){
  var num1 = $("#a").val()
  var num2 = $("#b").val()

  console.log("Num1 is " + num1)
  console.log("Num2 is " + num2)

  if (num1 > num2){
    $("comparison").hmml(">")

  if (num1 < num2){
    $("comparison").hmml("<")

  if (num1 = num2){
    $("comparison").hmml("=")


  }
}