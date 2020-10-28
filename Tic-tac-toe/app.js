const grids = () => {
    const _board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]

    const getBoard = () => {
        return _board;
    }

    const setCell = (row, col, mark) => {
        _board[row][col] = mark;
    }

    const getCell = (row, col) => {
        return _board[row][col]
    }

    const resetBoard = () => {
        for (let i=0; i < 3; i++){
            for (let j=0; j < 3; j++){
                _board[i][j] = ''
            }
        }
    }

    const _checkIdentical = (a, b, c) => {
        return (a === b && a === c && a !== '');
    }
    // Winning case
    const checkWin = () => {
        let winner = null;

        if (_checkIdentical(_board[0][0], _board[0][1], _board[0][2])) {
            return winner = _board[0][0]
        }
        if (_checkIdentical(_board[1][0], _board[1][1], _board[1][2])) {
            return winner = _board[1][0]
        }
        if (_checkIdentical(_board[2][0], _board[2][1], _board[2][2])) {
            return winner = _board[2][0]
        }

        if (_checkIdentical(_board[0][0], _board[1][0], _board[2][0])) {
            return winner = _board[0][0]
        }
        if (_checkIdentical(_board[0][1], _board[1][1], _board[2][1])) {
            return winner = _board[0][1]
        }
        if (_checkIdentical(_board[0][2], _board[1][2], _board[2][2])) {
            return winner = _board[0][2]
        }

        if (_checkIdentical(_board[0][0], _board[1][1], _board[2][2])) {
            return winner = _board[0][0]
        }
        if (_checkIdentical(_board[0][2], _board[1][1], _board[2][0])) {
            return winner = _board[0][2]
        }
        
        return winner
    }

    
    return {getBoard, setCell, resetBoard, getCell, checkWin}
}

// Create player objects with factory function
const players = (name, mark) => {
    let score = 0;

    const increaseScore = () => {
        score++;
    }

    const getScore = () => {
        return score;
    }

    const resetScore = () => {
        score = 0;
    }

    return {name, mark, increaseScore, getScore, resetScore}
};

const displayBoard = () => {
    let n = 3;
    const grid = grids()

    const createBoard = () => {
        for (let row=0; row < n; row++){
            for (let col=0; col < n; col++){
                _createCell(row, col);
            }
        }
    }

    // create one cell and put row & col
    const _createCell = (row, col) => {
        const gameSectionEl = document.querySelector('.gameBoard-section');
        const divEl = document.createElement('div');
        divEl.classList.add('cell');
        divEl.setAttribute('row', row);
        divEl.setAttribute('col', col);
        divEl.addEventListener('click', clicked);
        gameSectionEl.appendChild(divEl);
    }

    const clicked = (e) => {
        let row = e.target.getAttribute('row');
        let col = e.target.getAttribute('col');
        console.log(`row:${row}`, `col:${col}`);
    }

    // Display on top, who is playing and their mark. 
    const nameDisplay = (player1, player2) => {
        const displayPlayerEl = document.querySelector('.display-player');
        //player1 name & mark display
        const player1El = document.createElement('div');
        player1El.classList.add('player-name');
        player1El.innerText = `${player1.name} - ${player1.mark}`;
        displayPlayerEl.appendChild(player1El);
        // player2 name & mark display
        const player2El = document.createElement('div');
        player2El.classList.add('player-name');
        player2El.innerText = `${player2.name} - ${player2.mark}`;
        displayPlayerEl.appendChild(player2El);
    }

    //Display Score of each player
    const scoreDisplay = (player1, player2) => {
        const displayScoreEl = document.querySelector('.display-score');
        //player1 score display
        const score1El = document.createElement('div');
        score1El.classList.add('player-score');
        score1El.innerText = `Score: ${player1.getScore()}`;
        displayScoreEl.appendChild(score1El);
        //player2 score display
        const score2El = document.createElement('div');
        score2El.classList.add('player-score');
        score2El.innerText = `Score: ${player2.getScore()}`;
        displayScoreEl.appendChild(score2El);
    }

    // Show player's mark
    const markDisplay = (e, mark) => {
        e.target.innerText = mark;
    }

    return {createBoard, clicked, nameDisplay, scoreDisplay, markDisplay}
}

