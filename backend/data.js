// data.js
const Task = require('./models/Task');

let tasks = [
    new Task(1, 'Task 1', 'Description of Task 1', 'pending'),
    new Task(2, 'Task 2', 'Description of Task 2', 'completed'),
    new Task(3, 'Task 3', 'Description of Task 3', 'in progress')
];

module.exports = tasks;
