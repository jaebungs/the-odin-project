const createAddTodoDisplay = () => {
    
    const popupDisplayEl = document.querySelector('.popup-display-container');

    popupDisplayEl.style.border = '2px solid #000';

    popupDisplayEl.innerHTML = `
        <div class="add-container">
            <h2>New Todo</h2>
            <div class="close-btn">X</div>
            <form class="input-form">
                <div class="input-container">
                    <label for="title" class="input-label">Todo:</label>
                    <input type="text" name="title" class="input">
                </div>

                <div class="input-container">
                    <label for="date" class="input-label">Due:</label>
                    <input type="date" name="date" id="date" class="input">
                </div>
                <div class="input-container">
                    <label for="priority" class="input-label">Priority:</label>
                    <select class="input" name="priority">
                        <option class="input" value="high">High</option>
                        <option class="input" value="medium">Medium</option>
                        <option class="input" value="low">Low</option>
                    </select>
                </div>

                <button class="add-btn" role="add-todo">Add New</button>
            </form>
        </div>
    `

    popupDisplayEl.classList.add('slide-show');

}

const limitDueDate = () => {
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
};


const renderAddTodo = () => {
    const addTodosButton = document.querySelector('.add-todo-btn');

    addTodosButton.addEventListener('click', () => {
        createAddTodoDisplay();
        limitDueDate();
    })
    
}

export { renderAddTodo}