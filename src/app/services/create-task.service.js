const createTaskRepo = require('../repositories/create-task.repository')

const createTask = async (taskName, taskDesc, dueDate, status) => {
  console.log('ser i')
  const task = await createTaskRepo.createTask({
    taskName,
    taskDesc,
    dueDate,
    status,
  });
  return task;
}


module.exports = {
  createTask
}
