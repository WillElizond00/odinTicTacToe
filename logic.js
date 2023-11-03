const gameBoard = (() => {
let board = ["","","","","","","","",""];

const displayBoard = () => {
    console.log(board);
};

const makeMove = (index, symbol) => {
    console.log(`Trying to make a move at index ${index} with symbol ${symbol}`);
    if(board[index] === ""){
        board[index] = symbol;
        return true;
    }
    return false;
}

const render = () => {
    const gameBoardDiv = document.getElementById('gameboard');
    gameBoardDiv.innerHTML = '';
    board.forEach((cell, index) => {
        const cellDiv = document.createElement('div');
        cellDiv.classList.add('cell');
        cellDiv.textContent = cell;


cellDiv.addEventListener('click', () => {
    console.log("Cell clicked")
    if(makeMove(index, gameController.getCurrentPlayer().symbol)){
        render();
        gameController.switchPlayer();
    }
})


gameBoardDiv.appendChild(cellDiv);
    });
};


return {
board,
displayBoard,
render,
makeMove
};

})();

const createPlayer = (name, symbol) => {
    return { name, symbol};
};

const player1 = createPlayer('Player 1', 'X');
const player2 = createPlayer('Player 2', 'O')

const gameController = (() => {
    let _currentPlayer = player1;
const getCurrentPlayer = () => _currentPlayer;

    const switchPlayer = () => {
        _currentPlayer = _currentPlayer === player1 ? player2 : player1;
    };

return{
    getCurrentPlayer,
    switchPlayer,
};


})();

gameBoard.render();
