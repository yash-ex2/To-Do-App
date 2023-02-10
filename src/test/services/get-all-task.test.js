const {getAllTasks} = require('../../app/services/get-all-task.service')


test('Test for function to get all tasks', async() => {
    expect(await getAllTasks()).toEqual([{"taskName":"task1","taskDesc":"this is desc","dueDate":"2023-02-08","status":"in progress","id":"2ed3687b-c4dd-4f95-80cc-0fa0f074d025"},{"taskName":"updated task2","taskDesc":"this is a description","dueDate":"2023-02-09","status":"not started","id":"ccb7ef73-9f22-4877-bed7-217e38686579"}]);
  });