import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'folders'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.string('name').notNullable()
      table
        .integer('category_id')
        .unsigned()
        .references('id')
        .inTable('categories')
        .onDelete('CASCADE')
      table.integer('owner_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.boolean('is_public').defaultTo(false).notNullable()
      table.boolean('is_private').defaultTo(true).notNullable()
      table.boolean('is_friend_only').defaultTo(false).notNullable()
      table.boolean('is_deleted').defaultTo(false).notNullable()
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true })
      table.timestamp('deleted_at', { useTz: true }).nullable()

      // index
      table.index(['id'], 'folders_id_idx')
      table.index(['name'], 'folders_name_idx')
      table.index(['category_id'], 'folders_category_id_idx')
      table.index(['owner_id'], 'folders_owner_id_idx')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
