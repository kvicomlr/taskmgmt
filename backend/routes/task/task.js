
const express = require('express');
const {createTask, getAllTasks, getTask, updateTask, deleteTasks} = require('../../controllers/task/task')

const router = express.Router();


router.post('/',createTask);
router.get('/',getAllTasks);
router.get('/:id',getTask);
router.patch('/:id',updateTask);
router.delete('/:id',deleteTasks);


module.exports = router;

