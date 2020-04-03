'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CollaboratorSchema extends Schema {
  up () {
    this.create('collaborators', (table) => {
      table.increments()
      table.string('name', 255).notNullable()
      table.string('value').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('collaborators')
  }
}

module.exports = CollaboratorSchema
