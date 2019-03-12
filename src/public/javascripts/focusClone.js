/*
Author: Luke Houge
Purpose: Clones table entry to header
*/
let x = 1; // counter for boxes filed so far
let i;
function clone(id) { // eslint-disable-line no-unused-vars
  if (x === 1) {
    // clone for box 1
    setInterval(() => {
      const value = document.getElementById(id).innerHTML; // gets value from table
      document.getElementById('header_value_1').innerHTML = value; // sets the value tp the box
      const name = id.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2'); // changes the ID from camel case to regular
      document.getElementById('header_label_1').innerHTML = name; // sets that as the label for the box
    }, 300); // updates every 300 ms
    x += 1;
  } else if (x === 2) {
    // clone for box 2
    setInterval(() => {
      const value = document.getElementById(id).innerHTML;
      document.getElementById('header_value_2').innerHTML = value;
      const name = id.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2');
      document.getElementById('header_label_2').innerHTML = name;
    }, 300);
    x += 1;
  } else if (x === 3) {
    // clone for box 3
    setInterval(() => {
      const value = document.getElementById(id).innerHTML;
      document.getElementById('header_value_3').innerHTML = value;
      const name = id.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2');
      document.getElementById('header_label_3').innerHTML = name;
    }, 300);
    x += 1;
  } else if (x === 4) {
    // clone for box 4
    setInterval(() => {
      const value = document.getElementById(id).innerHTML;
      document.getElementById('header_value_4').innerHTML = value;
      const name = id.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2');
      document.getElementById('header_label_4').innerHTML = name;
    }, 300);
    x += 1;
  } else if (x > 4) {
    alert('Max of 4 values reached, please remove one and try again');
  }
}

// clear for focus div (not working)
function clear() { // eslint-disable-line no-unused-vars
  for (i = 1; i < 5; i += 1) {
    document.getElementById(`header_value_${String(i)}`).innerHTML = '';
    document.getElementById(
      `header_label_${String(i)}`,
    ).innerHTML = `Value ${String(i)}`;
  }
}
