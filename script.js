document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const button = document.getElementById('button');

    let isDrawing = false;

    // Function to create the grid
    function createGrid(rows, cols) {
        container.innerHTML = ''; // Clear existing grid
        for (let i = 0; i < rows * cols; i++) {
            const square = document.createElement('div');
            square.classList.add('square'); // Add the class 'square' to each div
            container.appendChild(square); // Append each div to the container

            // Add event listeners for mouseover, mousedown, and mouseup
            square.addEventListener('mouseover', (event) => {
                if (isDrawing) {
                    event.target.style.backgroundColor = 'black'; // Change background color when drawing
                }
            });

            square.addEventListener('mousedown', () => {
                isDrawing = true; // Set drawing flag to true when mouse button is pressed down
            });

            square.addEventListener('mouseup', () => {
                isDrawing = false; // Set drawing flag to false when mouse button is released
            });
        }
    }

    // Function to prompt user for number of squares
    function promptNumberOfSquares() {
        const squaresPerSide = prompt('Enter the number of squares per side for the new grid:');
        if (squaresPerSide) {
            const numSquares = parseInt(squaresPerSide);
            if (!isNaN(numSquares)) {
                createGrid(numSquares, numSquares);
            } else {
                alert('Please enter a valid number.');
            }
        }
    }

    // Add event listener to the popup button
    button.addEventListener('click', promptNumberOfSquares);

    // Initial grid creation
    createGrid(16, 16);
});