const { add, list, clear, remove, complete } = require('./lib/commands.js');
const { loadTasks, saveTasks } = require('./lib/store.js');

const tasks = loadTasks();
const args = process.argv.slice(2);
const [command, arg] = args;
let updated;

try {
    switch(command) {
        case "add": updated = add(arg, tasks); break;
        case "delete": updated = remove(parseInt(arg, 10), tasks); break;
        case "clear": updated = clear(); break;
        case "complete": updated = complete(parseInt(arg, 10), tasks); break;
        case "list": list(tasks); break;
        default: throw new Error("Command not Found");
    };
    if (updated) saveTasks(updated); 
} catch (error) {
    console.log("Error 404", error.message)
}