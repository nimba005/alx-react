const $ = require('jquery');
const _ = require('lodash');

function updateCounter() {
  let count = 0; // Initialize a counter variable

  // Debounce function to update count every 500ms (prevents spam)
  const debouncedUpdate = _.debounce(() => {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }, 500);

  // Bind debouncedUpdate function to button click event
  $('#button').on('click', debouncedUpdate);
}

$(document).ready(function() {
  $('body').append(
    `<h1>Holberton Dashboard</h1>
    <p>Dashboard data for the students</p>
    <button id="button">Click here to get started</button>
    <p id="count"></p>
    <p>Copyright - Holberton School</p>`
  );

  updateCounter(); // Call updateCounter on page load
});