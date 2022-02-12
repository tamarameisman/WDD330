export default class Todos {
    constructor(list) {
        if(list==undefined){
            this.taskList={}
        }else{
            this.taskList=list
        }
        this.filter = "all"
    }

    saveTodo(task, key) {
         this.taskList[key]=task
    }
    getTodo(key) {
        return this.taskList[key]
    }
    markCompleted(key){
        this.taskList[key].completed=true
        console.log(this.taskList)
    
    
    }
    removeTodo(key) {
        this.taskList[key].deleted=true
    }
    setFilter(value){
        this.filter=value
    }
    leftTasks () {
        return Object.values(this.taskList).filter(task => task.completed == false && task.deleted == false).length

    }
    getList(){
        if(this.filter=="all"){
            return Object.values(this.taskList)

        }
        else if(this.filter=="active"){
            return Object.values(this.taskList).filter(task => task.completed == false)
        }
        else {
            return Object.values(this.taskList).filter(task => task.completed == true)

        }

    }
    addTodo(description){
        let key=Date.now()
        this.taskList[key]={
            "task":description,
            "id":key,
            "completed":false,
            "deleted":false,

        }
        console.log(this.taskList)
    }

}
