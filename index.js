// Function to update the current day of the week
function updateDayOfWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()];
  document.getElementById("dayOfWeek").textContent = dayOfWeek;
}

// Function to update the current UTC date and time 
function updateUTCDateAndTime() {
  const dateElement = document.getElementById("utcDate");
  const timeElement = document.getElementById("utcTime");
  setInterval(() => {
    const now = new Date();
    const utcDate = now.toDateString();
    const utcTime = now.toTimeString();
    dateElement.textContent = `Date: ${utcDate}`;
    timeElement.textContent = `Time: ${utcTime}`;
  }, 1000);
}

// function call
window.onload = function () {
  updateDayOfWeek();
  updateUTCDateAndTime(); 
};