const game = (() => {
    const gameTypeEl = document.querySelector('.type-section');
    const gameSectionEl = document.querySelector('.gameBoard-section');
    const displayWinnerEl = document.querySelector('.display-winner');
    const displayPlayerEl = document.querySelector('.display-player');
    const displayScoreEl = document.querySelector('.display-score');
    const resetSectionEl = document.querySelector('.reset-section');
    const resetbtn = document.querySelector('.reset-btn');
    const newGamebtn = document.querySelector('.new-btn');
    const pvpBtn = document.getElementById('pvp');
    const pvaiBtn = document.getElementById('pvai');
    
    const grid = grids()
    const board = displayBoard()
    const AI = players('AI', 'O');

    let player1 = null;
    let player2 = null;
    let turnCheck = false;
    let row;
    let col;
    let _gameOver = null;
    let winner = null;
    let _isFull = false;

// display board, players, scores for player VS player
    const pvp = () => {
        gameTypeEl.style.display = 'none';
        player1 = players('Player 1', 'X');
        player2 = players('Player 2', 'O');
        board.nameDisplay(player1, player2);
        board.scoreDisplay(player1, player2);
        board.createBoard()
        resetSectionEl.style.display = 'block';
    }

    const placeMark = (e, row, col) => {
        let _isCellEmpty = grid.getCell(row, col) === '' //Check if cell is empty
        if (winner === null && !turnCheck && _isCellEmpty) {
            grid.setCell(row, col, player1.mark); //save mark to the grid
            board.markDisplay(e, player1.mark); //Display marker
            turnCheck = !turnCheck;
            console.log(grid.getBoard()); //for check
        } else if (winner === null && turnCheck && _isCellEmpty) {
            grid.setCell(row, col, player2.mark);
            board.markDisplay(e, player2.mark);
            turnCheck = !turnCheck;
            console.log(grid.getBoard()); //for check
        }
    }

    // Show winner, increase score and display 
    const displayWinner = (winner) => {
        if (winner === 'X' && !_gameOver) {
            player1.increaseScore();
            displayWinnerEl.innerHTML = `Winner! ${player1.name}!`;
        } else if (winner === 'O' && !_gameOver) {
            player2.increaseScore();
            displayWinnerEl.innerHTML = `Winner! ${player2.name}!`;
        }
        displayScoreEl.innerHTML = '';
        board.scoreDisplay(player1, player2);
    }

    const displayTie = () => {
        displayWinnerEl.innerHTML = `It's Tie!`
    }

    const _checkGridFull = () => {
        // let gridBoard = grid.getBoard
        if (
            grid.getBoard()[0].every((cell) => cell !== '') &&
            grid.getBoard()[1].every((cell) => cell !== '') &&
            grid.getBoard()[2].every((cell) => cell !== '')
        ) {
            _isFull = true;
        }
    }
    

    pvpBtn.addEventListener('click', pvp);

    gameSectionEl.addEventListener('click', (e) => {
        if (e.target.className === 'cell') {
            row = e.target.getAttribute('row');
            col = e.target.getAttribute('col');
        }
        placeMark(e, row, col);
        winner = grid.checkWin(); // if there is winner, change winner variable
        _checkGridFull()
        if (winner !== null) {
            displayWinner(winner)
            _gameOver = true;
        }
        if (_isFull){
            displayTie()
        }
    })

    resetbtn.addEventListener('click', () => {
        grid.resetBoard()
        gameSectionEl.innerHTML = ''
        displayWinnerEl.innerHTML = ''
        board.createBoard()
        turnCheck = false;
        winner = null;
        _isFull = false;
        _gameOver = null;
    })

    newGamebtn.addEventListener('click', () => {
        grid.resetBoard()
        gameTypeEl.style.display = 'block';
        gameSectionEl.innerHTML= '';
        displayWinnerEl.innerHTML = '';
        displayPlayerEl.innerHTML = '';
        displayScoreEl.innerHTML = '';
        resetSectionEl.style.display = 'none';
        player1.resetScore();
        player2.resetScore();
        player1 = null;
        player2 = null;
        turnCheck = false;
        winner = null;
        _isFull = false;
        _gameOver = null;
    })
})();