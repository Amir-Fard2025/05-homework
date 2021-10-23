$(document).ready(function () {
  // define moment variables; global
  var today = moment().format("MMM Do, YYYY, h:mm:ss a");
  $("#currentDay").text(today);
  var currentHourA = moment().format("h a");

  // define document variables
  var hourSlot = $(".row");

  // <>
  function changeHour() {
    // change 12 Am/Pm to 24 hour
    if (currentHourA.includes("pm")) {
      var currentHour = parseInt(moment().format("h")) + 12;
    } else {
      var currentHour = parseInt(moment().format("h"));
    }
    return currentHour;
  }

  // <>
  hourSlot.each(function () {
    // change the color of rows here
    var tableTime = parseInt($(this).attr("data-time"));
    var currentTime = changeHour();
    // var tableDescription = $(this).children[1];
    // console.log(tableTime);
    // console.log(currentTime);
    if (tableTime < currentTime) {
      // console.log("before");
      $(this).css("background-color", "#ede4e4");
    } else if (tableTime === currentTime) {
      // console.log("now");
      $(this).css("background-color", "#e0ffcf");
    } else {
      // console.log("after");
      $(this).css("background-color", "#cfd9ff");
    }
  });
  // Add save button, and set the local storage
  var saveButton = $(".saveBtn");
  saveButton.on("click", function (event) {
    event.preventDefault();
    var tableSchedule = $(this).siblings(".decription").val();
    var buttonId = $(this).attr("id");
    localStorage.setItem(buttonId, tableSchedule);
  });
  // Get the local storage back to description
  $("#btn-1").siblings(".decription").text(localStorage.getItem("btn-1"));
  $("#btn-2").siblings(".decription").text(localStorage.getItem("btn-2"));
  $("#btn-3").siblings(".decription").text(localStorage.getItem("btn-3"));
  $("#btn-4").siblings(".decription").text(localStorage.getItem("btn-4"));
  $("#btn-5").siblings(".decription").text(localStorage.getItem("btn-5"));
  $("#btn-6").siblings(".decription").text(localStorage.getItem("btn-6"));
  $("#btn-7").siblings(".decription").text(localStorage.getItem("btn-7"));
  $("#btn-8").siblings(".decription").text(localStorage.getItem("btn-8"));
  $("#btn-9").siblings(".decription").text(localStorage.getItem("btn-9"));
});
