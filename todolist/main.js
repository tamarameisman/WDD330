import Todos from "./todos.js"
import Utilities from "./utilities.js"

let todoArray = load("todos")
let container = document.getElementById("list-container")
let todo=new Todos(todoArray)
let util = new Utilities(container)
rebuildTodoList(container)

//rebuildTodoList(container, todoArray)
function deleteTask(event){
    console.log(event)
    let id = event.target.dataset.id
    todo.removeTodo(id)
    rebuildTodoList()
}
function markDone(event){
    console.log(event)
    let id = event.target.dataset.id
    todo.markCompleted(id)
    rebuildTodoList()
}


let filterForm=document.getElementById("filterForm")
filterForm.addEventListener("change", event=>{
    todo.setFilter(event.currentTarget["filter"].value)
    rebuildTodoList(container, todo.getList())
})
let addButton = document.getElementById("addTaskBtn")
addButton.addEventListener('click', event => {
    console.log(event)
    let todoName = document.getElementById("new-task")
    todo.addTodo(todoName.value)
    todoName.value = ""
    rebuildTodoList(container)
    
     return false
})
function rebuildTodoList () {

    let todoArray = todo.getList()
    if(todoArray.length== 0)
    {
        container.innerHTML="";
        return
    }
    container.innerHTML="";

    todoArray.forEach(todo => {
        if(todo.deleted){
            return
        }
        util.drawline(todo.id, todo.completed, todo.task, todo.deleted)
        
    });
    store("todos", todo.taskList)
    let todoCount= document.getElementById("leftTasks")
    todoCount.innerText = todo.leftTasks() + " Tasks Left"
    if(document.querySelector('.todoCompleted') != null){
        document.querySelectorAll('.todoCompleted')
        .forEach(element => {
            element.addEventListener('click', markDone)  
        })

        document.querySelectorAll('.deleteTask')
        .forEach(element => {
            element.addEventListener('click', deleteTask)  
        })  
    }
}

// <section id="list-container" class="container">

// <div class="todoDone">
//     <button class="todoCompleted"></button>
//     <span>Task</span>
//     <button class="deleteTask">X</button>
// </div>