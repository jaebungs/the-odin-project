import { Storage } from './storage.js'
import { ProjectDOMElement } from './project-class.js'

// Bring project from LocalStorage and display - for when page is refreshed.
const showProjects = () => {
    const projectDisplay = document.querySelector('.project-display-container');
    let project = Storage.getProjects();

    project.forEach(element => {
        let project = new ProjectDOMElement(element.title);

        projectDisplay.appendChild(project.div)
    });
};


export { showProjects }