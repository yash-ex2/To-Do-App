const getAllTasksRepo = require('../../app/repositories/get-all-task.repository');
const {writeAllTasks}= require('../../app/repositories/write-all-task.repository');
const deleteTasksService = require('../../app/services/delete-task.service');

jest.mock('../../app/repositories/write-all-task.repository');


test('it should call createTask Function once', async() => {
    const getAllTasksMock = jest.fn();
    getAllTasksMock.mockReturnValueOnce([{
        "dueDate": "",
        "id": "01",
        "status": "",
        "taskDesc": "",
        "taskName": "test1"
    }, {
        "dueDate": "",
        "id": "02",
        "status": "",
        "taskDesc": "",
        "taskName": "test2"
    }]);
    getAllTasksRepo.getAllTasks=getAllTasksMock;
    await deleteTasksService.deleteTasks("01");
    expect(getAllTasksRepo.getAllTasks).toBeCalled();
    expect(writeAllTasks).toBeCalled();
    expect(writeAllTasks).toBeCalledWith([{
        "dueDate": "",
        "id": "02",
        "status": "",
        "taskDesc": "",
        "taskName": "test2"
    }]);
})