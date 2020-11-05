import {displayLocation} from './location.js';

const displayReserve = () => {
    const map = displayLocation();
    const html = `
    <div class="reservation-container">
    <h1 class="header">Reservation</h1>
    <p>We can accept all reservations!</p>
    <p>Because we have huuggee extra spaces!</p>
    <p>If you have any question, please send a email to <a href="">matomato@matomato.ca</a></p>
    <div class="form-container">
        <form class="reservation-form">
            <label class="input-label" for="name">Name:</label>
            <input type="text" name="name" placeholder="Enter Name">
            <label class="input-label" for="phone-number">Phone Number:</label>
            <input type="text" name="phone-number" placeholder="Enter Phone Number">
            <label class="input-label" for="guests">Guests Number:</label>
            <select name="guests">
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
            <input type="text" name="date" placeholder="Enter Date">
            <label class="input-label" for="time">Time:</label>
            <input type="text" name="time" placeholder="Enter Time">
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

export {displayReserve}