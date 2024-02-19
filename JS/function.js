let rowCounter = 0;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomMatrix(rows, columns, min, max) {
    const matrix = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            const randomNumber = getRandomNumber(min, max);
            row.push(randomNumber);
        }
        matrix.push(row);
    }

    return matrix;
}

function updateTable(rows, columns, minNumber, maxNumber) {
    const table = document.querySelector('table');

    const randomMatrix = generateRandomMatrix(rows, columns, minNumber, maxNumber);

    for (let i = 0; i < rows; i++) {
        const rowElement = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            const cellElement = document.createElement('td');
            cellElement.textContent = randomMatrix[i][j];
            cellElement.classList.add('yellow-box');
            rowElement.appendChild(cellElement);

            if (j < columns - 1) {
                const spacingElement = document.createElement('td');
                spacingElement.classList.add('cell-spacing');
                rowElement.appendChild(spacingElement);
            }
        }
        table.appendChild(rowElement);
    }
}

function handleButtonClick() {
    const rows = 1;
    const columns = 7;
    const minNumber = 0;
    const maxNumber = 9;

    if (typeof rowCounter === 'undefined') {
        rowCounter = 0;
    }

    updateTable(rows, columns, minNumber, maxNumber);

    rowCounter++;
    document.getElementById('RiviCount').textContent = ` ${rowCounter}`;
}



const button = document.querySelector('button');
button.addEventListener('click', handleButtonClick);


document.addEventListener('DOMContentLoaded', function () {
    handleButtonClick();
});







