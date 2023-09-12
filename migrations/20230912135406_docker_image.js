/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('docker_image', function (table) {
        table.increments('id').notNullable();
        table.string('image_name').notNullable();
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
    return knex.schema.dropTable('docker_image')
};
