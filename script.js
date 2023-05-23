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
// start state
    ctx.beginPath();
    ctx.arc(70, 370, 25, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.font="bold 64px Arial";
    ctx.fillText("-", 57.5, 385);
    ctx.beginPath();
    ctx.moveTo(30, 370);
    ctx.lineTo(30, 45);
    ctx.stroke();
    ctx.moveTo(30, 370);
    ctx.lineTo(45, 370);
    ctx.stroke();
    ctx.moveTo(30, 45);
    ctx.lineTo(45, 45);
    ctx.stroke();
    ctx.moveTo(40, 40);
    ctx.lineTo(50, 45);
    ctx.lineTo(40, 50);
    ctx.fill()

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
    // Arrow from circle 4 to circle 7
    ctx.beginPath();
    ctx.moveTo(75 + 2 * 25 + 130, 50);
    ctx.lineTo(75 + 2 * 25 + 155, 50);
    ctx.stroke();
    // Arrowhead (triangle)
    ctx.beginPath();
    ctx.moveTo(75 + 2 * 25 + 155, 45);
    ctx.lineTo(75 + 2 * 25 + 160, 50);
    ctx.lineTo(75 + 2 * 25 + 155, 55);
    ctx.fill();
    // Add text "b" above the arrow
    ctx.fillText("b", 75 + 2 * 25 + 142, 40);

// CIRCLE 5 CODE
// Draw another circle
    ctx.beginPath();
    ctx.arc(155 + 2 * 25 - 50, 50 + 2 * 37, 25, 0, 2 * Math.PI);
    ctx.stroke();
// Add text to the fifth circle
    ctx.fillText("5", 155 + 2 * 23 - 50, 25 + 2 * 25 + 50 + 7);
// Arrow from circle 3 to circle 5
    ctx.beginPath();
    ctx.moveTo(75 + 25, 125);
    ctx.lineTo(75 + 2 * 25, 125);
    ctx.stroke();
// Arrowhead (triangle)
    ctx.beginPath();
    ctx.moveTo(100 +  25, 120);
    ctx.lineTo(105 +  25, 125);
    ctx.lineTo(100 +  25, 130);
    ctx.fill();
 // Add text "b" above the arrow
    ctx.fillText("b", 40 + 2 * 25 + 15, 120);    

// CIRCLE 6 CODE
// Draw another circle
    ctx.beginPath();
    ctx.arc(75 + 2 * 25 - 50, 50 + 2 * 25 + 100, 25, 0, 2 * Math.PI);
    ctx.stroke();
// Add text to the sixth circle
    ctx.fillText("6", 75 + 2 * 23 - 50, 50 + 2 * 25 + 50 + 55);
// Arrow from circle 3 to circle 6
    ctx.beginPath();
    ctx.moveTo(75 + 2 * 25 - 50, 50 + 100);
    ctx.lineTo(75 + 2 * 25 - 50, 50 + 2 * 25 + 80 - 5); // Adjusted to move up by 5
    ctx.stroke();
// Arrowhead (vertical)
    ctx.beginPath();
    ctx.moveTo(75 + 2 * 25 - 50, 50 + 2 * 25 + 75 - 10); // Adjusted to move up by 5
    ctx.lineTo(75 + 2 * 25 - 50 - 5, 50 + 2 * 25 + 75 - 10);
    ctx.lineTo(75 + 2 * 25 - 50, 50 + 2 * 25 + 75);
    ctx.lineTo(75 + 2 * 25 - 50 + 5, 50 + 2 * 25 + 75 - 10);
    ctx.fill();
// Add text "a" above the arrow
    ctx.fillText("a", 75 + 2 * 25 - 70, 120 + 2 * 25);

// CIRCLE 7 CODE
// Draw another circle
    ctx.beginPath();
    ctx.arc(75 + 2 * 25 + 185, 2 * 25, 25, 0, 2 * Math.PI);
    ctx.stroke();
// Add text to the seventh circle
    ctx.fillText("7", 75 + 2 * 23 + 185, 2 * 28);
// Arrow from circle 4 to circle 7
    ctx.beginPath();
    ctx.moveTo(75 + 2 * 25 + 180, 50 + 2 * 25 + 25);
    ctx.lineTo(75 + 2 * 25 + 155, 50 + 2 * 25 + 25);
    ctx.stroke();

//CIRCLE 8 CODE
   // Draw another circle
    ctx.beginPath();
    ctx.arc(205 + 2 * 25 - 25, 50 + 2 * 25 + 25, 25, 0, 2 * Math.PI);
    ctx.stroke();
  //Arrow going to circle 8
    ctx.beginPath();
    ctx.moveTo(75 + 2 * 25 + 55, 125);
    ctx.lineTo(75 + 2 * 25 + 80, 125);
    ctx.stroke();
  //ARROWHEAD
    ctx.beginPath();
    ctx.moveTo(175 +  25, 120);
    ctx.lineTo(180 +  25, 125);
    ctx.lineTo(175 +  25, 130);
    ctx.fill();
    // Add text to the 8 circle
    ctx.fillText("8", 175 + 2 * 25, 131);   
    // Add text "a" above the arrow
    ctx.fillText("a", 75 + 2 * 25 + 62, 120);

//CIRCLE 9 CODE
    // Draw another circle
    ctx.beginPath();
    ctx.arc(130 + 2 * 25 - 25, 50 + 2 * 25 + 100, 25, 0, 2 * Math.PI);
    ctx.stroke();
    //Arrow going to circle 9
    ctx.beginPath();
    ctx.moveTo(75 + 25, 200);
    ctx.lineTo(75 + 2 * 25, 200);
    ctx.stroke();
    // Arrowhead (triangle)
    ctx.beginPath();
    ctx.moveTo(100 +  25, 195);
    ctx.lineTo(105 +  25, 200);
    ctx.lineTo(100 +  25, 205);
    ctx.fill();
    // Add text to the 9 circle
    ctx.fillText("9", 100 + 2 * 25, 205);   
    // Add text "b" above the arrow
    ctx.fillText("b", 40 + 2 * 25 + 15, 195);
    // Arrow going back to circle 3
    ctx.beginPath();
    ctx.moveTo(108 + 25, 190);
    ctx.lineTo(40 + 2 * 25, 150);
    ctx.stroke();
    // Arrowhead for back to circle 3
    ctx.beginPath();
    ctx.moveTo(87 ,  145); // Set starting point to the end point of the line
    ctx.lineTo(97 ,  145); // Adjusted to point towards the line
    ctx.lineTo(87 ,  155); // Adjusted to point towards the line
    ctx.fill();
    // letter for arrow back to circ 3
    ctx.fillText("b", 110, 165);

//CIRCLE 10 CODE
    // Draw another circle
    ctx.beginPath();
    ctx.arc(75 + 2 * 25 + 220, 125, 25, 0, 2 * Math.PI);
    ctx.stroke();
    //Arrow going to circle 8
    ctx.beginPath();
    ctx.moveTo(320, 125);
    ctx.lineTo(255, 125);
    ctx.stroke();
    //ARROWHEAD
    ctx.beginPath();
    ctx.moveTo(310, 120);
    ctx.lineTo(320, 125);
    ctx.lineTo(310, 130);
    ctx.fill();
    // Add text to the 10 circle
    ctx.fillText("10", 336, 130);   
    // Add text "b" above the arrow
    ctx.fillText("b", 280, 120);
    //Arrow horizontal from circle 9
    ctx.beginPath();
    ctx.moveTo(180, 200);
    ctx.lineTo(345, 200);
    ctx.stroke();
    // Add text "a" above the arrow to 10
    ctx.fillText("a", 240, 190);
    //Arrow vertical from circle 9
    ctx.beginPath();
    ctx.moveTo(345, 200);
    ctx.lineTo(345, 150);
    ctx.stroke();
    //Arrowhead vertical from circle 9
    ctx.beginPath();
    ctx.moveTo(340, 160); // Starting point of the arrowhead
    ctx.lineTo(345, 150); // Point at the top of the line
    ctx.lineTo(350, 160); // Point at the top of the line
    ctx.fill();
    //Arrow horizontal from 7
    ctx.beginPath();
    ctx.moveTo(335, 50);
    ctx.lineTo(345, 50);
    ctx.stroke();
    //Arrow vertical from 7
    ctx.beginPath();
    ctx.moveTo(345, 50);
    ctx.lineTo(345, 100);
    ctx.stroke();
    //Arrowhead vertical from circle 7
    ctx.beginPath();
    ctx.moveTo(340, 90); // Starting point of the arrowhead
    ctx.lineTo(345, 100); // Point at the top of the line
    ctx.lineTo(350, 90); // Point at the top of the line
    ctx.fill();
    // 7 arrow letter
    ctx.fillText("a", 330, 80);
    // arrow from 10 to 11
    ctx.beginPath();
    ctx.moveTo(370, 125);
    ctx.lineTo(420, 125);
    ctx.stroke();
    //ARROWHEAD
    ctx.beginPath();
    ctx.moveTo(410, 120);
    ctx.lineTo(420, 125);
    ctx.lineTo(410, 130);
    ctx.fill();
    // arrow from 10 to 11 letter
    ctx.fillText("a,b", 380, 120);

// CIRCLE 11 CODE
    //Circle
    ctx.beginPath();
    ctx.arc(445, 125, 25, 0, 2 * Math.PI);
    ctx.stroke();
    // Add text to the 11 circle
    ctx.fillText("11", 437, 130);
    //arrow to 12
    ctx.beginPath();
    ctx.moveTo(470, 125);
    ctx.lineTo(520, 125);
    ctx.stroke();
    //arrowhead   
    ctx.beginPath();
    ctx.moveTo(510, 120);
    ctx.lineTo(520, 125);
    ctx.lineTo(510, 130);
    ctx.fill();
    // arrow from 11 to 12 letter
    ctx.fillText("a", 490, 120);
    // vert arrow to 13
    ctx.beginPath();
    ctx.moveTo(445, 100);
    ctx.lineTo(445, 75);
    ctx.stroke();
    // hori arrow to 13
    ctx.beginPath();
    ctx.moveTo(445, 75);
    ctx.lineTo(645, 75);
    ctx.stroke();
    // vert arrow to 13
    ctx.beginPath();
    ctx.moveTo(645, 100);
    ctx.lineTo(645, 75);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(640, 90); // Starting point of the arrowhead
    ctx.lineTo(645, 100); // Point at the top of the line
    ctx.lineTo(650, 90); // Point at the top of the line
    ctx.fill();
    // arrow from 11 to 13 letter
    ctx.fillText("b", 550, 70);

//Circle 12 code
    //Circle
    ctx.beginPath();
    ctx.arc(545, 125, 25, 0, 2 * Math.PI);
    ctx.stroke();
    // Add text to the 12 circle
    ctx.fillText("12", 537, 130);
    //arrow to 13
    ctx.beginPath();
    ctx.moveTo(570, 125);
    ctx.lineTo(620, 125);
    ctx.stroke();
    //arrowhead   
    ctx.beginPath();
    ctx.moveTo(610, 120);
    ctx.lineTo(620, 125);
    ctx.lineTo(610, 130);
    ctx.fill();
    // arrow from 12 to 13 letter
    ctx.fillText("b", 590, 120);
    // 12 to 14 vert
    ctx.beginPath();
    ctx.moveTo(535, 148);
    ctx.lineTo(535, 200);
    ctx.stroke();
    // 12 to 14 hori
    ctx.beginPath();
    ctx.moveTo(535, 200);
    ctx.lineTo(745, 200);
    ctx.stroke();
    // 12 to 14 vert
    ctx.beginPath();
    ctx.moveTo(745, 200);
    ctx.lineTo(745, 150);
    ctx.stroke();
    // 12 to 14 vert arrow
    ctx.beginPath();
    ctx.moveTo(740, 160);
    ctx.lineTo(745, 150);
    ctx.lineTo(750, 160);
    ctx.fill();
    // 12 to 14 letter
    ctx.fillText ("a", 690, 190)
//Circle 13 code
    //Circle
    ctx.beginPath();
    ctx.arc(645, 125, 25, 0, 2 * Math.PI);
    ctx.stroke();
    // Add text to the 12 circle
    ctx.fillText("13", 637, 130);
    //arrow to 13
    ctx.beginPath();
    ctx.moveTo(570, 125);
    ctx.lineTo(620, 125);
    ctx.stroke();
    //13 to 12 vert arrow
    ctx.beginPath();
    ctx.moveTo(645, 150);
    ctx.lineTo(645, 175);
    ctx.stroke();
    ctx.beginPath();
    // 13 to 12 hori
    ctx.beginPath();
    ctx.moveTo(545, 175);
    ctx.lineTo(645, 175);
    ctx.stroke();
    //13 to 12 vert arrow
    ctx.beginPath();
    ctx.moveTo(545, 150);
    ctx.lineTo(545, 175);
    ctx.stroke();
    // 13 to 12 arrowhead
    ctx.beginPath();
    ctx.moveTo(540, 160);
    ctx.lineTo(545, 150);
    ctx.lineTo(550, 160);
    ctx.fill();
    // 13 to 12 letter 
    ctx.fillText("a", 590, 170);
    // 13 to 15
    ctx.beginPath();
    ctx.moveTo(650, 150);
    ctx.lineTo(650, 250);
    ctx.stroke()
    ctx.beginPath();
    ctx.moveTo(650, 250);
    ctx.lineTo(845, 250);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(845, 250);
    ctx.lineTo(845, 150);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(840, 160);
    ctx.lineTo(845, 150);
    ctx.lineTo(850, 160);
    ctx.fill();
    ctx.fillText ("b", 800, 240)

//Circle 14 code
    //Circle
    ctx.beginPath();
    ctx.arc(745, 125, 25, 0, 2 * Math.PI);
    ctx.stroke();
    //Circle smaller
    ctx.beginPath();
    ctx.arc(745, 125, 20, 0, 2 * Math.PI);
    ctx.stroke();
    // Add text to the 14 circle
    ctx.fillText("14", 735, 130);
    //arrow to 13
    ctx.beginPath();
    ctx.moveTo(670, 125);
    ctx.lineTo(720, 125);
    ctx.stroke();
    //arrowhead   
    ctx.beginPath();
    ctx.moveTo(680, 120);
    ctx.lineTo(670, 125);
    ctx.lineTo(680, 130);
    ctx.fill();
    // 14 to 13 letter
    ctx.fillText("b", 690, 120);
    //loop
    ctx.beginPath();
    ctx.moveTo(770, 125);
    ctx.lineTo(790, 125);
    ctx.stroke()
    ctx.beginPath();
    ctx.moveTo(790, 125);
    ctx.lineTo(790, 115);
    ctx.stroke()
    ctx.beginPath();
    ctx.moveTo(770, 115);
    ctx.lineTo(790, 115);
    ctx.stroke()
    ctx.beginPath();
    ctx.moveTo(780, 110);
    ctx.lineTo(770, 115);
    ctx.lineTo(780, 120);
    ctx.fill();
    ctx.fillText ("a", 775, 140)

//Circle 15 code
    //Circle
    ctx.beginPath();
    ctx.arc(845, 125, 25, 0, 2 * Math.PI);
    ctx.stroke();
    //Circle smaller
    ctx.beginPath();
    ctx.arc(845, 125, 20, 0, 2 * Math.PI);
    ctx.stroke();
    // Add text to the 12 circle
    ctx.fillText("15", 835, 130);
    // 15 to 12
    ctx.beginPath();
    ctx.moveTo(845, 100);
    ctx.lineTo(845, 40);
    ctx.stroke()
    ctx.beginPath();
    ctx.moveTo(845, 40);
    ctx.lineTo(535, 40);
    ctx.stroke()
    ctx.moveTo(535, 100);
    ctx.lineTo(535, 40);
    ctx.stroke()
    ctx.moveTo(530, 90);
    ctx.lineTo(535, 100);
    ctx.lineTo(540, 90);
    ctx.fill();
    ctx.fillText ("b", 700, 30)
    //loop
    ctx.beginPath();
    ctx.moveTo(870, 125);
    ctx.lineTo(890, 125);
    ctx.stroke()
    ctx.beginPath();
    ctx.moveTo(890, 125);
    ctx.lineTo(890, 115);
    ctx.stroke()
    ctx.beginPath();
    ctx.moveTo(870, 115);
    ctx.lineTo(890, 115);
    ctx.stroke()
    ctx.beginPath();
    ctx.moveTo(880, 110);
    ctx.lineTo(870, 115);
    ctx.lineTo(880, 120);
    ctx.fill();
    ctx.fillText ("b", 875, 140)

} else if (selected === 'option2') {

// start state
    ctx.beginPath();
    ctx.arc(70, 370, 25, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.font="bold 64px Arial";
    ctx.fillText("-", 57.5, 385);
    ctx.beginPath();
    ctx.moveTo(30, 370);
    ctx.lineTo(30, 200);
    ctx.stroke();
    ctx.moveTo(30, 370);
    ctx.lineTo(45, 370);
    ctx.stroke();
    ctx.moveTo(30, 200);
    ctx.lineTo(45, 200);
    ctx.stroke();
    ctx.moveTo(35, 195);
    ctx.lineTo(45, 200);
    ctx.lineTo(35, 205);
    ctx.fill()
//CIRCLE 1
    //Circle n font
    ctx.beginPath();
    ctx.arc(70, 200, 25, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.font="bold 16px Arial";
    ctx.fillText("1", 65, 205);
    ctx.beginPath();
    //vert
    ctx.moveTo(70, 125);
    ctx.lineTo(70, 175);
    ctx.stroke();
    ctx.moveTo(70, 225);
    ctx.lineTo(70, 275);
    ctx.stroke();
    //Hori
    ctx.moveTo(70, 125);
    ctx.lineTo(140, 125);
    ctx.stroke();
    ctx.moveTo(70, 275);
    ctx.lineTo(140, 275);
    ctx.stroke();
    ctx.beginPath();
    //arrowheads
    ctx.moveTo(140, 120);
    ctx.lineTo(150, 125);
    ctx.lineTo(140, 130);
    ctx.fill();
    ctx.moveTo(140, 270);
    ctx.lineTo(150, 275);
    ctx.lineTo(140, 280);
    ctx.fill();

//CIRCLE 4
     //Circle n font
     ctx.beginPath();
     ctx.arc(175, 125, 25, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.font="bold 16px Arial";
     ctx.fillText("4", 170, 130);
     ctx.beginPath();
     //verti
     ctx.moveTo(170, 150);
     ctx.lineTo(170, 250);
     ctx.stroke();
     //verti arrowhead
     ctx.moveTo(165, 160); // Starting point of the arrowhead
     ctx.lineTo(170, 150); // Point at the top of the line
     ctx.lineTo(175, 160); // Point at the top of the line
     ctx.fill();
     //hori arrow to 5
     ctx.moveTo(200, 125);
     ctx.lineTo(275, 125);
     ctx.stroke();
     //verti arrow to 5
     ctx.moveTo(275, 125);
     ctx.lineTo(275, 175);
     ctx.stroke();
     //down arrow to 5
     ctx.moveTo(270, 170);
     ctx.lineTo(275, 175);
     ctx.lineTo(280, 170);
     ctx.fill()


//CIRCLE 3
    //Circle n font
    ctx.beginPath();
    ctx.arc(175, 275, 25, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.font="bold 16px Arial";
    ctx.fillText("3", 170, 280);
    ctx.beginPath();
    //verti
    ctx.moveTo(180, 150);
    ctx.lineTo(180, 250);
    ctx.stroke();
    //verti arrowhead
    ctx.moveTo(175, 240); // Starting point of the arrowhead
    ctx.lineTo(180, 250); // Point at the top of the line
    ctx.lineTo(185, 240); // Point at the top of the line
    ctx.fill();
    //hori arrow to 5
    ctx.moveTo(200, 275);
    ctx.lineTo(275, 275);
    ctx.stroke();
    //verti arrow to 5
    ctx.moveTo(275, 225);
    ctx.lineTo(275, 275);
    ctx.stroke();
    //down arrow to 5
    ctx.moveTo(270, 230);
    ctx.lineTo(275, 225);
    ctx.lineTo(280, 230);
    ctx.fill()

//CIRCLE 5
     //Circle n font
     ctx.beginPath();
     ctx.arc(275, 200, 25, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.font="bold 16px Arial";
     ctx.fillText("5", 270, 205);
     ctx.beginPath();
     //Hori arrow to 6
     ctx.moveTo(300, 200);
     ctx.lineTo(350, 200);
     ctx.stroke();
     //arrowhead
     ctx.moveTo(340, 195);
     ctx.lineTo(350, 200);
     ctx.lineTo(340, 205);
     ctx.fill();

// CIRCLE 6
     //Circle n font
     ctx.beginPath();
     ctx.arc(375, 200, 25, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.font="bold 16px Arial";
     ctx.fillText("6", 370, 205);
     ctx.beginPath();
     // Hori arrow to 7 
     ctx.moveTo(400, 200);
     ctx.lineTo(450, 200);
     ctx.stroke();
     //arrowhead
     ctx.moveTo(440, 195);
     ctx.lineTo(450, 200);
     ctx.lineTo(440, 205);
     ctx.fill();
     //loop
     ctx.moveTo(365, 222);
     ctx.lineTo(365, 245);
     ctx.stroke();
     ctx.moveTo(365, 245);
     ctx.lineTo(375, 245);
     ctx.stroke();
     ctx.moveTo(375, 230);
     ctx.lineTo(375, 245);
     ctx.stroke();
     ctx.moveTo(370, 235);
     ctx.lineTo(375, 225);
     ctx.lineTo(380, 235);
     ctx.fill();

// CIRCLE 7
     //Circle n font
     ctx.beginPath();
     ctx.arc(475, 200, 25, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.font="bold 16px Arial";
     ctx.fillText("7", 470, 205);
     ctx.beginPath();
     //Hori
     ctx.moveTo(470, 125);
     ctx.lineTo(470, 175);
     ctx.stroke();
     ctx.moveTo(470, 225);
     ctx.lineTo(470, 275);
     ctx.stroke();
     //Vert
     ctx.moveTo(470, 125);
     ctx.lineTo(540, 125);
     ctx.stroke();
     ctx.moveTo(470, 275);
     ctx.lineTo(540, 275);
     ctx.stroke();
     ctx.beginPath();
     //Arrowhead
     ctx.moveTo(540, 120);
     ctx.lineTo(550, 125);
     ctx.lineTo(540, 130);
     ctx.fill();
     ctx.moveTo(540, 270);
     ctx.lineTo(550, 275);
     ctx.lineTo(540, 280);
     ctx.fill();

//CIRCLE 8
     //Circle n font
     ctx.beginPath();
     ctx.arc(575, 125, 25, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.font="bold 16px Arial";
     ctx.fillText("8", 570, 130);
     ctx.beginPath();
     //Hori arrow to 2
     ctx.moveTo(600, 125);
     ctx.lineTo(670, 125);
     ctx.stroke();
     ctx.moveTo(600, 275);
     ctx.lineTo(670, 275);
     ctx.stroke();
     ctx.beginPath();
     //Vert Arrow to 2
     ctx.moveTo(670, 125);
     ctx.lineTo(670, 175);
     ctx.stroke();
     ctx.moveTo(670, 225);
     ctx.lineTo(670, 275);
     ctx.stroke();
     //arrowhead down to 2
     ctx.moveTo(665, 170);
     ctx.lineTo(670, 175);
     ctx.lineTo(675, 170);
     ctx.fill()
     //arrowhead up to 2
     ctx.moveTo(665, 230);
     ctx.lineTo(670, 225);
     ctx.lineTo(675, 230);
     ctx.fill()
     //8 to 2 arrow up
     ctx.moveTo(575, 100);
     ctx.lineTo(575, 50);
     ctx.stroke()
     //8 to 2 arrow hori
     ctx.moveTo(575, 50);
     ctx.lineTo(375, 50);
     ctx.stroke()
     //8 to 2 arrow down
     ctx.moveTo(375, 50);
     ctx.lineTo(375, 175);
     ctx.stroke()
     //arrowhead down
     ctx.moveTo(370, 170);
     ctx.lineTo(375, 175);
     ctx.lineTo(380, 170);
     ctx.fill()

//CIRCLE 9
     //Circle n font
     ctx.beginPath();
     ctx.arc(575, 275, 25, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.font="bold 16px Arial";
     ctx.fillText("9", 570, 280);
     ctx.beginPath();
     //Arrow 9 to 8
     ctx.moveTo(575, 150);
     ctx.lineTo(575, 250);
     ctx.stroke();
     ctx.moveTo(570, 160);
     ctx.lineTo(575, 150);
     ctx.lineTo(580, 160);
     ctx.fill()
    
//CIRCLE 2
    //Circle n font
    ctx.beginPath();
     ctx.arc(670, 200, 25, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.font="bold 16px Arial";
     ctx.fillText("2", 665, 205);
     ctx.beginPath();
    //smaller circle
    ctx.beginPath();
     ctx.arc(670, 200, 20, 0, 2 * Math.PI);
     ctx.stroke();
    //loop
    ctx.beginPath();
    ctx.moveTo(690, 215);
    ctx.lineTo(720, 215);
    ctx.stroke()
    ctx.beginPath();
    ctx.moveTo(720, 215);
    ctx.lineTo(720, 200);
    ctx.stroke()
    ctx.beginPath();
    ctx.moveTo(700, 200);
    ctx.lineTo(720, 200);
    ctx.stroke()
    //arrowhead
     ctx.moveTo(710, 195);
     ctx.lineTo(700, 200);
     ctx.lineTo(710, 205);
     ctx.fill();
    
// 1'S AND 0'S
    ctx.fillText("1", 90, 120); // 1 to 4
    ctx.fillText("0", 90, 270); // 1 to 3
    ctx.fillText("1", 150, 200); // 3 to 4
    ctx.fillText("0", 190, 200); // 4 to 3
    ctx.fillText("0", 250, 270); // 3 to 5
    ctx.fillText("1", 250, 120); // 4 to 5
    ctx.fillText("0,1", 310, 190); // 5 to 6
    ctx.fillText("0", 365, 260); // 6 loop
    ctx.fillText("0", 420, 190); // 6 to 7
    ctx.fillText("0", 500, 120); // 7 to 8
    ctx.fillText("1", 500, 270); // 7 to 9
    ctx.fillText("0", 560, 200); // 9 to 8
    ctx.fillText("1", 625, 120); // 8 to 2
    ctx.fillText("1", 625, 270); // 9 to 2
    ctx.fillText("0", 475, 40); // 8 to 6
    ctx.fillText("0,1", 725, 205); // 2 loop
  }
});
