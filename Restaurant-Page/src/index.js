import {displayNavbar, displayIndicator} from './components/navbar.js';
import {displayAbout} from './components/about.js';
import {displayMeals} from './components/meals.js';
import {displayDrinks} from './components/drinks.js';
import {displayReserve, minDate, displayReserved} from './components/reserve.js'
import {displayFooter} from './components/footer.js'

const display = (() => {
    const navbarEl = document.querySelector('.header-section');
    const mainEl = document.querySelector('.main-section');
    const footerEl = document.querySelector('.footer-section');

    navbarEl.innerHTML = displayNavbar();
    mainEl.innerHTML = displayAbout();
    footerEl.innerHTML = displayFooter();
    displayIndicator()

    navbarEl.addEventListener('click', (e)=>{
        const id = e.target.getAttribute('id');

        if (id === 'About') {
            mainEl.innerHTML = displayAbout();

        } else if (id === 'Meals') {
            mainEl.innerHTML = displayMeals();

        } else if (id === 'Drinks') {
            mainEl.innerHTML = displayDrinks();
        } else if (id === 'Reserve') {
            mainEl.innerHTML = displayReserve();
            displayReserved();
            minDate();
        }
    })

})();
