class Storage {
    //Get project
    getProjects(){
        let projects

        if (!localStorage.getItem('todoApp')){
            projects = [];
        } else {
            projects = JSON.parse(localStorage.getItem('todoApp'));
        }
        
        return projects
    }

    saveProject(project){
        let projects = this.getProjects();

        projects.push(project);
        localStorage.setItem('todoApp', JSON.stringify(projects));
    }

    removeProject(target){
        let projects = this.getProjects();

        let index = projects.findIndex((el) => {
            return el.title == target;
        });

        projects.splice(index, 1);
        localStorage.setItem('todoApp', JSON.stringify(projects));
    }

} 
export { Storage }