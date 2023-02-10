const deleteTaskService = require('../services/delete-task.service')
const getAllTaskService = require('../services/get-all-task.service');

const deleteTask = async (req, res) => {
  try {
    deleteTaskService.deleteTasks(req.params.id);
    const tasks = await getAllTaskService.getAllTasks();
    res.send(tasks);
  } catch (e) {
    console.log(`Error occured while creating task - ${JSON.stringify(e)}`);
    res.status(500).send({
      message: 'Internal Server Error!!'
    });
  }
}
module.exports = {
  deleteTask
}