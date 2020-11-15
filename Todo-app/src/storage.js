class Storage {
    //Get project
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
        let projects = this.getProjects();

        projects.push(project);
        localStorage.setItem('todoApp', JSON.stringify(projects));
    }

    static removeProject(target){
        let projects = this.getProjects();

        let index = projects.findIndex((el) => {
            return el.title == target;
        });

        projects.splice(index, 1);
        localStorage.setItem('todoApp', JSON.stringify(projects));
    }

} 
export { Storage }