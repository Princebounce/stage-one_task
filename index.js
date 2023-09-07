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

// Function to update the current UTC+1 time
function updateUTCPlusOneTime() {
  const utcTimeElement = document.getElementById("utcTime");
  const utcOffset = 1; // UTC+1
  setInterval(() => {
    const now = new Date();
    const utcTime = new Date(now.getTime() + utcOffset * 60 * 60 * 1000);
    utcTimeElement.textContent = utcTime.toISOString();
  }, 1000);
}

// Call the functions when the page loads
window.onload = function () {
  updateDayOfWeek();
  updateUTCPlusOneTime(); // Call the updated function for UTC+1 time
};
