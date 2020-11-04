const displayNavbar = () => {
    const html = `
        <nav class="navbar">
            <ul class="nav-items">
                <li class="nav-item">About</li>
                <li class="nav-item">Meals</li>
                <li class="nav-item">Drinks</li>
                <li class="nav-item">Reserve</li>
            </ul>
        </nav>
    `
    return html
}

export {displayNavbar}