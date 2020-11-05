const displayNavbar = () => {
    const html = `
        <nav class="navbar" role="navigation">
            <ul class="nav-items">
                <li><a class="nav-item" id="About" href="#About" role="about-button">About</a></li>
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
    const hash = window.location.hash.substring(1);
    const targetEl = document.getElementById(`${hash}`);
    targetEl.classList.add('indicator');
}


export {displayNavbar, displayIndicator}