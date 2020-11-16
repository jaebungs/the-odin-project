import { Storage } from './storage.js'
import { TodoDOMElement } from './todo-class.js'
const todosContainer = document.querySelector('.todos-container');

const showTodos = (index = 0) => {
    let todos = Storage.getTodos(index);
    
    if (todos.length > 0) {
        todos.forEach((todo, todoIndex) => {
            let todoEl = new TodoDOMElement(todo.title, todo.due, todo.priority, todoIndex);
    
            todosContainer.appendChild(todoEl.div)
        });
    } else {
        const emptyDiv = document.createElement('div');
        emptyDiv.textContent = "Empty Todo List";
        todosContainer.appendChild(emptyDiv);
    }
};

// When project is clicked, display its todos
const showTodosInClickedProject = () => {
    const projectsTitleEl = document.querySelectorAll('.project-title');

    projectsTitleEl.forEach((project) => {
        project.addEventListener('click', () => {
            const projectIndex = project.parentElement.getAttribute('data-index');

            if (projectIndex != -1){
                todosContainer.innerHTML = ''
                showTodos(projectIndex);
            }
        })
    })
}

export { showTodos, showTodosInClickedProject }