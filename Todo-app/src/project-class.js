class Project {
    constructor(title, todos = []){
        this.title = title,
        this.todos = todos
    }

    addTodoToProject(todo){
        this.todos.push(todo);
    }

    removeTodoInProject(todo){
        let index = this.todos.findIndex((list) => {
            return list.title == todo;
        });
        if (index > -1) {
            this.todos.splice(index, 1);
        };

    }

    getTodos() {
        return this.todos
    }
}

export { Project }
