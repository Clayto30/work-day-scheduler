var currentDate = moment().format("dddd, MMMM Do");
// var text1 = document.getElementById('textArea').value;     // plain JavaScript
// var text2 = $("#myTextArea").val();
var currentHour = (moment().hour());
// set currentDate on page
$("#currentDay").append(currentDate);
//capture the button click
$(".btn").on("click", function() {
   var task = $(this).prev().val();
   var taskHour = $(this).prev().attr('id');
   var tasks = {"tasks": [
    {name: task, type: taskHour}
   ]};
   localStorage.setItem("tasks", tasks);
  /* var taskDataObj = {
    name: task,
    type: taskHour,
    
}; 
tasks.push(taskDataObj);
*/
});
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



                    

  // remove any old classes
  // $("#hour-9").removeClass("past present future")
  // add past future, or present class
 /* if (currentHour > 9) {
    $("#hour-9").addClass( "past" );
  } else if (currentHour < 9) {
  $("#hour-9").addClass( "future" );
  } else {
    $("#hour-9").addClass( "present" );
  }
}

  /*$("#hour-10").removeClass("past present future")
  // add past future, or present class
  if (currentHour > 10) {
    $("#hour-10").addClass("past");
  } else if (currentHour < 10) {
  $("#hour-10").addClass("future");
  } else {
    $("#hour-10").addClass("present");
  }

  $("#hour-11").removeClass("past present future")
  // add past future, or present class
  if (currentHour > 11) {
    $("#hour-11").addClass("past");
  } else if (currentHour < 11) {
  $("#hour-11").addClass("future");
  } else {
    $("#hour-11").addClass("present");
  }
  $("#hour-12").removeClass("past present future")
  // add past future, or present class
  if (currentHour > 12) {
    $("#hour-12").addClass("past");
  } else if (currentHour < 12) {
  $("#hour-12").addClass("future");
  } else {
    $("#hour-12").addClass("present");
  }
  $("#hour-13").removeClass("past present future")
  // add past future, or present class
  if (currentHour > 13) {
    $("#hour-13").addClass("past");
  } else if (currentHour < 13) {
  $("#hour-13").addClass("future");
  } else {
    $("#hour-13").addClass("present");
  }
  $("#hour-14").removeClass("past present future")
  // add past future, or present class
  if (currentHour > 14) {
    $("#hour-14").addClass("past");
  } else if (currentHour < 14) {
  $("#hour-14").addClass("future");
  } else {
    $("#hour-14").addClass("present");
  }

  $("#hour-15").removeClass("past present future")
  // add past future, or present class
  if (currentHour > 15) {
    $("#hour-15").addClass("past");
  } else if (currentHour < 15) {
  $("#hour-15").addClass("future");
  } else {
    $("#hour-15").addClass("present");
  }

  $("#hour-16").removeClass("past present future")
  // add past future, or present class
  if (currentHour > 16) {
    $("#hour-16").addClass("past");
  } else if (currentHour < 16) {
  $("#hour-16").addClass("future");
  } else {
    $("#hour-16").addClass("present");
  }
  $("#hour-17").removeClass("past present future")
  // add past future, or present class
  if (currentHour > 17) {
    $("#hour-17").addClass("past");
  } else if (currentHour < 17) {
  $("#hour-17").addClass("future");
  } else {
    $("#hour-17").addClass("present");
  }
};
*/

