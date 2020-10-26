// // Few global variable as possible
// public - rendering the board, clearing
// priavate - scores, player, minimax, track the board, title display

// click pvp or pvc
//---pvp. pvc later
// 1. render a board, display game type, who's turn.
// 2. create 2 players
// 3. able to listen which grid is clicked.
// 4. able to determine win, lose and tie.

function matrix(rows, cols) {
    const createBoard = (rows, cols) => {
        new Array(cols).fill(0).map((i) => {new Array(rows).fill(0)})
    }
    const _board = createBoard(rows, cols)
    
    function getBoard(){
        return _board;
    }

    function getCell(row, col){
        return _board[row, col]
    }

    function setBoard(row, col, mark){
        return _board[row, col] = mark;
    }
    
    return {rows, cols, getBoard, getCell, setBoard}
}

//Display gameboard - generate DOM
const displayBoard = (() => {
    const gameSectionEl = document.querySelector('.gameBoard-section');
    const n = 3; //3X3 grid
    const board = matrix(n, n);
    
    
    // create game board.
    const createDOM = () => {
        for (let row=0; row < n; row++){
            for (let col=0; col < n; col++){
                _createCell(row, col);
            }
        }
    }

    // create one cell and put row & col
    const _createCell = (row, col) => {
        const divEl = document.createElement('div');
        divEl.classList.add('cell');
        divEl.setAttribute('row', row);
        divEl.setAttribute('col', col);
        divEl.addEventListener('click', clicked, false)
        gameSectionEl.appendChild(divEl);
    }

    const clicked = (e) => {
        let row = e.target.getAttribute('row');
        let col = e.target.getAttribute('col');
        
        console.log(`row:${row}`, `col:${col}`)
    }


    return {createDOM, clicked}
})();




// Player factory function
const player = (player, mark) => {
    let win = 0; 

    const getWin = () => {
        return win
    }
    const increaseWin = () => {
        win++
    }

    const delWin = () => {
        win = 0;
    }

    const nameDisplay = (player, mark) => {
        const displayPlayerEl = document.querySelector('.display-player');

        const playerEl = document.createElement('div');
        playerEl.classList.add('player-name');
        playerEl.innerText = `${player} : ${mark}`;
        displayPlayerEl.appendChild(playerEl);
    }

    return {player, mark, getWin, increaseWin, delWin, nameDisplay}
}


const displayWhoVSWho = (() => {
    const gameTypeEl = document.querySelector('.type-section');

// When player vs player is picked, make 2 player objects and display players, win, gametype
    const pvp = () => {
        const player1 = player('Player 1', 'X');
        const player2 = player('Player 2', 'O');
        // Clear pvp or pvai buttons
        gameTypeEl.innerHTML = ''
        // display player1 and player 2 instead of game type choices
        player1.nameDisplay(player1.player, player1.mark)
        player2.nameDisplay(player2.player, player2.mark)
        // display game board
        displayBoard.createDOM()
    }
    
    const pvai = () => {
        const player1 = player('Player', 'X');
        const player2 = player('AI', 'O');
        // Clear pvp or pvai buttons
        gameTypeEl.innerHTML = ''
        // display player1 and player 2 instead of game type choices
        player1.nameDisplay(player1.player, player1.mark)
        player2.nameDisplay(player2.player, player2.mark)
        // display game board
        displayBoard.createDOM()
    }

    return {pvp, pvai}
})();


const gameBoard = (() => {
    const pvpBtn = document.getElementById('pvp');
    const pvaiBtn = document.getElementById('pvai');
    const gameOver = false;
    const turnTrack = false;

    pvpBtn.addEventListener('click', displayWhoVSWho.pvp);
    pvaiBtn.addEventListener('click', displayWhoVSWho.pvai);

})();
