// Main div element of our App with the ID root.
const SuperContainer = document.getElementById('root');

// BUTTON RESET SETUP
const ButtonReset = document.createElement('button');
ButtonReset.setAttribute('id', 'ButtonReset');
ButtonReset.textContent = 'Reset';
ButtonReset.addEventListener('click', function() {
  removeGrid();
  createGrid(16, 256);
  coloringSquare();
})
SuperContainer.appendChild(ButtonReset);

// BUTTON NEW PERSONNAL GRID
const ButtonCreateGrid = document.createElement('button');
ButtonCreateGrid.setAttribute('id', 'ButtonCreateGrid');
ButtonCreateGrid.textContent = 'New Grid (Less than 100 please..)';
ButtonCreateGrid.addEventListener('click', function() {
  let userAnswer = prompt(`Enter number of Rows you want.`);
  let gridTotal = userAnswer * userAnswer;
  removeGrid();
  createGrid(userAnswer, gridTotal);
  coloringSquare();
})
SuperContainer.appendChild(ButtonCreateGrid);

// Our main grid element appended to the ID root
const Grid = document.createElement('div');
Grid.classList.add('mainGrid');
SuperContainer.appendChild(Grid);


function createGrid(gridSize, gridTotal) {
  for (let i = 0; i < gridTotal; i++) {
    let mySquare = document.createElement('div');
    mySquare.classList.add('mySquare');
    Grid.appendChild(mySquare);
    Grid.classList.add('mainGrid');
    Grid.setAttribute('style', `grid: repeat(${gridSize}, auto) / repeat(${gridSize}, auto)`);
  }
}
createGrid(16, 256);


function coloringSquare() {
  let drawing = document.querySelectorAll(".mySquare");
  drawing.forEach((div) => {
      div.addEventListener('mouseover', function(e) {
          e.target.setAttribute('style', `background-color: ${randomColors()};`);
      });
  });
}
coloringSquare();


function randomColors() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return (`rgb(${red}, ${green}, ${blue});`);
}


function removeGrid() {
  var gridBox = document.querySelectorAll(".mySquare");
  gridBox.forEach((div) => {
      div.parentNode.removeChild(div);
  });
}