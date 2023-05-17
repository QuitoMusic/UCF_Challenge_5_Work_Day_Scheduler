$(function() {
  // Function links every save button with an event listener
  $(".saveBtn").on("click", function() {
    let userInput = $(this).siblings(".description").val().trim();
    let timeBlockId = $(this).closest(".time-block").attr("id");
    localStorage.setItem(timeBlockId, userInput);
  });

  // Function applies the past, present, or future class depending on the current time.
  let currentHour = dayjs().hour();
  $(".time-block").each(function() {
    let timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // Saves the input to the local storage and names the space saved.
  $(".time-block").each(function() {
    let timeBlockId = $(this).attr("id");
    let userInput = localStorage.getItem(timeBlockId);
    if (userInput) {
      $(this).find(".description").val(userInput);
    }
  });
});

$(function () {
  // Updates the current date and time
  function updateTime() {
    let now = dayjs();
    $('#currentDay').text(now.format('dddd, MMMM D, YYYY'));
    $('#currentTime').text(now.format('h:mm:ss A'));
  }
  updateTime();
  //Update time by the second, live.
  setInterval(updateTime, 1000);
});