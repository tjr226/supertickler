
exports.up = function(knex) {
    return knex.schema
    .createTable('users', users => {
        users.increments();
        users.string('email', 128).notNullable().unique();
        users.string('password', 256).notNullable();
    })
    .createTable('tasks', tasks => {
        tasks.increments();
        tasks.string('task_text', 1024).notNullable();
        tasks.boolean('hidden_boolean').notNullable();
        tasks.boolean('completed_boolean').notNullable();
        tasks.integer('unix_timestamp')
            .unsigned()
            .notNullable();
        tasks.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('users')
};
