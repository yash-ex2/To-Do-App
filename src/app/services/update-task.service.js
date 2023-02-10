const {getAllTasks} = require('../repositories/get-all-task.repository');
const {writeAllTasks} = require('../repositories/write-all-task.repository');

const updateTask = async (taskName, taskDesc, dueDate, status, id) => {
    console.log('sdsd');
    let json = await getAllTasks();
    console.log(json);
    json.forEach((task) => {
        if (task.id == id) {
            task.taskName = taskName;
            task.taskDesc = taskDesc;
            task.dueDate = dueDate;
            task.status = status;
        }
    })
    await writeAllTasks(json);
}
module.exports = {
    updateTask,
}