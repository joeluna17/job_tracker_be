
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE TABLE item RESTART IDENTITY CASCADE')
    .then(function () {
      // Inserts seed entries
      return knex('item').insert([
        {
          id: 1,
          title:"Receptical",
          description:"110V receptical",
          amount:15.00
        },
        {
          id: 2,
          title:"16x7",
          description:"24g White solid IL",
          amount:875.50
        },
        {
          id: 3,
          title:"2x4x8",
          description:"2x4x8 wood precut stud",
          amount:10.00
        },
        {
          id: 4,
          title:"Replacement Spring",
          description:"2 inch Id x 23 inch",
          amount:50.00
        },

      ]);
    });
};
