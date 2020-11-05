const displayAbout = () => {
    const html = `
    <div class="logo-image">
        <img src="./images/logo.png" class="big-logo" alt="Restaurant Logo">
    </div>

    <div class="intro-div">
        <h1 class="header">Matomato</h1>
        <p class="intro-p">Welcome to Matomato!</p>
        <p class="intro-p">We use fresh organic tomato on every dish we make.</p>
        <p class="intro-p">Tomato is our specialty and you will be surprised how tomato can transform into an amzing dish!</p>

        <div class="image-container">
            <img src="./images/tomato-hand.jpg" class="intro-image" alt="Good tomato dish pictrue">
            <!-- <span>Photo by <a href="https://unsplash.com/@mero_dnt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Chinh Le Duc</a> on <a href="https://unsplash.com/s/photos/tomato?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> -->
        </div>
    </div>
    `

    return html
}

export {displayAbout}