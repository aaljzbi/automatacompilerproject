// Get the canvas element
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Get the dropdown button and content elements
const dropdownBtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

// Get the input element and the DFA button
const inputEl = document.getElementById('selectedOption');
const dfaBtn = document.getElementById('dfa-btn');

// Set the default option
let selectedOption = dropdownContent.firstElementChild.id;

// Add event listeners to the dropdown links
dropdownContent.querySelectorAll('a').forEach(option => {
  option.addEventListener('click', () => {
    selectedOption = option.id;
    inputEl.value = option.textContent;
  });
});

// Add event listener to the DFA button
dfaBtn.addEventListener('click', () => {
  // Get the selected option from the dropdown
  const selected = selectedOption;
  const scale = window.devicePixelRatio;

  canvas.width = canvas.offsetWidth * scale;
  canvas.height = canvas.offsetHeight * scale;

  ctx.scale(scale, scale);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
if (selected === 'option1') {
//CIRCLE 1 CODE
  // Draw a circle
    ctx.beginPath();
    ctx.arc(75, 50, 25, 0, 2 * Math.PI);
    ctx.stroke();
    // text in circle 1
    ctx.font="bold 16px Arial";
    ctx.fillText("1", 75-5, 50+5);
    //arrow (horizontal line)
    ctx.beginPath();
    ctx.moveTo(75 + 25, 50);
    ctx.lineTo(75 + 2 * 25, 50);
    ctx.stroke();
    //letter a between 1 nd 2
    ctx.font = "bold 16px Arial";
    ctx.fillText("a", 75 + 1.5 * 25 - 6, 40);
    //arrowhead (triangle)
    ctx.beginPath();
    ctx.moveTo(75 + 2 * 25 - 10, 50 - 5);
    ctx.lineTo(75 + 2 * 25, 50);
    ctx.lineTo(75 + 2 * 25 - 10, 50 + 5);
    ctx.fill();
   
//CIRCLE 2 CODE    
    // Draw another circle
    ctx.beginPath();
    ctx.arc(75 + 2 * 25 + 25, 50, 25, 0, 2 * Math.PI);
    ctx.stroke();
    // Add text to the second circle
    ctx.fillText("2", 75 + 2.6 * 25 + 3, 50 + 7);
    //Arrow going to circle 4
    ctx.beginPath();
    ctx.moveTo(75 + 2 * 25 + 50, 50);
    ctx.lineTo(75 + 2 * 25 + 75, 50);
    ctx.stroke();
    //arrowhead (triangle)
    ctx.beginPath();
    ctx.moveTo(75 + 2 * 25 + 75, 45);
    ctx.lineTo(75 + 2 * 25 + 80, 50);
    ctx.lineTo(75 + 2 * 25 + 75, 55);
    ctx.fill();
    // Add text "a" above the arrow
    ctx.fillText("a", 75 + 2 * 25 + 62, 40);

//CIRCLE 3 CODE
    //Arrowline (vertical)
    ctx.beginPath();
    ctx.moveTo(75 + 2 * 25 - 50, 50 + 25);
    ctx.lineTo(75 + 2 * 25 - 50, 50 + 2 * 25);
    ctx.stroke();
    // Arrowhead
    ctx.beginPath();
    ctx.moveTo(75 + 2 * 25 - 50, 50 + 2 * 25 - 5); // shift downwards by 5
    ctx.lineTo(75 + 2 * 25 - 50 - 5, 50 + 2 * 25 - 5);
    ctx.lineTo(75 + 2 * 25 - 50, 50 + 2 * 25);
    ctx.lineTo(75 + 2 * 25 - 50 + 5, 50 + 2 * 25 - 5);
    ctx.fill();
    //letter between arrows
    ctx.font = "bold 16px Arial";
    ctx.fillText("b", 75 + 2 * 25 - 70, 50 + 2 * 25 - 5);
    // Draw another circle
    ctx.beginPath();
    ctx.arc(75 + 2 * 25 - 50, 50 + 2 * 25 + 25, 25, 0, 2 * Math.PI);
    ctx.stroke();
    // Add text to the third circle
    ctx.fillText("3", 75 + 2 * 23 - 50, 50 + 2 * 25 + 25 + 7);

// CIRCLE 4 CODE 
    //circle 4  
    ctx.beginPath();
    ctx.arc(75 + 2 * 25 + 105, 50, 25, 0, 2 * Math.PI);
    ctx.stroke();
    //letter inside circle 4
    ctx.font = "bold 16px Arial";
    ctx.fillText("4", 75 + 2.6 * 25 + 85, 50 + 7);
  } else if (selected === 'option2') {
    // Draw a square
    ctx.fillRect(75, 50, 100, 100);
  }
});
