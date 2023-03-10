const getAllTasksRepo = require('../repositories/get-all-task.repository');
const {writeAllTasks} = require('../repositories/write-all-task.repository');

const updateTask = async (taskName, taskDesc, dueDate, status, id) => {
    let json = await getAllTasksRepo.getAllTasks();

    json.forEach((task) => {
        if (task.id == id) {
            task.taskName = taskName;
            task.taskDesc = taskDesc;
            task.dueDate = dueDate;
            task.status = status;
        }
    })
    writeAllTasks(json);
}
module.exports = {
    updateTask,
}