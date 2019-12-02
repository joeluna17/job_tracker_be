
exports.up = function(knex) {
  return knex.schema.createTable('customers', tbl => {
      tbl.increments();
      tbl.text('first_name')
      .notNullable();
      tbl.text('last_name')
      .notNullable();
      tbl.text('address');
      tbl.text('phone')
      .notNullable();
      tbl.text('email');
      tbl.datetime('customer_since', {useTz: true, precision: 6 })
      .defaultTo(knex.fn.now(6))
      .notNullable();
      tbl.text('notes');
      tbl.boolean('isCommercial')
      .defaultTo('false')
      .notNullable();
      tbl.text('company_name');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('customers');
};
