const express = require('express');
const db = require('../job_types/job_types_model');
const router = express.Router();

//get

router.get('/', async (req, res) => {
    try{
        const job_types = await db.getAllJobTypes();
        res.status(200).json(job_types);
    }
    catch({message}){
        res.status(500).json(message);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try{
        const job_type = await db.getJobTypeById(id);
        res.status(200).json(job_type);
    }
    catch({message}){
        res.status(500).json(message);
    }
});

//post
router.post('/addJob_type', async (req, res) => {
        const job_type = req.body;
        
        try{
            const newRecord = await db.addJobType(job_type);
            res.status(200).json(newRecord);
        }
        catch({message}){
            res.status(500).json(message);
        }
});

//update

router.put('/updateJob_type/:id', async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try{
        const updatedRecord = await db.updateJobType(id, updatedData);
        res.status(200).json(updatedRecord);
    }
    catch({message}){
        res.status(500).json(message);
    }
});

//delete 

router.delete('/remove/:id', async (req, res) => {
    const { id } = req.params;

    try{
        const deletedRecord = await db.deleteJobTypeById(id);
        res.status(200).json(deletedRecord);
    }
    catch({message}){
        res.status(500).json(message);
    }
});


module.exports = router;