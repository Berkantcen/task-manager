// controllers/taskController.js
let tasks = require('../data');
const Task = require('../models/Task');

// Create a new task
exports.createTask = (req, res) => {
    const { title, description, status } = req.body;
    const taskId = tasks.length + 1;
    const newTask = new Task(taskId, title, description, status);
    tasks.push(newTask);
    res.status(201).json(newTask);
};

// Get all tasks
exports.getAllTasks = (req, res) => {
    res.status(200).json(tasks);
};

// Get task by ID
exports.getTaskById = (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(task => task.id === taskId);
    if (!task) {
        res.status(404).send("Task not found");
    } else {
        res.status(200).json(task);
    }
};

// Update task by ID
exports.updateTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, description, status } = req.body;
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) {
        res.status(404).send("Task not found");
    } else {
        tasks[taskIndex].title = title;
        tasks[taskIndex].description = description;
        tasks[taskIndex].status = status;
        res.status(200).json(tasks[taskIndex]);
    }
};

// Delete task by ID
exports.deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) {
        res.status(404).send("Task not found");
    } else {
        tasks.splice(taskIndex, 1);
        res.status(204).send();
    }
};
