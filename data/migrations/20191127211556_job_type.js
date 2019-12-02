
exports.up = function(knex) {
  return knex.schema.createTable('job_type', tbl => {
      tbl.increments();
      tbl.text('type_title')
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('job_type');
};
