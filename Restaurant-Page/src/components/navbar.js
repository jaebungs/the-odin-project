const displayNavbar = () => {
    const html = `
        <nav class="navbar" role="navigation">
            <ul class="nav-items">
                <li><a class="nav-item indicator" id="About" href="#About" role="about-button">About</a></li>
                <li><a class="nav-item" id="Meals" href="#Meals" role="meals-button">Meals</a></li>
                <li><a class="nav-item" id="Drinks" href="#Drinks" role="drinks-button">Drinks</a></li>
                <li><a class="nav-item" id="Reserve" href="#Reserve" role="reserve-button">Reserve</a></li>
            </ul>
        </nav>
    `
    return html
}

// Display white bar under the navigation item
const displayIndicator = () => {
    const navItems = document.querySelectorAll('.nav-item');

    for (let item of navItems) {

        item.addEventListener('click', (e)=>{
            let indicator = document.querySelector('.indicator');

            indicator.classList.remove('indicator')
            e.target.classList.add('indicator')
        })
    }
}


export {displayNavbar, displayIndicator}