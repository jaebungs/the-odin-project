const displayMeals = () => {
    const html = `
        <div class="logo-image">
            <img src="./images/logo.png" class="big-logo" alt="Restaurant Logo">
        </div>

        <h1 class="header">Meals</h1>
        <div class="meal-container">
            <div class="meal">
                <h3 class="meal-name">The House Soup</h3>
                <p class="meal-description">House pecial soup - ask us for more detail</p>
                <p class="meal-price">9</p>
            </div>
            <div class="meal">
                <h3 class="meal-name">Tomato Salad</h3>
                <p class="meal-description">Tomato & organic home grown veggies</p>
                <p class="meal-price">7</p>
            </div>
            <div class="meal">
                <h3 class="meal-name">Matomato</h3>
                <p class="meal-description">Oven baked tomato stuffed pork, mozzarella cheese and green pepper</p>
                <p class="meal-price">22</p>
            </div>
            <div class="meal">
                <h3 class="meal-name">Brushetta Tomato</h3>
                <p class="meal-description">French bread, tomato, balsamic vinegar, olive oil, garlic</p>
                <p class="meal-price">16</p>
            </div>
            <div class="meal">
                <h3 class="meal-name">Coconut Tomato Curry</h3>
                <p class="meal-description">Coconut milk, tomato, mild curry, garlic</p>
                <p class="meal-price">18</p>
            </div>
            <div class="meal">
                <h3 class="meal-name">Eggplant Tomato Pasta</h3>
                <p class="meal-description">Eggplant, tomato, garlic, basil, plum</p>
                <p class="meal-price">19</p>
            </div>
            <div class="meal">
                <h3 class="meal-name">Cod tomato</h3>
                <p class="meal-description">Cod, tomato, whole wheat, lemon, garlic, potato</p>
                <p class="meal-price">24</p>
            </div>
        </div>
    `

    return html
}

export {displayMeals}