import { Storage } from './storage.js'
import { Todo } from './todo-class.js'
import { showTodos } from './show-todos.js'

const popupDisplayEl = document.querySelector('.popup-display-container');

const createAddTodoDisplay = () => {
    popupDisplayEl.style.border = '2px solid #000';

    popupDisplayEl.innerHTML = `
        <div class="add-container">
            <h2>New Todo</h2>
            <div class="close-btn">X</div>
            <form class="input-form">
                <div class="input-container">
                    <label for="title" class="input-label">Todo:</label>
                    <input type="text" name="title" class="input" id="title">
                </div>

                <div class="input-container">
                    <label for="date" class="input-label">Due:</label>
                    <input type="date" name="date" id="date" class="input">
                </div>
                <div class="input-container">
                    <label for="priority" class="input-label">Priority:</label>
                    <select class="input" name="priority" id="priority">
                        <option class="input" value="high">High</option>
                        <option class="input" value="medium">Medium</option>
                        <option class="input" value="low">Low</option>
                    </select>
                </div>

                <button class="add-btn" id="add-todo" role="add-todo">Add New</button>
            </form>
        </div>
    `

    popupDisplayEl.classList.add('slide-show');

}

const limitDueDate = () => {
        let today = new Date();
        let dd = today.getDate();
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

const createNewTodo = () => {
    const formEl = document.querySelector('.input-form');
    const titleInputEl = document.getElementById('title');
    const dueInputEl = document.getElementById('date');
    const priorityInputeEl = document.getElementById('priority');
    const projectContainerEls = document.querySelectorAll('.project-container');
    let index;

    formEl.addEventListener('submit', (e) => {
        e.preventDefault();

        // find current project
        projectContainerEls.forEach((el) => {
            if (el.classList.contains('current')){
                index = el.getAttribute('data-index');
            };
        })
        
        const todo = new Todo(titleInputEl.value, dueInputEl.value, priorityInputeEl.value);

        Storage.saveTodo(todo, index);
        showTodos(index);
    })

}



const renderAddTodo = () => {
    const addTodosButton = document.querySelector('.add-todo-btn');

    addTodosButton.addEventListener('click', () => {
        createAddTodoDisplay();
        limitDueDate();
        createNewTodo();

        const closeEl = document.querySelector('.close-btn');

        closeEl.addEventListener('click', ()=>{
            popupDisplayEl.innerHTML = '';
        })
    })
    
}

export { renderAddTodo }