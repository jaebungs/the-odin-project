import { Storage } from './storage.js'

class Todo{
    constructor(title, due, priority){
        this.title = title;
        this.due = due;
        this.priority = priority;
        this.done = false;
    }
}

class TodoDOMElement {
    constructor(title, due, priority, index){
        this.title = title;
        this.due = due;
        this.priority = priority;
        this.index = index;

        this.div = document.createElement('div');
        this.priorityDiv = document.createElement('div');
        this.titleDiv = document.createElement('div');
        this.dueDiv = document.createElement('div');
        this.checkButton = document.createElement('button');
        this.modifyButton = document.createElement('button');
        this.deleteButton = document.createElement('button');

        this.div.classList.add('todo-container');
        this.priorityDiv.classList.add('priority-display');
        this.titleDiv.classList.add('title-display');
        this.dueDiv.classList.add('due-display');
        this.checkButton.classList.add('btn', 'finish-btn');
        this.modifyButton.classList.add('btn', 'modify-btn');
        this.deleteButton.classList.add('btn', 'delet-btn');

        this.priorityDiv.textContent = priority;
        this.titleDiv.textContent = title;
        this.dueDiv.textContent = due;
        this.checkButton.textContent = 'Check';
        this.modifyButton.textContent = 'Modify';
        this.deleteButton.textContent = 'Delete';

        this.div.setAttribute('data-index', index);

        this.checkButton.onclick = this.onClcikCheck.bind(this);
        this.modifyButton.onclick = this.onClickModify.bind(this);
        this.deleteButton.onclick = this.onClickDelete.bind(this);

        this.div.appendChild(this.priorityDiv);
        this.div.appendChild(this.titleDiv);
        this.div.appendChild(this.dueDiv);
        this.div.appendChild(this.checkButton);
        this.div.appendChild(this.modifyButton);
        this.div.appendChild(this.deleteButton);
    }

    onClcikCheck(){
        
    }
    onClickModify(){
        
    }
    onClickDelete(){
        const todosDisplayEl = document.querySelector('.todo-display-container');
        const projectContainerEls = document.querySelectorAll('.project-container');
        let index;
        projectContainerEls.forEach((el) => {
            if (el.classList.contains('current')){
                index = el.getAttribute('data-index');
            };
        })
        Storage.removeTodo(index, this.index);
        todosDisplayEl.querySelector(`[data-index='${this.index}']`).remove();

    }
}

export { TodoDOMElement, Todo }