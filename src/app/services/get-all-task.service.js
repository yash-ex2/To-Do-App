
const getAllTasksRepo = require ('../repositories/get-all-task.repository')

const getAllTasks = async () => {
    console.log('sdfsdf')
    return await getAllTasksRepo.getAllTasks();

}
module.exports = {
    getAllTasks
  }