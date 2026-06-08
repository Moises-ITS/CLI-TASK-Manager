const fs = require('fs');
const path = require('path');
const TASKS_FILE = path.join(__dirname, '..', 'tasks.json');

function loadTasks() {
    if (!fs.existsSync(TASKS_FILE)) return [];
    const data = fs.readFileSync(TASKS_FILE, 'utf8');
    return JSON.parse(data);
};

function saveTasks (tasks) {
    fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
};

module.exports = { loadTasks, saveTasks };