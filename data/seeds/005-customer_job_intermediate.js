
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('customer_job_intermediate')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('customer_job_intermediate').insert([
        {
          customer_fk: 1,
          job_fk: 2,
        },
        {
          customer_fk: 3,
          job_fk: 3,
        },
        {
          customer_fk: 2,
          job_fk: 4,
        },
        {
          customer_fk: 1,
          job_fk: 1,
        },

      ]);
    });
};
