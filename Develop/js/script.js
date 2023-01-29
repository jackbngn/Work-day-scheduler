// arrays
var saveButton = $(".saveBtn");
var currentDate = $("#currentDay");

var currentTime = dayjs().format("HH");
console.log("current time", currentTime);

//display current time and date (use day.js?)
var today = dayjs().format("dddd, MMMM DD YYYY");
console.log(today);
currentDate.text(today);

// change the time block to past, present, future depending on the current time

var timeBlock = $(".time-block");
// grabbing all id from div
timeBlock.each(function () {
	var timeBlock = $(this).attr("id").split("-")[1];
	// console.log(timeBlock);
	if (currentTime == timeBlock) {
		$(this).addClass("present");
	} else if (currentTime > timeBlock) {
		$(this).removeClass("present");
		$(this).addClass("past");
	} else if (currentTime < timeBlock) {
		$(this).removeClass("past");
		$(this).addClass("future");
	}
});

//add on click
saveButton.on("click", function () {
	// grabbing the text from the textarea
	var input = $(this).siblings(".description").val();
	var text = $(this).parent().attr("id");

	//storing the text in local storage
	localStorage.setItem(text, input);
});

// Localstorage get item
$("#hour-09 .description").val(localStorage.getItem("hour-09"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
