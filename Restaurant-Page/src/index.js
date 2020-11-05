import {displayNavbar} from './components/navbar.js';
import {displayAbout} from './components/about.js';
import {displayMeals} from './components/meals.js';
import {displayDrinks} from './components/drinks.js';
import {displayFooter} from './components/footer.js'
import {displayReserve} from './components/reserve.js'

const display = (() => {
    const navbarEl = document.querySelector('.header-section');
    const mainEl = document.querySelector('.main-section');
    const footerEl = document.querySelector('.footer-section');

    navbarEl.innerHTML = displayNavbar();
    mainEl.innerHTML = displayAbout();
    footerEl.innerHTML = displayFooter();
})();
