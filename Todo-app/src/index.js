import { renderAddTodo } from './display-add-todo.js'
import { projectDisplayListener } from './project-functions.js'


const todoApp =(() => {
    renderAddTodo();
    projectDisplayListener();
})();