const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const {getAllTasks} = require ('./get-all-task.repository')
const {writeAllTasks} = require ('./write-all-task.repository')

const createTask = async (task) => {
  task.id = uuidv4();
  const tasks = await getAllTasks();
  tasks.push(task);
  writeAllTasks(tasks)
}


module.exports = {
  createTask
}