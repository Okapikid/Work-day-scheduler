// display current day, month, and date in header
var currentDate = moment().utcOffset(-240).format('LLLL');
$("#currentDay").text(currentDate);

var notification = "Appointement added to local storage!"


function hourColor () {
// determine current hour from Moment
  var currentHour = moment().format("H");
 
// for each .description in container, add appropriate class based on current time
  $(".description").each(function () {
    var blockHour = parseInt($(this).attr("id"));
    
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else if (blockHour > currentHour) {
      $(this).addClass("future");
    }
  })
}
hourColor();

// add event to local storage when save button is clicked
$(".saveArea").on("click", function() {
  var time = $(this).parent().attr("id");
  var activity = $(this).siblings(".description").val();

  // sets the associated description in local storage
  localStorage.setItem(time, activity);
  
  document.getElementById("notice").textContent = notification;
})

// create local storage
$("#9time .description").val(localStorage.getItem("9time"));
$("#10time .description").val(localStorage.getItem("10time"));
$("#11time .description").val(localStorage.getItem("11time"));
$("#12time .description").val(localStorage.getItem("12time"));
$("#13time .description").val(localStorage.getItem("13time"));
$("#14time .description").val(localStorage.getItem("14time"));
$("#15time .description").val(localStorage.getItem("15time"));
$("#16time .description").val(localStorage.getItem("16time"));
$("#17time .description").val(localStorage.getItem("17time"));
  