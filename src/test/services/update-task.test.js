const getAllTasksRepo = require('../../app/repositories/get-all-task.repository');
const {writeAllTasks}= require('../../app/repositories/write-all-task.repository');
const updateTaskService = require('../../app/services/update-task.service');

jest.mock('../../app/repositories/write-all-task.repository');

test('it should call repo updateTask Function once', async () => {
    const getAllTasksMock = jest.fn();
    getAllTasksRepo.getAllTasks = getAllTasksMock;
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
    await updateTaskService.updateTask("test", "descTest", "09 feb", "in progress", "01");

    expect(getAllTasksRepo.getAllTasks).toBeCalled();
    expect(writeAllTasks).toBeCalled();
    expect(writeAllTasks).toBeCalledWith([{
        "dueDate": "09 feb",
        "id": "01",
        "status": "in progress",
        "taskDesc": "descTest",
        "taskName": "test"
    }, {
        "dueDate": "",
        "id": "02",
        "status": "",
        "taskDesc": "",
        "taskName": "test2"
    }])
})