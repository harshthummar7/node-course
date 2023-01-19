
const task = {
    tasks : [{
        text: 'Grocery shopping',
        completed: true
    },
    {
        text: 'Clean yard',
        completed: false
    },
    {
        text: 'Film course',
        completed: false
    }
],
getTaksToDo(){
    
    const taskToDO = this.tasks.filter((obj)=>{
        return obj.completed === false
    })
    return taskToDO;

  }
}

console.log(task.getTaksToDo())