const createTaskService = require('../services/create-task.service')

const createTask = async(req, res) => {
  try {
    console.log("req boydyyy ",req.body.taskDesc)
    const {taskName, taskDesc, dueDate, status} = req.body;
    const task = await createTaskService.createTask(taskName, taskDesc, dueDate, status);
    res.send(task);
  } catch(e) {
    console.log(`Error occured while creating task - ${JSON.stringify(e)}`);
    res.status(500).send({message: 'Internal Server Error!!'});
  }
}

module.exports = {
  createTask
}
