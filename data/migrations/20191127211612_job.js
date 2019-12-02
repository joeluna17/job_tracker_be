
exports.up = function(knex) {
 return knex.schema.createTable('jobs', tbl => {
    tbl.increments();
    tbl.text('job_address');
    tbl.datetime('date')
    .notNullable();
    tbl.text('description')
    .notNullable();
    tbl.text('notes');
    tbl.datetime('start_time');
    tbl.datetime('end_time');
    tbl.decimal('amount')
    .notNullable();
    tbl.integer('job_type_fk')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('job_type')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('jobs');
};
