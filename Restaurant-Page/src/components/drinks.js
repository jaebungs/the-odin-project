const displayDrinks = () => {
    const html = `
        <div class="About-image">
            <img src="" class="big-logo" alt="Restaurant Logo">
        </div>

        <h1 class="header">Drinks</h1>
        <div class="drink-container">
            <div class="drink">
                <h3 class="drink-name">Tomato Juice Cocktail</h3>
                <p class="drink-description">Tomato paste, grey goose, tabasco sauce, lemon juice, white sugar</p>
                <p class="drink-price">10</p>
            </div>
            <div class="drink">
                <h3 class="drink-name">Bloody Mary</h3>
                <p class="drink-description">Tomato juice, vodka, green olives, lime, worcestershire</p>
                <p class="drink-price">10</p>
            </div>
            <div class="drink">
                <h3 class="drink-name">Tomato-ElderFlower Cocktail</h3>
                <p class="drink-description">St germain, vodka, simple syrup, fresh tomatoes, lemon juice</p>
                <p class="drink-price">12</p>
            </div>
            <div class="drink">
                <h3 class="drink-name">Roasted Tomato Magaritas</h3>
                <p class="drink-description">Cherry tomatoes, tequila, ice, olive oil, lime juice</p>
                <p class="drink-price">10</p>
            </div>
        </div>
    `

    return html
}

export {displayDrinks}