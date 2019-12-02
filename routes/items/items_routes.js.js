const express = require('express');
const db = require('./items_model');

const router = express.Router();

//get
router.get('/', async (req, res) => {

    try{
        const items = await db.getAllItems();
        res.status(500).json(items);
    }
    catch({message}){
        res.status(500).json();
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try{
        const [item] = await db.getItemById(id); //keep in mind that with when we are returning just a sigle record from the BD we want to deconstruct the return item from the DB so we can just get the single object instead of an array

        res.status(200).json(item);
    }
    catch({message})
    {
        res.status(500).json(message);
    }
        
});

//post

router.post('/addItem', async (req, res) => {
    const addedData = req.body;

    try{
        const newItem = await db.addNewItem(addedData);
        res.status(200).json(newItem);
    }
    catch({message}){
        res.status(500).json(message);
    }

});

//update

router.put('/updateItem/:id', async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try{
        const item = await db.updateItem(id, updatedData);
        res.status(200).json(item);
    }
    catch({message}){
        res.status(500).json(message);
    }
});


//delete

router.delete('/removeItem/:id', async (req, res) => {
    const { id } = req.params;

    try{
        const removedItem = await db.deleteItem(id);
        res.status(200).json(removedItem); 
    } 
    catch({message}){
        res.status(500).json(messaage);
    }
});



module.exports = router;