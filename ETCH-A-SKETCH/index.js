const containerEl = document.querySelector('.container')
const btnContainerEl = document.querySelector('.btn-container')

let dimension = 16

//Need to create grid ex) 16 * 16, total 196 divs.
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
    resetGrids()
    getNewDimension()
    generateRandomColor()
    fillGrids()
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
    colorButton.textContent = 'Change Color'
    colorButton.style.background = '#2396FF'
    colorButton.style.width = '120px'
    colorButton.style.height = '40px'
    btnContainerEl.appendChild(colorButton)
}


// Reset all grids.
const resetGrids = () => {
    const resetEl = document.querySelector('.reset-btn')
    const allGrids = document.querySelectorAll('.grid')
    
    //When reset btn is clicked, change all grids backgorund color to white
    resetEl.addEventListener('click', function(){
        for (let i=0; i < allGrids.length; i++) {
            allGrids[i].style.background = '#fff'
        }
        fillGrids()
    })
}

// Get new dimension.
const getNewDimension = () => {
    let newDimension = document.querySelector('.dimension-btn')
    
    newDimension.addEventListener('click', function(){
        let userInput = prompt('Please put number between 10 - 100: ')
        
        if (userInput > 10 && userInput <= 100) {
            dimension = userInput

            //Need to reset the page to render? new grids
            containerEl.innerHTML = ``
            btnContainerEl.innerHTML = ``
            return makeGrid()
        } else {
            alert('Error! Insert between 10 - 100')
            location.reload()
        }
        
    })
}

// change grid color to random when random btn is clicked
const generateRandomColor = () => {
    let randomBtn = document.querySelector('.color-btn')
    
    randomBtn.addEventListener('click', function(){
        // variable to generate random hex
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.addEventListener('mouseover', function(e){
            let girdId = e.target.getAttribute('id')
            if (e.target.getAttribute('id')) {
                    document.getElementById(girdId).style.backgroundColor = '#' + randomColor
                }
        })
    })
}

// Change grid background when mouseover.
const fillGrids = () => {
    document.addEventListener('mouseover', function(e){
        // Get id of a grid
        let girdId = e.target.getAttribute('id')
        if (e.target.getAttribute('id')) {
            document.getElementById(girdId).style.backgroundColor = '#000'
        }
    })
}

makeGrid()