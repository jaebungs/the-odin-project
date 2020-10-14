const containerEl = document.querySelector('.container')
const btnContainerEl = document.querySelector('.btn-container')
let dimension = 16

//Need to create grid 16 * 16, total 196 divs.
const makeGrid = () => {
    let totalgrids = Math.pow(dimension, 2);
    containerEl.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    containerEl.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    
    for (let i=0; i < totalgrids; i++) {
        let grid = document.createElement('div')
        grid.classList.add('grid')
        //Each div should have id, so it can be filled with color when mouse hover.
        grid.setAttribute('id', `${i}`)
        grid.style.border = '1px solid #000'
        containerEl.appendChild(grid)
    }

    makeButtons()
}

//Make buttons for reset, color and new dimension
const makeButtons = () => {

    // Button for new dimension
    let button = document.createElement('button')
    button.classList.add('dimension-btn')
    button.textContent = 'New Dimension'
    button.style.background = '#39EA35'
    button.style.width = '120px'
    button.style.height = '40px'
    btnContainerEl.appendChild(button)

    // Button for reset
    let resetButton = document.createElement('button')
    resetButton.classList.add('reset-btn')
    resetButton.textContent = 'Reset'
    resetButton.style.background = '#FF2323'
    resetButton.style.width = '120px'
    resetButton.style.height = '40px'
    resetButton.style.margin = '0 20px'
    btnContainerEl.appendChild(resetButton)

    // Button for color change
    let colorButton = document.createElement('button')
    colorButton.classList.add('color-btn')
    colorButton.textContent = 'Random Color'
    colorButton.style.background = '#2396FF'
    colorButton.style.width = '120px'
    colorButton.style.height = '40px'
    btnContainerEl.appendChild(colorButton)
}


makeGrid()
