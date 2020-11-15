import { Storage } from './storage.js'
import { Project } from './project-class.js'

const projectAddFormEl = document.getElementById('project-add-form');

const validation = (el) => {
    let projects = Storage.getProjects();

    let index = projects.findIndex((project) => {
        return project.title === el
    })

    return index
}

//Add project to Localstorage
const addProject = () => {
    const projectAddInput = document.getElementById('project-add').value;

    // check if there is duplicate
    console.log(validation(projectAddInput))
    if (validation(projectAddInput) === -1) {
        // instantiate and save to LocalStorage
        let project = new Project(projectAddInput);
        Storage.saveProject(project);
        console.log(project)
    } else {
        console.log('Duplicate Project')
    }
}

const projectDisplayListener = () => {
    projectAddFormEl.addEventListener('submit', (e)=>{
        e.preventDefault();
        addProject();
    });
}

export { projectDisplayListener }