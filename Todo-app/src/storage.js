class Storage {
    //Handle Projects
    static getProjects(){
        let projects

        if (!localStorage.getItem('todoApp')){
            projects = [];
        } else {
            projects = JSON.parse(localStorage.getItem('todoApp'));
        }
        
        return projects
    }

    static saveProject(project){
        const projects = this.getProjects();

        projects.push(project);
        localStorage.setItem('todoApp', JSON.stringify(projects));
    }

    static removeProject(target){
        const projects = this.getProjects();

        const index = projects.findIndex((el) => {
            return el.title == target;
        });

        projects.splice(index, 1);
        localStorage.setItem('todoApp', JSON.stringify(projects));
    }

    // Handle todos in a Project
    static getTodos(index){
        const targetProject = this.getProjects()[index].todos;

        return targetProject
    }

    static saveTodo(todo, index){
        const projects = this.getProjects();

        // Add todo to todos in specific proejct
        projects[index].todos.push(todo);

        localStorage.setItem('todoApp', JSON.stringify(projects));
    }

} 
export { Storage }