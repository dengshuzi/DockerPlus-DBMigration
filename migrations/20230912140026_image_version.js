/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('image_version', function (table) {
        table.increments('id').notNullable();
        table.integer('image_id').notNullable();
        table.string('version').notNullable();
        table.string('description');
        table.boolean('delete_flg').notNullable().defaultTo(false);
        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('image_version')
};
