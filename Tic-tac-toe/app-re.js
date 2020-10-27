const grids = () => {
    // const createGrids = (rows, cols) => {
    //     new Array(cols).fill(' ').map((i) => {new Array(rows).fill(' ')})
    // }
    // const _board = createGrids(rows, cols);
    let _board = [
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

    const resetBoard = () => {
        for (let i=0; i < 3; i++){
            for (let j=0; j < 3; j++){
                _board[i][j] = ''
            }
        }
    }
    
    const getCell = (row, col) => {
        return _board[row][col]
    }

    return {getBoard, setCell, resetBoard, getCell}
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
        divEl.textContent = grid.getCell(row, col);
        divEl.addEventListener('click', clicked);
        gameSectionEl.appendChild(divEl);
    }

    const clicked = (e) => {
        let row = e.target.getAttribute('row');
        let col = e.target.getAttribute('col');
        console.log(`row:${row}`, `col:${col}`);
        return {row, col}
    }

    // Display on top, who is playing and their mark. 
    const nameDisplay = (player) => {
        const displayPlayerEl = document.querySelector('.display-player');

        const playerEl = document.createElement('div');
        playerEl.classList.add('player-name');
        playerEl.innerText = `${player.name} - ${player.mark}`;
        displayPlayerEl.appendChild(playerEl);
    }

    //Display Score of each player
    const scoreDisplay = (player) => {
        const displayScoreEl = document.querySelector('.display-score');

        const scoreEl = document.createElement('div');
        scoreEl.classList.add('player-score');
        scoreEl.innerText = `Score: ${player.getScore()}`;
        displayScoreEl.appendChild(scoreEl);
    }

    return {createBoard, clicked, nameDisplay, scoreDisplay}
}

const game = (() => {
    const gameTypeEl = document.querySelector('.type-section');
    const pvpBtn = document.getElementById('pvp');
    const pvaiBtn = document.getElementById('pvai');
    let gameOver = false;
    let turnCheck = false;

    const grid = grids()
    const board = displayBoard()
    const player1 = players('Player 1', 'X');
    const player2 = players('Player 2', 'O');
    const AI = players('AI', 'O');

    const pvp = () => {
        gameTypeEl.innerHTML = ''
        board.nameDisplay(player1);
        board.nameDisplay(player2);
        board.scoreDisplay(player1);
        board.scoreDisplay(player2);
        board.createBoard()
    }

    const placeMark = (player) => {
        if (!turnCheck){
            grid.setCell(player.mark)
        }
    }

    pvpBtn.addEventListener('click', pvp);


})();