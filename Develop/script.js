// Display the current date in the header of the page
let currentDate = dayjs().format("MMMM D, YYYY");
$("#currentDay").text(currentDate);


// Function to update the current date and time
$(function () {
  function updateTime() {
    let now = dayjs();
    $('#currentDay').text(now.format('dddd, MMMM D, YYYY'));

//Added hour, minute and second display to show in accordance with the calendar.
    $('#currentTime').text(now.format('h:mm:ss A')); 
  }
  updateTime();
  setInterval(updateTime, 1000);
});