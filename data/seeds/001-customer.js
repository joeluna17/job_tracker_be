
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE TABLE customers RESTART IDENTITY CASCADE')
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {
          id:1,
          first_name: "John",
          last_name: "Himmingway",
          address: "551 Poplar Cir. Greewitch TX",
          phone: "972-972-9787",
          email: "hisemail@email.com",
          notes: "key to garage door is 7842",
          isCommercial: false
        },
        {
          id:2,
          first_name: "Jane",
          last_name: "Smith",
          address: "02 Jebs St. Greewitch TX",
          phone: "972-505-9740",
          email: "jane@email.com",
          notes: "no notes",
          isCommercial: true,
          company_name:"Janes Flowers Mart"
        },
        {
          id:3,
          first_name: "Michale",
          last_name: "Johnson",
          address: "4444 Arch St Rockwall TX",
          phone: "972-212-0002",
          email: "somenewmail@email1.com",
          notes: "there are are not unlcocked entry time of business is 8AM",
          isCommercial: true,
          company_name:"Pergo Signs"
        },
        {
          id:4,
          first_name: "Sean",
          last_name: "Hutchens",
          address: "202 Rock St Rockwall TX",
          phone: "972-440-3260",
          email: "somenewmail@email1.com",
          notes: "N/A",
          isCommercial: false
        },
      ]);
    });
};
