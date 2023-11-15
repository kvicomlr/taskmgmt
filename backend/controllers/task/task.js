const Task = require('../../models/Task')

//CREATE TASK
const createTask = async (req, res) => {

    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

//GET ALL TASKS
const getAllTasks = async (req, res) => {

    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks })

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

//GET A SINGLE TASK
const getTask = async (req, res) => {

    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskID}` })
        }

        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

//UPDATE TASK
const updateTask = async (req, res) => {

    try {
        const { id: taskID } = req.params
        const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true, })

        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskID}` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}






//DELETE TASK
const deleteTasks = async (req, res) => {


    try {

        const { id: taskID } = req.params
        const task = await Task.findByIdAndDelete({ _id: taskID });

        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskID}` })
        }

        // res.status(200).json({task})
        // res.status(200).send()
        res.status(200).json({ task: null, status: 'success' })
    } catch (error) {
        res.status(500).json({ msg: error })
    }



}


module.exports = { createTask, getAllTasks, getTask, updateTask, deleteTasks };