
exports.seed = async function(knex) {
 try{
   
  await knex.truncate("job_item_intermediate");
  await knex.truncate("customer_job_intermediate");
  await knex.raw('TRUNCATE TABLE item RESTART IDENTITY CASCADE');
  await kknex.raw('TRUNCATE TABLE jobs RESTART IDENTITY CASCADE')
  await knex.raw('TRUNCATE TABLE job_type RESTART IDENTITY CASCADE');
  await knex.raw('TRUNCATE TABLE customers RESTART IDENTITY CASCADE');

 }catch(err){
   console.log(err);
 }
};
