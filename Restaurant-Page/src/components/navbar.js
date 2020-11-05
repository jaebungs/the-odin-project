const displayNavbar = () => {
    const html = `
        <nav class="navbar" role="navigation">
            <ul class="nav-items">
                <li><a class="nav-item" href="#" role="about-button">About</a></li>
                <li><a class="nav-item" href="#" role="meals-button">Meals</a></li>
                <li><a class="nav-item" href="#" role="drinks-button">Drinks</a></li>
                <li><a class="nav-item" href="#" role="reserve-button">Reserve</a></li>
            </ul>
        </nav>
    `
    return html
}

export {displayNavbar}