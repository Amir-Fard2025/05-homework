// define moment variables; global
var today = moment().format("MMM Do, YYYY, h:mm:ss a");
$("#currentDay").text(today);
var currentHourA = moment().format("h a");

// define document variables
var hourSlot = $(".row");
var hourSlotChildren = hourSlot.children();
console.log(typeof hourSlotChildren[1]);

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
  console.log(tableTime);
  console.log(currentTime);
  if (tableTime < currentTime) {
    console.log("before");
    $(this).css("background-color", "#ede4e4");
  } else if (tableTime === currentTime) {
    console.log("now");
    $(this).css("background-color", "#e0ffcf");
  } else {
    console.log("after");
    $(this).css("background-color", "#cfd9ff");
  }
});
