document.addEventListener('DOMContentLoaded', function() {
    // Your DOM manipulation code goes here...
    const container = document.getElementById('container');
    const button = document.getElementById('button');
  })



function getGridChoice(){
    let rows = 16;
    let col = 16;

}

function createGrid(rows, cols) {

    for (let i = 0; i < rows * cols; i++) {
      const square = document.createElement('div');
      square.classList.add('square'); // Add the class 'box' to each div
      container.appendChild(square); // Append each div to the container
    }

    square.addEventListener('mouseenter', () => {
        square.classList.add('hovered');
    });

    square.addEventListener('mouseleave', () => {
        square.classList.add('hovered');
    });



  }

  createGrid(16, 16);


