// Initial Count of ToDo items
var count = 0;

// Listeners
// Here, we attach certain function to certain events
// Below, we elaborate on what each function does

// When the #new form is submitted, add the new item
$('#new').on('submit', addNewItem);

// When an item gets clicked, mark as complete or incomplete
// Code goes here to call switchStatus
$(".item").click(switchStatus)

// When a remove link is clicked, remove that item
// Code goes here to call removeItem

// alt below is to soln code
//$('.remove').on("click", removeItem) - start here
//$('#todos').on('click', '.remove', removeItem); - getting closer...
$('#todos').on('click', '.remove', removeItem); //bingo!
//$(".remove").click(removeItem) >WRONG Way. Only works when page first loads. Won't apply to any list items added. 


// When an edit link is clicked, go into edit mode
// Code goes here to call editItem
$(".edit").click(editItem)

// When an item editor is submitted, save the changes
// Code goes here to call saveItem
//$().submit()

// When a user leaves an item editor form, save the changes
// Code goes here to call saveItem

// When the Clear List button is clicked, clear out the items
// Code goes here to call clearList

// When the Clear Completed button is clicked, clear out the completed items
// Code goes here to call clearCompleted


// Functions
// See above for when these are used

function updateCount() {

	// Code goes here

}

function addNewItem() {

	// Prevent page reload
	event.preventDefault();

	// Code goes here

	//get the item the user just entered
	var addeditem = $("#newItem").val()
	console.log("New item")

	// Add an <li> with that text to the <ul>
	$("#todos").append('<li><span class="item">' + addeditem + '</span><a class="edit">Edit</a><a class="remove">Remove</a></li>')
	$("#todos:last-child .remove").click(removeItem)
	// Update the count 
	updateCount();

}

function removeItem(event) {
	//note that "event" above doesn't do anything, just placeholder for visual reference

	// Prevent page reload
	event.preventDefault();

	// Code goes here
	$(this).parent().remove()

	// The list has been changed, so update the count
	updateCount();

}

function editItem(event) {

	// ADVANCED/Optional:

	// Prevent page reload
	event.preventDefault();

	// Get the text of the to-do item; it's a sibling of the clicked link
	var itemText = $(this).siblings('.item').html();

	// Get the parent <li>
	var listItem = $(this).parent();

	// Replace the parent <li> contents with an edit form '<form class="editor"><input value="' + itemText + '"></form>'

	// Focus the keyboard on the input that was just added

}

function saveItem(event) {

	//ADVANCED/Optional - only if you made the edit in place using editItem()
	// Prevent page reload
	event.preventDefault();

	// Get the new text from the editor (un-comment this when you get to this. i had to 
	//      comment out bc incomplete starter code was breaking js code)
	//var itemText = // code goes here

	// same here, had to commment out for now
	// Get the parent <li>
	//var listItem = // code goes here

	// Replace the parent <li> contents with the updated item and controls


}

function switchStatus() {

	console.log('switchStatus function is running!');
	console.log($(this)); // Just to confirm what "this" is

	// Get the parent <li>
	var listItem = $(this).parent();

	// Toggle the class of the parent <li> to/from .done


	// The list has been changed, so update the count


}

function clearList() {

	// Find all the items and remove them


	// The list has been changed, so update the count


}

function clearCompleted() {

	// Find all the items that are done, and remove them


	// The list has been changed, so update the count
	

}
