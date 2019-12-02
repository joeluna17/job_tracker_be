
exports.up = function(knex) {
  return knex.schema.createTable('item', tbl => {
    tbl.increments();
    tbl.text('title')
    .notNullable();
    tbl.text('description')
    .notNullable();
    tbl.decimal('amount')
    .notNullable();

  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('item');
};
