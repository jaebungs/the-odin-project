const displayDrinks = () => {
    const html = `
        <div class="logo-image">
            <img src="./images/logo.png" class="big-logo" alt="Restaurant Logo">
        </div>

        <h1 class="header">Drinks</h1>
        <div class="drink-container">
            <div class="drink-image1">
                <!--<span>Photo by <a href="https://unsplash.com/@kkalerry?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Klara Kulikova</a> on <a href="https://unsplash.com/s/photos/tomato-drinks?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>-->
                <img src="./images/drink.jpg" class="drink-image" alt="Tomato soup image">
            </div>
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
            <div class="drink-image1">
                <!--<span>Photo by <a href="https://unsplash.com/@theblackrabbit?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">The BlackRabbit</a> on <a href="https://unsplash.com/s/photos/bloody-mary?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>-->
                <img src="./images/drink2.jpg" class="drink-image2" alt="Tomato soup image">
            </div>
        </div>
    `

    return html
}

export {displayDrinks}