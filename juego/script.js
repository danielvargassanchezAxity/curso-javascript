const grid = document.getElementById('grid');
const status = document.getElementById('status');
const restartBtn = document.getElementById('restart');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
    [0, 4, 8], [2, 4, 6]             // Diagonal
];

let currentPlayer = 'X';
let gameIsLive = true;
let board = ['', '', '', '', '', '', '', '', ''];

const showModal = (winner) => {
    modal.style.display = 'block';
    modalContent.innerText = `${winner} ha ganado!`;
    setTimeout(() => {
        modal.style.display = 'none';
        restartGame();
    }, 5000);
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
        showModal(currentPlayer);
        gameIsLive = false;
        return;
    }

    if (!board.includes('')) {
        status.innerText = '¡Empate!';
        gameIsLive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    status.innerText = `${currentPlayer} es el siguiente`;
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
    status.innerText = `${currentPlayer} es el siguiente`;
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
};

grid.addEventListener('click', handleCellClick);
restartBtn.addEventListener('click', restartGame);
