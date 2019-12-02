
exports.up = function(knex) {
  return knex.schema.createTable('customer_job_intermediate', tbl => {
        tbl.integer('customer_fk')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('customers')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        tbl.integer('job_fk')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('jobs')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('customer_job_intermediate');
};
