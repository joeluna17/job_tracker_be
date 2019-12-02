
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('job_item_intermediate')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('job_item_intermediate').insert([
        {
          job_fk:2,
          item_fk:1,
          item_quantity: 2
        },
        {
          job_fk:1,
          item_fk:3,
          item_quantity: 1
        },
        {
          job_fk:3,
          item_fk:3,
          item_quantity: 5
        },
        {
          job_fk:3,
          item_fk:2,
          item_quantity: 1
        },
        {
          job_fk:4,
          item_fk:4,
          item_quantity: 3
        },
      ]);
    });
};
