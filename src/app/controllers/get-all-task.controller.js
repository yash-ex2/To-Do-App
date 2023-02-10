const getAllTasksService = require ('../services/get-all-task.service')
const getAllTasks = async (req, res) => {
    try {
        console.log('controller i');
        const tasks = await getAllTasksService.getAllTasks();
        console.log('controller out');
        res.send(tasks);
    } catch (e) {
        console.log(`Error occured while creating task - ${JSON.stringify(e)}`);
        res.status(500).send({
            message: 'Internal Server Error!!'
        });
    }
}

module.exports = {
    getAllTasks
}