// // Few global variable as possible
// public - rendering the board, clearing
// priavate - scores, player, minimax, track the board, title display

// click pvp or pvc
//---pvp. pvc later
// 1. render a board, display game type, who's turn.
// 2. create 2 players
// 3. able to listen which grid is clicked.
// 4. able to determine win, lose and tie.


const gameBoard = () => {
    const displayPlayerEl = document.querySelector('.display-player');
    const pvpBtn = document.getElementById('pvp');
    const pvaiBtn = document.getElementById('pvai');

    const gameOver = false;
    const turnTrack = false;

    pvpBtn.addEventListener('click', console.log('hi'));

}

function matrix(rows, cols) {

    const createBoard = (rows, cols) => {
        new Array(cols).fill(0).map((i) => {new Array(rows).fill(0)})
    }
    const _board = createBoard(rows, cols)
    
    function getBoard(){
        return _board;
    }

    function getCell(rows, cols){
        return _board[rows, cols]
    }

    function setBoard(rows, cols, element){
        return _board[rows, cols] = element;
    }
    
    return {rows, cols, getBoard, getCell, setBoard}
}

const displayBoard = (() => {
    const gameSectionEl = document.querySelector('.gameBoard-section');
    const n = 3; //3X3 grid
    const board = matrix(n, n);

    // create game board.
    const _createDOM = () => {
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
        let value = e.target.innerText;
        console.log(`row:${row}`, `col:${col}`, value)
    }

    _createDOM()
})();

// Player factory function
const player = (player, element) => {
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

    return {player, element, getWin, increaseWin, delWin}
}

const pvp = () => {
    const gameTypeEl = document.querySelector('.type-section');
    const player1 = player('player1', 'x');
    const player2 = player('player2', 'o');
    console.log('pvp')
    gameTypeEl.innerHTML = ''
}
