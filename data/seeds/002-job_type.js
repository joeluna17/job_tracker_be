
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE TABLE job_type RESTART IDENTITY CASCADE')
    .then(function () {
      // Inserts seed entries
      return knex('job_type').insert([
        {
          id: 1,
          type_title: "Garage Doors"
        }, 
        {
          id: 2,
          type_title: "Framing"
        },
        {
          id: 3,
          type_title: "Sheetrock"
        },
        {
          id: 4,
          type_title: "Electrical"
        },
        {
          id: 5,
          type_title: "Plumbing"
        },
      ]);
    });
};
