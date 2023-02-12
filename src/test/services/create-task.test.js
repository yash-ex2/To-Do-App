const createTaskRepo = require('../../app/repositories/create-task.repository')
const {createTask} = require('../../app/services/create-task.service')
jest.mock('../../app/repositories/create-task.repository')

const task={
taskName : "",
tasDesc : "",
dueDate : "",
status :""
}

test('it should call createTask Function once', async() => {
    const createTaskMock = jest.fn();
    createTaskRepo.createTask = createTaskMock;
    createTask(task);
    
    expect(createTaskRepo.createTask).toBeCalled();

})