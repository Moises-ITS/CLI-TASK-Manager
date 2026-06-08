function add(text, array) {
    const id = array.length === 0 ? 1 : Math.max(...array.map(t => t.id)) + 1
    const newTask = { id: id, text: text, completed: false, createdAt: new Date().toISOString() };
    return [...array, newTask]
};

function list (array) {
    if (array.length === 0) return console.log("No tasks yet");
    array.forEach(t => {
        const status = t.completed ? "[x]" : "[ ]";
        const date = new Date(t.createdAt).toLocaleDateString();
        console.log(` ${status} ${t.id} ${t.text} (added ${date})`)
    });
    const done = array.filter(r => r.completed).length;
    console.log(`\n ${array.length} tasks, ${done} completed`)
};

function remove (id, array) {
    const numId = Number(id);
    const index = array.findIndex(t => t.id === numId);
    if (index === -1) throw new Error("Index not Found");
    return array.filter(t => t.id !== numId);
};

function clear () {
    return [];
};

function complete (id, array) {
    const numId = Number(id);
    const index = array.findIndex(t => t.id === numId);
    if (index === -1) throw new Error("Index not found");
    return array.map(t => t.id === numId ? {...t, completed: true}: t);
};

module.exports = { add, list, remove, clear, complete };