const getAllTasksRepo = require ('../../app/repositories/get-all-task.repository');
const {getAllTasks} = require ('../../app/services/get-all-task.service');
jest.mock('../../app/repositories/get-all-task.repository')

test('Test to function get all tasks calls repo function', async() => {
  getAllTasks();
  expect(getAllTasksRepo.getAllTasks).toBeCalled();
});