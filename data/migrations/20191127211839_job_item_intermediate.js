
exports.up = function(knex) {
  return knex.schema.createTable('job_item_intermediate', tbl => {
    tbl.integer('job_fk')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('jobs')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    tbl.integer('item_fk')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('item')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    tbl.integer('item_quantity')
    .unsigned()
    .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('job_item_intermediate');
};
