import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'friends'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('friend_id').unsigned().references('id').inTable('users').onDelete('CASCADE')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())

      // index
      table.index(['id'], 'friends_id_idx')
      table.index(['user_id'], 'friends_user_id_idx')
      table.index(['friend_id'], 'friends_friend_id_idx')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
