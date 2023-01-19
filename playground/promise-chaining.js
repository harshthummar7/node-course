const mongoose = require('mongoose')
require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('63bbf0b7b6e694787020df59').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((count)=>{
//     console.log(count)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id,completed) =>
{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed})
    return count
}

deleteTaskAndCount('63bbf20dc4baedd8e71ce3f1',false)
.then((count)=>{
          console.log(count)
}).catch((e)=>{
     console.log(e)
})