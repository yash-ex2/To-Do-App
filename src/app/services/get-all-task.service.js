
const getAllTasksRepo = require ('../repositories/get-all-task.repository')

const getAllTasks = async () => {
    return await getAllTasksRepo.getAllTasks();
}
module.exports = {
    getAllTasks
}