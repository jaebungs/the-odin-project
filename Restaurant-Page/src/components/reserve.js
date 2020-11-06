import {displayLocation} from './location.js';

const displayReserve = () => {
    const map = displayLocation();


    const html = `
        <div class="logo-image">
            <img src="./images/logo.png" class="big-logo" alt="Restaurant Logo">
        </div>

        <div class="reservation-container">
            <h1 class="header">Reservation</h1>
            <p>We can accept all reservations!</p>
            <p>Because we have huuggee extra spaces!</p>
            <p>If you have any question, please send a email to <a href="mailto:matomato@matomato.ca">matomato@matomato.ca</a></p>
            <div class="form-container">
                <form class="reservation-form">
                    <label class="input-label" for="name">Name:</label>
                    <input type="text" class="input-text" name="name" placeholder="Enter Name">
                    <label class="input-label" for="phone-number">Phone Number:</label>
                    <input type="text" class="input-text" name="phone-number" placeholder="Enter Phone Number">
                    <label class="input-label" for="email">Email:</label>
                    <input type="email" class="input-text" name="email" placeholder="Enter Email">
                    <label class="input-label" for="guests">Guests Number:</label>
                    <select name="guests" class="input-select">
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                    <label class="input-label" for="date">Date:</label>
                    <input type="date" class="input-select" id="date" name="date" placeholder="Enter Date">
                    <label class="input-label" for="time">Time:</label>
                    <select name="time" class="input-select">
                        <option value="5:00">5:00</option>
                        <option value="5:30">5:30</option>
                        <option value="6:00">6:00</option>
                        <option value="6:30">6:30</option>
                        <option value="7:00">7:00</option>
                        <option value="7:30">7:30</option>
                        <option value="8:00">8:00</option>
                        <option value="8:30">8:30</option>
                    </select>
                    <button class="submit-reservation-btn" role="reserve">Reserve</button>
                </form>
            </div>

            <div class="location-container">
                <div id="map">
                    ${map}
                </div>
            </div>
        </div>
    `

    return html
}

// Limit date availability
const minDate = () => {
    let today = new Date();
    let dd = today.getDate() + 2; // 2 days
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 

    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("date").setAttribute("min", today);
}

//Show Reserved
const displayReserved = () => {
    const formEl = document.querySelector('.form-container');
    const inputEls = document.querySelectorAll('.input-text');
    const selectorEls = document.querySelectorAll('.input-select');


    formEl.addEventListener('submit', (e)=>{
        let empty = true;
        inputEls.forEach((input) => {
            if (!input.value.trim()){
                empty = false;
            }
        })
        selectorEls.forEach((selector) => {
            if (!selector.value.trim()){
                empty = false;
            }
        })
        if (empty) {
            formEl.innerHTML = `
                <h3 class="reserved-msg">Successfully Reserved</h3>
                `
        } else {
            alert('Please fill all forms')
        }
        
    })
}



export {displayReserve, minDate, displayReserved}