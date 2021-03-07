var currentDate = moment().format("dddd, MMMM Do");
// var text1 = document.getElementById('textArea').value;     // plain JavaScript
// var text2 = $("#myTextArea").val();
var currentHour = (moment().hour());
var timeBlockHour = 
// set currentDate on page
$("#currentDay").append(currentDate);
//capture the button click
$(".btn").on("click", function() {
   var task = $(this).prev().val();
   var taskHour = $(this).prev().attr('id');
   localStorage.setItem(taskHour, task);
   console.log(taskHour, task);

});

// local storage get item and write to timeblock
$("#hour-9").val(localStorage.getItem("hour-9"))
$("#hour-10").val(localStorage.getItem("hour-10"))
$("#hour-11").val(localStorage.getItem("hour-11"))
$("#hour-12").val(localStorage.getItem("hour-12"))
$("#hour-13").val(localStorage.getItem("hour-13"))
$("#hour-14").val(localStorage.getItem("hour-14"))
$("#hour-15").val(localStorage.getItem("hour-15"))
$("#hour-16").val(localStorage.getItem("hour-16"))
$("#hour-17").val(localStorage.getItem("hour-17"))

if (currentHour < 9) {
$("#hour-9").addClass( "future" );
} else if (currentHour > 9) {
  $("#hour-9").addClass( " past ");
} else {
  $("#hour-9").addClass( "present" );
};

if (currentHour < 10) {
  $("#hour-10").addClass( "future" );
} else if (currentHour > 10) {
  $("#hour-10").addClass( " past " );
} else {
  $("#hour-10").addClass( "present" );
};

if (currentHour < 11) {
  $("#hour-11").addClass( "future" );
} else if (currentHour > 11) {
  $("#hour-11").addClass( " past " );
} else {
  $("#hour-11").addClass( "present" );
};

if (currentHour < 12) {
  $("#hour-12").addClass( "future" );
} else if (currentHour > 12) {
  $("#hour-12").addClass( " past " );
} else {
  $("#hour-12").addClass( "present" );
};

if (currentHour < 13) {
  $("#hour-13").addClass( "future" );
} else if (currentHour > 13) {
  $("#hour-13").addClass( " past " );
} else {
  $("#hour-13").addClass( "present" );
};

if (currentHour < 14) {
  $("#hour-14").addClass( "future" );
} else if (currentHour > 14) {
  $("#hour-14").addClass( " past " );
} else {
  $("#hour-14").addClass( "present" );
};

if (currentHour < 15) {
  $("#hour-15").addClass( "future" );
} else if (currentHour > 15) {
  $("#hour-15").addClass( " past " );
} else {
  $("#hour-15").addClass( "present" );
};

if (currentHour < 16) {
  $("#hour-16").addClass( "future" );
} else if (currentHour > 16) {
  $("#hour-16").addClass( " past " );
} else {
  $("#hour-16").addClass( "present" );
};

if (currentHour < 17) {
  $("#hour-17").addClass( "future" );
} else if (currentHour > 17) {
  $("#hour-17").addClass( " past " );
} else {
  $("#hour-17").addClass( "present" );
};