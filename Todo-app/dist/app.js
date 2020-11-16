(()=>{"use strict";class t{static getProjects(){let t;return t=localStorage.getItem("todoApp")?JSON.parse(localStorage.getItem("todoApp")):[],t}static saveProject(t){let e=this.getProjects();e.push(t),localStorage.setItem("todoApp",JSON.stringify(e))}static removeProject(t){let e=this.getProjects(),o=e.findIndex((e=>e.title==t));e.splice(o,1),localStorage.setItem("todoApp",JSON.stringify(e))}}class e{constructor(t,e=[]){this.title=t,this.todos=e}addTodoToProject(t){this.todos.push(t)}removeTodoInProject(t){let e=this.todos.findIndex((e=>e.title==t));e>-1&&this.todos.splice(e,1)}getTodos(){return this.todos}}class o{constructor(t,e){this.title=t,this.index=e,this.div=document.createElement("div"),this.h3=document.createElement("h3"),this.deletButton=document.createElement("button"),this.div.classList.add("project-container"),this.h3.classList.add("project-title"),this.deletButton.classList.add("btn","project-delet-btn"),this.div.setAttribute("data-index",e),this.h3.textContent=t,this.deletButton.textContent="Delet",this.deletButton.onclick=this.onClickDelet.bind(this),this.div.appendChild(this.h3),this.div.appendChild(this.deletButton)}onClickDelet(){const e=document.querySelector(".project-display-container");t.removeProject(this.title),e.querySelector(`[data-index='${this.index}']`).remove()}}const n=document.getElementById("project-add-form");document.querySelector(".add-todo-btn").addEventListener("click",(()=>{(()=>{const t=document.querySelector(".popup-display-container");t.style.border="2px solid #000",t.innerHTML='\n        <div class="add-container">\n            <h2>New Todo</h2>\n            <div class="close-btn">X</div>\n            <form class="input-form">\n                <div class="input-container">\n                    <label for="title" class="input-label">Todo:</label>\n                    <input type="text" name="title" class="input">\n                </div>\n\n                <div class="input-container">\n                    <label for="date" class="input-label">Due:</label>\n                    <input type="date" name="date" id="date" class="input">\n                </div>\n                <div class="input-container">\n                    <label for="priority" class="input-label">Priority:</label>\n                    <select class="input" name="priority">\n                        <option class="input" value="high">High</option>\n                        <option class="input" value="medium">Medium</option>\n                        <option class="input" value="low">Low</option>\n                    </select>\n                </div>\n\n                <button class="add-btn" role="add-todo">Add New</button>\n            </form>\n        </div>\n    ',t.classList.add("slide-show")})(),(()=>{let t=new Date,e=t.getDate()+2,o=t.getMonth()+1,n=t.getFullYear();e<10&&(e="0"+e),o<10&&(o="0"+o),t=n+"-"+o+"-"+e,document.getElementById("date").setAttribute("min",t)})()})),n.addEventListener("submit",(n=>{n.preventDefault(),(()=>{const n=document.querySelector(".project-display-container"),i=document.getElementById("project-add").value;if(-1===(s=i,t.getProjects().findIndex((t=>t.title===s)))){let s=t.getProjects().length,l=new e(i),d=new o(i,s+1);t.saveProject(l),n.appendChild(d.div),console.log(l)}else console.log("Duplicate Project");var s})()})),(()=>{const e=document.querySelector(".project-display-container");t.getProjects().forEach((t=>{let n=new o(t.title);e.appendChild(n.div)}))})()})();