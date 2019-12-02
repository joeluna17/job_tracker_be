const db = require('../../data/dbConfig');
const knex = require('knex');

const getAllCustomers = () => {
    return db('customers');
};


const getCustomersInvoicesById = id => {

      return db('customer_job_intermediate as cji')
      .join('customers as c', 'c.id', '=', 'cji.customer_fk')
      .join('jobs as j', 'j.id', '=', 'cji.job_fk')
      .join('job_item_intermediate as jii', 'jii.job_fk', '=', 'cji.job_fk')
      .where('c.id', '=', `${id}`);
};

const getCustomerJobsById = id => {
   return db('customer_job_intermediate as cji')
    .join('jobs as j', 'j.id', '=', 'cji.job_fk')
    .join('job_type as jt', 'j.job_type_fk', '=', 'jt.id')
    .join('job_item_intermediate as jii', 'jii.job_fk', '=', 'cji.job_fk')
   .join('item as i', 'i.id', '=', 'jii.item_fk') 
   .where('cji.customer_fk', '=', `${id}`)
   .select('j.job_address', 'j.date', 'j.description', 'j.start_time', 'j.end_time', 'jt.type_title', 'i.title', 'i.amount', 'jii.item_quantity', knex.raw('jii.item_quantity * i.amount as job_total'))
};

//add customer
const addCustomer = customer => {
    return db('customers').insert(customer);
};


//update customer

//delete customer

const deleteCustomer = id => {
    return db('customers').where({id}).del();
}






module.exports = {
    getAllCustomers,
    getCustomersInvoicesById,
    getCustomerJobsById,
    addCustomer,
    deleteCustomer
};