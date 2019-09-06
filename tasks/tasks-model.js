const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find,
    findById,
    findByUserId,
    update,
    remove,
    hideAllForUser,
    unhideAllForUser,
}

function find() {
    return db('tasks');
}

async function add(task) {
    const [id] = await db('tasks').insert(task);
    return findById(id);
}

function findById(id) {
    return db('tasks')
        .where({ id })
        .first();
}

function findByUserId(user_id) {
    return db('tasks')
        .where('user_id', user_id)
}

function update(changes, id) {
    return db('tasks')
        .where({ id })
        .update(changes)
}



async function hideAllForUser(user_id) {
    await db('tasks')
        .where('user_id', user_id)
        .update({ hidden_boolean: 1});
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