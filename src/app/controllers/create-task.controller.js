const createTaskService = require('../services/create-task.service')

const createTask = async(req, res) => {
  try {
    const {taskName, taskDesc, dueDate, status} = req.body;
    await createTaskService.createTask(taskName, taskDesc, dueDate, status);
  } catch(e) {
    console.log(`Error occured while creating task - ${JSON.stringify(e)}`);
    res.status(500).send({message: 'Internal Server Error!!'});
  }
}

module.exports = {
  createTask
}
