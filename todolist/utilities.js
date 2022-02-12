import Todos from "./todos.js";

export default class Utilities{
    constructor(container){
        this.container=container
    }
    drawline(id, completed, description, deleted){
        
        let todoLine = document.createElement("div");
        todoLine.className="todoDone";
    
        let todoButton = document.createElement("button");
        todoButton.className="todoCompleted";
        todoButton.dataset.id = id
        todoLine.appendChild(todoButton)
        if (completed){
            todoButton.innerHTML="X"
        }
        
        
        let todoSpan = document.createElement("span");
        todoSpan.innerHTML=description;
        todoLine.appendChild(todoSpan)
        
        let todoDelete = document.createElement("button");
        todoDelete.innerHTML="X";
        todoDelete.dataset.id = id
        todoDelete.className="deleteTask";
        todoLine.appendChild(todoDelete)
        
        
        this.container.appendChild(todoLine)
        

    }
    
}
