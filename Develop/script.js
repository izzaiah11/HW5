/*
```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist */ 

$(document).ready(function(){
    // Retrieve stored data from local storage and set the value of the appropriate elements.
    $(".time-block").each(function() {
        var timeBlockId = $(this).attr("id");
        var storedValue = localStorage.getItem(timeBlockId);
        $(this).find(".description").val(storedValue);
    });
    // sets and saves data to local storage 
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    });
    // Brings in current day and time  
    $("#currentDay").text(dayjs());
});
