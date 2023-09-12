// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql2',
    version: '8.0',
    connection: {
      database: 'dockerplus',
      host: '127.0.0.1',
      port:'3306',
      user: 'root',
      password: 'mysql'
    },
    pool: {
      min: 20,
      max: 100
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
