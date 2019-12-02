const db = require('../../data/dbConfig');
const knex = require('knex');

//Get Items
const getAllItems = () => {
    return db('item');
};

const getItemById = id => {
    return db('item').where({id});
};

//Add item
const addNewItem = item => {
    return db('item').insert(item);
};

//Update Items
const updateItem = (id, item) => {
    return db('item').where({id}).update(item);
};

//Delete Items
const deleteItem = id => {
    return db('item').where({id}).del();
};

module.exports = {
    getAllItems,
    getItemById,
    addNewItem,
    updateItem,
    deleteItem
};