class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo) {
        this.todo_data.todo.push(todo);
    }


    delete_todo(id){
        // Your code here
        this.todos=this.todo_data;

        console.log("Delete ");
        console.log(this.todo_data.todo);
        return this.todos;
    }

    update_todo(id, todo){
        // Your code here
        this.todos["todo"][id] = todo;
        return true;
    }
}



module.exports= todoservice;