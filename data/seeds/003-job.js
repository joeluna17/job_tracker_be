
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE TABLE jobs RESTART IDENTITY CASCADE')
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {
          id: 1, 
          job_address:"1 North St Greenvill TX",
          date:knex.fn.now(6),
          description:"Service garage door",
          notes:"Had to adjust a spring",
          start_time: knex.fn.now(6),
          end_time:knex.fn.now(6),
          amount: 59.00,
          job_type_fk: 1,
        },
        {
          id: 2, 
          job_address:"215 Pine St Greenvill TX",
          date:knex.fn.now(6),
          description:"Installation of sheetrock",
          notes:"install sheetrock",
          start_time: knex.fn.now(6),
          end_time:knex.fn.now(6),
          amount: 99.00,
          job_type_fk: 3,
        },
        {
          id: 3, 
          job_address:"75 North St Greenvill TX",
          date:knex.fn.now(6),
          description:"add a plug",
          notes:"added a 110v plug",
          start_time: knex.fn.now(6),
          end_time:knex.fn.now(6),
          amount: 125.00,
          job_type_fk: 4,
        },
        {
          id:4, 
          job_address:"505 Wall St. Greenvill TX",
          date:knex.fn.now(6),
          description:"add two studs",
          notes:"added two studs to framed wall",
          start_time: knex.fn.now(6),
          end_time:knex.fn.now(6),
          amount: 50.00,
          job_type_fk: 2,
        },
     
      ]);
    });
};
