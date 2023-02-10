const express = require('express');

const {createTask} = require('../controllers/create-task.controller')
const {getAllTasks} = require('../controllers/get-all-task.controller')
const {updateTask} = require('../controllers/update-task.controller')
const {deleteTask} = require('../controllers/delete-task.controller')

const router = express.Router();

router.get('/tasks', getAllTasks);

router.post('/tasks', createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask)



module.exports = router;