(()=>{"use strict";class t{static getProjects(){let t;return t=localStorage.getItem("todoApp")?JSON.parse(localStorage.getItem("todoApp")):[],t}static saveProject(t){const e=this.getProjects();e.push(t),localStorage.setItem("todoApp",JSON.stringify(e))}static removeProject(t){const e=this.getProjects(),i=e.findIndex((e=>e.title==t));e.splice(i,1),localStorage.setItem("todoApp",JSON.stringify(e))}static getTodos(t){return this.getProjects()[t].todos}static saveTodo(t,e){const i=this.getProjects();i[e].todos.push(t),localStorage.setItem("todoApp",JSON.stringify(i))}static removeTodo(t,e){const i=this.getProjects();i[t].todos.splice(e,1),localStorage.setItem("todoApp",JSON.stringify(i))}}class e{constructor(t,e,i){this.title=t,this.due=e,this.priority=i,this.done=!1}}class i{constructor(t,e,i,n){this.title=t,this.due=e,this.priority=i,this.index=n,this.div=document.createElement("div"),this.priorityDiv=document.createElement("div"),this.titleDiv=document.createElement("div"),this.dueDiv=document.createElement("div"),this.checkButton=document.createElement("button"),this.modifyButton=document.createElement("button"),this.deleteButton=document.createElement("button"),this.div.classList.add("todo-container"),this.priorityDiv.classList.add("priority-display"),this.titleDiv.classList.add("title-display"),this.dueDiv.classList.add("due-display"),this.checkButton.classList.add("btn","finish-btn"),this.modifyButton.classList.add("btn","modify-btn"),this.deleteButton.classList.add("btn","delet-btn"),this.priorityDiv.textContent=i,this.titleDiv.textContent=t,this.dueDiv.textContent=e,this.checkButton.textContent="Check",this.modifyButton.textContent="Modify",this.deleteButton.textContent="Delete",this.div.setAttribute("data-index",n),this.checkButton.onclick=this.onClcikCheck.bind(this),this.modifyButton.onclick=this.onClickModify.bind(this),this.deleteButton.onclick=this.onClickDelete.bind(this),this.div.appendChild(this.priorityDiv),this.div.appendChild(this.titleDiv),this.div.appendChild(this.dueDiv),this.div.appendChild(this.checkButton),this.div.appendChild(this.modifyButton),this.div.appendChild(this.deleteButton)}onClcikCheck(){}onClickModify(){}onClickDelete(){const e=document.querySelector(".todo-display-container");let i;document.querySelectorAll(".project-container").forEach((t=>{t.classList.contains("current")&&(i=t.getAttribute("data-index"))})),t.removeTodo(i,this.index),e.querySelector(`[data-index='${this.index}']`).remove()}}const n=document.querySelector(".todos-container"),o=(e=0)=>{let o=t.getTodos(e);if(n.innerHTML="",s(e),o.length>0)o.forEach(((t,e)=>{let o=new i(t.title,t.due,t.priority,e);n.appendChild(o.div)}));else{const t=document.createElement("div");t.textContent="Empty Todo List",n.appendChild(t)}},s=t=>{const e=document.querySelectorAll(".project-container");e.forEach((t=>t.classList.remove("current"))),e[t].classList.add("current")},d=document.querySelector(".popup-display-container");class c{constructor(t,e=[]){this.title=t,this.todos=e}}class l{constructor(t,e){this.title=t,this.index=e,this.div=document.createElement("div"),this.h3=document.createElement("h3"),this.deleteButton=document.createElement("button"),this.div.classList.add("project-container"),this.h3.classList.add("project-title"),this.deleteButton.classList.add("btn","project-delet-btn"),this.div.setAttribute("data-index",e),this.h3.textContent=t,this.deleteButton.textContent="Delete",this.deleteButton.onclick=this.onClickDelete.bind(this),this.div.appendChild(this.h3),this.div.appendChild(this.deleteButton)}onClickDelete(){const e=document.querySelector(".project-display-container");t.removeProject(this.title),e.querySelector(`[data-index='${this.index}']`).remove()}}const a=document.getElementById("project-add-form");document.querySelector(".add-todo-btn").addEventListener("click",(()=>{d.style.border="2px solid #000",d.innerHTML='\n        <div class="add-container">\n            <h2>New Todo</h2>\n            <div class="close-btn">X</div>\n            <form class="input-form">\n                <div class="input-container">\n                    <label for="title" class="input-label">Todo:</label>\n                    <input type="text" name="title" class="input" id="title">\n                </div>\n\n                <div class="input-container">\n                    <label for="date" class="input-label">Due:</label>\n                    <input type="date" name="date" id="date" class="input">\n                </div>\n                <div class="input-container">\n                    <label for="priority" class="input-label">Priority:</label>\n                    <select class="input" name="priority" id="priority">\n                        <option class="input" value="high">High</option>\n                        <option class="input" value="medium">Medium</option>\n                        <option class="input" value="low">Low</option>\n                    </select>\n                </div>\n\n                <button class="add-btn" id="add-todo" role="add-todo">Add New</button>\n            </form>\n        </div>\n    ',d.classList.add("slide-show"),(()=>{let t=new Date,e=t.getDate(),i=t.getMonth()+1,n=t.getFullYear();e<10&&(e="0"+e),i<10&&(i="0"+i),t=n+"-"+i+"-"+e,document.getElementById("date").setAttribute("min",t)})(),(()=>{const i=document.querySelector(".input-form"),n=document.getElementById("title"),s=document.getElementById("date"),d=document.getElementById("priority"),c=document.querySelectorAll(".project-container");let l;i.addEventListener("submit",(i=>{i.preventDefault(),c.forEach((t=>{t.classList.contains("current")&&(l=t.getAttribute("data-index"))}));const a=new e(n.value,s.value,d.value);t.saveTodo(a,l),o(l)}))})(),document.querySelector(".close-btn").addEventListener("click",(()=>{d.innerHTML=""}))})),a.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=document.querySelector(".project-display-container"),i=document.getElementById("project-add").value;if(-1===(n=i,t.getProjects().findIndex((t=>t.title===n)))){const n=t.getProjects().length,o=new c(i),s=new l(i,n);t.saveProject(o),e.appendChild(s.div)}else console.log("Duplicate Project");var n})()})),(()=>{const e=document.querySelector(".project-display-container");t.getProjects().forEach(((t,i)=>{let n=new l(t.title,i);e.appendChild(n.div)}))})(),o(),document.querySelectorAll(".project-title").forEach((t=>{t.addEventListener("click",(()=>{const e=t.parentElement.getAttribute("data-index");-1!=e&&(s(e),o(e))}))}))})();