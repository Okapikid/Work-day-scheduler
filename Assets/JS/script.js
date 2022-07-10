// display current day, month, and date in header
var currentDate = moment().utcOffset(-240).format('LLLL');
$("#currentDay").text(currentDate);

// color block appropriately based on time
function hourColor () {
  var currentHour = moment().format("H");
  
  $(".description").each(function () {
    var blockHour = parseInt($(this).attr("id"));
    
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("past");
    } else if (blockHour > currentHour) {
      $(this).addClass("future");
    }
  })
}
hourColor();
// for each .description in container, add appropriate class based on current time

// create local storage

// add event to local storage when save button is clicked
