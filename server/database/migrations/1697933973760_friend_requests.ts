import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'friend_requests'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('sender_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('receiver_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())

      // index
      table.index(['id'], 'friend_requests_id_idx')
      table.index(['sender_id'], 'friend_requests_sender_id_idx')
      table.index(['receiver_id'], 'friend_requests_receiver_id_idx')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
