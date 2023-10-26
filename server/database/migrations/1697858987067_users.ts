import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('username', 50).notNullable().unique()
      table.string('name', 100).notNullable()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.string('remember_me_token').nullable()
      table.string('avatar').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true })

      // index
      table.index(['id'], 'users_id_idx')
      table.index(['username'], 'users_username_idx')
      table.index(['email'], 'users_email_idx')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
