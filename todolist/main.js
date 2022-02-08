let todoArray = load("todo")
let container = document.getElementById("list-container")

function rebuildTodoList () {
    container.innerHTML="";
    todoArray.forEach(todo => {
        let todoLine = document.createElement("div");
        todoLine.className="todoDone";
        
        let todoButton = document.createElement("button");
        todoButton.className="todoCompleted";
        todoLine.appendChild(todoButton)
        
        let todoSpan = document.createElement("span");
        todoSpan.innerHTML=todo.content;
        todoLine.appendChild(todoSpan)
        
        let todoDelete = document.createElement("button");
        todoDelete.innerHTML="X";
        todoDelete.className="deleteTask";
        todoLine.appendChild(todoDelete)
        
        container.appendChild(todoLine)
    });
}
rebuildTodoList()

let addButton = document.getElementById("addTaskBtn")
addButton.addEventListener('click', event => {
    console.log(event)
    let todoName = document.getElementById("new-task")
    let newTodo = {
        id:Date.now,
        content:todoName.value,
        completed:false
    };
    todoArray.push(newTodo)
    rebuildTodoList()
    store("todo", todoArray)
    return false
},)

// <section id="list-container" class="container">

// <div class="todoDone">
//     <button class="todoCompleted"></button>
//     <span>Task</span>
//     <button class="deleteTask">X</button>
// </div>