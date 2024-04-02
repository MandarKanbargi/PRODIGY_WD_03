let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const messageElement = document.getElementById('message');

function handleWin() {
    gameActive = false;
    messageElement.innerText = `${currentPlayer} wins!`;
}

function handleClick(index) {
    if (gameState[index] !== '' || !gameActive) return;

    gameState[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (
            gameState[a] !== '' &&
            gameState[a] === gameState[b] &&
            gameState[a] === gameState[c]
        ) {
            handleWin();
            return;
        }
    }

    if (!gameState.includes('')) {
        gameActive = false;
        messageElement.innerText = "It's a draw!";
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    messageElement.innerText = `${currentPlayer}'s turn`;
}

function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    messageElement.innerText = `${currentPlayer}'s turn`;
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
