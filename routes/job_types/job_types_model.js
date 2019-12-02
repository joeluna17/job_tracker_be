const db = require('../../data/dbConfig');
const knex = require('knex');


// Read items

const getAllJobTypes = () => {
    return db('job_type');
};

const getJobTypeById = id => {
    return db('job_type').where({id});
};

const getJobTypeByName = name => {
    // we need to make sure and validate the string to conform to some protocal
};


// Create Job_type
const addJobType = job_type => {
    return db('job_type').insert(job_type);
};


// Update Job_types
const updateJobType = (id, job_type) => {
    return db('job_type').where({id}).update(job_type);
};


//Delete Job Types

const deleteJobTypeById = id => {
    return db('job_type').where({id}).del();
};


module.exports = {
    getAllJobTypes,
    getJobTypeById,
    addJobType,
    updateJobType,
    deleteJobTypeById
};