const express = require('express');
const db = require('../customers/customers_model');
const router = express.Router();




router.get('/', async (req, res) => {
    
    try{
        const customers = await db.getAllCustomers();
        res.status(200).json(customers);
    }
    catch({message}){       
        res.status(500).json(message);
    }
});


router.get('/:id/allInvoices', async (req, res) => {
        const { id } = req.params;

        try{
            const jobs = await db.getCustomersInvoicesById(id);
            res.status(200).json(jobs);
        }
        catch({message}){
            res.status(500).json(message);
        }
});

router.get('/:id/jobs', async (req, res) => {
    const { id } = req.params;

    try{
        const jobs = await db.getCustomerJobsById(id);
        res.status(200).json(jobs);
    }
    catch({message}){
        res.status(500).json(message);
    }
});

//Post

router.post('/addCustomer', async (req, res) => {
    const addedData = req.body;

    try{
        const customer = await db.addCustomer(addedData);
        res.status(200).json(customer);
    }
    catch({message}){
        res.status(500).json(message);
    }
});

//Put


//Delete
router.delete('/remove/:id', async (req, res) => {
    const { id } = req.params;

    try{
        const removedRecord = await db.deleteCustomer(id);

        res.status(200).json(removedRecord);
    }
    catch({message}){
        res.status(500).json(message);
    }
}); 

module.exports = router;
