var today = moment().format("MMM Do, YYYY, h:mm:ss a");
$("#currentDay").text(today);
var currentHour = parseInt(moment().format("h"));

$(".save").on("click", function (event) {
  var clickButtonTime = $(event.target).siblings().first();
  var clickButtonTask = $(event.target).siblings().last();

  var contentTime = parseInt(clickButtonTime.text());
  if (contentTime < currentHour) {
    console.log("akbariiii");
    clickButtonTask.css({ "background-color": "#9fc777" });
  } else if (contentTime === currentHour) {
    console.log("piiiiiish");
    clickButtonTask.css({ "background-color": "#1a1a1a" });
  } else {
    console.log("paaaaaanj");
    clickButtonTask.css({ "background-color": "#630e3e" });
  }
});
