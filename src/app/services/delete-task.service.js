const {getAllTasks} = require('../repositories/get-all-task.repository');
const {writeAllTasks} = require('../repositories/write-all-task.repository');

const deleteTasks = async (id) => {
  let json = await getAllTasks();
  for (let task in json) {
    if (json[task].id == id) {
      json.splice(task, 1);
    }
  }
  await writeAllTasks(json);
}
module.exports = {
  deleteTasks
}