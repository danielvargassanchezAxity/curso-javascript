const grid = document.getElementById('grid') ?? new HTMLElement();
const statusElement = document.getElementById('status')  ?? new HTMLElement();
const restartBtn = document.getElementById('restart') ?? new HTMLElement();
const modal = document.getElementById('modal') ?? new HTMLElement();
const modalContent = document.getElementById('modal-content') ?? new HTMLElement();

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
    [0, 4, 8], [2, 4, 6]             // Diagonal
];

let currentPlayer = 'X';
let gameIsLive = true;
let board = ['', '', '', 
             '', '', '',
             '', '', ''];

const showModal = (message) => {
    modal.style.display = 'block';
    modalContent.innerText = message;
    setTimeout(() => {
        modal.style.display = 'none';
        restartGame();
    }, 1500);
};

const handleResultValidation = () => {
    let roundWon = false;
    for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        const cellA = board[a];
        const cellB = board[b];
        const cellC = board[c];
        if (cellA !== '' && cellA === cellB && cellA === cellC) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        showModal(`${currentPlayer} ha ganado!`);
        gameIsLive = false;
        return;
    }

    if (!board.includes('')) {
        showModal(`Empate`);
        gameIsLive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusElement.innerText = `${currentPlayer} es el siguiente`;
};

const handleCellClick = (e) => {
    const clickedCell = e.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (board[clickedCellIndex] !== '' || !gameIsLive) {
        return;
    }

    board[clickedCellIndex] = currentPlayer;
    clickedCell.innerText = currentPlayer;
    handleResultValidation();
};

const restartGame = () => {
    currentPlayer = 'X';
    gameIsLive = true;
    board = ['', '', '', '', '', '', '', '', ''];
    statusElement.innerText = `${currentPlayer} es el siguiente`;
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
};

grid.addEventListener('click', handleCellClick);
restartBtn.addEventListener('click', restartGame);
