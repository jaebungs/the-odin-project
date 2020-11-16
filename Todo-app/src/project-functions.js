import { Storage } from './storage.js'
import { Project, ProjectDOMElement } from './project-class.js'

const projectAddFormEl = document.getElementById('project-add-form');

// check if there is duplicated project title in localStorage.
const validation = (el) => {
    let projects = Storage.getProjects();

    let index = projects.findIndex((project) => {
        return project.title === el
    })

    return index
}

//Add new project to Localstorage
const addProject = () => {
    const projectDisplay = document.querySelector('.project-display-container');
    const projectAddInput = document.getElementById('project-add').value;

    if (validation(projectAddInput) === -1) {
        let numberOfProjects = Storage.getProjects().length;
        // instantiate and save to LocalStorage
        let project = new Project(projectAddInput);

        // create elements for new project
        let div = new ProjectDOMElement(projectAddInput, numberOfProjects+1);

        Storage.saveProject(project);
        projectDisplay.appendChild(div.div)
        console.log(project)
    } else {
        console.log('Duplicate Project')
    }
}

// EventListener for Add new project form
const projectDisplayListener = () => {
    projectAddFormEl.addEventListener('submit', (e)=>{
        e.preventDefault();
        addProject();
    });
}

export { projectDisplayListener }