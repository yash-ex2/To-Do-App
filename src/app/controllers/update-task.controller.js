const updateTaskService = require('../services/update-task.service')

const updateTask = async (req, res) => {
    console.log('here in updateTask')
    console.log(req.body)
    const {
        taskName,
        taskDesc,
        dueDate,
        status
    } = req.body;
    updateTaskService.updateTask(taskName, taskDesc, dueDate, status, req.params.id);
    res.send();
}
module.exports = {
    updateTask
}