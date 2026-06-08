const fs = require('fs');
const CART_FILE = 'cart.json';

function loadTasks() {
    if (!fs.existsSync(CART_FILE)) return [];
    const data = fs.readFileSync(CART_FILE, 'utf8');
    return JSON.parse(data);
};

function saveTasks (cart) {
    fs.writeFileSync(CART_FILE, JSON.stringify(cart, null, 2));
};

module.exports = { loadTasks, saveTasks };