const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find,
    findById,
    findByUserId,
    findByUserId20,
    update,
    remove,
    hideAllForUser,
    unhideAllForUser,
}

function find() {
    return db('tasks');
}

async function add(task) {
    await db('tasks').insert(task);
    return findByUserId(task.user_id);
}

// this is find by TASK id
function findById(id) {
    return db('tasks')
        .where({ id })
        .first();
}

function findByUserId(user_id) {
    return db('tasks')
        .where('user_id', user_id)
        .where('hidden_boolean', 0)
        .where('completed_boolean', 0)
        .orderBy('unix_timestamp', 'asc')
}

async function update(changes, id, user_id) {
    await db('tasks')
        .where({ id })
        .update(changes)
    return db('tasks')
        .where('user_id', user_id)
        .where('hidden_boolean', 0)
        .where('completed_boolean', 0)
        .orderBy('unix_timestamp', 'asc')
}

// this calls unhideAllForUser because the goal of showing next 20 is to see the next 20, including hidden ones
// function findByUserId20(user_id) {
//     return unhideAllForUser(user_id)
//         .limit(20)
// }

async function findByUserId20(user_id) {
    await db('tasks')
        .where('user_id', user_id)
        .update({ hidden_boolean: 0 })
    return db('tasks')
        .where('user_id', user_id)
        .where('hidden_boolean', 0)
        .where('completed_boolean', 0)
        .orderBy('unix_timestamp', 'asc')
        .limit(20)
}

async function hideAllForUser(user_id) {
    await db('tasks')
        .where('user_id', user_id)
        .update({ hidden_boolean: 1 });
    return findByUserId(user_id);
}

async function unhideAllForUser(user_id) {
    await db('tasks')
        .where('user_id', user_id)
        .update({ hidden_boolean: 0 });
    return findByUserId(user_id);
}

function remove(id) {
    return db('tasks')
        .where('id', id)
        .del();
}