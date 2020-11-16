import { renderAddTodo } from './display-add-todo.js'
import { projectDisplayListener } from './project-functions.js'
import { showProjects } from './show-projects.js'

const todoApp =(() => {
    renderAddTodo();
    projectDisplayListener();
    showProjects();
})();