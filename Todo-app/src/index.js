import { renderAddTodo } from './display-todo-add.js'
import { projectDisplayListener } from './project-functions.js'


const todoApp =(() => {
    renderAddTodo();
    projectDisplayListener();
})();